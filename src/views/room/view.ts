/* eslint-disable */
// @ts-nocheck
// The outside view (ridges, village, trees, weather, visitors, sun and moon) and the season's plant and floor leaves.
import { $, el, rng, hash, lerp } from '../shared/helpers';
import { PAL, cloudPath } from '../shared/world';
import { rY, valleyLayout } from '../shared/valley';

const ridge=f=>{let d='M-50 340';for(let x=-50;x<=530;x+=6)d+=` L${x} ${f(x).toFixed(1)}`;return d+' L530 340Z'};
export function setupRidges(){
$('farRidge').setAttribute('d',ridge(rY.far));$('midRidge').setAttribute('d',ridge(rY.mid));$('nearRidge').setAttribute('d',ridge(rY.near));
}
// flowering pot plant: foliage, blooms and mood follow the season of the viewed day
export function buildPlant(season){
  const S={spring:{n:5,fl:3,bud:3,leaf:['#4f9e62','#79c47e'],pet:['#f7b6cf','#ffd3e2','#fff'],eye:'#ffc83a'},summer:{n:6,fl:6,bud:1,leaf:['#2f7a45','#4aa05a'],pet:['#fff','#fff','#ffe27a'],eye:'#ffb52e'},
    autumn:{n:5,fl:3,bud:1,leaf:['#a38a2f','#c9a53a'],pet:['#e08a2f','#c4452d','#e8b23a'],eye:'#6a3d1a'},winter:{n:4,fl:0,bud:2,leaf:['#3f7a5a','#57946f'],pet:[],eye:'#ffc83a'}}[season];
  ['plantLeaves','plantShadow'].forEach(id=>$(id).replaceChildren());
  const draw=(g,mono)=>{
    const r=rng(hash('plant'+season)),ink=(c)=>mono?'#000':c,BX=588,BY=574;
    const leaf=(x,y,ang,L,w,c1,c2)=>{const l=el('g',{transform:`translate(${x} ${y}) rotate(${ang})`},g);
      el('path',{d:`M0 0Q${w} ${-L*.5} 0 ${-L}Q${-w} ${-L*.5} 0 0Z`,fill:ink(c1)},l);
      if(!mono){el('path',{d:`M0 0Q${w} ${-L*.5} 0 ${-L}Z`,fill:c2},l);el('path',{d:`M0 -1L0 ${-L*.85}`,stroke:'#fff',opacity:.3,'stroke-width':.6},l)}};
    const heads=[];
    for(let i=0;i<S.n;i++){const t=S.n>1?i/(S.n-1):.5,a=(-52+104*t+(r()-.5)*10)*Math.PI/180,len=40+r()*22,bx=BX+(i-(S.n-1)/2)*4,
        hx=bx+Math.sin(a)*len,hy=BY-Math.cos(a)*len,cx=bx+Math.sin(a)*len*.2,cy=BY-Math.cos(a)*len*.65;
      el('path',{d:`M${bx} ${BY}Q${cx} ${cy} ${hx} ${hy}`,fill:'none',stroke:ink('#2f7a45'),'stroke-width':mono?2.4:1.8,'stroke-linecap':'round'},g);
      for(const u of season==='winter'?[.5]:[.4,.65]){const px=(1-u)*(1-u)*bx+2*u*(1-u)*cx+u*u*hx,py=(1-u)*(1-u)*BY+2*u*(1-u)*cy+u*u*hy,side=(i+u*10|0)%2?1:-1;
        leaf(px,py,Math.atan2(hx-bx,BY-hy)*180/Math.PI+side*(48+r()*14),13+r()*6,4.4,S.leaf[0],S.leaf[1])}
      heads.push([hx,hy])}
    for(let k=0;k<(season==='winter'?3:5);k++)leaf(BX+(k-2)*3,BY,-62+k*31+(r()-.5)*12,22+r()*10,6,S.leaf[0],S.leaf[1]);
    heads.forEach(([x,y],i)=>{
      if(i<S.fl){const c=S.pet[i%S.pet.length],s=.9+r()*.35,f=el('g',{transform:`translate(${x} ${y}) scale(${s}) rotate(${r()*45})`},g);
        for(let k=0;k<8;k++)el('ellipse',{cx:0,cy:-5,rx:2.3,ry:5,fill:ink(c),transform:`rotate(${k*45})`},f);
        if(!mono){for(let k=0;k<8;k++)el('path',{d:'M0 -2L0 -8',stroke:'#000',opacity:.1,'stroke-width':.5,transform:`rotate(${k*45})`},f)}
        el('circle',{r:2.7,fill:ink(S.eye)},f);}
      else if(i<S.fl+S.bud){const b=el('g',{transform:`translate(${x} ${y})`},g);el('ellipse',{cy:-2,rx:2.6,ry:3.8,fill:ink(season==='winter'?'#cfe0c0':'#e9eaa8')},b);el('path',{d:'M-2.6 0Q0 -3 2.6 0Q0 2 -2.6 0Z',fill:ink('#3f8a55')},b);}
      else leaf(x,y,(x-BX)*1.4,12,3.8,S.leaf[0],S.leaf[1])});
  };
  draw($('plantLeaves'),false);draw($('plantShadow'),true);
}
export function buildView(c){
  const vis=$('Lvis');
  buildPlant(c.season);buildFloorLeaves(c);
  const r=rng(hash('view'+c.date)),fr=rng(hash('valley-fixed')),P=PAL[c.season],V={};   // V: dynamic view state, returned to the caller
  ['cloudsFar','cloudsNear','precip','particles','village','trees','meadow','lakeFx','boat','branch','rare'].forEach(id=>$(id).replaceChildren());vis.replaceChildren();
  $('midRidge').dataset.c=P.mid;$('nearRidge').dataset.c=P.near;$('farRidge').dataset.c=c.season==='winter'?'#9fb0cc':'#7f8fb8';
  // far snow caps
  // village (fixed positions) and near hill trees (fixed placement; daily: some missing)
  const L=valleyLayout(c,r,fr);
  L.village.forEach(({x,y,w,h,i})=>{const g=el('g',{},$('village'));
    el('rect',{x:x-w/2,y:y-h,width:w,height:h,fill:'#e8d5b5',class:'tn',['data-c']:'#e8d5b5','data-k':'.5'},g);el('polygon',{points:`${x-w/2-1.5},${y-h} ${x},${y-h-7} ${x+w/2+1.5},${y-h}`,fill:'#a5483a',class:'tn','data-c':'#a5483a','data-k':'.5'},g);
    el('rect',{x:x-2,y:y-h+2.5,width:4,height:4,fill:'#ffd27a',class:'lit'},g);
    if((c.season==='winter'||c.season==='autumn'||c.weather==='rain'||c.weather==='fog')&&i%3===0){for(let k=0;k<3;k++){const s=el('circle',{cx:x+3,cy:y-h-8,r:3,fill:'#e8e8ee',class:'smk'},g);s.style.animationDelay=(-k*1.5)+'s'}}});
  L.trees.forEach(({x,y,s,col,pine})=>{
    const g=el('g',{},$('trees'));
    if(pine){el('polygon',{points:`${x-s*.32},${y} ${x},${y-s} ${x+s*.32},${y}`,class:'tn','data-c':col,'data-k':'.12',fill:col},g);el('polygon',{points:`${x-s*.26},${y-s*.35} ${x},${y-s*1.2} ${x+s*.26},${y-s*.35}`,class:'tn','data-c':col,'data-k':'.12',fill:col},g);
      if(c.season==='winter'||c.weather==='snow')el('polygon',{points:`${x-s*.12},${y-s*.9} ${x},${y-s*1.2} ${x+s*.12},${y-s*.9}`,fill:'#fff',opacity:.8},g)}
    else{el('rect',{x:x-1.2,y:y-s*.3,width:2.4,height:s*.3,fill:'#5e3d29',class:'tn','data-c':'#5e3d29','data-k':'.12'},g);el('ellipse',{cx:x,cy:y-s*.62,rx:s*.38,ry:s*.42,class:'tn','data-c':col,'data-k':'.12',fill:col},g)}});
  // meadow flowers — a different handful each day
  if(c.season==='spring'||c.season==='summer'){const n=10+Math.floor(r()*40),fc=['#ffffff','#ffd84a','#ff8ab0','#b58aff'];for(let i=0;i<n;i++){const fx=r()*476,fy=rY.near(fx)+10+r()*30;el('circle',{cx:fx,cy:Math.min(fy,290),r:1.3,fill:fc[Math.floor(r()*4)]},$('meadow'))}}
  // clouds
  const nC={clear:2,partly:7,overcast:13,rain:12,fog:4,snow:11}[c.weather];V.clouds=[];
  for(let i=0;i<nC;i++){const near=i%3===0,g=el('g',{class:'tn','data-c':['overcast','rain','snow'].includes(c.weather)?'#a4adbb':'#ffffff','data-k':near?'.15':'.45'},$(near?'cloudsNear':'cloudsFar')),s=(near?1.5:.9)+r()*.9,y=near?30+r()*70:14+r()*90;
    g.innerHTML=`<path d="${cloudPath(0,0,s)}" fill="currentColor"/>`;g.querySelector('path').setAttribute('fill','inherit');g.dataset.x=r()*560-40;g.dataset.y=y;g.dataset.sp=(2+r()*5)*c.wind;g.dataset.s=s;V.clouds.push(g)}
  // weather
  if(c.weather==='rain')for(let i=0;i<90;i++){const rx=r()*560-40,l=el('line',{x1:rx,y1:0,x2:rx-4,y2:12,stroke:'#cfe0f2','stroke-width':1.1,opacity:.55,class:'rd'},$('precip'));l.style.animationDelay=(-r()*.75)+'s'}
  if(c.weather==='snow')for(let i=0;i<70;i++){const s=el('circle',{cx:r()*520-20,cy:0,r:1.2+r()*1.4,fill:'#fff',class:'sn'},$('precip'));s.style.animationDelay=(-r()*7)+'s';s.style.animationDuration=(5+r()*5)+'s'}
  // seasonal particles
  if(P.par)for(let i=0;i<14;i++){const l=el('ellipse',{cx:r()*520,cy:0,rx:3,ry:1.7,fill:P.par,opacity:.9,class:'lf'},$('particles'));l.style.animationDelay=(-r()*9)+'s';l.style.animationDuration=(7+r()*6)+'s'}
  // foreground branch
  const bc=c.season==='winter'?'#4a3a30':'#3d2d22';el('path',{d:'M530 -10 C470 20 430 40 380 62 C420 52 450 62 470 90 M430 44 C410 20 390 20 372 28',stroke:bc,'stroke-width':7,'stroke-linecap':'round',fill:'none'},$('branch'));
  const lc=c.season==='winter'?null:c.season==='spring'?['#f7b6cf','#8cc070','#ffd3e2']:c.season==='autumn'?['#e08a2f','#c4452d','#e8b23a']:['#3f8f4a','#4aa05a','#2f7a45'];
  if(lc)for(let i=0;i<26;i++){const t=r(),px=lerp(520,372,t)+(r()-.5)*30,py=lerp(-6,62,Math.pow(t,1.1))+(r()-.5)*26;el('ellipse',{cx:px,cy:py,rx:8+r()*5,ry:5+r()*3,fill:lc[Math.floor(r()*3)],transform:`rotate(${r()*80-40} ${px} ${py})`,class:'tn','data-c':lc[Math.floor(r()*3)],'data-k':'0'},$('branch'))}
  else{[[470,40],[430,52],[395,66]].forEach(([px,py])=>el('ellipse',{cx:px,cy:py-4,rx:12,ry:3,fill:'#fff',opacity:.9},$('branch')))}
  // lake sparkle
  for(let i=0;i<14;i++)el('rect',{x:r()*470,y:210+r()*55,width:10+r()*22,height:1.2,fill:'#fff',opacity:.35,class:'star'},$('lakeFx')).style.animationDelay=(-r()*3)+'s';
  // boat
  if(c.boat){const g=el('g',{},$('boat'));el('path',{d:'M-14 0h28l-5 6h-18z',fill:'#6b4a35'},g);el('line',{x1:0,y1:0,x2:0,y2:-22,stroke:'#3a2d22','stroke-width':1.2},g);el('path',{d:'M1 -21L12 -4H1z',fill:'#f6f0e0'},g);el('path',{d:'M-1 -17L-9 -4H-1z',fill:'#eadfc4'},g);V.boat=g;V.bx=r()*200+140}
  // visitor
  V.kind=c.visitor;V.vx=c.wind>0?-60:540;
  if(c.visitor==='balloon'){const g=el('g',{},vis);el('ellipse',{cx:0,cy:0,rx:14,ry:17,fill:'#d9483a'},g);el('path',{d:'M-4 -16Q-14 0 -4 16M4 -16Q14 0 4 16',stroke:'#f3e4b8','stroke-width':3,fill:'none'},g);el('rect',{x:-4,y:22,width:8,height:6,fill:'#8a5a3a'},g);el('path',{d:'M-8 14L-3 22M8 14L3 22',stroke:'#3a2d22','stroke-width':.8},g);V.g=g;V.vy=60+r()*40}
  if(c.visitor==='birds'){const g=el('g',{},vis);for(let i=0;i<6;i++){const b=el('path',{d:'M-6 0Q-3 -5 0 0Q3 -5 6 0',stroke:'#1d1d2a','stroke-width':1.6,fill:'none',transform:`translate(${i*15+r()*6},${r()*14+(i%2)*6})`},g);b.style.transformOrigin='center';const tr=b.getAttribute('transform').replace(/translate\(([^,]+),([^)]+)\)/,'translate($1px,$2px)');b.animate([{transform:tr+' scaleY(1)'},{transform:tr+' scaleY(-.6)'}],{duration:500+r()*250,iterations:Infinity,direction:'alternate'})}V.g=g;V.vy=56+r()*30}
  if(c.visitor==='kite'){const g=el('g',{},vis);el('polygon',{points:'0,-14 9,0 0,14 -9,0',fill:'#e8574a'},g);el('path',{d:'M0 14q-8 14 2 26t-4 24',stroke:'#f3e4b8','stroke-width':1.4,fill:'none'},g);V.g=g;V.vx=100+r()*220;V.vy=50}
  if(c.visitor==='plane'){const g=el('g',{},vis);el('rect',{x:-8,y:-1.5,width:16,height:3,rx:1.5,fill:'#f2f2f6'},g);el('polygon',{points:'-2,0 3,0 -3,-8',fill:'#dfe3ee'},g);el('polygon',{points:'-2,0 3,0 -3,8',fill:'#dfe3ee'},g);el('rect',{x:-70,y:-.5,width:62,height:1,fill:'#fff',opacity:.5},g);V.g=g;V.vy=24+r()*20;V.vx=c.wind>0?-100:580}
  // rare skies
  if(c.rare==='aurora'){V.aur=el('g',{style:'mix-blend-mode:screen',opacity:0},$('rare'));for(let i=0;i<3;i++){let d=`M-40 ${70+i*18}`;for(let x=-40;x<=520;x+=20)d+=` L${x} ${(40+i*18+Math.sin(x*.025+i*1.7)*16).toFixed(1)}`;d+=` L520 ${120+i*18} L-40 ${120+i*18}Z`;const p=el('path',{d,fill:'url(#aurG)',class:'aur'},V.aur);p.style.animationDelay=(-i*2.6)+'s'}}
  if(c.rare==='ufo'){   // a flying saucer glides in, hovers for a moment (tractor beam on), then darts away
    // drawn above the near clouds so it is never hidden behind them
    const g=el('g',{opacity:0},$('precip'));V.ufo=g;V.ufoT0=performance.now()/1000+2;
    V.ufoBeam=el('polygon',{points:'-6,9 6,9 26,92 -26,92',fill:'url(#ufoBeam)',opacity:0},g);
    V.ufoGlow=el('ellipse',{cx:0,cy:6,rx:30,ry:14,fill:'url(#ufoHalo)',opacity:0},g);
    el('path',{d:'M-7 1Q-7 -9 0 -9Q7 -9 7 1Z',fill:'#a8ecff',opacity:.85,stroke:'#6c7794','stroke-width':.8},g);
    el('ellipse',{cx:0,cy:4,rx:17,ry:5.5,fill:'url(#ufoG)',stroke:'#586280','stroke-width':.8},g);
    el('ellipse',{cx:-5,cy:2.6,rx:7,ry:1.4,fill:'#fff',opacity:.5},g);
    [-11,-5.5,0,5.5,11].forEach((x,i)=>{const l=el('circle',{cx:x,cy:5.2,r:1.3,fill:i%2?'#ffe27a':'#7dffc4',class:'star'},g);l.style.animationDelay=(-i*.6)+'s';l.style.animationDuration='1.4s'});
  }
  if(c.rare==='meteors'){V.met=el('g',{},$('rare'));for(let i=0;i<4;i++){const l=el('line',{x1:60+i*95,y1:16+(i%2)*30,x2:92+i*95,y2:28+(i%2)*30,stroke:'#fff','stroke-width':1.6,'stroke-linecap':'round',class:'met',opacity:0},V.met);l.style.animationDelay=(-i*1.7)+'s'}}
  // celestial groups
  $('celestial').replaceChildren();
  V.sun=el('g',{},$('celestial'));el('circle',{r:46,fill:'url(#sunG)'},V.sun);el('circle',{r:13,fill:'#fff6c9'},V.sun);
  V.moon=el('g',{},$('celestial'));el('circle',{r:34,fill:'url(#moonGl)'},V.moon);const mm=el('g',{},V.moon);V.moonShape=mm;
  return V;
}
export function drawMoon(p,V){const g=V.moonShape;g.replaceChildren();const R=12,q=p<.5?p:1-p,th=q*Math.PI*2,rx=R*Math.abs(Math.cos(th)),cres=Math.cos(th)>0;
  el('circle',{r:R,fill:'#2b3254'},g);el('path',{d:`M0 ${-R}A${R} ${R} 0 0 1 0 ${R}A${rx.toFixed(2)} ${R} 0 0 ${cres?0:1} 0 ${-R}Z`,fill:'#f6f2df'},g);g.setAttribute('transform',p>=.5?'scale(-1,1)':'')}

// what the season carries in from the window: leaves, petals, snow-melt
export function buildFloorLeaves(c){
  const g=$('floorLeaves');g.replaceChildren();const r=rng(hash('floor'+c.date)),s=c.season;
  const K={autumn:{n:11,col:['#d9692b','#c4452d','#e8a23a','#a8571f'],sh:'M0 0Q5-4 11 0Q5 4 0 0Z'},spring:{n:9,col:['#f7b6cf','#ffd3e2','#fff'],sh:'M0 0Q3-3 6 0Q3 3 0 0Z'},summer:{n:4,col:['#5fa56a','#79c47e'],sh:'M0 0Q4-3 8 0Q4 3 0 0Z'},winter:{n:6,col:['#bcd8ee','#d9ecf8'],sh:''}}[s];
  for(let i=0;i<K.n;i++){
    let x,y,t=0;do{x=60+r()*1000;y=548+r()*210;t++}while(t<20&&((x>200&&x<740&&y>596&&y<700)||(x>840&&x<990&&y>650&&y<720)));
    const col=K.col[Math.floor(r()*K.col.length)],a=r()*360,k=.8+r()*.7;
    if(s==='winter')el('ellipse',{cx:x,cy:y,rx:6+r()*9,ry:1.6+r()*1.8,fill:col,opacity:.35},g);
    else el('path',{d:K.sh,transform:`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a.toFixed(0)}) scale(${k.toFixed(2)} ${(k*.5).toFixed(2)})`,fill:col,opacity:.9},g)}
}
