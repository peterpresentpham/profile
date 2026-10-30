/* eslint-disable */
// @ts-nocheck
import { $, ss } from '../shared/helpers';

// Per-frame motion of the outside view (clouds, visitors, boat, UFO) and the mouse parallax.
export function createAnim(rt){
const {st}=rt;
function moveClouds(dt){
  (st.V.clouds||[]).forEach(g=>{let x=+g.dataset.x+(+g.dataset.sp)*dt;if(x>540)x=-60;if(x<-60)x=540;g.dataset.x=x;g.setAttribute('transform',`translate(${x},${g.dataset.y})`)});
  const c=st.cfg;if(st.V.g){
    if(st.V.kind==='balloon'){st.V.vx+=3.6*c.wind*dt;if(Math.abs(st.V.vx-240)>340)st.V.vx=c.wind>0?-60:540;st.V.g.setAttribute('transform',`translate(${st.V.vx},${st.V.vy+Math.sin(performance.now()/1500)*3}) `)}
    else if(st.V.kind==='birds'){st.V.vx+=14*c.wind*dt;if(Math.abs(st.V.vx-240)>340)st.V.vx=c.wind>0?-120:600;st.V.g.setAttribute('transform',`translate(${st.V.vx},${st.V.vy})`)}
    else if(st.V.kind==='kite'){st.V.g.setAttribute('transform',`translate(${st.V.vx},${st.V.vy+Math.sin(performance.now()/900)*5}) rotate(${Math.sin(performance.now()/700)*8})`)}
    else if(st.V.kind==='plane'){st.V.vx+=34*c.wind*dt;if(Math.abs(st.V.vx-240)>380)st.V.vx=c.wind>0?-100:580;st.V.g.setAttribute('transform',`translate(${st.V.vx},${st.V.vy}) scale(${c.wind>0?1:-1},1)`)}}
  if(st.V.ufo){
    const T=60,D=16,t=(((performance.now()/1000-st.V.ufoT0)%T)+T)%T;
    if(t>D)st.V.ufo.setAttribute('opacity',0);
    else{
      const p=t/D,u=p<.4?ss(0,.4,p)*.5:p<.62?.5+Math.sin((p-.4)*40)*.004:.5+Math.pow(ss(.62,.8,p),2)*.5;
      const x=c.wind>0?-50+u*580:530-u*580,y=34+Math.sin(p*9)*5+(p>.4&&p<.62?Math.sin((p-.4)*60)*1.5:0);
      st.V.ufo.setAttribute('opacity',1);st.V.ufo.setAttribute('transform',`translate(${x.toFixed(1)},${y.toFixed(1)}) rotate(${(Math.sin(p*12)*4).toFixed(1)})`);
      st.V.ufoBeam.setAttribute('opacity',ss(.42,.47,p)*(1-ss(.58,.62,p)));
    }
  }
  if(st.V.boat){const x=st.V.bx+Math.sin(performance.now()/9000)*18;st.V.boat.setAttribute('transform',`translate(${x},${246+Math.sin(performance.now()/900)*1.3})`)}
}
const mouse={x:0,y:0},par={x:0,y:0};
function parallax(){if(Math.abs(mouse.x-par.x)<.0004&&Math.abs(mouse.y-par.y)<.0004)return;par.x+=(mouse.x-par.x)*.06;par.y+=(mouse.y-par.y)*.06;
  [['Lsky',3],['Lfar',6],['Lmid',10],['Lvis',9],['Llake',12],['Lnear',17],['Lweather',17],['Lfg',30]].forEach(([id,f])=>$(id).setAttribute('transform',`translate(${(-par.x*f).toFixed(2)},${(-par.y*f*.4).toFixed(2)})`))}
return {moveClouds,parallax,mouse};
}
