/* eslint-disable */
// @ts-nocheck
import { $, el, rng, mix } from '../shared/helpers';
import { PAL } from '../shared/world';

// The tiny runner game on the monitor. It plays itself until someone clicks; the sky follows the room's time and weather.
export function createGame(rt){
const {st,track,reduce}=rt;
let playTracked=false;
const GW=80,GH=48,GY=38,SC=4;
const FONT={'0':'111101101101111','1':'010110010010111','2':'111001111100111','3':'111001111001111','4':'101101111001001','5':'111100111001111','6':'111100111101111','7':'111001001001001','8':'111101111101111','9':'111101111001111',
  G:'111100101101111',A:'111101111101101',M:'101111111101101',E:'111100111100111',O:'111101101101111',V:'101101101101010',R:'111101110101101',H:'101101111101101',I:'111010010010111',S:'111100111001111',C:'111100100100111',T:'111010010010010',P:'111101111100100',L:'100100100100111',Y:'101101010010010'};
let HI0=420;try{HI0=+localStorage.getItem('rg_hi')||420}catch(e){}
let gctx=null;const G={idle:99,state:'run',dist:0,score:0,hi:HI0,speed:28,over:0,spawnIn:30,obs:[],coins:[],fx:[],bad:false,
  cat:{x:12,h:0,vy:0,air:false,ft:0},acc:0};
const grnd=mulberry();function mulberry(){let a=1234567;return()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^a>>>15,1|a);t=(t+Math.imul(t^t>>>7,61|t))^t;return((t^t>>>14)>>>0)/4294967296}}
function resetGame(){G.state='run';G.dist=0;G.score=0;G.speed=28;G.obs=[];G.coins=[];G.fx=[];G.spawnIn=34;G.cat={x:12,h:0,vy:0,air:false,ft:0};G.bad=false}
function buildGame(){
  const g=$('code'),X0=708,Y0=324;
  const fo=el('foreignObject',{x:X0,y:Y0,width:160,height:96},g);
  const cv=document.createElementNS('http://www.w3.org/1999/xhtml','canvas');cv.width=GW*SC;cv.height=GH*SC;
  cv.style.cssText='display:block;width:160px;height:96px;image-rendering:pixelated;border-radius:3px';fo.appendChild(cv);
  gctx=cv.getContext('2d');
  // CRT scanlines + vignette over the canvas
  el('rect',{x:X0,y:Y0,width:160,height:96,rx:3,fill:'url(#scan)'},g);
  el('rect',{x:X0,y:Y0,width:160,height:96,rx:3,fill:'url(#crt)'},g);
}
function px(x,y,w,h,c){gctx.fillStyle=c;gctx.fillRect(Math.round(x),Math.round(y),w,h)}
function text(str,x,y,c,sh){for(const ch of str){const f=FONT[ch];if(f){for(let i=0;i<15;i++)if(f[i]==='1'){if(sh)px(x+i%3+1,y+(i/3|0)+1,1,1,sh);px(x+i%3,y+(i/3|0),1,1,c)}}x+=ch===' '?2:4}}
function drawCat(x,h,frame,dead,air){
  const by=GY-h-12,B='#3f8f4a',L='#6fc06a',E='#10201a';
  const rows=['.......######.','.......##e####','.......#######','.......####...','#.....#####...','##...######.#.','###.#######...','.###########..','..#########...','...#######....'];
  const legs=air||dead?['....##..##....','....##..##....']:frame?['....##..##....','........##....']:['....##..##....','....##........'];
  rows.concat(legs).forEach((r,j)=>{for(let i=0;i<14;i++){const c=r[i];if(c==='.')continue;px(x+i,by+j,1,1,c==='e'?(dead?'#ff6b6b':E):(j>=6&&j<=8&&i>=5?L:B))}});
}
function gameJump(){
  const c=G.cat;if(G.idle>6&&!playTracked){playTracked=true;track('room_game_play')}G.idle=0;
  if(G.state==='over'){if(G.over<3.4){resetGame();G.cat.air=true;G.cat.vy=56}return}
  if(!c.air){c.air=true;c.vy=56}
}
function gameStep(dt){
  const c=G.cat;G.idle+=dt;
  if(G.state==='over'){G.over-=dt;if(G.over<=0)resetGame();return}
  G.speed=28+Math.min(18,G.score/60);const v=G.speed;G.dist+=v*dt;G.score+=v*dt*.4;c.ft+=dt*v/3.2;
  if(c.air){c.vy-=105*dt;c.h+=c.vy*dt;if(c.h<=0){c.h=0;c.vy=0;c.air=false}}
  G.spawnIn-=v*dt;
  if(G.spawnIn<=0){const pine=grnd()<.4,w=pine?4:3+Math.floor(grnd()*3),h=pine?6:3+Math.floor(grnd()*3);
    G.obs.push({x:GW+4,w,h,pine,bad:grnd()<.1});G.spawnIn=40+grnd()*30;
    if(grnd()<.6)G.coins.push({x:GW+4+w/2-1.5,h:h+4+grnd()*2,t:0})}
  G.obs.forEach(o=>o.x-=v*dt);G.coins.forEach(k=>{k.x-=v*dt;k.t+=dt});
  G.obs=G.obs.filter(o=>o.x>-10);G.coins=G.coins.filter(k=>k.x>-6);
  // the cat plays itself: jump when the next obstacle is about to arrive
  const nx=G.obs.find(o=>o.x+o.w>c.x+1);
  if(nx&&!c.air&&G.idle>6){const d=nx.x-(c.x+13),thr=v*.53-(nx.w+8)/2-(nx.bad?9:0);if(d<=thr){c.air=true;c.vy=56}}
  // collisions
  for(const o of G.obs){if(c.x+11>o.x&&c.x+3<o.x+o.w&&c.h<o.h-.5){G.state='over';G.over=G.idle<6?4:2;G.hi=Math.max(G.hi,Math.floor(G.score));try{localStorage.setItem('rg_hi',G.hi)}catch(e){}break}}
  G.coins=G.coins.filter(k=>{const hit=c.x+13>k.x&&c.x+1<k.x+3&&c.h+8>k.h&&c.h<k.h+3;if(hit){G.score+=50;for(let i=0;i<6;i++)G.fx.push({x:k.x+1,y:GY-k.h,vx:(grnd()-.5)*30,vy:-grnd()*22,l:.5});}return!hit});
  G.fx.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=60*dt;p.l-=dt});G.fx=G.fx.filter(p=>p.l>0);
}
function drawGame(){
  if(!gctx)return;const ctx=gctx,d=st.GS.d,w=st.cfg?st.cfg.weather:'clear',P=st.cfg?PAL[st.cfg.season]:PAL.summer;
  ctx.setTransform(SC,0,0,SC,0,0);ctx.imageSmoothingEnabled=false;
  // sky in flat bands (pixel gradient)
  for(let i=0;i<7;i++)px(0,i*6,GW,6,mix(st.GS.top,st.GS.hor,i/6));
  // stars / sun / moon
  if(d<.6){const r=rng(5);for(let i=0;i<14;i++){const sx=r()*GW,sy=r()*20;if(((G.dist/6+i*3)|0)%7!==0)px(sx,sy,1,1,'#f3eefb')}}
  const cel=d>.5?'#fff3b0':'#f4f1e0',cy=8+Math.sin(G.dist/60)*.8;px(58,cy,5,5,cel);px(59,cy-1,3,1,cel);px(59,cy+5,3,1,cel);px(57,cy+1,1,3,cel);px(63,cy+1,1,3,cel);
  const dk=k=>mix(k,'#0a1024',(1-d)*.6);
  // far + mid hills (parallax)
  for(let x=0;x<GW;x++){const f=GY-12-(5*Math.sin((x+G.dist*.12)*.11)+3*Math.sin((x+G.dist*.12)*.29)+3);px(x,f,1,GY-f,dk(mix('#7f8fb8',st.GS.hor,.45)));}
  for(let x=0;x<GW;x++){const m=GY-6-(3*Math.sin((x+G.dist*.3)*.17+2)+2*Math.sin((x+G.dist*.3)*.41)+2);px(x,m,1,GY-m,dk(P.mid))}
  // clouds
  if(d>.4&&w!=='fog'){const cc=mix('#ffffff','#9aa3b2',w==='clear'?0:.5);for(let i=0;i<3;i++){const cx=((i*34-G.dist*.08)%110+110)%110-14;px(cx,6+i*5,7,2,cc);px(cx+2,5+i*5,4,1,cc)}}
  // ground
  px(0,GY,GW,2,dk(P.near));px(0,GY+2,GW,GH-GY-2,dk('#6b4a35'));
  for(let i=0;i<14;i++){const gx=((i*9-G.dist)%126+126)%126-6;px(gx,GY+3+(i%3)*2,2,1,dk('#8a6446'))}
  // obstacles, coins
  G.obs.forEach(o=>{
    if(o.pine){const c1=dk(P.trees[0]);for(let r=0;r<o.h;r++){const ww=Math.max(1,Math.round(1+(r/o.h)*(o.w-1)));px(o.x+(o.w-ww)/2,GY-o.h+r,ww,1,c1)}px(o.x+o.w/2-.5,GY-1,1,1,dk('#5e3d29'))}
    else{for(let r=0;r<o.h;r++){const ww=Math.min(o.w,o.w-Math.max(0,o.h-1-r)*1);px(o.x+(o.w-ww)/2,GY-o.h+r,ww,1,r===0?dk('#9aa0b8'):dk('#767c96'))}}});
  G.coins.forEach(k=>{const f=Math.floor(k.t*6)%2;px(k.x,GY-k.h-3,3,3,'#ffd84a');px(k.x+1,GY-k.h-3,1,3,f?'#fff3a0':'#e0b020')});
  // the cat
  drawCat(G.cat.x,G.cat.h,Math.floor(G.cat.ft)%2,G.state==='over',G.cat.air);
  G.fx.forEach(p=>px(p.x,p.y,1,1,'#ffd84a'));
  // weather like outside
  if(w==='rain'){for(let i=0;i<18;i++){const rx=(i*7+G.dist*.2)%GW,ry=((i*13+G.dist*1.6)%GH);px(rx,ry,1,2,'#cfe0f2')}}
  if(w==='snow'){for(let i=0;i<22;i++){px((i*11+Math.sin(G.dist/20+i)*3+GW)%GW,((i*17+G.dist*.5)%GH),1,1,'#fff')}}
  if(w==='fog'){ctx.globalAlpha=.3;px(0,0,GW,GH,st.GS.hor);ctx.globalAlpha=1}
  // HUD
  const pad5=n=>String(Math.min(99999,Math.floor(n))).padStart(5,'0'),sh='#0a1024';
  text('HI '+pad5(G.hi),3,3,'#cfd3ea',sh);text(pad5(G.score),GW-3-5*4+1,3,'#ffffff',sh);
  if(G.state==='over'){px(18,15,44,17,'#0a1024');if(Math.floor(G.over*3)%2===0)text('GAME OVER',22,18,'#ff9d7a');if(G.idle<6)text('TAP',34,25,'#cfd3ea')}
  else if(G.idle>6&&Math.floor(G.dist/14)%2===0)text('PLAY',31,16,'#ffffff','#0a1024');
}
let gAcc=0;
function gameTick(dt){if(!gctx||!st.cfg)return;
  if(reduce){gAcc+=dt;if(gAcc<1)return;gAcc=0;drawGame();return}
  gameStep(Math.min(dt,.05));drawGame()}
return {build:buildGame,jump:gameJump,tick:gameTick,idle:()=>G.idle};
}
