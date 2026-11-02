/* eslint-disable */
import { $, el, nowHours } from '../shared/helpers';
import { WEATHER } from '../shared/world';
import { ABOUT } from './content';
import { SCENES } from './scenes';
import type { Rt } from '../shared/types';

// Drawers, the welcome card, the time controls and what a click on each hot area does.
export function createUI(rt:Rt){
const {st,SPOTS,track,listen,timers}=rt;
function toggleLamp(){st.lampOverride=!st.lampOn;rt.api.time.apply();rt.api.cat.peek()}
function toggleCeil(){st.ceilOverride=!st.ceilOn;rt.api.time.apply();rt.api.cat.peek()}
function activate(id:string){const s=SPOTS[id];if(s.lamp){track('room_lamp_toggle',{lamp:'desk'});return toggleLamp()}if(s.ceil){track('room_lamp_toggle',{lamp:'ceiling'});return toggleCeil()}if(s.game)return rt.api.game.jump();if(s.cat)return rt.api.cat.pet();if(s.music)return rt.api.music.toggle();track('room_object_open',{object:id});st.curObj=id;openPanel(id==='notebook'?ABOUT(false):s.html??'')}
const panel=$('panel');
// each drawer sits on its own small animated scene (scenes.ts), pinned to the bottom edge and faded out towards the top
function buildPanelBg(k:string){
  const g=$('pbg');g.replaceChildren();const scene=(SCENES as Record<string,(()=>string)|undefined>)[k];if(!scene)return;
  const W=panel.clientWidth||440,H=panel.clientHeight||800,h=Math.min(W*360/440,H*.75),svg=el<SVGSVGElement>('svg',{viewBox:'0 0 440 360',preserveAspectRatio:'xMidYMax slice',width:W,height:h},g);
  svg.style.top=(H-h-26)+'px';svg.innerHTML=scene()
}
function openPanel(html:string){panel.dataset.k=st.curObj;buildPanelBg(st.curObj);$('pbody').innerHTML=html;panel.scrollTop=0;panel.removeAttribute('inert');panel.classList.add('open');$('close').focus({preventScroll:true})}
const closePanel=()=>{
  if(!panel.classList.contains('open'))return;
  track('room_object_close',{object:st.curObj});
  const had=panel.contains(document.activeElement);
  panel.classList.remove('open');panel.setAttribute('inert','');   // off screen but not off the Tab order, so inert while closed
  if(had)SPOTS[st.curObj]?.node?.focus({preventScroll:true});
};
$('close').onclick=closePanel;listen('keydown',e=>{if(e.key==='Escape')closePanel();if((e.key==='ArrowUp'||e.key===' ')&&!panel.classList.contains('open')&&!st.photoOpen&&!st.outsideOpen&&(rt.api.game.idle()<6||document.activeElement===SPOTS.game.node)){e.preventDefault();rt.api.game.jump()}});
// what a screen reader hears when something changes without moving the focus (a day button only changes the picture)
const live=$('live');
function say(msg:string){live.textContent='';timers.push(setTimeout(()=>{live.textContent=msg},60))}
const sayDay=(pre='')=>say(pre+st.curDate.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})+': '+WEATHER[st.cfg.weather].toLowerCase()+', '+st.cfg.season);
function showWelcome(){
  $('wbody').innerHTML=ABOUT(true);$('enter').onclick=hideWelcome;
  // names only show on hover, which touch screens do not have: say what to do instead
  if(rt.lite)$('enter').parentElement!.insertAdjacentHTML('beforebegin','<p class="tap"><b class="w">Tap</b> anything that looks interesting: the lamp, the cat, the Kindle on the floor, the window.</p>')}
function hideWelcome(){
  if(!$('welcome').classList.contains('gone')){
    track('room_welcome_enter');
    if(rt.lite){const h=$('hots');h.classList.add('peek');timers.push(setTimeout(()=>h.classList.remove('peek'),2600))}   // show once what can be tapped
  }
  $('welcome').classList.add('gone');try{localStorage.setItem('introSeen2d','1')}catch(e){}}
$('welcome').addEventListener('click',e=>{if(e.target===$('welcome'))hideWelcome()});
const slider=$<HTMLInputElement>('slider'),dateIn=$<HTMLInputElement>('dateIn');
slider.addEventListener('input',()=>{st.auto=false;$('nowBtn').classList.remove('on');st.t=+slider.value;st.lampOverride=null;st.ceilOverride=null;rt.api.time.apply()});
$('nowBtn').onclick=()=>{st.auto=true;$('nowBtn').classList.add('on');st.lampOverride=null;st.t=nowHours();slider.value=String(st.t);st.ceilOverride=null;rt.api.time.setDate(new Date());sayDay('Now: ')};
const shiftDay=(n:number)=>{const d=new Date(st.curDate);d.setDate(d.getDate()+n);$('nowBtn').classList.remove('on');rt.api.time.setDate(d);sayDay()};
$('dPrev').onclick=()=>shiftDay(-1);$('dNext').onclick=()=>shiftDay(1);
dateIn.addEventListener('change',()=>{if(!dateIn.value)return;const[y,m,d]=dateIn.value.split('-').map(Number);$('nowBtn').classList.remove('on');rt.api.time.setDate(new Date(y,m-1,d));sayDay()});
timers.push(setInterval(()=>{if(st.auto){st.t=nowHours();slider.value=String(st.t);rt.api.time.apply()}},20000));
return {say,activate,close:closePanel,isOpen:()=>panel.classList.contains('open'),showWelcome};
}
