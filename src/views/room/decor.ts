/* eslint-disable */
// @ts-nocheck
// Static decoration built once: clock ticks, cork speckle, books, rug, dust, stars, fireflies, floor planks, glow stickers.
import { $, el, rng } from '../shared/helpers';

export function buildDecor(buildGame){
  const r=rng(5);
  for(let i=0;i<60;i++){const a=i*Math.PI/30,h=i%5===0,l=h?7:2.6,s=Math.sin(a),c=-Math.cos(a);el('line',{x1:s*(45-l),y1:c*(45-l),x2:s*45,y2:c*45,'stroke-width':h?2.2:.7,opacity:h?1:.7},$('ticks'));if(h)el('circle',{cx:s*41.5,cy:c*41.5,r:h&&i%15===0?1.6:1.1,fill:'#8dffc9'},$('lumeDots'))}
  // cork speckle
  for(let i=0;i<14;i++)el('ellipse',{cx:710+r()*216,cy:90+r()*170,rx:5+r()*12,ry:3+r()*8,fill:r()<.5?'#9c6c3e':'#d6ae7c',opacity:.16+r()*.1},$('corkDots'));
  for(let i=0;i<260;i++){const dk=r()<.55;el('ellipse',{cx:708+r()*220,cy:88+r()*174,rx:.5+r()*1.7,ry:.4+r()*1.1,fill:dk?'#6b4a35':'#ecc995',opacity:.18+r()*.28},$('corkDots'))}
  for(let i=0;i<9;i++)el('circle',{cx:712+r()*212,cy:92+r()*166,r:.9,fill:'#5a3d28',opacity:.45},$('corkDots'));
  buildGame();
  // books: varied spines (bands, dots, labels, stripes), a few leaning, a few with a night-glow dot
  const cols=['#c0504d','#4b7fd0','#e0b04a','#4aa57a','#a05fc0','#d97a5a','#6aa0d8','#c9c0e0','#3d6b9e','#8c3f52'],br=rng(21),books=$('books'),lumeDots=$('shelfDots');
  const book=(x,bottom,w,h,lean)=>{
    const g=el('g',lean?{transform:`rotate(${lean} ${x} ${bottom})`}:{},books),y=bottom-h,mx=x+w/2,p=br();
    el('rect',{x,y,width:w,height:h,fill:cols[Math.floor(br()*cols.length)],rx:1.5},g);
    el('rect',{x,y,width:2,height:h,fill:'#fff',opacity:.2},g);el('rect',{x:x+w-2.5,y,width:2.5,height:h,fill:'#000',opacity:.18},g);
    el('rect',{x:x+1,y:y+6,width:w-2,height:2,fill:'#e6c36a',opacity:.75},g);el('rect',{x:x+1,y:bottom-9,width:w-2,height:2,fill:'#e6c36a',opacity:.75},g);
    if(p<.3)[0,1,2].forEach(i=>el('circle',{cx:mx,cy:y+h*.35+i*7,r:1.3,fill:'#fff',opacity:.7},g));
    else if(p<.55)el('rect',{x:x+3,y:y+h*.3,width:w-6,height:h*.2,fill:'#fff',opacity:.75,rx:1},g);
    else if(p<.75)el('rect',{x:mx-.6,y:y+14,width:1.2,height:h-30,fill:'#fff',opacity:.55},g);
    if(!lean&&br()<.25)el('circle',{cx:mx,cy:y+h*.62,r:1.3},lumeDots);
  };
  const run=(x0,x1,bottom,lean)=>{let x=x0;const lim=lean?x1-38:x1;
    while(true){const w=11+Math.floor(br()*14),h=62+Math.floor(br()*58);if(x+w>lim)break;book(x,bottom,w,h);x+=w+1+(br()<.2?6:0)}
    if(lean)book(Math.max(x,x1-36),bottom,14,92,12)};
  {const nb=books.childElementCount,nd=lumeDots.childElementCount;run(1028,1108,188);while(books.childElementCount>nb)books.lastChild.remove();while(lumeDots.childElementCount>nd)lumeDots.lastChild.remove()}   // the speaker stands here now; the books are still generated so the other shelves keep their look
  run(1024,1044,328);run(1028,1070,468);run(1098,1132,468);run(1096,1160,598,true);
  // rug: woven fibres and the wave marks of the sea chart
  {const fr=rng(63),inRug=(k)=>{let x,y;do{x=(fr()*2-1)*k;y=(fr()*2-1)*k}while(x*x+y*y>1);return[470+x*244,648+y*39]};
    for(let i=0;i<260;i++){const[x,y]=inRug(1),a=(fr()-.5)*.5,l=2+fr()*3,lt=fr()<.5;el('line',{x1:x,y1:y,x2:x+Math.cos(a)*l,y2:y+Math.sin(a)*l*.4,stroke:lt?'#e8c7ff':'#2a1646','stroke-width':.7,opacity:(.07+fr()*.09).toFixed(2)},$('rugFibres'))}
    for(let i=0;i<34;i++){const[x,y]=inRug(.9);el('path',{d:`M${x.toFixed(1)} ${y.toFixed(1)}q1.6-1.6 3.2 0t3.2 0`},$('rugWaves'))}}
  // dust drifting in the desk-lamp beam
  {const lr=rng(41);for(let i=0;i<9;i++){const c=el('circle',{cx:600+lr()*130,cy:386+lr()*52,r:(.8+lr()*1.1).toFixed(1),opacity:.6,class:'mote'},$('lampMotes'));c.style.animationDelay=(-lr()*9)+'s';c.style.animationDuration=(6+lr()*5)+'s'}}
  // dust motes
  const mr=rng(77);for(let i=0;i<26;i++){const c=el('circle',{cx:84+mr()*480,cy:420+mr()*230,r:(1+mr()*1.6).toFixed(1),opacity:.55,class:'mote'},$('motes'));c.style.animationDelay=(-mr()*9)+'s';c.style.animationDuration=(7+mr()*6)+'s'}
  // stars
  const sr=rng(11);for(let i=0;i<70;i++){const c=el('circle',{cx:-20+sr()*520,cy:-10+sr()*170,r:(.5+sr()*1.1).toFixed(1),fill:'#fff',class:'star'},$('stars'));c.style.animationDelay=(-sr()*3.4)+'s'}
}

// a few fireflies drift through the room when every light is off
export function buildFireflies(lite){
  const r=rng(909),g=$('fireflies'),n=lite?4:7;
  for(let i=0;i<n;i++){
    const x=90+r()*1020,y=150+r()*400,s=.8+r()*.6;
    const f=el('g',{class:'ff '+'abc'[i%3]},el('g',{transform:`translate(${x.toFixed(0)} ${y.toFixed(0)})`},g));
    const w=el('g',{},f);   // the CSS drift moves .ff, the blink fades its child
    el('circle',{r:(9*s).toFixed(1),fill:'url(#ffG)'},w);el('circle',{r:(1.5*s).toFixed(1),fill:'#f6ffc0'},w);
    f.style.animationDelay=(-r()*17)+'s';f.style.animationDuration=(15+r()*9)+'s';w.style.animationDelay=(-r()*3)+'s';w.style.animationDuration=(2.6+r()*2)+'s'}
}
/* floor: every plank gets its own tone, grain, knots and scratches; the boards are staggered per row */
export function buildFloor(lite){
  const r=rng(303),g=$('floorDeco'),tones=[['#fff',.05],['#fff',.09],['#000',.05],['#000',.09],['#d79a5c',.1],['#4a2f1a',.1]];
  for(let row=0;row<8;row++){
    const y=526+row*42;let x=-700-r()*240;
    el('rect',{x:-700,y:y+1,width:2500,height:1.4,fill:'#fff',opacity:.07},g);
    while(x<1800){
      const w=170+r()*130,[c,o]=tones[Math.floor(r()*tones.length)];
      el('rect',{x,y,width:w,height:42,fill:c,opacity:o},g);
      el('rect',{x:x+w-2,y,width:2,height:42,fill:'#000',opacity:.2},g);el('rect',{x:x+w,y,width:1.2,height:42,fill:'#fff',opacity:.08},g);
      for(let k=0;k<(lite?2:4);k++){
        const gy=y+5+r()*32,gx=x+6+r()*(w*.3),l=w*(.35+r()*.5),a=(r()-.5)*2.4;
        el('path',{d:`M${gx.toFixed(1)} ${gy.toFixed(1)}q${(l/3).toFixed(1)} ${a.toFixed(1)} ${(l/2).toFixed(1)} 0t${(l/2).toFixed(1)} ${(-a).toFixed(1)}`,fill:'none',stroke:r()<.7?'#3b2414':'#f0c58a','stroke-width':.6,opacity:(.1+r()*.12).toFixed(2)},g)}
      if(r()<.16){const kx=x+30+r()*(w-60),ky=y+10+r()*22;el('ellipse',{cx:kx,cy:ky,rx:4.4,ry:2.6,fill:'#4a2f1a',opacity:.4},g);el('ellipse',{cx:kx,cy:ky,rx:8,ry:4.6,fill:'none',stroke:'#4a2f1a','stroke-width':.7,opacity:.3},g)}
      if(r()<.2){const sx=x+10+r()*(w-40),sy=y+6+r()*28,a=(r()-.5)*.5;el('line',{x1:sx,y1:sy,x2:sx+10+r()*16,y2:sy+a*14,stroke:'#f3d9b0','stroke-width':.8,opacity:.28},g)}
      x+=w}
  }
}
/* glow-in-the-dark stickers on the wall and ceiling only. Furniture is excluded so they read as "behind" it. */
export function buildGlow(lite,SPOTS){
  if(lite){const u=$('glow').querySelector(':scope > use');if(u)u.remove()}   // the blurred copy is the costliest part of the layer
  const core=$('glowCore'),halo=$('glowHalo'),r=rng(77),G='#ffd98a';
  const rect=k=>{const q=SPOTS[k];return[q.x,q.y,q.x+q.w,q.y+q.h]};
  const wallBoxes=['window','clock','cork','shelf','desk','lamp','phone','notebook','speaker','ceiling'].map(rect).map(b=>[b[0]-12,b[1]-12,b[2]+12,b[3]+12]).concat([[-22,36,596,418],[600,300,1190,530]]);
  const inBox=(bs,x,y,m)=>bs.some(b=>x>b[0]-m&&x<b[2]+m&&y>b[1]-m&&y<b[3]+m);
  const wallFree=(x,y,m=0)=>y<514&&!inBox(wallBoxes,x,y,m);
  const gauss=()=>(r()+r()+r()+r()-2)*1.2;
  const poly=(cx,cy,R,rot,sq)=>{let p='';for(let i=0;i<10;i++){const a=rot+i*Math.PI/5-Math.PI/2,k=i%2?R*.45:R;p+=(i?' ':'')+(cx+Math.cos(a)*k).toFixed(1)+','+(cy+Math.sin(a)*k*sq).toFixed(1)}return p};
  const put=(x,y,f,sq,grp)=>{   // f: size factor, sq: vertical squash (perspective)
    const k=r(),op=.55+r()*.45,a={fill:G,opacity:op.toFixed(2)};
    if(k<.7)el(sq<1?'ellipse':'circle',sq<1?{cx:x,cy:y,rx:(.8+r()*1.2)*f,ry:(.8+r()*1.2)*f*sq,...a}:{cx:x,cy:y,r:(.8+r()*1.3)*f,...a},grp);
    else if(k<.96)el('polygon',{points:poly(x,y,(3+r()*4.5)*f,r()*1.2,sq),...a},grp);
    else if(k<.985)el('polygon',{points:poly(x,y,(9+r()*4)*f,r()*1.2,sq),...a},grp);
    else el('polygon',{points:poly(x,y,(10+r()*4)*f,r()*1.2,sq),fill:'none',stroke:G,'stroke-width':1.2*f,'stroke-linejoin':'round',opacity:a.opacity},grp);
  };
  // two groups so they can breathe out of phase, like real phosphorescent stickers
  const gA=el('g',{class:'gl gl1'},core),gB=el('g',{class:'gl gl2'},core);
  // moon on the wall
  let mx=830,my=16;const MR=26;if(!wallFree(mx,my,MR)){mx=1230;my=60}
  el('circle',{cx:mx,cy:my,r:150,fill:'url(#moonHalo)'},halo);
  el('circle',{cx:mx,cy:my,r:MR,fill:'url(#moonG)'},core);
  [[-8,-6,6],[7,4,8],[-4,11,4],[10,-10,3.5],[-14,6,3]].forEach(([dx,dy,cr])=>el('circle',{cx:mx+dx,cy:my+dy,r:cr,fill:'#d99a3a',opacity:.55},core));
  // evenly spread (dart throwing keeps a minimum gap, so nothing clumps) over every free wall/ceiling area,
  // a little denser near the ceiling
  const spread=(free,bounds,gap,tries,make)=>{
    const pts=[];
    for(let t=0;t<tries;t++){
      const x=bounds[0]+r()*(bounds[2]-bounds[0]),y=bounds[1]+r()*(bounds[3]-bounds[1]),d=gap(y);
      if(!free(x,y,5)||Math.hypot(x-mx,y-my)<MR+14)continue;
      if(pts.some(q=>Math.hypot(q[0]-x,q[1]-y)<d))continue;
      pts.push([x,y]);make(x,y);
      if(r()<.12)make(x+(r()-.5)*16,y+(r()-.5)*16);   // the odd sticker pair
    }
  };
  spread(wallFree,[-140,-90,1460,512],y=>(17+Math.max(0,y)/40)*(lite?1.45:1),12000,(x,y)=>{if(wallFree(x,y,2))put(x,y,.75+r()*.5,1,r()<.5?gA:gB)});
}
