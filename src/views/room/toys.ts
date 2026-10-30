/* eslint-disable */
// @ts-nocheck
import { $, el } from '../shared/helpers';

export function createToys(rt){
const {st,track,reduce,listen}=rt;
const hots=$('hots'),tip=$('tip');
/* ============ small toys: every decorative object wiggles, hops or rocks when clicked ============ */
const fxl=el('g',{'pointer-events':'none'});$('dark').parentNode.insertBefore(fxl,$('dark'));
const WIG=[{transform:'rotate(0)'},{transform:'rotate(-7deg)'},{transform:'rotate(6deg)'},{transform:'rotate(-3deg)'},{transform:'rotate(0)'}];
const HOP=[{transform:'translateY(0) scale(1,1)'},{transform:'translateY(0) scale(1.07,.88)',offset:.2},{transform:'translateY(-10px) scale(.96,1.06)',offset:.5},{transform:'translateY(0) scale(1.05,.93)',offset:.78},{transform:'translateY(0) scale(1,1)'}];
const ROCK=[{transform:'rotate(0)'},{transform:'rotate(-9deg)'},{transform:'rotate(8deg)'},{transform:'rotate(-5deg)'},{transform:'rotate(0)'}];
const BOUNCE=[{transform:'scale(1,1)'},{transform:'scale(1.03,.88)',offset:.3},{transform:'scale(.99,1.07)',offset:.6},{transform:'scale(1,1)'}];
const MOVES={wig:[WIG,650],hop:[HOP,550],rock:[ROCK,800],bounce:[BOUNCE,550]};
const TOYS=[
  {id:'plant',sel:'#plant',label:'Plant',fx:'wig',p:'petal'},
  {id:'sill',sel:'#sillThings',label:'Little plant',fx:'wig',p:'leaf',top:1},
  {id:'keyboard',sel:'#t_kb',label:'Keyboard',fx:'hop',p:'spark',top:1},
  {id:'ship',sel:'#t_ship',label:'Model ship',fx:'rock',p:'drop',top:1},
  {id:'lantern',sel:'#t_lantern',label:'Lantern',fx:'wig',p:'spark',top:1},
  {id:'conch',sel:'#t_conch',label:'Conch',fx:'wig',p:'bubble',top:1},
  {id:'kindle',sel:'#kindle',label:'Kindle',fx:'outside',p:'spark'},
  {id:'jar',sel:'#clayCorner > g:nth-of-type(1)',label:'Clay jar',fx:'wig',p:'puff'},
  {id:'bowl',sel:'#clayCorner > g:nth-of-type(2)',label:'Bowl of stones',fx:'wig',p:'spark'},
  {id:'frame',sel:'#t_frame',label:'Picture frame — take a closer look',fx:'photo',p:'spark',top:1},
  {id:'rug',sel:'#rug',label:'Rug',fx:'bounce',p:'puff',fixed:[212,606,728,696]},   // its group also holds the sun patch, so the box is set by hand
];
function burst(kind,x,y){
  if(reduce)return;
  for(let i=0;i<(kind==='spark'?6:5);i++){
    const a=Math.random()*Math.PI*2,d=14+Math.random()*22,dur=700+Math.random()*500;
    let n,to;
    if(kind==='spark'){n=el('path',{d:'M0-4Q.8-.8 4 0Q.8.8 0 4Q-.8.8-4 0Q-.8-.8 0-4Z',fill:'#ffe9a0'});to=`translate(${Math.cos(a)*d}px,${Math.sin(a)*d-6}px) rotate(90deg) scale(.2)`}
    else if(kind==='petal'||kind==='leaf'){n=el('ellipse',{rx:3,ry:1.6,fill:(kind==='petal'?['#f7b6cf','#ffd3e2','#fff']:['#79c47e','#4f9e62'])[i%(kind==='petal'?3:2)]});to=`translate(${(Math.random()-.5)*50}px,${28+Math.random()*22}px) rotate(${Math.random()*200}deg)`}
    else if(kind==='drop'){n=el('circle',{r:1.6,fill:'#bfe4ff'});to=`translate(${(Math.random()-.5)*34}px,${20+Math.random()*14}px)`}
    else if(kind==='bubble'){n=el('circle',{r:2+Math.random()*2,fill:'none',stroke:'#e8f4ff','stroke-width':.9});to=`translate(${(Math.random()-.5)*16}px,-${26+Math.random()*16}px)`}
    else{n=el('circle',{r:3,fill:'#f1ece0'});to=`translate(${(Math.random()-.5)*22}px,-${24+Math.random()*16}px) scale(2.2)`}
    n.setAttribute('transform',`translate(${x} ${y})`);fxl.appendChild(n);
    n.style.transformBox='view-box';n.style.transformOrigin='0 0';
    const an=n.animate([{opacity:.95,transform:'translate(0,0)'},{opacity:0,transform:to}],{duration:dur,easing:'ease-out'});an.onfinish=()=>n.remove()}
}
// the picture frame: a click lifts the photo off the wall to the middle of the screen; clicking the photo switches between before and after
const PHOTO=[{k:'Before',cap:'Asked the AI to fix one small bug.'},{k:'After',cap:'It fixed 14 files.'}];
const ph=$('photo'),card=$('photoCard');
let phLoaded=false,phBusy=false,phToy=null;
const loadPhoto=()=>{if(phLoaded)return;phLoaded=true;$('photoA').src='/photo-relieve.webp';$('photoB').src='/photo-sulky.webp'};
function paintPhoto(){const a=+st.photoAfter;$('photoA').style.opacity=1-a;$('photoB').style.opacity=a;$('phKey').textContent=PHOTO[a].k;$('phCap').textContent=PHOTO[a].cap}
function paintFrame(){$('frA').setAttribute('opacity',st.photoAfter?0:1);$('frB').setAttribute('opacity',st.photoAfter?1:0)}
function openPhoto(t){
  if(st.photoOpen||phBusy)return;phToy=t;loadPhoto();st.photoOpen=true;tip.classList.remove('on');
  track('room_toy_click',{object:t.id,action:'open'});
  paintPhoto();ph.classList.add('on');t.wrap.style.opacity=0;
  const r=t.rect.getBoundingClientRect(),c=card.getBoundingClientRect();
  requestAnimationFrame(()=>ph.classList.add('bg'));
  if(!reduce){phBusy=true;card.animate([{transform:`translate(${r.left-c.left}px,${r.top-c.top}px) scale(${r.width/c.width})`,opacity:.7},{transform:'none',opacity:1}],{duration:480,easing:'cubic-bezier(.2,.8,.2,1)'}).onfinish=()=>phBusy=false}
  card.focus({preventScroll:true});
}
function closePhoto(){
  const t=phToy;if(!st.photoOpen||phBusy||!t)return;phBusy=true;paintFrame();ph.classList.remove('bg');
  const done=()=>{card.getAnimations().forEach(a=>a.cancel());ph.classList.remove('on');t.wrap.style.opacity='';st.photoOpen=false;phBusy=false;t.rect.focus({preventScroll:true})};
  if(reduce)return done();
  const r=t.rect.getBoundingClientRect(),c=card.getBoundingClientRect();
  card.animate([{transform:'none',opacity:1},{transform:`translate(${r.left-c.left}px,${r.top-c.top}px) scale(${r.width/c.width})`,opacity:.7}],{duration:380,easing:'cubic-bezier(.5,0,.8,.4)',fill:'forwards'}).onfinish=done;
}
function flipPhoto(){
  if(phBusy)return;st.photoAfter=!st.photoAfter;track('room_toy_click',{object:'frame',action:'flip',state:st.photoAfter?'after':'before'});
  paintPhoto();
}
card.addEventListener('click',e=>{e.stopPropagation();flipPhoto()});
card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();flipPhoto()}});
ph.addEventListener('click',e=>{if(!card.contains(e.target))closePhoto()});
listen('keydown',e=>{if(e.key==='Escape')closePhoto()});
let toyNodes=[];
TOYS.forEach(t=>{t.node=document.querySelector(t.sel)});
TOYS.forEach(t=>{
  if(!t.node)return;
  const w=el('g',{class:'toyw'});t.node.parentNode.insertBefore(w,t.node);w.appendChild(t.node);w.style.transformBox='fill-box';w.style.transformOrigin='50% 100%';t.wrap=w;
  const r=el('rect',{rx:8,class:'hot',tabindex:0,role:'button','aria-label':t.label});t.rect=r;
  t.top?hots.appendChild(r):hots.insertBefore(r,hots.firstChild);
  const on=e=>{tip.textContent=t.label;tip.classList.add('on');if(e&&e.clientX!==undefined){tip.style.left=e.clientX+'px';tip.style.top=e.clientY+'px'}else{const b=r.getBoundingClientRect();tip.style.left=b.left+b.width/2+'px';tip.style.top=b.top+'px'}};
  const off=()=>tip.classList.remove('on');
  if(t.fx==='photo'){['pointerenter','focus','touchstart'].forEach(ev=>r.addEventListener(ev,loadPhoto,{once:true,passive:true}))}
  r.addEventListener('mouseenter',on);r.addEventListener('mousemove',on);r.addEventListener('focus',()=>on());r.addEventListener('mouseleave',off);r.addEventListener('blur',off);
  const act=()=>{if(st.dragMoved)return;if(t.fx==='photo'){openPhoto(t);return}off();track('room_toy_click',{object:t.id});
    if(t.fx==='outside'){rt.api.outside.open(t);return}
    if(!reduce){const[kf,ms]=MOVES[t.fx];t.wrap.animate(kf,{duration:ms,easing:'ease-in-out'})}
    const b=t.box;if(b)burst(t.p,(b[0]+b[2])/2,b[1]+(b[3]-b[1])*.25)};
  r.addEventListener('click',act);r.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act()}});
  toyNodes.push(t);
});
// hot areas follow the drawn objects (the plant changes with the season, so this also runs after every date change)
function placeToys(){
  toyNodes.forEach(t=>{
    const n=t.wrap;let b,m;if(!t.fixed){b=n.getBBox();m=$('scene').getScreenCTM().inverse().multiply(n.getScreenCTM());if(!b.width&&!b.height)return}   // scene units: undo the viewBox mapping that getCTM would include
    const xs=[],ys=[];if(!t.fixed)[[b.x,b.y],[b.x+b.width,b.y],[b.x,b.y+b.height],[b.x+b.width,b.y+b.height]].forEach(([x,y])=>{xs.push(m.a*x+m.c*y+m.e);ys.push(m.b*x+m.d*y+m.f)});
    const[x0,y0,x1,y1]=t.fixed||[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)],P=t.fixed?0:6;t.box=[x0,y0,x1,y1];
    t.rect.setAttribute('x',x0-P);t.rect.setAttribute('y',y0-P);t.rect.setAttribute('width',Math.max(24,x1-x0+2*P));t.rect.setAttribute('height',Math.max(24,y1-y0+2*P))})
}
return {place:placeToys};
}
