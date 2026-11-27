/* Ihyaa Feud host + team identity enhancements */
const ihyaaOriginalTeamCard=teamCard;
teamCard=function(t){
 const color=t.id==="A"?"red":"blue";
 const active=state.activeTeam===t.id;
 const buzz=state.phase==="faceoff"&&state.faceoff?.firstBuzz===t.id;
 return '<div class="team-card team-'+color+(active?' active':'')+(buzz?' is-buzzing':'')+'"><div class="team-name">'+esc(t.name)+'</div><div class="score">'+t.score+'</div><div class="small">'+(t.players||[]).map(esc).join(" • ")+'</div><div class="team-turn-pill '+color+'">'+(buzz?'ضغط الجرس أولًا':active?'دور الفريق الآن':color==="red"?"الفريق الأحمر":"الفريق الأزرق")+'</div></div>';
};
const ihyaaOriginalRenderHost=renderHost;
renderHost=function(){
 ihyaaOriginalRenderHost();
 const layout=app.querySelector(".host-layout");
 if(!layout)return;
 const mainPanel=layout.querySelector(":scope > section.panel");
 const stack=mainPanel?.querySelector(".control-stack");
 if(stack){
  const q=state.currentQuestion;
  const rows=q?q.answers.map((a,i)=>{
   const shown=state.revealed.includes(i);
   const action=shown?"hide":"reveal";
   const label=shown?"إخفاء":"كشف";
   const allowed=state.phase==="playing";
   return '<div class="host-answer-row"><div class="host-answer-copy"><b>'+String(i+1).padStart(2,"0")+'. '+esc(a.text)+'</b><small>'+Number(a.points||0)+' نقطة'+(shown?' · مكشوفة':' · مخفية')+'</small></div>'+(allowed?'<button class="'+(shown?'hide':'reveal')+'" data-host-answer="'+action+'" data-answer-index="'+i+'">'+label+'</button>':'<span class="small">للهوست</span>')+'</div>';
  }).join(""):'<div class="host-answer-empty">ابدأ سؤالًا لعرض الإجابات السرية هنا.</div>';
  const active=state.teams.find(t=>t.id===state.activeTeam);
  stack.insertAdjacentHTML("afterbegin",'<section class="host-answer-panel"><div class="host-answer-heading"><strong>لوحة الإجابات السرية — للهوست فقط</strong><span class="badge">'+(q?q.answers.length-state.revealed.length+' متبقية':'بانتظار السؤال')+'</span></div><div class="host-round-meta"><span>رصيد السؤال: '+Number(state.bank||0)+'</span><span>مضاعف الجولة: ×'+Number(state.multiplier||1)+'</span>'+(active?'<span class="team-turn-pill '+(active.id==="A"?"red":"blue")+'">الدور: '+esc(active.name)+'</span>':'')+'</div><div class="host-answer-list">'+rows+'</div></section>');
 }
 const aside=layout.querySelector(":scope > aside");
 if(aside){
  aside.insertAdjacentHTML("afterbegin",'<section class="panel ihyaa-multiplier-panel"><div class="section-title"><h3>مضاعف الجولة</h3><span class="badge">×'+Number(state.multiplier||1)+'</span></div><div class="field"><label>اختيار المضاعف</label><select id="ihyaaMultiplier"><option value="1" '+(state.multiplier===1?'selected':'')+'>×1 — عادي</option><option value="2" '+(state.multiplier===2?'selected':'')+'>×2 — مضاعف</option><option value="3" '+(state.multiplier===3?'selected':'')+'>×3 — نهائي</option></select></div><button class="btn secondary" data-host-multiplier style="margin-top:10px;width:100%">تطبيق المضاعف</button></section>');
 }
};
app.addEventListener("click",e=>{
 const answer=e.target.closest("[data-host-answer]");
 if(answer){const i=Number(answer.dataset.answerIndex);act(answer.dataset.hostAnswer==="hide"?"hideAnswer":"reveal",{answerIndex:i});return;}
 if(e.target.closest("[data-host-multiplier]")){act("setMultiplier",{multiplier:Number($("#ihyaaMultiplier").value)});}
});
