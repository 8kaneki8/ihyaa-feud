const CATEGORIES = [
  { id: "prophets", name: "الأنبياء والرسل" },
  { id: "history", name: "التاريخ الإسلامي" },
  { id: "quran", name: "القرآن الكريم" },
  { id: "companions", name: "الصحابة" },
  { id: "knowledge", name: "معلومات إسلامية" }
];

const DEMO_QUESTIONS = [
  { id:"p1", category:"prophets", question:"من أول رسول أرسله الله إلى أهل الأرض؟", answers:[{text:"نوح عليه السلام",points:40,aliases:[]},{text:"آدم عليه السلام",points:30,aliases:[]},{text:"إبراهيم عليه السلام",points:20,aliases:[]},{text:"موسى عليه السلام",points:10,aliases:[]}], source:"محتوى تجريبي — راجع المصدر الشرعي قبل اعتماد السؤال", note:"يجب مراجعة صياغة السؤال ومصدره قبل استخدامه في منافسة عامة." },
  { id:"h1", category:"history", question:"ما اسم أول مسجد بُني في الإسلام؟", answers:[{text:"مسجد قباء",points:50,aliases:[]},{text:"المسجد النبوي",points:30,aliases:[]},{text:"المسجد الحرام",points:20,aliases:[]}], source:"محتوى تجريبي يحتاج مراجعة وتوثيقًا." },
  { id:"q1", category:"quran", question:"ما السورة التي لا تبدأ بالبسملة؟", answers:[{text:"سورة التوبة",points:60,aliases:["براءة"]},{text:"سورة الفاتحة",points:25,aliases:[]},{text:"سورة النمل",points:15,aliases:[]}], source:"محتوى تجريبي يحتاج مراجعة وتوثيقًا." },
  { id:"c1", category:"companions", question:"من أول الخلفاء الراشدين؟", answers:[{text:"أبو بكر الصديق",points:60,aliases:["أبو بكر"]},{text:"عمر بن الخطاب",points:25,aliases:[]},{text:"عثمان بن عفان",points:15,aliases:[]}], source:"محتوى تجريبي يحتاج مراجعة وتوثيقًا." },
  { id:"k1", category:"knowledge", question:"كم عدد أركان الإسلام؟", answers:[{text:"خمسة",points:100,aliases:["5"]}], source:"محتوى تجريبي يحتاج مراجعة وتوثيقًا." }
];

const freshState = () => ({
  room: "", status:"lobby", phase:"setup", round:1,
  teams:[{id:"A",name:"الفريق الأول",players:[],score:0},{id:"B",name:"الفريق الثاني",players:[],score:0}],
  categories:CATEGORIES, questions:DEMO_QUESTIONS, questionIndex:0, currentQuestion:null,
  activeTeam:null, faceoff:{firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null},
  revealed:[], strikes:0, maxStrikes:3, bank:0, timer:{duration:30,remaining:30,running:false},
  history:[], log:[], updatedAt:Date.now()
});

function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}})}
function clone(v){return JSON.parse(JSON.stringify(v))}
function safeRoom(v){return /^[A-Z0-9]{4,8}$/.test(v||"")}
function cleanName(v,fallback){return String(v||fallback).trim().slice(0,32)||fallback}

export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname.startsWith("/room/")){
   const parts=url.pathname.split("/");
   const room=parts[2];
   if(!safeRoom(room)) return json({error:"رمز المباراة غير صالح"},400);
   const id=env.MATCH_ROOM.idFromName(room);
   return env.MATCH_ROOM.get(id).fetch(request);
  }
  if(url.pathname==="/api/create" && request.method==="POST"){
   const room=Array.from({length:6},()=> "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");
   const key=crypto.randomUUID()+crypto.randomUUID();
   const id=env.MATCH_ROOM.idFromName(room);
   const result=await env.MATCH_ROOM.get(id).fetch("https://room.internal/init",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({room,key})});
   if(!result.ok) return json({error:"تعذر إنشاء المباراة"},500);
   return json({room,hostKey:key});
  }
  return env.ASSETS.fetch(request);
 }
};

export class MatchRoom {
 constructor(state,env){this.state=state;this.env=env;this.data=null;this.sockets=new Set();this.ready=state.blockConcurrencyWhile(async()=>{this.data=await state.storage.get("match")||null;this.hostKey=await state.storage.get("hostKey")||null;});}
 async fetch(request){
  await this.ready;
  const url=new URL(request.url);
  if(url.pathname==="/init" && request.method==="POST"){
   const body=await request.json();
   if(this.data) return json({error:"المباراة موجودة"},409);
   this.data=freshState();this.data.room=body.room;this.hostKey=body.key;
   await this.persist();await this.state.storage.put("hostKey",this.hostKey);
   return json({ok:true});
  }
  if(url.pathname.endsWith("/ws")){
   const role=url.searchParams.get("role");
   if(role==="host" && url.searchParams.get("key")!==this.hostKey) return new Response("Unauthorized",{status:401});
   if(request.headers.get("Upgrade")!=="websocket") return new Response("Expected websocket",{status:426});
   const pair=new WebSocketPair();const client=pair[0],server=pair[1];
   server.accept();this.sockets.add(server);
   server.send(JSON.stringify({type:"state",state:this.publicState(role==="host")}));
   server.addEventListener("message",e=>this.onMessage(server,e.data,role==="host"));
   server.addEventListener("close",()=>this.sockets.delete(server));
   server.addEventListener("error",()=>this.sockets.delete(server));
   return new Response(null,{status:101,webSocket:client});
  }
  if(request.method==="GET") return json({state:this.publicState(false)});
  if(request.method!=="POST") return json({error:"Method not allowed"},405);
  const key=request.headers.get("x-host-key");
  if(!key || key!==this.hostKey) return json({error:"غير مصرح — لوحة الهوست فقط"},401);
  let action;try{action=await request.json()}catch{return json({error:"طلب غير صالح"},400)}
  try{this.apply(action);await this.persist();this.broadcast();return json({ok:true,state:this.publicState(true)});}
  catch(e){return json({error:e.message||"تعذر تنفيذ العملية"},400)}
 }
 publicState(includePrivate=false){
  if(!this.data)return null;
  const s=clone(this.data);
  if(!includePrivate){delete s.history;delete s.log;const mask=q=>q?({...q,answers:q.answers.map((a,i)=>s.revealed.includes(i)?a:{text:null,points:null,aliases:[]})}):null;s.questions=[];s.currentQuestion=mask(s.currentQuestion);}
  return s;
 }
 async persist(){this.data.updatedAt=Date.now();await this.state.storage.put("match",this.data);}
 broadcast(){const message=JSON.stringify({type:"state",state:this.publicState(false)});for(const ws of this.sockets){try{ws.send(message)}catch{this.sockets.delete(ws)}}}
 snapshot(){this.data.history.push(clone({...this.data,history:[]}));if(this.data.history.length>60)this.data.history.shift();}
 logEvent(label,detail=""){this.data.log.unshift({at:Date.now(),label,detail});if(this.data.log.length>100)this.data.log.pop();}
 apply(a){
  if(!a||typeof a.type!=="string")throw Error("عملية غير معروفة");
  const s=this.data;
  if(a.type==="undo"){const prev=s.history.pop();if(!prev)throw Error("لا توجد عملية للتراجع عنها");const history=s.history;this.data={...prev,history};if(this.data.timer.running)this.state.storage.setAlarm(Date.now()+1000);else this.state.storage.deleteAlarm();this.logEvent("تراجع","استعادة الحالة السابقة");return}
  this.snapshot();
  const team=id=>{const t=s.teams.find(x=>x.id===id);if(!t)throw Error("اختر فريقًا صحيحًا");return t};
  const q=()=>{if(!s.currentQuestion)throw Error("لا يوجد سؤال نشط");return s.currentQuestion};
  switch(a.type){
   case "setup": s.teams[0].name=cleanName(a.teamA,"الفريق الأول");s.teams[1].name=cleanName(a.teamB,"الفريق الثاني");s.teams[0].players=(a.playersA||[]).map(x=>cleanName(x,"لاعب")).slice(0,8);s.teams[1].players=(a.playersB||[]).map(x=>cleanName(x,"لاعب")).slice(0,8);this.logEvent("تحديث إعدادات الفرق");break;
   case "addQuestion":{const category=s.categories.find(c=>c.id===a.category);const question=String(a.question||"").trim().slice(0,240);const answers=(a.answers||[]).map(x=>({text:String(x.text||"").trim().slice(0,100),points:Number(x.points),aliases:[]})).filter(x=>x.text&&Number.isInteger(x.points)&&x.points>0&&x.points<=10000);if(!category)throw Error("اختر تصنيفًا صحيحًا");if(question.length<8)throw Error("اكتب سؤالًا واضحًا");if(answers.length<1)throw Error("أضف إجابة واحدة على الأقل مع نقاطها");if(answers.length>12)throw Error("الحد الأقصى 12 إجابة");const item={id:crypto.randomUUID(),category:a.category,question,answers,source:String(a.source||"").trim().slice(0,500),note:"أضافه الهوست؛ راجع صحة المحتوى ومصدره قبل استخدامه."};s.questions.push(item);this.logEvent("إضافة سؤال إلى بنك الأسئلة",question);break;}
   case "startQuestion":{
    const found=s.questions.find(x=>x.id===a.questionId);if(!found)throw Error("السؤال غير موجود");
    s.currentQuestion=clone(found);s.revealed=[];s.strikes=0;s.bank=0;s.activeTeam=null;s.phase="faceoff";s.status="playing";s.faceoff={firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null};s.timer.remaining=s.timer.duration;s.timer.running=false;this.logEvent("بدء السؤال",found.question);break;
   }
   case "buzz": if(s.phase!=="faceoff")throw Error("المواجهة غير نشطة");team(a.team);s.faceoff.firstBuzz=a.team;this.logEvent("تسجيل ضغطة الجرس",team(a.team).name);break;
   case "faceAnswer": if(s.phase!=="faceoff")throw Error("المواجهة غير نشطة");team(a.team);{const ans=q().answers[a.answerIndex];if(!ans)throw Error("اختر إجابة صحيحة");s.faceoff.answers[a.team]=a.answerIndex;this.logEvent("تسجيل إجابة المواجهة",team(a.team).name+" — "+ans.text);}break;
   case "resolveFaceoff":{
    const A=s.faceoff.answers.A,B=s.faceoff.answers.B;if(A===null||B===null)throw Error("سجل إجابة الفريقين أولًا");
    const ap=q().answers[A].points,bp=q().answers[B].points;if(ap===bp)throw Error("الإجابتان متعادلتان؛ اختر الفريق يدويًا");s.faceoff.winner=ap>bp?"A":"B";s.phase="choice";this.logEvent("حسم المواجهة",team(s.faceoff.winner).name);break;
   }
   case "manualFaceWinner":team(a.team);s.faceoff.winner=a.team;s.phase="choice";this.logEvent("اعتماد فائز المواجهة يدويًا",team(a.team).name);break;
   case "playOrPass": if(s.phase!=="choice")throw Error("مرحلة الاختيار غير نشطة");if(!["play","pass"].includes(a.choice))throw Error("اختيار غير صالح");s.faceoff.choice=a.choice;s.activeTeam=a.choice==="play"?s.faceoff.winner:(s.faceoff.winner==="A"?"B":"A");s.phase="playing";this.logEvent(a.choice==="play"?"اختيار اللعب":"تمرير السؤال",team(s.activeTeam).name);break;
   case "reveal":{const ans=q().answers[a.answerIndex];if(!ans||s.revealed.includes(a.answerIndex))throw Error("الإجابة غير متاحة");s.revealed.push(a.answerIndex);s.bank+=Number(ans.points)||0;this.logEvent("كشف إجابة",ans.text+" (+"+ans.points+")");if(s.revealed.length===q().answers.length)this.finishRound(s.activeTeam);break;}
   case "strike": if(s.phase!=="playing")throw Error("الجولة ليست في مرحلة اللعب");s.strikes++;this.logEvent("احتساب خطأ",s.strikes+" / "+s.maxStrikes);if(s.strikes>=s.maxStrikes)s.phase="steal";break;
   case "steal": if(s.phase!=="steal")throw Error("محاولة السرقة غير متاحة");team(a.team);if(a.success){team(a.team).score+=s.bank;this.logEvent("نجاح السرقة",team(a.team).name+" حصل على "+s.bank);s.bank=0;}else{team(s.activeTeam).score+=s.bank;this.logEvent("فشل السرقة","النقاط للفريق الأصلي");s.bank=0;}s.phase="roundEnd";s.status="roundEnd";break;
   case "awardBank": if(!s.activeTeam)throw Error("لا يوجد فريق نشط");team(s.activeTeam).score+=s.bank;this.logEvent("إضافة رصيد الجولة",team(s.activeTeam).name+" +"+s.bank);s.bank=0;s.phase="roundEnd";s.status="roundEnd";break;
   case "addPoints":{const n=Number(a.points);if(!Number.isInteger(n)||n<=0||n>100000)throw Error("أدخل عدد نقاط صحيحًا أكبر من صفر");team(a.team).score+=n;this.logEvent("إضافة نقاط يدوية",team(a.team).name+" +"+n);break;}
   case "deductPoints":{const n=Number(a.points);if(!Number.isInteger(n)||n<=0||n>100000)throw Error("أدخل عدد نقاط صحيحًا أكبر من صفر");team(a.team).score=Math.max(0,team(a.team).score-n);this.logEvent("خصم نقاط",team(a.team).name+" -"+n);break;}
   case "adjustScore":{const n=Number(a.score);if(!Number.isInteger(n)||n<0||n>1000000)throw Error("النتيجة غير صالحة");team(a.team).score=n;this.logEvent("تعديل النتيجة",team(a.team).name+" = "+n);break;}
   case "timer": if(a.action==="start"){s.timer.running=true;this.state.storage.setAlarm(Date.now()+1000);}else if(a.action==="pause"){s.timer.running=false;this.state.storage.deleteAlarm();}else if(a.action==="reset"){s.timer.running=false;s.timer.remaining=s.timer.duration;this.state.storage.deleteAlarm();}else throw Error("أمر مؤقت غير صالح");this.logEvent("تحديث المؤقت",a.action);break;
   case "skip": s.phase="roundEnd";s.status="roundEnd";s.timer.running=false;this.logEvent("تخطي السؤال");break;
   case "next": s.round++;s.currentQuestion=null;s.phase="setup";s.status="playing";s.activeTeam=null;s.revealed=[];s.strikes=0;s.bank=0;s.timer.running=false;this.logEvent("الانتقال للسؤال التالي");break;
   case "finishMatch": s.status="finished";s.phase="finished";s.timer.running=false;this.logEvent("إنهاء المباراة");break;
   case "restartQuestion": if(!s.currentQuestion)throw Error("لا يوجد سؤال لإعادته");s.revealed=[];s.strikes=0;s.bank=0;s.phase="faceoff";s.status="playing";s.activeTeam=null;s.faceoff={firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null};this.logEvent("إعادة السؤال");break;
   default: throw Error("عملية غير مدعومة");
  }
 }
 finishRound(teamId){if(teamId){const t=this.data.teams.find(x=>x.id===teamId);if(t)t.score+=this.data.bank;}this.data.bank=0;this.data.phase="roundEnd";this.data.status="roundEnd";this.data.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("انتهاء الجولة");}
 async alarm(){await this.ready;if(!this.data?.timer?.running)return;this.data.timer.remaining=Math.max(0,this.data.timer.remaining-1);if(this.data.timer.remaining===0){this.data.timer.running=false;this.logEvent("انتهاء الوقت");}else{await this.state.storage.setAlarm(Date.now()+1000);}await this.persist();this.broadcast();}
 onMessage(ws,raw,isHost){
  if(!isHost){try{ws.send(JSON.stringify({type:"error",error:"وضع العرض فقط"}))}catch{}return}
  try{const a=JSON.parse(raw);this.apply(a);this.persist().then(()=>this.broadcast()).catch(()=>{});}
  catch(e){try{ws.send(JSON.stringify({type:"error",error:e.message}))}catch{}}
 }
}
