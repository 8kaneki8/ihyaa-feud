const CATEGORIES = [
  { id: "ten-promised", name: "العشرة المبشرون بالجنة" },
  { id: "prophet-children", name: "أبناء الرسول ﷺ" },
  { id: "first-muslims", name: "أوائل من دخلوا الإسلام" },
  { id: "longest-surahs", name: "أطول سور القرآن" }
];

const DEMO_QUESTIONS = [
  {
    id: "rank-ten-promised",
    category: "ten-promised",
    question: "رتّب العشرة المبشّرين بالجنة بحسب ترتيب أسمائهم في الحديث",
    answers: [
      {text:"أبو بكر الصديق",points:30,aliases:["أبو بكر","ابو بكر"]},
      {text:"عمر بن الخطاب",points:28,aliases:["عمر"]},
      {text:"عثمان بن عفان",points:26,aliases:["عثمان"]},
      {text:"علي بن أبي طالب",points:24,aliases:["علي","علي بن ابي طالب"]},
      {text:"طلحة بن عبيد الله",points:22,aliases:["طلحة"]},
      {text:"الزبير بن العوام",points:20,aliases:["الزبير"]},
      {text:"عبد الرحمن بن عوف",points:18,aliases:["عبدالرحمن بن عوف"]},
      {text:"سعد بن أبي وقاص",points:16,aliases:["سعد","سعد بن ابي وقاص"]},
      {text:"سعيد بن زيد",points:14,aliases:["سعيد"]},
      {text:"أبو عبيدة بن الجراح",points:12,aliases:["أبو عبيدة","ابو عبيدة"]}
    ],
    source:"حديث عبد الرحمن بن عوف في سنن الترمذي (3747). هذا ترتيب ورود الأسماء في الحديث، وليس ترتيبًا تفاضليًا بين الصحابة."
  },
  {
    id: "rank-prophet-children",
    category: "prophet-children",
    question: "رتّب أبناء النبي ﷺ بحسب ترتيب الولادة على القول المعتمد في مصدر المسابقة",
    answers: [
      {text:"القاسم",points:40,aliases:["القاسم بن رسول الله"]},
      {text:"زينب",points:35,aliases:["زينب بنت رسول الله"]},
      {text:"رقية",points:30,aliases:["رقية بنت رسول الله"]},
      {text:"فاطمة",points:25,aliases:["فاطمة الزهراء"]},
      {text:"أم كلثوم",points:20,aliases:["ام كلثوم"]},
      {text:"عبد الله",points:15,aliases:["عبدالله","عبد الله الطيب","الطيب والطاهر"]},
      {text:"إبراهيم",points:10,aliases:["ابراهيم","إبراهيم ابن النبي"]}
    ],
    source:"السيرة النبوية، كتاب السيرة الذاتية الصادر عن الأزهر. ترتيب المولد فيه: القاسم، زينب، رقية، فاطمة، أم كلثوم، عبد الله، إبراهيم. يوجد خلاف في ترتيب بعض البنات بين كتب السيرة."
  },
  {
    id: "rank-first-muslims",
    category: "first-muslims",
    question: "اذكر أوائل من دخلوا الإسلام وفق ترتيب ابن إسحاق",
    answers: [
      {text:"خديجة بنت خويلد",points:60,aliases:["خديجة","أم المؤمنين خديجة"]},
      {text:"علي بن أبي طالب",points:50,aliases:["علي","علي بن ابي طالب"]},
      {text:"زيد بن حارثة",points:40,aliases:["زيد"]},
      {text:"أبو بكر الصديق",points:30,aliases:["أبو بكر","ابو بكر"]},
      {text:"عثمان بن عفان",points:20,aliases:["عثمان"]}
    ],
    source:"ترتيب ابن إسحاق كما نقله أهل العلم: خديجة، ثم علي، ثم زيد، ثم أبو بكر؛ ثم يذكر من أسلم بدعوة أبي بكر عثمان والزبير وعبد الرحمن بن عوف وسعد بن أبي وقاص وطلحة. تحديد «الخامس» هنا وفق ترتيب الرواية، وليس محل اتفاق على ترتيب زمني قطعي."
  },
  {
    id: "rank-longest-surahs",
    category: "longest-surahs",
    question: "رتّب أطول عشر سور في القرآن الكريم من حيث عدد الآيات",
    answers: [
      {text:"سورة البقرة — 286 آية",points:30,aliases:["البقرة","سورة البقرة"]},
      {text:"سورة الشعراء — 227 آية",points:28,aliases:["الشعراء","سورة الشعراء"]},
      {text:"سورة الأعراف — 206 آيات",points:26,aliases:["الأعراف","الاعراف"]},
      {text:"سورة آل عمران — 200 آية",points:24,aliases:["آل عمران","ال عمران"]},
      {text:"سورة الصافات — 182 آية",points:22,aliases:["الصافات"]},
      {text:"سورة النساء — 176 آية",points:20,aliases:["النساء"]},
      {text:"سورة الأنعام — 165 آية",points:18,aliases:["الأنعام","الانعام"]},
      {text:"سورة طه — 135 آية",points:16,aliases:["طه"]},
      {text:"سورة التوبة — 129 آية",points:14,aliases:["التوبة","براءة"]},
      {text:"سورة النحل — 128 آية",points:12,aliases:["النحل"]}
    ],
    source:"ترتيب السور تنازليًا بحسب عدد الآيات في إحصاءات مصحف المدينة برواية حفص."
  }
];

const freshState = () => ({
  room: "", status:"lobby", phase:"setup", round:1,
  teams:[{id:"A",name:"الفريق الأحمر",players:[],score:0},{id:"B",name:"الفريق الأزرق",players:[],score:0}],
  categories:CATEGORIES, questions:DEMO_QUESTIONS, questionIndex:0, currentQuestion:null, completedQuestions:[],
  activeTeam:null, faceoff:{firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null},
  revealed:[], strikes:0, maxStrikes:3, bank:0, multiplier:1, roundMultipliers:[1,2,3,3], roundHistory:[], roundResult:null, steal:{team:null,attempted:false,success:null,answer:null},
  timer:{duration:30,remaining:30,running:false}, fastMoney:{enabled:false,target:200,active:false,player:1,answers:[[],[]],seconds:20},
  history:[], log:[], updatedAt:Date.now()
});

function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}})}
function clone(v){return JSON.parse(JSON.stringify(v))}
function archiveQuestion(s,result){if(!s.currentQuestion)return;const entry={round:s.round,question:clone(s.currentQuestion),revealed:[...(s.revealed||[])],faceoffAnswers:clone(s.faceoff?.answers||{}),result:clone(result||{})};s.completedQuestions=s.completedQuestions||[];if(!s.completedQuestions.some(x=>x.round===entry.round&&x.question?.id===entry.question.id))s.completedQuestions.push(entry);if(s.completedQuestions.length>30)s.completedQuestions.shift();}
function safeRoom(v){return /^[A-Z0-9]{4,8}$/.test(v||"")}
function cleanName(v,fallback){return String(v||fallback).trim().slice(0,32)||fallback}
function normalizeAnswer(value){return String(value||"").toLowerCase().normalize("NFKD").replace(/[\u064B-\u065F\u0670\u0640]/g,"").replace(/[أإآٱ]/g,"ا").replace(/ى/g,"ي").replace(/[ؤئ]/g,"ء").replace(/[^\p{L}\p{N}]+/gu," ").trim().replace(/\s+/g," ")}
function findAnswer(question,guess){const value=normalizeAnswer(guess);if(!value)return -1;return question.answers.findIndex(x=>[x.text,...(x.aliases||[])].some(v=>normalizeAnswer(v)===value))}

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
  if(!includePrivate){delete s.history;delete s.log;const faceoffSelected=new Set(Object.values(s.faceoff?.answers||{}).filter(i=>Number.isInteger(i)));const mask=(q,visible=new Set())=>q?({...q,answers:q.answers.map((a,i)=>((q.id===s.currentQuestion?.id&&s.revealed.includes(i))||(q.id===s.currentQuestion?.id&&faceoffSelected.has(i))||visible.has(i))?a:{text:null,points:null,aliases:[]})}):null;s.questions=[];s.currentQuestion=mask(s.currentQuestion);s.completedQuestions=(s.completedQuestions||[]).map(entry=>{const visible=new Set([...(entry.revealed||[]),...Object.values(entry.faceoffAnswers||{}).filter(i=>Number.isInteger(i))]);return {...entry,question:mask(entry.question,visible)};});}
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
   case "setup": s.teams[0].name=cleanName(a.teamA,"الفريق الأحمر");s.teams[1].name=cleanName(a.teamB,"الفريق الأزرق");s.teams[0].players=(a.playersA||[]).map(x=>cleanName(x,"لاعب")).slice(0,8);s.teams[1].players=(a.playersB||[]).map(x=>cleanName(x,"لاعب")).slice(0,8);this.logEvent("تحديث إعدادات الفرق");break;
   case "setMultiplier":{const n=Number(a.multiplier);if(!Number.isInteger(n)||n<1||n>10)throw Error("المضاعف يجب أن يكون من 1 إلى 10");s.multiplier=n;this.logEvent("تغيير مضاعف الجولة","×"+n);break;}
   case "setActiveTeam":team(a.team);if(!["faceoff","playing","choice"].includes(s.phase))throw Error("لا يمكن تغيير الفريق النشط أثناء السرقة أو بعد نهاية الجولة");s.activeTeam=a.team;this.logEvent("تغيير الفريق النشط",team(a.team).name);break;
   case "removeStrike":if(s.strikes<=0)throw Error("لا توجد علامة خطأ لإزالتها");s.strikes--;if(s.phase==="steal"&&s.strikes<s.maxStrikes){s.activeTeam=s.steal?.originalTeam||(s.steal?.team==="A"?"B":"A");s.phase="playing";s.steal={team:null,originalTeam:null,attempted:false,success:null,answer:null};}this.logEvent("إزالة Strike","المتبقي "+s.strikes);break;
   case "resetStrikes":s.strikes=0;if(s.phase==="steal"){s.activeTeam=s.steal?.originalTeam||(s.steal?.team==="A"?"B":"A");s.phase="playing";s.steal={team:null,originalTeam:null,attempted:false,success:null,answer:null};}this.logEvent("تصفير الأخطاء");break;
   case "triggerSteal":if(s.phase!=="playing"||s.strikes<s.maxStrikes)throw Error("تتاح السرقة بعد تسجيل ثلاثة أخطاء");{const originalTeam=s.activeTeam;const stealingTeam=originalTeam==="A"?"B":"A";s.phase="steal";s.steal={team:stealingTeam,originalTeam,attempted:false,success:null,answer:null};s.activeTeam=stealingTeam;this.logEvent("انتقال الدور للفريق المنافس",team(stealingTeam).name+" — محاولة أخيرة لسرقة بنك الجولة");}break;
   case "setTimerDuration":{const n=Number(a.duration);if(!Number.isInteger(n)||n<5||n>300)throw Error("مدة المؤقت من 5 إلى 300 ثانية");s.timer.duration=n;s.timer.remaining=n;s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("تغيير مدة المؤقت",n+" ثانية");break;}
   case "addQuestion":{const category=s.categories.find(c=>c.id===a.category);const question=String(a.question||"").trim().slice(0,240);const answers=(a.answers||[]).map(x=>({text:String(x.text||"").trim().slice(0,100),points:Number(x.points),aliases:[]})).filter(x=>x.text&&Number.isInteger(x.points)&&x.points>0&&x.points<=10000);if(!category)throw Error("اختر تصنيفًا صحيحًا");if(question.length<8)throw Error("اكتب سؤالًا واضحًا");if(answers.length<1)throw Error("أضف إجابة واحدة على الأقل مع نقاطها");const totalPoints=answers.reduce((sum,x)=>sum+x.points,0);if(totalPoints<100||totalPoints>300)throw Error("إجمالي نقاط السؤال يجب أن يكون من 100 إلى 300 نقطة");if(answers.length>12)throw Error("الحد الأقصى 12 إجابة");const item={id:crypto.randomUUID(),category:a.category,question,answers,source:String(a.source||"").trim().slice(0,500),note:"أضافه الهوست؛ راجع صحة المحتوى ومصدره قبل استخدامه."};s.questions.push(item);this.logEvent("إضافة سؤال إلى بنك الأسئلة",question);break;}
   case "startQuestion":{
    const found=s.questions.find(x=>x.id===a.questionId);if(!found)throw Error("السؤال غير موجود");
    s.currentQuestion=clone(found);s.revealed=[];s.strikes=0;s.bank=0;s.roundResult=null;s.steal={team:null,attempted:false,success:null,answer:null};s.activeTeam=null;s.phase="faceoff";s.status="playing";s.faceoff={firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null};s.timer.remaining=s.timer.duration;s.timer.running=false;this.logEvent("بدء السؤال",found.question);break;
   }
   case "buzz": if(s.phase!=="faceoff")throw Error("المواجهة غير نشطة");team(a.team);if(s.faceoff.firstBuzz)throw Error("تم تسجيل الفريق الذي ضغط الجرس أولًا بالفعل");s.faceoff.firstBuzz=a.team;this.logEvent("تحديد الفريق الذي يبدأ الاختيار",team(a.team).name);break;
   case "faceAnswer": if(s.phase!=="faceoff")throw Error("المواجهة غير نشطة");team(a.team);{const first=s.faceoff.firstBuzz;const other=first==="A"?"B":"A";if(first&&a.team!==first&&s.faceoff.answers[first]===null)throw Error("سجل إجابة الفريق الذي يبدأ الاختيار أولًا");const index=a.answer!==undefined?findAnswer(q(),a.answer):Number(a.answerIndex);const ans=q().answers[index];if(!ans)throw Error("الإجابة غير موجودة في لوحة الإجابات");if(s.faceoff.answers[a.team]!==null)throw Error("تم تسجيل إجابة هذا الفريق بالفعل");s.faceoff.answers[a.team]=index;this.logEvent("تسجيل إجابة المواجهة",team(a.team).name+" — رقم "+(index+1)+": "+ans.text);}break;
   case "resolveFaceoff":{
    const first=s.faceoff.firstBuzz;const other=first==="A"?"B":"A";const firstIndex=first?s.faceoff.answers[first]:null;const otherIndex=s.faceoff.answers[other];
    if(first&&firstIndex===null)throw Error("سجل إجابة الفريق الذي يبدأ الاختيار أولًا");
    
    if(first&&otherIndex===null)throw Error("سجل إجابة الفريق الثاني قبل حسم المواجهة");
    const A=s.faceoff.answers.A,B=s.faceoff.answers.B;if(A===null||B===null)throw Error("سجل إجابة الفريقين أو استخدم الحسم اليدوي");
    if(A===B)throw Error("الفريقان اختارا نفس ترتيب الإجابة؛ اختر الفائز يدويًا");s.faceoff.winner=A<B?"A":"B";s.phase="choice";this.logEvent("حسم المواجهة",team(s.faceoff.winner).name);break;
   }
   case "manualFaceWinner":team(a.team);s.faceoff.winner=a.team;s.phase="choice";this.logEvent("اعتماد فائز المواجهة يدويًا",team(a.team).name);break;
   case "playOrPass": if(s.phase!=="choice")throw Error("مرحلة الاختيار غير نشطة");if(!["play","pass"].includes(a.choice))throw Error("اختيار غير صالح");s.faceoff.choice=a.choice;s.activeTeam=a.choice==="play"?s.faceoff.winner:(s.faceoff.winner==="A"?"B":"A");s.phase="playing";this.logEvent(a.choice==="play"?"اختيار اللعب":"تمرير السؤال",team(s.activeTeam).name);break;
   case "guess":{if(s.phase!=="playing")throw Error("السؤال ليس في مرحلة اللعب");const index=findAnswer(q(),a.answer);if(index<0){s.strikes++;this.logEvent("إجابة غير موجودة",String(a.answer||"").slice(0,80));if(s.strikes>=s.maxStrikes){const originalTeam=s.activeTeam;const stealingTeam=originalTeam==="A"?"B":"A";s.phase="steal";s.steal={team:stealingTeam,originalTeam,attempted:false,success:null,answer:null};s.activeTeam=stealingTeam;this.logEvent("انتقال الدور للفريق المنافس","اكتملت الأخطاء الثلاثة — "+team(stealingTeam).name+" لديه محاولة أخيرة");}break;}if(s.revealed.includes(index))throw Error("هذه الإجابة مكشوفة بالفعل");const ans=q().answers[index];s.revealed.push(index);s.bank+=Number(ans.points)||0;this.logEvent("إجابة صحيحة",ans.text+" (+"+ans.points+")");if(s.revealed.length===q().answers.length)this.finishRound(s.activeTeam);break;}
   case "reveal":{if(s.phase!=="playing")throw Error("يمكن كشف الإجابات أثناء اللعب فقط");const ans=q().answers[a.answerIndex];if(!ans||s.revealed.includes(a.answerIndex))throw Error("الإجابة غير متاحة");s.revealed.push(a.answerIndex);s.bank+=Number(ans.points)||0;this.logEvent("كشف إجابة",ans.text+" (+"+ans.points+")");if(s.revealed.length===q().answers.length)this.finishRound(s.activeTeam);break;}
   case "hideAnswer":{if(s.phase!=="playing")throw Error("يمكن إخفاء الإجابات أثناء اللعب فقط");const i=Number(a.answerIndex);if(!s.revealed.includes(i))throw Error("الإجابة ليست مكشوفة");s.revealed=s.revealed.filter(x=>x!==i);s.bank=Math.max(0,s.bank-(Number(q().answers[i].points)||0));this.logEvent("إخفاء إجابة",q().answers[i].text);break;}
   case "strike": if(s.phase!=="playing")throw Error("الجولة ليست في مرحلة اللعب");s.strikes++;this.logEvent("احتساب خطأ",s.strikes+" / "+s.maxStrikes);if(s.strikes>=s.maxStrikes){const originalTeam=s.activeTeam;const stealingTeam=originalTeam==="A"?"B":"A";s.phase="steal";s.steal={team:stealingTeam,originalTeam,attempted:false,success:null,answer:null};s.activeTeam=stealingTeam;this.logEvent("انتقال الدور للفريق المنافس",team(stealingTeam).name+" — محاولة أخيرة لسرقة بنك الجولة");}break;
   case "steal": if(s.phase!=="steal")throw Error("محاولة السرقة غير متاحة");if(s.steal?.attempted)throw Error("تم استخدام فرصة السرقة بالفعل");{const stealingTeam=s.steal?.team;if(a.team!==stealingTeam)throw Error("المحاولة متاحة للفريق المنتقل إليه الدور فقط");team(stealingTeam);const index=findAnswer(q(),a.answer);const attempted=index>=0?q().answers[index]:null;const success=!!attempted&&!s.revealed.includes(index);s.steal={...s.steal,attempted:true,success,answer:success?attempted.text:String(a.answer||"")};if(success){s.revealed.push(index);this.logEvent("نجاح السرقة",team(stealingTeam).name+" — "+attempted.text+" — حصل على بنك الجولة بالكامل");this.finishRound(stealingTeam,"steal-success",{stealTeam:stealingTeam,stealAnswer:s.steal.answer});}else{this.logEvent("فشل السرقة","تم إلغاء بنك الجولة بالكامل دون منح نقاط لأي فريق");this.finishRound(null,"steal-failed",{stealTeam:stealingTeam,stealAnswer:s.steal.answer});}}break;
   case "awardBank": if(s.phase!=="playing"||!s.activeTeam)throw Error("لا يوجد فريق نشط لإنهاء الجولة");this.finishRound(s.activeTeam,"host-ended");break;
   case "addPoints":{if(["faceoff","choice","playing","steal"].includes(s.phase))throw Error("لا يمكن تعديل رصيد الفرق قبل انتهاء الجولة");const n=Number(a.points);if(!Number.isInteger(n)||n<=0||n>100000)throw Error("أدخل عدد نقاط صحيحًا أكبر من صفر");team(a.team).score+=n;this.logEvent("إضافة نقاط يدوية",team(a.team).name+" +"+n);break;}
   case "deductPoints":{if(["faceoff","choice","playing","steal"].includes(s.phase))throw Error("لا يمكن تعديل رصيد الفرق قبل انتهاء الجولة");const n=Number(a.points);if(!Number.isInteger(n)||n<=0||n>100000)throw Error("أدخل عدد نقاط صحيحًا أكبر من صفر");team(a.team).score=Math.max(0,team(a.team).score-n);this.logEvent("خصم نقاط",team(a.team).name+" -"+n);break;}
   case "adjustScore":{if(["faceoff","choice","playing","steal"].includes(s.phase))throw Error("لا يمكن تعديل رصيد الفرق قبل انتهاء الجولة");const n=Number(a.score);if(!Number.isInteger(n)||n<0||n>1000000)throw Error("النتيجة غير صالحة");team(a.team).score=n;this.logEvent("تعديل النتيجة",team(a.team).name+" = "+n);break;}
   case "timer": if(a.action==="start"){s.timer.running=true;this.state.storage.setAlarm(Date.now()+1000);}else if(a.action==="pause"){s.timer.running=false;this.state.storage.deleteAlarm();}else if(a.action==="reset"){s.timer.running=false;s.timer.remaining=s.timer.duration;this.state.storage.deleteAlarm();}else throw Error("أمر مؤقت غير صالح");this.logEvent("تحديث المؤقت",a.action);break;
   case "skip": if(["setup","roundEnd","finished"].includes(s.phase))throw Error("لا يوجد سؤال نشط لتخطيه");if(s.phase==="steal")throw Error("يجب حسم فرصة السرقة قبل إنهاء الجولة");s.roundResult={round:s.round,bank:s.bank,multiplier:s.multiplier,awarded:0,winner:null,reason:"skipped"};archiveQuestion(s,s.roundResult);s.roundHistory.push({...s.roundResult});s.bank=0;s.phase="roundEnd";s.status="roundEnd";s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("تخطي السؤال","لم تُحتسب نقاط البنك");break;
   case "next": if(s.phase!=="roundEnd")throw Error("يجب إنهاء الجولة الحالية أولًا");s.round++;s.multiplier=Number(a.multiplier)||s.roundMultipliers[s.round-1]||1;s.currentQuestion=null;s.roundResult=null;s.steal={team:null,attempted:false,success:null,answer:null};s.phase="setup";s.status="playing";s.activeTeam=null;s.revealed=[];s.strikes=0;s.bank=0;s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("الانتقال للسؤال التالي","الجولة "+s.round+" — المضاعف ×"+s.multiplier);break;
   case "finishMatch": if(s.phase==="steal")throw Error("احسم محاولة السرقة أولًا قبل إنهاء المباراة");if(["faceoff","choice","playing"].includes(s.phase))this.finishRound(s.activeTeam,"match-ended");s.status="finished";s.phase="finished";s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("إنهاء المباراة");break;
   case "restartQuestion": if(!s.currentQuestion)throw Error("لا يوجد سؤال لإعادته");s.revealed=[];s.strikes=0;s.bank=0;s.roundResult=null;s.steal={team:null,attempted:false,success:null,answer:null};s.phase="faceoff";s.status="playing";s.activeTeam=null;s.faceoff={firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null};this.logEvent("إعادة السؤال");break;
   default: throw Error("عملية غير مدعومة");
  }
 }
 finishRound(teamId,reason="completed",details={}){const s=this.data;if(s.phase==="roundEnd")return;const bank=Number(s.bank)||0;const multiplier=Number(s.multiplier)||1;const award=reason==="steal-failed"?0:bank*multiplier;if(teamId){const t=s.teams.find(x=>x.id===teamId);if(t)t.score+=award;}s.roundResult={round:s.round,bank,multiplier,awarded:award,winner:teamId,reason,...details};archiveQuestion(s,s.roundResult);s.roundHistory.push({round:s.round,bank,multiplier,awarded:award,winner:teamId,reason});s.bank=0;s.phase="roundEnd";s.status="roundEnd";s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("انتهاء الجولة",reason==="steal-failed"?"فشلت السرقة وتم إلغاء نقاط الجولة":teamId?"تم اعتماد "+award+" نقطة للفريق الفائز (×"+multiplier+")":"انتهت الجولة دون نقاط");}
 async alarm(){await this.ready;if(!this.data?.timer?.running)return;this.data.timer.remaining=Math.max(0,this.data.timer.remaining-1);if(this.data.timer.remaining===0){this.data.timer.running=false;this.logEvent("انتهاء الوقت");}else{await this.state.storage.setAlarm(Date.now()+1000);}await this.persist();this.broadcast();}
 onMessage(ws,raw,isHost){
  if(!isHost){try{ws.send(JSON.stringify({type:"error",error:"وضع العرض فقط"}))}catch{}return}
  try{const a=JSON.parse(raw);this.apply(a);this.persist().then(()=>this.broadcast()).catch(()=>{});}
  catch(e){try{ws.send(JSON.stringify({type:"error",error:e.message}))}catch{}}
 }
}
