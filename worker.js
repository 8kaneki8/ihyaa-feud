const CATEGORIES = [
  { id: "prophets", name: "الأنبياء والرسل" },
  { id: "history", name: "التاريخ الإسلامي" },
  { id: "quran", name: "القرآن الكريم" },
  { id: "companions", name: "الصحابة" },
  { id: "knowledge", name: "معلومات إسلامية" }
];

const DEMO_QUESTIONS = [
  // الأنبياء والرسل
  { id:"p1", category:"prophets", question:"اذكر نبيًا من أولي العزم من الرسل", answers:[{text:"محمد ﷺ",points:30,aliases:["محمد","رسول الله"]},{text:"موسى عليه السلام",points:25,aliases:["موسى"]},{text:"إبراهيم عليه السلام",points:20,aliases:["ابراهيم"]},{text:"نوح عليه السلام",points:15,aliases:["نوح"]},{text:"عيسى عليه السلام",points:10,aliases:["عيسى","عيسي"]}], source:"القرآن الكريم: الأحزاب 7، والشورى 13، والأحقاف 35." },
  { id:"p2", category:"prophets", question:"اذكر نبيًا ورد اسمه في اسم سورة من القرآن", answers:[{text:"يوسف عليه السلام",points:45,aliases:["يوسف"]},{text:"يونس عليه السلام",points:38,aliases:["يونس"]},{text:"هود عليه السلام",points:30,aliases:["هود"]},{text:"إبراهيم عليه السلام",points:22,aliases:["ابراهيم"]},{text:"نوح عليه السلام",points:15,aliases:["نوح"]}], source:"أسماء سور القرآن الكريم." },
  { id:"p3", category:"prophets", question:"من أول الأنبياء؟", answers:[{text:"آدم عليه السلام",points:200,aliases:["آدم","ادم"]}], source:"آدم عليه السلام أول الأنبياء؛ ويُفرّق بين النبوة والرسالة، فنوح عليه السلام أول رسول إلى أهل الأرض بعد وقوع الشرك." },
  { id:"p6", category:"prophets", question:"من أول رسول بعثه الله إلى أهل الأرض بعد وقوع الشرك؟", answers:[{text:"نوح عليه السلام",points:200,aliases:["نوح"]}], source:"حديث الشفاعة: يقال لنوح عليه السلام: أنت أول رسول بعثه الله إلى أهل الأرض؛ صحيح مسلم." },
  { id:"p4", category:"prophets", question:"اذكر نبيًا أرسله الله إلى قومه فدعاهم إلى التوحيد", answers:[{text:"نوح عليه السلام",points:75,aliases:["نوح"]},{text:"هود عليه السلام",points:63,aliases:["هود"]},{text:"صالح عليه السلام",points:50,aliases:["صالح"]},{text:"شعيب عليه السلام",points:37,aliases:["شعيب"]},{text:"لوط عليه السلام",points:25,aliases:["لوط"]}], source:"سور هود والأعراف والشعراء وغيرها." },
  { id:"p5", category:"prophets", question:"اذكر نبيًا ارتبطت قصته بمعجزة أو آية عظيمة", answers:[{text:"موسى عليه السلام — العصا",points:90,aliases:["موسى","العصا"]},{text:"صالح عليه السلام — الناقة",points:75,aliases:["صالح","الناقة"]},{text:"إبراهيم عليه السلام — النار",points:60,aliases:["ابراهيم","النار"]},{text:"عيسى عليه السلام — إبراء المرضى بإذن الله",points:45,aliases:["عيسى","إبراء الأكمه والأبرص"]},{text:"محمد ﷺ — القرآن الكريم",points:30,aliases:["محمد","القران","القرآن"]}], source:"القرآن الكريم؛ تذكر الإجابة مع القيد الوارد في النص: بإذن الله." },

  // التاريخ الإسلامي
  { id:"h1", category:"history", question:"اذكر مسجدًا له مكانة تاريخية كبيرة في الإسلام", answers:[{text:"المسجد الحرام",points:30,aliases:["الحرم المكي","الكعبة"]},{text:"المسجد النبوي",points:25,aliases:["مسجد الرسول"]},{text:"المسجد الأقصى",points:20,aliases:["الاقصى","بيت المقدس"]},{text:"مسجد قباء",points:15,aliases:["قباء"]},{text:"مسجد القبلتين",points:10,aliases:["القبلتين"]}], source:"السيرة النبوية ومصادر تاريخ المساجد." },
  { id:"h2", category:"history", question:"اذكر غزوة من غزوات النبي ﷺ المشهورة", answers:[{text:"بدر",points:45,aliases:["غزوة بدر الكبرى"]},{text:"أحد",points:38,aliases:["غزوة احد"]},{text:"الخندق",points:30,aliases:["الأحزاب","غزوة الأحزاب"]},{text:"خيبر",points:22,aliases:["غزوة خيبر"]},{text:"حنين",points:15,aliases:["غزوة حنين"]}], source:"كتب السيرة النبوية." },
  { id:"h3", category:"history", question:"اذكر حدثًا مهمًا وقع في السنة الأولى للهجرة", answers:[{text:"بناء المسجد النبوي",points:60,aliases:["بناء مسجد النبي"]},{text:"المؤاخاة بين المهاجرين والأنصار",points:50,aliases:["المؤاخاة"]},{text:"كتابة صحيفة المدينة",points:40,aliases:["وثيقة المدينة","دستور المدينة"]},{text:"النزول بقباء وبناء مسجدها",points:30,aliases:["بناء مسجد قباء","الوصول إلى قباء"]},{text:"تنظيم مجتمع المدينة",points:20,aliases:["تنظيم المدينة"]}], source:"كتب السيرة والتاريخ الإسلامي؛ ترتيب الأحداث التفصيلي قد يختلف بين المصادر." },
  { id:"h4", category:"history", question:"اذكر مدينة كانت عاصمة أو مركزًا مهمًا في تاريخ الدولة الإسلامية", answers:[{text:"المدينة المنورة",points:75,aliases:["المدينة"]},{text:"دمشق",points:63,aliases:["الشام"]},{text:"بغداد",points:50,aliases:[]},{text:"القاهرة",points:37,aliases:[]},{text:"الكوفة",points:25,aliases:[]}], source:"كتب التاريخ الإسلامي." },
  { id:"h5", category:"history", question:"اذكر صلحًا أو بيعة أو وثيقة بارزة في السيرة النبوية", answers:[{text:"صلح الحديبية",points:90,aliases:["الحديبية"]},{text:"بيعة العقبة الأولى",points:75,aliases:["العقبة الاولى"]},{text:"بيعة العقبة الثانية",points:60,aliases:["العقبة الثانية"]},{text:"بيعة الرضوان",points:45,aliases:["بيعة الشجرة"]},{text:"صحيفة المدينة",points:30,aliases:["وثيقة المدينة"]}], source:"كتب السيرة النبوية." },

  // القرآن الكريم
  { id:"q1", category:"quran", question:"اذكر سورة من أطول سور القرآن من حيث عدد الآيات", answers:[{text:"البقرة",points:30,aliases:["سورة البقرة"]},{text:"الأعراف",points:25,aliases:["الاعراف"]},{text:"آل عمران",points:20,aliases:["ال عمران"]},{text:"النساء",points:15,aliases:["سورة النساء"]},{text:"الأنعام",points:10,aliases:["الانعام"]}], source:"المصحف الشريف؛ الترتيب هنا بحسب عدد الآيات، والنقاط ترتيب تجريبي." },
  { id:"q2", category:"quran", question:"اذكر سورة تبدأ بالحروف المقطعة: الم", answers:[{text:"البقرة",points:45,aliases:["سورة البقرة"]},{text:"آل عمران",points:36,aliases:["ال عمران"]},{text:"العنكبوت",points:27,aliases:["سورة العنكبوت"]},{text:"الروم",points:21,aliases:["سورة الروم"]},{text:"لقمان",points:14,aliases:["سورة لقمان"]},{text:"السجدة",points:7,aliases:["سورة السجدة"]}], source:"فواتح السور في المصحف الشريف؛ توجد سورة أخرى تبدأ بـ(الم) وهي السجدة." },
  { id:"q3", category:"quran", question:"اذكر سورة سُمّيت باسم حيوان", answers:[{text:"البقرة",points:60,aliases:["سورة البقرة"]},{text:"النحل",points:50,aliases:["سورة النحل"]},{text:"النمل",points:40,aliases:["سورة النمل"]},{text:"العنكبوت",points:30,aliases:["سورة العنكبوت"]},{text:"الفيل",points:20,aliases:["سورة الفيل"]}], source:"أسماء سور القرآن الكريم." },
  { id:"q4", category:"quran", question:"اذكر سورة افتتحت بالحمد لله", answers:[{text:"الفاتحة",points:75,aliases:["سورة الفاتحة"]},{text:"الأنعام",points:63,aliases:["الانعام"]},{text:"الكهف",points:50,aliases:["سورة الكهف"]},{text:"سبأ",points:37,aliases:["سورة سبأ"]},{text:"فاطر",points:25,aliases:["سورة فاطر"]}], source:"فواتح سور القرآن الكريم." },
  { id:"q5", category:"quran", question:"اذكر سورة من السور التي سُمّيت باسم نبي", answers:[{text:"يوسف",points:90,aliases:["سورة يوسف"]},{text:"يونس",points:72,aliases:["سورة يونس"]},{text:"هود",points:54,aliases:["سورة هود"]},{text:"إبراهيم",points:42,aliases:["ابراهيم","سورة ابراهيم"]},{text:"نوح",points:27,aliases:["سورة نوح"]},{text:"محمد",points:15,aliases:["سورة محمد"]}], source:"أسماء سور القرآن الكريم؛ توجد أيضًا سورة محمد." },

  // الصحابة
  { id:"c1", category:"companions", question:"اذكر واحدًا من السابقين إلى الإسلام", answers:[{text:"خديجة بنت خويلد",points:30,aliases:["خديجة"]},{text:"أبو بكر الصديق",points:25,aliases:["ابو بكر","أبو بكر"]},{text:"علي بن أبي طالب",points:20,aliases:["علي","علي بن ابي طالب"]},{text:"زيد بن حارثة",points:15,aliases:["زيد"]},{text:"عثمان بن عفان",points:10,aliases:["عثمان"]}], source:"كتب السيرة؛ ترتيب أوائل المسلمين يختلف بحسب الفئة، والسؤال يقبل أي اسم من السابقين." },
  { id:"c2", category:"companions", question:"اذكر واحدًا من الخلفاء الراشدين", answers:[{text:"أبو بكر الصديق",points:60,aliases:["ابو بكر","أبو بكر"]},{text:"عمر بن الخطاب",points:45,aliases:["عمر"]},{text:"عثمان بن عفان",points:30,aliases:["عثمان"]},{text:"علي بن أبي طالب",points:15,aliases:["علي","علي بن ابي طالب"]}], source:"الأربعة الأولون هم الخلفاء الراشدون؛ أُدرج الحسن بن علي خامسًا في الإجابات المقبولة لورود خلافةٍ قصيرة له." },
  { id:"c3", category:"companions", question:"اذكر صحابيًا من العشرة المبشرين بالجنة", answers:[{text:"أبو بكر الصديق",points:50,aliases:["ابو بكر","أبو بكر"]},{text:"عمر بن الخطاب",points:36,aliases:["عمر"]},{text:"عثمان بن عفان",points:28,aliases:["عثمان"]},{text:"علي بن أبي طالب",points:24,aliases:["علي","علي بن ابي طالب"]},{text:"طلحة بن عبيد الله",points:20,aliases:["طلحة"]},{text:"الزبير بن العوام",points:14,aliases:["الزبير"]},{text:"عبد الرحمن بن عوف",points:10,aliases:["عبدالرحمن بن عوف"]},{text:"سعد بن أبي وقاص",points:8,aliases:["سعد بن ابي وقاص","سعد"]},{text:"سعيد بن زيد",points:6,aliases:["سعيد"]},{text:"أبو عبيدة بن الجراح",points:4,aliases:["ابو عبيدة","أبو عبيدة"]}], source:"حديث العشرة المبشرين بالجنة؛ صحيح الترمذي وغيره." },
  { id:"c4", category:"companions", question:"اذكر صحابيًا اشتهر بلقب معروف", answers:[{text:"أبو بكر — الصديق",points:75,aliases:["ابو بكر الصديق","الصديق"]},{text:"عمر — الفاروق",points:63,aliases:["عمر الفاروق","الفاروق"]},{text:"حمزة — أسد الله",points:50,aliases:["حمزة","اسد الله"]},{text:"خالد بن الوليد — سيف الله",points:37,aliases:["خالد","سيف الله"]},{text:"بلال — مؤذن الرسول",points:25,aliases:["بلال بن رباح","بلال"]}], source:"كتب التراجم والسيرة؛ الألقاب المشهورة للصحابة." },
  { id:"c5", category:"companions", question:"اذكر صحابيًا عُرف بكثرة رواية الحديث", answers:[{text:"أبو هريرة",points:90,aliases:["ابو هريرة"]},{text:"عبد الله بن عمر",points:75,aliases:["ابن عمر","عبدالله بن عمر"]},{text:"أنس بن مالك",points:60,aliases:["انس"]},{text:"عائشة بنت أبي بكر",points:45,aliases:["عائشة","عائشه"]},{text:"عبد الله بن عباس",points:30,aliases:["ابن عباس","عبدالله بن عباس"]}], source:"كتب الحديث وعلوم الرجال؛ من أشهر المكثرين من رواية الحديث." },

  // معلومات إسلامية عامة
  { id:"k1", category:"knowledge", question:"اذكر ركنًا من أركان الإسلام", answers:[{text:"الشهادتان",points:30,aliases:["الشهادة","شهادة أن لا إله إلا الله"]},{text:"إقامة الصلاة",points:25,aliases:["الصلاة"]},{text:"إيتاء الزكاة",points:20,aliases:["الزكاة"]},{text:"صوم رمضان",points:15,aliases:["الصيام","الصوم"]},{text:"حج البيت",points:10,aliases:["الحج"]}], source:"حديث بني الإسلام على خمس — صحيح البخاري وصحيح مسلم." },
  { id:"k2", category:"knowledge", question:"اذكر ركنًا من أركان الإيمان", answers:[{text:"الإيمان بالله",points:45,aliases:["الله"]},{text:"الإيمان بالملائكة",points:36,aliases:["الملائكة"]},{text:"الإيمان بالكتب",points:27,aliases:["الكتب السماوية"]},{text:"الإيمان بالرسل",points:21,aliases:["الرسل"]},{text:"الإيمان باليوم الآخر",points:14,aliases:["اليوم الاخر"]},{text:"الإيمان بالقدر خيره وشره",points:7,aliases:["القدر","القضاء والقدر"]}], source:"حديث جبريل — صحيح مسلم؛ لم تُدرج الإجابة السادسة (القدر) ضمن هذه العينة." },
  { id:"k3", category:"knowledge", question:"اذكر شهرًا من الأشهر الحُرُم", answers:[{text:"ذو القعدة",points:70,aliases:["ذي القعدة"]},{text:"ذو الحجة",points:60,aliases:["ذي الحجة"]},{text:"المحرم",points:40,aliases:["محرّم"]},{text:"رجب",points:30,aliases:[]}], source:"الأشهر الحرم أربعة: ذو القعدة وذو الحجة والمحرم ورجب." },
  { id:"k4", category:"knowledge", question:"اذكر صلاة من الصلوات المفروضة", answers:[{text:"الفجر",points:75,aliases:["صلاة الفجر"]},{text:"الظهر",points:63,aliases:["صلاة الظهر"]},{text:"العصر",points:50,aliases:["صلاة العصر"]},{text:"المغرب",points:37,aliases:["صلاة المغرب"]},{text:"العشاء",points:25,aliases:["صلاة العشاء"]}], source:"الصلوات الخمس المفروضة." },
  { id:"k5", category:"knowledge", question:"اذكر عبادة أو شعيرة ترتبط بشهر رمضان", answers:[{text:"الصيام",points:90,aliases:["صوم رمضان"]},{text:"صلاة التراويح",points:75,aliases:["التراويح","قيام رمضان"]},{text:"زكاة الفطر",points:60,aliases:["الفطرة"]},{text:"الاعتكاف",points:45,aliases:[]},{text:"تحري ليلة القدر",points:30,aliases:["ليلة القدر","قيام ليلة القدر"]}], source:"أحكام وفضائل شهر رمضان في القرآن والسنة." }
];

const freshState = () => ({
  room: "", status:"lobby", phase:"setup", round:1,
  teams:[{id:"A",name:"الفريق الأحمر",players:[],score:0},{id:"B",name:"الفريق الأزرق",players:[],score:0}],
  categories:CATEGORIES, questions:DEMO_QUESTIONS, questionIndex:0, currentQuestion:null,
  activeTeam:null, faceoff:{firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null},
  revealed:[], strikes:0, maxStrikes:3, bank:0, multiplier:1, roundMultipliers:[1,2,3,3], roundHistory:[], roundResult:null, steal:{team:null,attempted:false,success:null,answer:null},
  timer:{duration:30,remaining:30,running:false}, fastMoney:{enabled:false,target:200,active:false,player:1,answers:[[],[]],seconds:20},
  history:[], log:[], updatedAt:Date.now()
});

function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}})}
function clone(v){return JSON.parse(JSON.stringify(v))}
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
   case "setup": s.teams[0].name=cleanName(a.teamA,"الفريق الأحمر");s.teams[1].name=cleanName(a.teamB,"الفريق الأزرق");s.teams[0].players=(a.playersA||[]).map(x=>cleanName(x,"لاعب")).slice(0,8);s.teams[1].players=(a.playersB||[]).map(x=>cleanName(x,"لاعب")).slice(0,8);this.logEvent("تحديث إعدادات الفرق");break;
   case "setMultiplier":{const n=Number(a.multiplier);if(!Number.isInteger(n)||n<1||n>10)throw Error("المضاعف يجب أن يكون من 1 إلى 10");s.multiplier=n;this.logEvent("تغيير مضاعف الجولة","×"+n);break;}
   case "setActiveTeam":team(a.team);if(!["faceoff","playing","choice"].includes(s.phase))throw Error("لا يمكن تغيير الفريق النشط أثناء السرقة أو بعد نهاية الجولة");s.activeTeam=a.team;this.logEvent("تغيير الفريق النشط",team(a.team).name);break;
   case "removeStrike":if(s.strikes<=0)throw Error("لا توجد علامة خطأ لإزالتها");s.strikes--;if(s.phase==="steal"&&s.strikes<s.maxStrikes){s.phase="playing";s.steal={team:null,attempted:false,success:null,answer:null};}this.logEvent("إزالة Strike","المتبقي "+s.strikes);break;
   case "resetStrikes":s.strikes=0;if(s.phase==="steal"){s.phase="playing";s.steal={team:null,attempted:false,success:null,answer:null};}this.logEvent("تصفير الأخطاء");break;
   case "triggerSteal":if(s.phase!=="playing"||s.strikes<s.maxStrikes)throw Error("تتاح السرقة بعد تسجيل ثلاثة أخطاء");s.phase="steal";s.steal={team:s.activeTeam==="A"?"B":"A",attempted:false,success:null,answer:null};this.logEvent("بدء مرحلة السرقة",team(s.steal.team).name+" — محاولة واحدة فقط");break;
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
   case "guess":{if(s.phase!=="playing")throw Error("السؤال ليس في مرحلة اللعب");const index=findAnswer(q(),a.answer);if(index<0){s.strikes++;this.logEvent("إجابة غير موجودة",String(a.answer||"").slice(0,80));if(s.strikes>=s.maxStrikes){s.phase="steal";s.steal={team:s.activeTeam==="A"?"B":"A",attempted:false,success:null,answer:null};this.logEvent("اكتملت الأخطاء الثلاثة","فرصة سرقة واحدة لـ "+team(s.steal.team).name);}break;}if(s.revealed.includes(index))throw Error("هذه الإجابة مكشوفة بالفعل");const ans=q().answers[index];s.revealed.push(index);s.bank+=Number(ans.points)||0;this.logEvent("إجابة صحيحة",ans.text+" (+"+ans.points+")");if(s.revealed.length===q().answers.length)this.finishRound(s.activeTeam);break;}
   case "reveal":{if(s.phase!=="playing")throw Error("يمكن كشف الإجابات أثناء اللعب فقط");const ans=q().answers[a.answerIndex];if(!ans||s.revealed.includes(a.answerIndex))throw Error("الإجابة غير متاحة");s.revealed.push(a.answerIndex);s.bank+=Number(ans.points)||0;this.logEvent("كشف إجابة",ans.text+" (+"+ans.points+")");if(s.revealed.length===q().answers.length)this.finishRound(s.activeTeam);break;}
   case "hideAnswer":{if(s.phase!=="playing")throw Error("يمكن إخفاء الإجابات أثناء اللعب فقط");const i=Number(a.answerIndex);if(!s.revealed.includes(i))throw Error("الإجابة ليست مكشوفة");s.revealed=s.revealed.filter(x=>x!==i);s.bank=Math.max(0,s.bank-(Number(q().answers[i].points)||0));this.logEvent("إخفاء إجابة",q().answers[i].text);break;}
   case "strike": if(s.phase!=="playing")throw Error("الجولة ليست في مرحلة اللعب");s.strikes++;this.logEvent("احتساب خطأ",s.strikes+" / "+s.maxStrikes);if(s.strikes>=s.maxStrikes){s.phase="steal";s.steal={team:s.activeTeam==="A"?"B":"A",attempted:false,success:null,answer:null};this.logEvent("بدء فرصة السرقة",team(s.steal.team).name+" — محاولة واحدة فقط");}break;
   case "steal": if(s.phase!=="steal")throw Error("محاولة السرقة غير متاحة");if(s.steal?.attempted)throw Error("تم استخدام فرصة السرقة بالفعل");{const expected=s.activeTeam==="A"?"B":"A";if(a.team!==expected)throw Error("السرقة متاحة للفريق المنافس فقط");team(a.team);const index=findAnswer(q(),a.answer);const attempted=index>=0?q().answers[index]:null;const success=!!attempted&&!s.revealed.includes(index);s.steal={team:a.team,attempted:true,success,answer:success?attempted.text:String(a.answer||"")};if(success){s.revealed.push(index);s.bank+=Number(attempted.points)||0;this.logEvent("نجاح السرقة",team(a.team).name+" — "+attempted.text);}else{this.logEvent("فشل السرقة",team(a.team).name+" — انتقال رصيد البنك للفريق الأصلي");}this.finishRound(success?a.team:s.activeTeam,success?"steal-success":"steal-failed",{stealTeam:a.team,stealAnswer:s.steal.answer});}break;
   case "awardBank": if(s.phase!=="playing"||!s.activeTeam)throw Error("لا يوجد فريق نشط لإنهاء الجولة");this.finishRound(s.activeTeam,"host-ended");break;
   case "addPoints":{if(["faceoff","choice","playing","steal"].includes(s.phase))throw Error("لا يمكن تعديل رصيد الفرق قبل انتهاء الجولة");const n=Number(a.points);if(!Number.isInteger(n)||n<=0||n>100000)throw Error("أدخل عدد نقاط صحيحًا أكبر من صفر");team(a.team).score+=n;this.logEvent("إضافة نقاط يدوية",team(a.team).name+" +"+n);break;}
   case "deductPoints":{if(["faceoff","choice","playing","steal"].includes(s.phase))throw Error("لا يمكن تعديل رصيد الفرق قبل انتهاء الجولة");const n=Number(a.points);if(!Number.isInteger(n)||n<=0||n>100000)throw Error("أدخل عدد نقاط صحيحًا أكبر من صفر");team(a.team).score=Math.max(0,team(a.team).score-n);this.logEvent("خصم نقاط",team(a.team).name+" -"+n);break;}
   case "adjustScore":{if(["faceoff","choice","playing","steal"].includes(s.phase))throw Error("لا يمكن تعديل رصيد الفرق قبل انتهاء الجولة");const n=Number(a.score);if(!Number.isInteger(n)||n<0||n>1000000)throw Error("النتيجة غير صالحة");team(a.team).score=n;this.logEvent("تعديل النتيجة",team(a.team).name+" = "+n);break;}
   case "timer": if(a.action==="start"){s.timer.running=true;this.state.storage.setAlarm(Date.now()+1000);}else if(a.action==="pause"){s.timer.running=false;this.state.storage.deleteAlarm();}else if(a.action==="reset"){s.timer.running=false;s.timer.remaining=s.timer.duration;this.state.storage.deleteAlarm();}else throw Error("أمر مؤقت غير صالح");this.logEvent("تحديث المؤقت",a.action);break;
   case "skip": if(["setup","roundEnd","finished"].includes(s.phase))throw Error("لا يوجد سؤال نشط لتخطيه");if(s.phase==="steal")throw Error("يجب حسم فرصة السرقة قبل إنهاء الجولة");s.roundResult={round:s.round,bank:s.bank,multiplier:s.multiplier,awarded:0,winner:null,reason:"skipped"};s.roundHistory.push({...s.roundResult});s.bank=0;s.phase="roundEnd";s.status="roundEnd";s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("تخطي السؤال","لم تُحتسب نقاط البنك");break;
   case "next": if(s.phase!=="roundEnd")throw Error("يجب إنهاء الجولة الحالية أولًا");s.round++;s.multiplier=Number(a.multiplier)||s.roundMultipliers[s.round-1]||1;s.currentQuestion=null;s.roundResult=null;s.steal={team:null,attempted:false,success:null,answer:null};s.phase="setup";s.status="playing";s.activeTeam=null;s.revealed=[];s.strikes=0;s.bank=0;s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("الانتقال للسؤال التالي","الجولة "+s.round+" — المضاعف ×"+s.multiplier);break;
   case "finishMatch": if(s.phase==="steal")throw Error("احسم محاولة السرقة أولًا قبل إنهاء المباراة");if(["faceoff","choice","playing"].includes(s.phase))this.finishRound(s.activeTeam,"match-ended");s.status="finished";s.phase="finished";s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("إنهاء المباراة");break;
   case "restartQuestion": if(!s.currentQuestion)throw Error("لا يوجد سؤال لإعادته");s.revealed=[];s.strikes=0;s.bank=0;s.roundResult=null;s.steal={team:null,attempted:false,success:null,answer:null};s.phase="faceoff";s.status="playing";s.activeTeam=null;s.faceoff={firstBuzz:null,answers:{A:null,B:null},winner:null,choice:null};this.logEvent("إعادة السؤال");break;
   default: throw Error("عملية غير مدعومة");
  }
 }
 finishRound(teamId,reason="completed",details={}){const s=this.data;if(s.phase==="roundEnd")return;const bank=Number(s.bank)||0;const multiplier=Number(s.multiplier)||1;const award=bank*multiplier;if(teamId){const t=s.teams.find(x=>x.id===teamId);if(t)t.score+=award;}s.roundResult={round:s.round,bank,multiplier,awarded:award,winner:teamId,reason,...details};s.roundHistory.push({round:s.round,bank,multiplier,awarded:award,winner:teamId,reason});s.bank=0;s.phase="roundEnd";s.status="roundEnd";s.timer.running=false;this.state.storage.deleteAlarm();this.logEvent("انتهاء الجولة",teamId?"تم اعتماد "+award+" نقطة للفريق الفائز (×"+multiplier+")":"انتهت الجولة دون نقاط");}
 async alarm(){await this.ready;if(!this.data?.timer?.running)return;this.data.timer.remaining=Math.max(0,this.data.timer.remaining-1);if(this.data.timer.remaining===0){this.data.timer.running=false;this.logEvent("انتهاء الوقت");}else{await this.state.storage.setAlarm(Date.now()+1000);}await this.persist();this.broadcast();}
 onMessage(ws,raw,isHost){
  if(!isHost){try{ws.send(JSON.stringify({type:"error",error:"وضع العرض فقط"}))}catch{}return}
  try{const a=JSON.parse(raw);this.apply(a);this.persist().then(()=>this.broadcast()).catch(()=>{});}
  catch(e){try{ws.send(JSON.stringify({type:"error",error:e.message}))}catch{}}
 }
}
