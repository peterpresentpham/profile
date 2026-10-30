/* eslint-disable */
// @ts-nocheck
import { $, clamp, lerp, ss, mix, pad } from '../shared/helpers';
import { dayCfg, moonPhase, skyAt, phaseName } from '../shared/world';
import { buildView, drawMoon } from './view';

// Time of day: sky colours, light shaft, lamps, the dark overlay, the glow stickers and the wall clock.
export function createTime(rt){
const {st,SPOTS,reduce}=rt;
function tint(hex,k){const {d,g,dim,hor}=st.S_;let c=mix(hex,hor,k*.55*(dim<1?1.3:1));c=mix(c,'#101a36',(1-d)*(.42+.28*(1-k)));c=mix(c,'#ff8a50',g*.2*(1-k*.5));return mix(c,'#8a93a3',(1-dim)*.45)}
function applyTime(){
  const d=clamp(ss(5.5,8.5,st.t)-ss(17.5,20.5,st.t));st.dark=1-d;const wx=st.cfg.weather,dim=wx==='overcast'||wx==='rain'||wx==='snow'?.55:wx==='fog'?.6:1;
  const g=Math.exp(-Math.pow((st.t-6.8)/.9,2))+Math.exp(-Math.pow((st.t-18.3)/1,2)),illum=(1-Math.cos(st.phase*Math.PI*2))/2;
  const [s0,s1]=skyAt(st.t),top=mix(s0,'#8a93a3',(1-dim)*.8),hor=mix(s1,'#aab2bf',(1-dim)*.8);st.S_={d,g:clamp(g),dim,hor};st.GS={top,hor,d};
  $('sk0').setAttribute('stop-color',top);$('sk1').setAttribute('stop-color',hor);
  $('w0').setAttribute('stop-color',mix(mix(hor,'#9cc6e0',.4),'#0b1630',(1-d)*.7));$('w1').setAttribute('stop-color',mix('#2d6590','#050c1e',(1-d)*.85));
  document.querySelectorAll('.tn').forEach(e=>{const c=tint(e.dataset.c,+e.dataset.k);e.setAttribute('fill',c)});
  document.querySelectorAll('.lit').forEach(e=>e.style.opacity=(1-d)*.95);
  // sun & moon across the sky
  const sp=(st.t-6)/12,mp=((st.t+6)%24)/12;
  const pos=(p)=>`translate(${lerp(40,436,clamp(p,-.05,1.05))},${300-250*Math.sin(Math.PI*clamp(p,-.05,1.05))})`;
  st.V.sun.setAttribute('transform',pos(sp));st.V.moon.setAttribute('transform',pos(mp));
  const clear=wx==='clear'?1:wx==='partly'?.7:wx==='fog'?.25:.08;
  st.V.sun.style.opacity=(sp>-.05&&sp<1.05?1:0)*clear;st.V.moon.style.opacity=(d<.85?1:0)*clear;st.V.moon.style.transition=st.V.sun.style.transition='opacity .8s';
  drawMoon(st.phase,st.V);
  $('stars').style.opacity=Math.pow(1-d,1.4)*(wx==='clear'?1:wx==='partly'?.5:wx==='fog'?.2:0);
  const cc=mix(mix('#2a3050','#ffffff',d),'#8e97a6',(1-dim)*1.1);$('cloudsFar').style.opacity=$('cloudsNear').style.opacity=1;
  // fog
  $('fg0').setAttribute('stop-color',hor);$('fg1').setAttribute('stop-color',hor);$('fogRect').style.opacity=wx==='fog'?.78:wx==='rain'||wx==='snow'?.22:wx==='overcast'?.12:0;
  if(st.V.aur)st.V.aur.setAttribute('opacity',Math.pow(1-d,2));
  if(st.V.ufoGlow)st.V.ufoGlow.setAttribute('opacity',Math.pow(1-d,1.4));
  // light shaft through the window
  const moonUp=d<.5,pp=moonUp?mp:sp,sl=clamp(wx==='clear'?1:wx==='partly'?.7:.12)*(moonUp?.18*illum:d)*smooth(pp>0&&pp<1?Math.sin(Math.PI*pp)*3:0);
  const skewT=`translate(0,390) skewX(${lerp(30,-30,clamp(pp))}) translate(0,-390)`;$('shaftSkew').setAttribute('transform',skewT);$('rugSunSkew').setAttribute('transform',skewT);$('rugSun').style.opacity=sl*.55;$('floorSunSkew').setAttribute('transform',skewT);$('floorSun').style.opacity=sl*.45;
  rt.api.cat.setTarget(!moonUp&&sl>.3?clamp(432+Math.tan(lerp(30,-30,clamp(pp))*Math.PI/180)*260,344,614)-520:0);   // the cat naps in the patch of sun on the rug
  $('shaftG0').style.opacity=sl;$('plantShadow').style.opacity=sl*.3;$('shaftG0').style.color=moonUp?'#a9c4ff':'#fff';
  $('shaftG0').querySelectorAll('polygon').forEach(p=>p.setAttribute('fill',moonUp?'#9db8ff':'url(#shaftG)'));
  $('motes').style.opacity=sl*1.1;
  $('golden').style.opacity=clamp(g)*.5;
  // inside lights
  st.lampOn=st.lampOverride===null?(st.dark>.35&&st.t>12&&st.t<21):st.lampOverride;   // default: on when st.dark, off after 21:00
  $('dark').style.opacity=st.dark*.8;$('mLamp').style.opacity=st.lampOn?1:0;$('gLamp').style.opacity=st.lampOn?.4+st.dark*.5:0;$('lampMotes').style.opacity=st.lampOn?1:0;$('fpLamp').style.opacity=st.lampOn?.35+st.dark*.55:0;$('cone').style.opacity=st.lampOn?.3+st.dark*.7:0;$('bulb').style.opacity=st.lampOn?1:0;
  $('shade').setAttribute('fill',st.lampOn?'#ffd36b':'#e9b44c');
  $('gMon').style.opacity=.12+st.dark*.7;$('mMon').style.opacity=.5+st.dark*.3;$('mWin').style.opacity=(1-d)*.3*clear;
  $('zz').style.opacity=st.dark>.4?1:0;
  st.ceilOn=st.ceilOverride===null?(st.t>=18&&st.t<21):st.ceilOverride;   // default: on 18:00–21:00
  $('mCeil').style.opacity=st.ceilOn?1:0;$('fpCeil').style.opacity=st.ceilOn?.25+st.dark*.45:0;$('gCeil').style.opacity=st.ceilOn?.28+st.dark*.32:0;$('cCone').style.opacity=st.ceilOn?.08+st.dark*.1:0;
  const lit=st.lampOn||st.ceilOn;$('dark').style.opacity=st.dark*.8;const glowOp=st.dark*(st.ceilOn?0:st.lampOn?.5:1);$('glow').style.opacity=glowOp;const ffOp=lit?0:st.dark;$('fireflies').style.opacity=ffOp;$('fireflies').style.display=ffOp>.3?'':'none';$('glow').style.display=glowOp>.01?'':'none';$('dark').style.display=st.dark>.01?'':'none';if(!lit){$('gMon').style.opacity=.04+st.dark*.22;$('mMon').style.opacity=.3}$('mWash').style.opacity=$('gMon').style.opacity;   // all lights off: only the glow stickers light the room
  document.querySelectorAll('.cb').forEach(e=>e.style.opacity=st.ceilOn?1:0);document.querySelectorAll('.cf').forEach(e=>e.setAttribute('opacity',st.ceilOn?1:0));
  SPOTS.lamp.node.setAttribute('aria-pressed',st.lampOn);SPOTS.ceiling.node.setAttribute('aria-pressed',st.ceilOn);
  const H=Math.floor(st.t),M=(st.t-H)*60;
  drawClock();
  // page chrome
  document.body.style.background=mix('#05030c','#2a2142',d);
  $('tt').textContent=`${pad(H)}:${pad(Math.floor(M))}`;$('ph').textContent=phaseName(st.t);
  
  rt.api.anim.moveClouds(0);
}
const smooth=x=>ss(0,1,x);
function setDate(d){st.curDate=d;st.cfg=dayCfg(d);st.phase=moonPhase(d);$('dateIn').value=st.cfg.date;st.V=buildView(st.cfg);applyTime();rt.api.toys.place()}
/* wall clock: sweeping second hand; every so often it runs back one beat and returns to the right time ("just like yesterday") */
let rewind=null;
const handT={};
function drawClock(now=performance.now()){
  const d=new Date(),h=st.auto?d.getHours()+d.getMinutes()/60+(d.getSeconds()+d.getMilliseconds()/1000)/3600:st.t;
  let hA=(h%12)*30,mA=(h%1)*360,sA=((h*3600)%60)*6;
  if(!reduce){
    if(!rewind&&Math.random()<1/(60*90))rewind={t0:now};
    if(rewind){const p=(now-rewind.t0)/2600;if(p>=1)rewind=null;else{const k=Math.sin(Math.PI*p);sA-=k*72;mA-=k*6;hA-=k*.5}}
  }
  const rot=(id,a)=>{const v=`rotate(${a.toFixed(1)})`;if(handT[id]!==v){handT[id]=v;$(id).setAttribute('transform',v)}};
  rot('hHand',hA);rot('mHand',mA);rot('sHand',reduce?0:sA);rot('hLume',hA);rot('mLume',mA);rot('sLume',reduce?0:sA);
}
return {apply:applyTime,setDate,drawClock};
}
