/* eslint-disable */
// @ts-nocheck
import { $, el, nowHours } from '../shared/helpers';
import { ABOUT } from './content';
import { SCENES } from './scenes';

// Drawers, the welcome card, the time controls and what a click on each hot area does.
export function createUI(rt){
const {st,SPOTS,track,listen,timers}=rt;
function toggleLamp(){st.lampOverride=!st.lampOn;rt.api.time.apply();rt.api.cat.peek()}
function toggleCeil(){st.ceilOverride=!st.ceilOn;rt.api.time.apply();rt.api.cat.peek()}
function activate(id){const s=SPOTS[id];if(s.lamp){track('room_lamp_toggle',{lamp:'desk'});return toggleLamp()}if(s.ceil){track('room_lamp_toggle',{lamp:'ceiling'});return toggleCeil()}if(s.game)return rt.api.game.jump();if(s.cat)return rt.api.cat.pet();if(s.music)return rt.api.music.toggle();track('room_object_open',{object:id});st.curObj=id;openPanel(id==='notebook'?ABOUT(false):s.html)}
const panel=$('panel');
// each drawer sits on its own small animated scene (scenes.ts), pinned to the bottom edge and faded out towards the top
function buildPanelBg(k){
  const g=$('pbg');g.replaceChildren();const scene=SCENES[k];if(!scene)return;
  const W=panel.clientWidth||440,H=panel.clientHeight||800,h=Math.min(W*360/440,H*.75),svg=el('svg',{viewBox:'0 0 440 360',preserveAspectRatio:'xMidYMax slice',width:W,height:h},g);
  svg.style.top=(H-h-26)+'px';svg.innerHTML=scene()
}
function openPanel(html){panel.dataset.k=st.curObj;buildPanelBg(st.curObj);$('pbody').innerHTML=html;panel.scrollTop=0;panel.classList.add('open')}
const closePanel=()=>{if(panel.classList.contains('open'))track('room_object_close',{object:st.curObj});panel.classList.remove('open')};
$('close').onclick=closePanel;listen('keydown',e=>{if(e.key==='Escape')closePanel();if((e.key==='ArrowUp'||e.key===' ')&&!panel.classList.contains('open')&&!st.photoOpen&&!st.outsideOpen&&(rt.api.game.idle()<6||document.activeElement===SPOTS.game.node)){e.preventDefault();rt.api.game.jump()}});
function showWelcome(){$('wbody').innerHTML=ABOUT(true);$('enter').onclick=hideWelcome}
function hideWelcome(){if(!$('welcome').classList.contains('gone'))track('room_welcome_enter');$('welcome').classList.add('gone');try{localStorage.setItem('introSeen2d','1')}catch(e){}}
$('welcome').addEventListener('click',e=>{if(e.target===$('welcome'))hideWelcome()});
$('slider').addEventListener('input',e=>{st.auto=false;$('nowBtn').classList.remove('on');st.t=+e.target.value;st.lampOverride=null;st.ceilOverride=null;rt.api.time.apply()});
$('nowBtn').onclick=()=>{st.auto=true;$('nowBtn').classList.add('on');st.lampOverride=null;st.t=nowHours();$('slider').value=st.t;st.ceilOverride=null;rt.api.time.setDate(new Date())};
const shiftDay=n=>{const d=new Date(st.curDate);d.setDate(d.getDate()+n);$('nowBtn').classList.remove('on');rt.api.time.setDate(d)};
$('dPrev').onclick=()=>shiftDay(-1);$('dNext').onclick=()=>shiftDay(1);
$('dateIn').addEventListener('change',e=>{if(!e.target.value)return;const[y,m,d]=e.target.value.split('-').map(Number);$('nowBtn').classList.remove('on');rt.api.time.setDate(new Date(y,m-1,d))});
timers.push(setInterval(()=>{if(st.auto){st.t=nowHours();$('slider').value=st.t;rt.api.time.apply()}},20000));
return {activate,close:closePanel,isOpen:()=>panel.classList.contains('open'),showWelcome};
}
