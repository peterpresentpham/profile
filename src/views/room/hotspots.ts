/* eslint-disable */
// @ts-nocheck
import { $, el } from '../shared/helpers';

// One focusable hot area per drawer or switch; `activate(id)` decides what a click does.
export function buildHotspots(rt,activate){
const {st,SPOTS}=rt;
/* hotspots */
const hots=$('hots'),tip=$('tip');
Object.entries(SPOTS).forEach(([id,s])=>{
  const r=el('rect',{x:s.x,y:s.y,width:s.w,height:s.h,rx:12,class:'hot',tabindex:0,role:'button','aria-label':s.label},hots);
  const grp=document.querySelector(`[data-obj="${id}"]`);
  const on=e=>{grp&&grp.classList.add('hov');tip.textContent=s.label;tip.classList.add('on');if(e&&e.clientX!==undefined){tip.style.left=e.clientX+'px';tip.style.top=e.clientY+'px'}else{const b=r.getBoundingClientRect();tip.style.left=b.left+b.width/2+'px';tip.style.top=b.top+'px'}};
  const off=()=>{grp&&grp.classList.remove('hov');tip.classList.remove('on')};
  r.addEventListener('mouseenter',on);r.addEventListener('mousemove',on);r.addEventListener('focus',()=>on());r.addEventListener('mouseleave',off);r.addEventListener('blur',off);
  const act=()=>{if(st.dragMoved)return;off();activate(id)};
  r.addEventListener('click',act);r.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act()}});
  s.node=r;
});
}
