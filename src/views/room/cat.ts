/* eslint-disable */
import { $ } from '../shared/helpers';
import type { Rt } from '../shared/types';

export function createCat(rt:Rt){
const {SPOTS,track,reduce}=rt;
/* cat: idle behaviours, naps in the window light, peeks at the lamps, purrs when clicked */
type Timer=ReturnType<typeof setTimeout>|undefined;
let catX=0,catTarget=0,catTimer:Timer,awakeT:Timer;
const cat=$<SVGGElement>('cat');
const flash=(c:string,ms:number)=>{cat.classList.remove(c);void cat.getBoundingClientRect();cat.classList.add(c);setTimeout(()=>cat.classList.remove(c),ms)};
const wake=(ms:number,look=0)=>{cat.classList.add('awake');$('catPupils').setAttribute('transform',`translate(${look} 0)`);clearTimeout(awakeT);awakeT=setTimeout(()=>cat.classList.remove('awake'),ms)};
function catIdle(){
  catTimer=setTimeout(catIdle,5000+Math.random()*8000);
  if(cat.classList.contains('walk'))return;
  const p=Math.random();
  if(p<.3)flash(Math.random()<.5?'twitch':'twitchL',500);
  else if(p<.55)flash('wag',1600);
  else if(p<.75)wake(2600,-1.4);
  else{wake(2400,-1);flash('yawn',1600);flash('stretch',2000)}
}
function setCatTarget(x:number){if(Math.abs(x-catTarget)>24||(x===0&&catTarget!==0))catTarget=x;if(reduce)placeCat(catTarget)}
function placeCat(x:number){catX=x;cat.setAttribute('transform',`translate(${x.toFixed(2)} 0)`);SPOTS.cat.node?.setAttribute('x',String(SPOTS.cat.x+x))}
function moveCat(dt:number){
  const dx=catTarget-catX;
  if(Math.abs(dx)<.4){cat.classList.remove('walk');return}
  cat.classList.add('walk');wake(700,Math.sign(dx)*1.4);placeCat(catX+Math.sign(dx)*Math.min(Math.abs(dx),22*dt));
}
function catPeek(){wake(1800,1.4);flash('twitch',500)}
function petCat(){
  track('room_cat_pet');wake(2200);flash('stretch',2000);flash('wag',1600);
  const h=$('catHeart');h.classList.remove('on');void h.getBoundingClientRect();h.classList.add('on');
}
return {setTarget:setCatTarget,move:moveCat,peek:catPeek,pet:petCat,start(){if(!reduce)catTimer=setTimeout(catIdle,3000)},dispose(){clearTimeout(catTimer);clearTimeout(awakeT)}};
}
