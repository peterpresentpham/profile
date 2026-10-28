/* eslint-disable */
// @ts-nocheck
// Imperative engine for the room scene, ported 1:1 from concept/room2d-fullscreen.html.
// It owns everything under `root`; the returned function tears it all down again.
import { ROOM_HTML } from './markup';

export function initRoom(root: HTMLElement): () => void {
root.innerHTML = ROOM_HTML;
const track=(event,p={})=>{try{(window.dataLayer=window.dataLayer||[]).push({event,...p})}catch(e){}};
let playTracked=false;
const L=[],timers=[];let raf=0;const listen=(t,f)=>{addEventListener(t,f);L.push(()=>removeEventListener(t,f))};
/* ============ content ============ */
const ABOUT = (welcome)=>`
  <div class="eyebrow">${welcome?'Welcome':'About me'}</div><h2 id="ptitle">Hi, I'm Peter.</h2>
  <p>I write software — web apps, backends, blockchain protocols — and I keep making small worlds: maps that generate themselves, a game about days that repeat, a language that doesn't exist yet.</p>
  <p>This room is where I keep them. <b class="w">The window shows today's world</b> and changes a little every day; the room follows your clock, so the lamp comes on when it gets dark where you are.</p>
  <p><span class="tag">Hanoi, Vietnam</span><span class="tag">B.Sc. IT · HUST 2017–21</span><span class="tag">M.Sc. CS · HUST 2023–25</span></p>
  <p class="note">Draft. Add a few lines in your own voice here: what you care about, what you're curious about, what you do away from the keyboard.</p>
  ${welcome?'<div style="margin-top:18px"><button class="btn" id="enter" type="button">Come in →</button></div>':''}`;

const SPOTS = {
  window:{label:'Window — Fantasy World',x:54,y:44,w:546,h:372,html:`
    <div class="eyebrow">Through the window</div><h2 id="ptitle">Fantasy World</h2>
    <p>A procedural fantasy world map generator: deterministic seeds, terrain simulation, hydrology, nations and ethnic regions. Same seed, same world — every time.</p>
    <span class="tag">Next.js</span><span class="tag">Procedural generation</span>
    <a class="btn" href="https://fantasy.peter-present.xyz/">Open the world</a>
    <p class="note">The valley outside is generated too: the weather, season, moon phase and visitors change every day.</p>`},
  clock:{label:'Wall clock — Như Hôm Qua',x:584,y:84,w:112,h:112,html:`
    <div class="eyebrow">Game · "Như Hôm Qua" (Just Like Yesterday)</div><h2 id="ptitle">Every day repeats yesterday — unless you do something different.</h2>
    <p>A short browser game that plays out on the phone and laptop screens of a young office worker. One run is a probation week, Monday to Saturday: on Friday evening HR says you didn't pass, and Saturday is the last day.</p>
    <p>The core idea is <b class="w">wear</b>: seven slices of the day (alarm, commute, work, lunch, after work, family, night) each remember what you did yesterday. Repeat it and the slice wears down; do something genuinely different and it freshens — but "different" always costs time, money, energy or goodwill.</p>
    <span class="tag">Svelte 5</span><span class="tag">TypeScript</span><span class="tag">Vitest</span><span class="tag">Vietnamese + English</span>
    <h3>Rules I held myself to</h3>
    <ul class="l"><li>Everything matches real life: payslips itemise every deduction and add up</li><li>No proper names — people are roles ("direct manager", "HR")</li><li>Sloppy play is punished harder than careful play</li><li>Balance tested by bulk simulation, not by feel</li></ul>
    <a class="btn g" href="https://github.com/peterpresentpham/seen">Source</a>
    <p class="note">Add the live URL once deployed.</p>`},
  board:{label:'Caro board — Playground',x:82,y:556,w:262,h:140,html:`
    <div class="eyebrow">Small experiments</div><h2 id="ptitle">Things that run in your browser</h2>
    <div class="row">
      <a href="https://experiment.peter-present.xyz/caro"><span>Caro (Gomoku)</span><span>play ↗</span></a>
      <a href="https://experiment.peter-present.xyz/pikachu"><span>Pikachu match</span><span>play ↗</span></a>
      <a href="https://experiment.peter-present.xyz/process"><span>CPU scheduler</span><span>visualise ↗</span></a>
      <a href="https://fantasy.peter-present.xyz/"><span>Fantasy World</span><span>procedural maps ↗</span></a>
    </div>`},
  cork:{label:'Corkboard — Recovery Wallet',x:692,y:68,w:252,h:214,html:`
    <div class="eyebrow">Thesis project</div><h2 id="ptitle">Recovery ERC-4337 Wallet</h2>
    <p>Lose a seed phrase, lose everything. Classic social recovery leaks the guardian list on-chain. This wallet lets guardians help you recover — without revealing who they are, using zero-knowledge proofs.</p>
    <span class="tag">ERC-4337</span><span class="tag">Zero-knowledge</span><span class="tag">Circom</span><span class="tag">Solidity</span><span class="tag">wagmi</span>
    <h3>Two decisions that shaped it</h3>
    <p><b class="w">Keep guardians private.</b> Commit to the guardian set; guardians prove membership instead of listing addresses.</p>
    <div class="trade"><div class="g"><b>Gain</b>Identities stay hidden</div><div class="c"><b>Cost</b>Heavier proofs; circuit needs audit</div></div>
    <p><b class="w">Verify on-chain.</b> No off-chain service can approve a recovery.</p>
    <div class="trade"><div class="g"><b>Gain</b>No trusted relayer</div><div class="c"><b>Cost</b>More gas</div></div>
    <a class="btn" href="https://blog.peter-present.xyz/master-thesis">Read the thesis</a><a class="btn g" href="https://github.com/peterpresentpham/account-abstraction-app">UI</a><a class="btn g" href="https://github.com/peterpresentpham/account-abstraction-contract">Contracts</a><a class="btn g" href="https://github.com/peterpresentpham/bundler">Bundler</a>
    <p class="note">Draft: decisions inferred from the project description — rewrite in your own words.</p>`},
  shelf:{label:'Bookshelf — Writing',x:1004,y:38,w:178,h:580,html:`
    <div class="eyebrow">Writing</div><h2 id="ptitle">Notes to myself, in public</h2>
    <div class="row">
      <a href="https://blog.peter-present.xyz/master-thesis"><span>Account Abstraction Wallet with Social Recovery (ZK)</span><span>Thesis</span></a>
      <a href="https://blog.peter-present.xyz/snark"><span>zk-SNARK, explained</span><span>Note</span></a>
      <a href="https://blog.peter-present.xyz/"><span>All posts</span><span>→</span></a>
    </div>`},
  tablet:{label:'Stone tablet — Decipher',x:1040,y:206,w:100,h:124,html:`
    <div class="eyebrow">Game · Decipher</div><h2 id="ptitle">A new alien language every day.</h2>
    <svg viewBox="0 0 640 110" style="width:100%;height:auto;margin:6px 0 2px;display:block" role="img" aria-label="Carved on the tablet: đèn nhỏ và những đứa con của biển"><use href="#rg0" transform="translate(40,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg1" transform="translate(110,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg2" transform="translate(180,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg3" transform="translate(250,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg4" transform="translate(320,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg5" transform="translate(390,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg6" transform="translate(460,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg7" transform="translate(530,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/></svg><p style="font-size:12px;margin-bottom:14px">Carved on the tablet: <i>“đèn nhỏ và những đứa con của biển”</i> — the title of a novel by Annet Schaap.</p><p>Each day's language is generated entirely by algorithm from the UTC date — no backend. You read sentences carved on stone tablets (with translations), work out what each symbol means and how the grammar works, solve puzzles, and finally write a whole passage back in the alien script.</p>
    <p>Two modes: <b class="w">easy</b> (fewer words, three puzzles, earlier hints) and <b class="w">advanced</b> (full vocabulary, four puzzles).</p>
    <span class="tag">Procedural generation</span><span class="tag">Web Audio</span><span class="tag">No backend</span>
    <a class="btn" href="https://decipher.peter-present.xyz/">Play today's language</a><a class="btn g" href="https://github.com/peterpresentpham/decipher">Source</a>`},
  desk:{label:'Computer — Workbench',x:694,y:310,w:188,h:128,html:`
    <div class="eyebrow">Workbench</div><h2 id="ptitle">What I build with day to day</h2>
    <div class="row">
      <a href="https://github.com/peterpresentpham/profile"><span>This profile site</span><span>Next · React · Tailwind</span></a>
      <a href="https://blog.peter-present.xyz/"><span>Blog platform</span><span>Next · shadcn</span></a>
      <a href="https://github.com/peterpresentpham/nestjs-project"><span>NestJS backend</span><span>PostgreSQL · Redis · WebSocket · JWT</span></a>
      <a href="https://www.npmjs.com/package/@peter-present/react-hook-utils"><span>react-hook-utils</span><span>npm package</span></a>
    </div>
    <h3>What I reach for</h3>
    <p><b class="w">Web:</b> TypeScript · React · Next.js · Svelte · NestJS · PostgreSQL<br><b class="w">Chain:</b> Solidity · ERC-4337 · Circom · wagmi</p>`},
  game:{label:'Play the game — click, tap or Space',x:708,y:324,w:160,h:96,game:true},
  phone:{label:'Phone — Say hi',x:838,y:420,w:52,h:26,html:`
    <div class="eyebrow">Say hi</div><h2 id="ptitle">Found something you like?</h2>
    <p>Happy to talk about any of this — games, languages, ZK, or why days feel the same.</p>
    <a class="btn" href="mailto:phamhongphuc1999.mywork@gmail.com">Email</a><a class="btn g" href="https://github.com/peterpresentpham">GitHub</a><a class="btn g" href="https://www.linkedin.com/in/peter-present/">LinkedIn</a>`},
  notebook:{label:'Notebook — About me',x:884,y:420,w:66,h:28,html:null},
  lamp:{label:'Lamp — toggle light',x:604,y:326,w:112,h:122,lamp:true},
};

/* ============ helpers ============ */
const $=id=>document.getElementById(id), NS='http://www.w3.org/2000/svg';
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)), lerp=(a,b,k)=>a+(b-a)*k, ss=(a,b,x)=>{x=clamp((x-a)/(b-a));return x*x*(3-2*x)};
const rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const mix=(a,b,k)=>'#'+rgb(a).map((v,i)=>Math.round(lerp(v,rgb(b)[i],clamp(k))).toString(16).padStart(2,'0')).join('');
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function rng(a){return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function noise(seed){const r=rng(hash(seed)),N=128,g=Array.from({length:N*N},()=>r());
  const at=(x,y)=>g[(y&(N-1))*N+(x&(N-1))],sm=t=>t*t*(3-2*t);
  return(x,y)=>{const xi=Math.floor(x),yi=Math.floor(y),fx=sm(x-xi),fy=sm(y-yi),a=at(xi,yi),b=at(xi+1,yi),c=at(xi,yi+1),d=at(xi+1,yi+1);return a+(b-a)*fx+(c-a)*fy+(a-b-c+d)*fx*fy}}
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);parent&&parent.appendChild(e);return e}
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad=n=>String(n).padStart(2,'0'), ymd=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

/* ============ static scene parts ============ */
/* ===== tiny pixel game on the monitor (attract mode: it plays itself) ===== */
let GS={top:'#3b8fe0',hor:'#a7d8f5',d:1};
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
  if(!gctx)return;const ctx=gctx,d=GS.d,w=cfg?cfg.weather:'clear',P=cfg?PAL[cfg.season]:PAL.summer;
  ctx.setTransform(SC,0,0,SC,0,0);ctx.imageSmoothingEnabled=false;
  // sky in flat bands (pixel gradient)
  for(let i=0;i<7;i++)px(0,i*6,GW,6,mix(GS.top,GS.hor,i/6));
  // stars / sun / moon
  if(d<.6){const r=rng(5);for(let i=0;i<14;i++){const sx=r()*GW,sy=r()*20;if(((G.dist/6+i*3)|0)%7!==0)px(sx,sy,1,1,'#f3eefb')}}
  const cel=d>.5?'#fff3b0':'#f4f1e0',cy=8+Math.sin(G.dist/60)*.8;px(58,cy,5,5,cel);px(59,cy-1,3,1,cel);px(59,cy+5,3,1,cel);px(57,cy+1,1,3,cel);px(63,cy+1,1,3,cel);
  const dk=k=>mix(k,'#0a1024',(1-d)*.6);
  // far + mid hills (parallax)
  for(let x=0;x<GW;x++){const f=GY-12-(5*Math.sin((x+G.dist*.12)*.11)+3*Math.sin((x+G.dist*.12)*.29)+3);px(x,f,1,GY-f,dk(mix('#7f8fb8',GS.hor,.45)));}
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
  if(w==='fog'){ctx.globalAlpha=.3;px(0,0,GW,GH,GS.hor);ctx.globalAlpha=1}
  // HUD
  const pad5=n=>String(Math.min(99999,Math.floor(n))).padStart(5,'0'),sh='#0a1024';
  text('HI '+pad5(G.hi),3,3,'#cfd3ea',sh);text(pad5(G.score),GW-3-5*4+1,3,'#ffffff',sh);
  if(G.state==='over'){px(18,15,44,17,'#0a1024');if(Math.floor(G.over*3)%2===0)text('GAME OVER',22,18,'#ff9d7a');if(G.idle<6)text('TAP',34,25,'#cfd3ea')}
  else if(G.idle>6&&Math.floor(G.dist/14)%2===0)text('PLAY',31,16,'#ffffff','#0a1024');
}
let gAcc=0;
function gameTick(dt){if(!gctx||!cfg)return;
  if(reduce){gAcc+=dt;if(gAcc<1)return;gAcc=0;drawGame();return}
  gameStep(Math.min(dt,.05));drawGame()}


(function(){
  const r=rng(5);
  for(let i=0;i<12;i++){const a=i*Math.PI/6,l=i%3?9:17;el('line',{x1:640+Math.sin(a)*(46-l),y1:140-Math.cos(a)*(46-l),x2:640+Math.sin(a)*46,y2:140-Math.cos(a)*46},$('ticks'))}
  // cork speckle
  for(let i=0;i<110;i++)el('rect',{x:708+r()*220,y:88+r()*174,width:2,height:2,fill:r()<.5?'#6b4a35':'#e6c08a',opacity:.28},$('corkDots'));
  buildGame();
  // books
  const cols=['#c0504d','#4b7fd0','#e0b04a','#4aa57a','#a05fc0','#d97a5a','#6aa0d8','#c9c0e0'],br=rng(21),books=$('books');
  [[188,0],[468,1],[598,2]].forEach(([bottom])=>{let x=1028;while(x<1156){const w=11+Math.floor(br()*14),h=62+Math.floor(br()*60);if(x+w>1158)break;
    el('rect',{x,y:bottom-h,width:w,height:h,fill:cols[Math.floor(br()*cols.length)],rx:1.5},books);
    el('rect',{x:x+2,y:bottom-h+8,width:w-4,height:3,fill:'#fff',opacity:.35},books);x+=w+1+(br()<.2?10:0)}});
  {let x=1028;while(x<1040){const w=11+Math.floor(br()*14),h=62+Math.floor(br()*60);if(x+w>1158)break;el('rect',{x,y:328-h,width:w,height:h,fill:cols[Math.floor(br()*cols.length)],rx:1.5},books);x+=w+1}}
  // dust motes
  const mr=rng(77);for(let i=0;i<26;i++){const c=el('circle',{cx:120+mr()*480,cy:420+mr()*230,r:(1+mr()*1.6).toFixed(1),opacity:.55,class:'mote'},$('motes'));c.style.animationDelay=(-mr()*9)+'s';c.style.animationDuration=(7+mr()*6)+'s'}
  // stars
  const sr=rng(11);for(let i=0;i<70;i++){const c=el('circle',{cx:-20+sr()*520,cy:-10+sr()*170,r:(.5+sr()*1.1).toFixed(1),fill:'#fff',class:'star'},$('stars'));c.style.animationDelay=(-sr()*3.4)+'s'}
})();

/* hotspots */
const hots=$('hots'),tip=$('tip');let dragMoved=false;
Object.entries(SPOTS).forEach(([id,s])=>{
  const r=el('rect',{x:s.x,y:s.y,width:s.w,height:s.h,rx:12,class:'hot',tabindex:0,role:'button','aria-label':s.label},hots);
  const grp=document.querySelector(`[data-obj="${id}"]`);
  const on=e=>{grp&&grp.classList.add('hov');tip.textContent=s.label;tip.classList.add('on');if(e&&e.clientX!==undefined){tip.style.left=e.clientX+'px';tip.style.top=e.clientY+'px'}else{const b=r.getBoundingClientRect();tip.style.left=b.left+b.width/2+'px';tip.style.top=b.top+'px'}};
  const off=()=>{grp&&grp.classList.remove('hov');tip.classList.remove('on')};
  r.addEventListener('mouseenter',on);r.addEventListener('mousemove',on);r.addEventListener('focus',()=>on());r.addEventListener('mouseleave',off);r.addEventListener('blur',off);
  const act=()=>{if(dragMoved)return;off();activate(id)};
  r.addEventListener('click',act);r.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act()}});
  s.node=r;
});

/* ============ day config ============ */
const WEATHER={clear:'Clear sky',partly:'Scattered clouds',overcast:'Overcast',rain:'Rain',fog:'Fog',snow:'Snow'};
const VIS={balloon:'a hot-air balloon drifts past',birds:'a flock of birds crosses',kite:'someone is flying a kite',plane:'a plane crosses high up'};
function dayCfg(d){
  const date=ymd(d),r=rng(hash('day:'+date)),w=r(),m=d.getMonth()+1;
  let weather=w<.38?'clear':w<.66?'partly':w<.8?'overcast':w<.92?'rain':'fog';
  const season=m>=3&&m<=4?'spring':m>=5&&m<=8?'summer':m>=9&&m<=11?'autumn':'winter';
  if(season==='winter'&&(weather==='overcast'||weather==='rain')&&r()<.45)weather='snow';
  const vs=['balloon','birds','kite','plane',null,'balloon','birds'];
  return{date,weather,season,visitor:vs[Math.floor(r()*vs.length)],boat:r()<.55,wind:r()<.5?-1:1,rare:r()<.034?(r()<.5?'aurora':'meteors'):null,seed:Math.floor(r()*1e6)};
}
function moonPhase(d){const ms=new Date(d.getFullYear(),d.getMonth(),d.getDate(),12).getTime(),days=ms/86400000+2440587.5-2451550.1;return((days/29.530588853)%1+1)%1}
function moonName(p){return p<.03||p>.97?'new moon':p<.22?'waxing crescent':p<.28?'first quarter':p<.47?'waxing gibbous':p<.53?'full moon':p<.72?'waning gibbous':p<.78?'last quarter':'waning crescent'}

/* ============ the outside view ============ */
const PAL={spring:{mid:'#8cc070',near:'#6fae58',trees:['#5f9f4c','#f1a9c4','#7cc06a','#4f8f48'],par:'#f7b6cf'},summer:{mid:'#6aa856',near:'#4a8f45',trees:['#3f8f4a','#2f7a45','#4aa05a','#5aa84a'],par:null},
  autumn:{mid:'#b8a548',near:'#a8742f',trees:['#d9792f','#c4452d','#e8b23a','#7a8f3a'],par:'#e08a2f'},winter:{mid:'#d2dcd6',near:'#bcc9c6',trees:['#6f8a78','#5d7a6c','#8aa296','#7a8f86'],par:null}};
const nz=noise('valley-2d');
const fbm=x=>{let v=0,a=1,f=1,s=0;for(let o=0;o<4;o++){v+=nz(x*f,7)*a;s+=a;a*=.5;f*=2}return v/s};
const rY={far:x=>150-100*(1-Math.abs(2*fbm(x*.011+3)-1)),mid:x=>206-42*fbm(x*.016+9),near:x=>262-46*fbm(x*.02+17)};
const ridge=f=>{let d='M-50 340';for(let x=-50;x<=530;x+=6)d+=` L${x} ${f(x).toFixed(1)}`;return d+' L530 340Z'};
$('farRidge').setAttribute('d',ridge(rY.far));$('midRidge').setAttribute('d',ridge(rY.mid));$('nearRidge').setAttribute('d',ridge(rY.near));
let cfg=null,phase=0,V={};   // V: dynamic view state
const vis=$('Lvis');

function cloudPath(x,y,s){return `M${x-24*s} ${y} q${-6*s} ${-14*s} ${10*s} ${-16*s} q${6*s} ${-16*s} ${24*s} ${-8*s} q${14*s} ${-10*s} ${24*s} ${4*s} q${16*s} ${0} ${10*s} ${20*s}z`}
function buildView(c){
  const r=rng(hash('view'+c.date)),fr=rng(hash('valley-fixed')),P=PAL[c.season];V={};
  ['cloudsFar','cloudsNear','precip','particles','village','trees','meadow','lakeFx','boat','branch','rare'].forEach(id=>$(id).replaceChildren());vis.replaceChildren();
  $('midRidge').dataset.c=P.mid;$('nearRidge').dataset.c=P.near;$('farRidge').dataset.c=c.season==='winter'?'#9fb0cc':'#7f8fb8';
  // far snow caps
  // village (fixed positions)
  [[120,0],[138,1],[154,0],[352,1],[368,0],[388,1]].forEach(([x,v],i)=>{const y=rY.mid(x)+4,w=11+fr()*4,h=8+fr()*3,g=el('g',{},$('village'));
    el('rect',{x:x-w/2,y:y-h,width:w,height:h,fill:'#e8d5b5',class:'tn',['data-c']:'#e8d5b5','data-k':'.5'},g);el('polygon',{points:`${x-w/2-1.5},${y-h} ${x},${y-h-7} ${x+w/2+1.5},${y-h}`,fill:'#a5483a',class:'tn','data-c':'#a5483a','data-k':'.5'},g);
    el('rect',{x:x-2,y:y-h+2.5,width:4,height:4,fill:'#ffd27a',class:'lit'},g);
    if((c.season==='winter'||c.season==='autumn'||c.weather==='rain'||c.weather==='fog')&&i%3===0){for(let k=0;k<3;k++){const s=el('circle',{cx:x+3,cy:y-h-8,r:3,fill:'#e8e8ee',class:'smk'},g);s.style.animationDelay=(-k*1.5)+'s'}}});
  // near hill trees (fixed placement; daily: some missing)
  let x=-6;while(x<490){const y=rY.near(x)+3,s=13+fr()*18,col=P.trees[Math.floor(fr()*P.trees.length)],pine=fr()<.55,skip=r()<.08;x+=10+fr()*16;if(skip)continue;
    const g=el('g',{},$('trees'));
    if(pine){el('polygon',{points:`${x-s*.32},${y} ${x},${y-s} ${x+s*.32},${y}`,class:'tn','data-c':col,'data-k':'.12',fill:col},g);el('polygon',{points:`${x-s*.26},${y-s*.35} ${x},${y-s*1.2} ${x+s*.26},${y-s*.35}`,class:'tn','data-c':col,'data-k':'.12',fill:col},g);
      if(c.season==='winter'||c.weather==='snow')el('polygon',{points:`${x-s*.12},${y-s*.9} ${x},${y-s*1.2} ${x+s*.12},${y-s*.9}`,fill:'#fff',opacity:.8},g)}
    else{el('rect',{x:x-1.2,y:y-s*.3,width:2.4,height:s*.3,fill:'#5e3d29',class:'tn','data-c':'#5e3d29','data-k':'.12'},g);el('ellipse',{cx:x,cy:y-s*.62,rx:s*.38,ry:s*.42,class:'tn','data-c':col,'data-k':'.12',fill:col},g)}}
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
  if(c.visitor==='birds'){const g=el('g',{},vis);for(let i=0;i<6;i++){const b=el('path',{d:'M-6 0Q-3 -5 0 0Q3 -5 6 0',stroke:'#1d1d2a','stroke-width':1.6,fill:'none',transform:`translate(${i*15+r()*6},${r()*14+(i%2)*6})`},g);b.style.transformOrigin='center';b.animate([{transform:b.getAttribute('transform')+' scaleY(1)'},{transform:b.getAttribute('transform')+' scaleY(-.6)'}],{duration:500+r()*250,iterations:Infinity,direction:'alternate'})}V.g=g;V.vy=56+r()*30}
  if(c.visitor==='kite'){const g=el('g',{},vis);el('polygon',{points:'0,-14 9,0 0,14 -9,0',fill:'#e8574a'},g);el('path',{d:'M0 14q-8 14 2 26t-4 24',stroke:'#f3e4b8','stroke-width':1.4,fill:'none'},g);V.g=g;V.vx=100+r()*220;V.vy=50}
  if(c.visitor==='plane'){const g=el('g',{},vis);el('rect',{x:-8,y:-1.5,width:16,height:3,rx:1.5,fill:'#f2f2f6'},g);el('polygon',{points:'-2,0 3,0 -3,-8',fill:'#dfe3ee'},g);el('polygon',{points:'-2,0 3,0 -3,8',fill:'#dfe3ee'},g);el('rect',{x:-70,y:-.5,width:62,height:1,fill:'#fff',opacity:.5},g);V.g=g;V.vy=24+r()*20;V.vx=c.wind>0?-100:580}
  // rare skies
  if(c.rare==='aurora'){V.aur=el('g',{style:'mix-blend-mode:screen',opacity:0},$('rare'));for(let i=0;i<3;i++){let d=`M-40 ${70+i*18}`;for(let x=-40;x<=520;x+=20)d+=` L${x} ${(40+i*18+Math.sin(x*.025+i*1.7)*16).toFixed(1)}`;d+=` L520 ${120+i*18} L-40 ${120+i*18}Z`;const p=el('path',{d,fill:'url(#aurG)',class:'aur'},V.aur);p.style.animationDelay=(-i*2.6)+'s'}}
  if(c.rare==='meteors'){V.met=el('g',{},$('rare'));for(let i=0;i<4;i++){const l=el('line',{x1:60+i*95,y1:16+(i%2)*30,x2:92+i*95,y2:28+(i%2)*30,stroke:'#fff','stroke-width':1.6,'stroke-linecap':'round',class:'met',opacity:0},V.met);l.style.animationDelay=(-i*1.7)+'s'}}
  // celestial groups
  $('celestial').replaceChildren();
  V.sun=el('g',{},$('celestial'));el('circle',{r:46,fill:'url(#sunG)'},V.sun);el('circle',{r:13,fill:'#fff6c9'},V.sun);
  V.moon=el('g',{},$('celestial'));el('circle',{r:34,fill:'url(#moonGl)'},V.moon);const mm=el('g',{},V.moon);V.moonShape=mm;
}
function drawMoon(p){const g=V.moonShape;g.replaceChildren();const R=12,q=p<.5?p:1-p,th=q*Math.PI*2,rx=R*Math.abs(Math.cos(th)),cres=Math.cos(th)>0;
  el('circle',{r:R,fill:'#2b3254'},g);el('path',{d:`M0 ${-R}A${R} ${R} 0 0 1 0 ${R}A${rx.toFixed(2)} ${R} 0 0 ${cres?0:1} 0 ${-R}Z`,fill:'#f6f2df'},g);g.setAttribute('transform',p>=.5?'scale(-1,1)':'')}

/* ============ time of day ============ */
const KEYS=[[0,'#05091f','#0f1a3d'],[5,'#0a1030','#2a2250'],[6.5,'#3b3a7a','#f2a36b'],[8,'#5fa0e0','#bfe3f7'],[12,'#3b8fe0','#a7d8f5'],[16,'#4a90d8','#cfe6f2'],[18.5,'#5a5aa8','#f28b5a'],[20,'#1a1e4e','#4a3470'],[21.5,'#070c26','#141f48'],[24,'#05091f','#0f1a3d']];
function skyAt(t){for(let i=0;i<KEYS.length-1;i++){const a=KEYS[i],b=KEYS[i+1];if(t>=a[0]&&t<=b[0]){const k=(t-a[0])/(b[0]-a[0]);return[mix(a[1],b[1],k),mix(a[2],b[2],k)]}}return[KEYS[0][1],KEYS[0][2]]}
const phaseName=t=>t<4.5?'Night':t<6?'Before dawn':t<8?'Dawn':t<11?'Morning':t<14?'Midday':t<17?'Afternoon':t<19?'Golden hour':t<21?'Evening':'Night';
let t=12,auto=true,lampOverride=null,curDate=new Date(),lampOn=false,dark=0,S_={d:1,g:0,dim:1,hor:'#a7d8f5'};

function tint(hex,k){const {d,g,dim,hor}=S_;let c=mix(hex,hor,k*.55*(dim<1?1.3:1));c=mix(c,'#101a36',(1-d)*(.42+.28*(1-k)));c=mix(c,'#ff8a50',g*.2*(1-k*.5));return mix(c,'#8a93a3',(1-dim)*.45)}
function applyTime(){
  const d=clamp(ss(5.5,8.5,t)-ss(17.5,20.5,t));dark=1-d;const wx=cfg.weather,dim=wx==='overcast'||wx==='rain'||wx==='snow'?.55:wx==='fog'?.6:1;
  const g=Math.exp(-Math.pow((t-6.8)/.9,2))+Math.exp(-Math.pow((t-18.3)/1,2)),illum=(1-Math.cos(phase*Math.PI*2))/2;
  const [s0,s1]=skyAt(t),top=mix(s0,'#8a93a3',(1-dim)*.8),hor=mix(s1,'#aab2bf',(1-dim)*.8);S_={d,g:clamp(g),dim,hor};GS={top,hor,d};
  $('sk0').setAttribute('stop-color',top);$('sk1').setAttribute('stop-color',hor);
  $('w0').setAttribute('stop-color',mix(mix(hor,'#9cc6e0',.4),'#0b1630',(1-d)*.7));$('w1').setAttribute('stop-color',mix('#2d6590','#050c1e',(1-d)*.85));
  document.querySelectorAll('.tn').forEach(e=>{const c=tint(e.dataset.c,+e.dataset.k);e.setAttribute('fill',c)});
  document.querySelectorAll('.lit').forEach(e=>e.style.opacity=(1-d)*.95);
  // sun & moon across the sky
  const sp=(t-6)/12,mp=((t+6)%24)/12;
  const pos=(p)=>`translate(${lerp(40,436,clamp(p,-.05,1.05))},${300-250*Math.sin(Math.PI*clamp(p,-.05,1.05))})`;
  V.sun.setAttribute('transform',pos(sp));V.moon.setAttribute('transform',pos(mp));
  const clear=wx==='clear'?1:wx==='partly'?.7:wx==='fog'?.25:.08;
  V.sun.style.opacity=(sp>-.05&&sp<1.05?1:0)*clear;V.moon.style.opacity=(d<.85?1:0)*clear;V.moon.style.transition=V.sun.style.transition='opacity .8s';
  drawMoon(phase);
  $('stars').style.opacity=Math.pow(1-d,1.4)*(wx==='clear'?1:wx==='partly'?.5:wx==='fog'?.2:0);
  const cc=mix(mix('#2a3050','#ffffff',d),'#8e97a6',(1-dim)*1.1);$('cloudsFar').style.opacity=$('cloudsNear').style.opacity=1;
  // fog
  $('fg0').setAttribute('stop-color',hor);$('fg1').setAttribute('stop-color',hor);$('fogRect').style.opacity=wx==='fog'?.78:wx==='rain'||wx==='snow'?.22:wx==='overcast'?.12:0;
  if(V.aur)V.aur.setAttribute('opacity',Math.pow(1-d,2));
  // light shaft through the window
  const moonUp=d<.5,pp=moonUp?mp:sp,sl=clamp(wx==='clear'?1:wx==='partly'?.7:.12)*(moonUp?.18*illum:d)*smooth(pp>0&&pp<1?Math.sin(Math.PI*pp)*3:0);
  $('shaftSkew').setAttribute('transform',`translate(0,390) skewX(${lerp(30,-30,clamp(pp))}) translate(0,-390)`);
  $('shaftG0').style.opacity=sl;$('shaftG0').style.color=moonUp?'#a9c4ff':'#fff';
  $('shaftG0').querySelectorAll('polygon').forEach(p=>p.setAttribute('fill',moonUp?'#9db8ff':'url(#shaftG)'));
  $('motes').style.opacity=sl*1.1;
  $('golden').style.opacity=clamp(g)*.5;
  // inside lights
  lampOn=lampOverride===null?dark>.35:lampOverride;
  $('dark').style.opacity=dark*.8;$('mLamp').style.opacity=lampOn?1:0;$('gLamp').style.opacity=lampOn?.4+dark*.5:0;$('cone').style.opacity=lampOn?.3+dark*.7:0;$('bulb').style.opacity=lampOn?1:0;
  $('shade').setAttribute('fill',lampOn?'#ffd36b':'#e9b44c');
  $('gMon').style.opacity=.12+dark*.7;$('mMon').style.opacity=.5+dark*.3;$('mWin').style.opacity=(1-d)*.3*clear;
  $('flame').style.opacity=dark>.4?1:0;$('gCandle').style.opacity=dark>.4?.7:0;$('mCandle').style.opacity=dark>.4?.9:0;
  $('zz').style.opacity=dark>.4?1:0;
  SPOTS.lamp.node.setAttribute('aria-pressed',lampOn);
  const H=Math.floor(t),M=(t-H)*60;
  $('hHand').setAttribute('transform',`rotate(${((H%12)+M/60)*30} 640 140)`);$('mHand').setAttribute('transform',`rotate(${M*6} 640 140)`);
  // page chrome
  document.body.style.background=mix('#05030c','#2a2142',d);
  $('tt').textContent=`${pad(H)}:${pad(Math.floor(M))}`;$('ph').textContent=phaseName(t);
  $('today').innerHTML=`<em>${WEATHER[cfg.weather]}</em> · ${cfg.season} · ${moonName(phase)}${cfg.visitor?' · '+VIS[cfg.visitor]:''}${cfg.boat?' · a boat on the lake':''}${cfg.rare==='aurora'?' · <em>rare sky: aurora</em>':cfg.rare==='meteors'?' · <em>rare sky: meteor shower</em>':''}`;
  moveClouds(0);
}
const smooth=x=>ss(0,1,x);
function setDate(d){curDate=d;cfg=dayCfg(d);phase=moonPhase(d);$('dateIn').value=cfg.date;buildView(cfg);applyTime()}
const nowHours=()=>{const n=new Date();return n.getHours()+n.getMinutes()/60};

/* ============ animation (clouds, visitors, boat, parallax) ============ */
function moveClouds(dt){
  (V.clouds||[]).forEach(g=>{let x=+g.dataset.x+(+g.dataset.sp)*dt;if(x>540)x=-60;if(x<-60)x=540;g.dataset.x=x;g.setAttribute('transform',`translate(${x},${g.dataset.y})`)});
  const c=cfg;if(V.g){
    if(V.kind==='balloon'){V.vx+=3.6*c.wind*dt;if(Math.abs(V.vx-240)>340)V.vx=c.wind>0?-60:540;V.g.setAttribute('transform',`translate(${V.vx},${V.vy+Math.sin(performance.now()/1500)*3}) `)}
    else if(V.kind==='birds'){V.vx+=14*c.wind*dt;if(Math.abs(V.vx-240)>340)V.vx=c.wind>0?-120:600;V.g.setAttribute('transform',`translate(${V.vx},${V.vy})`)}
    else if(V.kind==='kite'){V.g.setAttribute('transform',`translate(${V.vx},${V.vy+Math.sin(performance.now()/900)*5}) rotate(${Math.sin(performance.now()/700)*8})`)}
    else if(V.kind==='plane'){V.vx+=34*c.wind*dt;if(Math.abs(V.vx-240)>380)V.vx=c.wind>0?-100:580;V.g.setAttribute('transform',`translate(${V.vx},${V.vy}) scale(${c.wind>0?1:-1},1)`)}}
  if(V.boat){const x=V.bx+Math.sin(performance.now()/9000)*18;V.boat.setAttribute('transform',`translate(${x},${246+Math.sin(performance.now()/900)*1.3})`)}
}
const mouse={x:0,y:0},par={x:0,y:0};
function parallax(){par.x+=(mouse.x-par.x)*.06;par.y+=(mouse.y-par.y)*.06;
  [['Lsky',3],['Lfar',6],['Lmid',10],['Lvis',9],['Llake',12],['Lnear',17],['Lweather',17],['Lfg',30]].forEach(([id,f])=>$(id).setAttribute('transform',`translate(${(-par.x*f).toFixed(2)},${(-par.y*f*.4).toFixed(2)})`))}
let last=performance.now();
(function loop(now){raf=requestAnimationFrame(loop);const dt=Math.min((now-last)/1000,.1);last=now;if(!reduce)moveClouds(dt);gameTick(dt);parallax()})(last);

/* ============ camera: fill the whole screen; pan on narrow screens ============ */
let vw=innerWidth,vh=innerHeight,S=1,panX=520;const CY=372;
function fit(){vw=innerWidth;vh=innerHeight;const sFit=Math.min(vw/1200,(vh-70)/760);S=Math.max(sFit,vh/820);
  const W=vw/S,H=vh/S;let cx=600;const narrow=W<1200;if(narrow)cx=clamp(panX,W/2,1200-W/2),panX=cx;
  $('scene').setAttribute('viewBox',`${cx-W/2} ${CY-H/2} ${W} ${H}`);$('scene').setAttribute('preserveAspectRatio','none');
  $('panhint').style.display=narrow?'block':'none'}
listen('resize',fit);fit();
let down=false,sx=0,sy=0,lx=0;
$('scene').addEventListener('pointerdown',e=>{down=true;dragMoved=false;sx=lx=e.clientX;sy=e.clientY});
listen('pointermove',e=>{mouse.x=e.clientX/innerWidth-.5;mouse.y=e.clientY/innerHeight-.5;if(!down)return;
  if(!dragMoved&&Math.hypot(e.clientX-sx,e.clientY-sy)>6){dragMoved=true;$('scene').classList.add('drag');$('panhint').style.opacity=0}
  if(dragMoved&&vw/S<1200){panX-=(e.clientX-lx)/S;fit()}lx=e.clientX});
listen('pointerup',()=>{down=false;$('scene').classList.remove('drag');setTimeout(()=>dragMoved=false,0)});

/* ============ UI ============ */
function toggleLamp(){lampOverride=!lampOn;applyTime()}
function activate(id){const s=SPOTS[id];if(s.lamp){track('room_lamp_toggle');return toggleLamp()}if(s.game)return gameJump();track('room_object_open',{object:id});openPanel(id==='notebook'?ABOUT(false):s.html)}
const panel=$('panel');
function openPanel(html){$('pbody').innerHTML=html;panel.scrollTop=0;panel.classList.add('open')}
const closePanel=()=>panel.classList.remove('open');
$('close').onclick=closePanel;listen('keydown',e=>{if(e.key==='Escape')closePanel();if((e.key==='ArrowUp'||e.key===' ')&&!panel.classList.contains('open')&&(G.idle<6||document.activeElement===SPOTS.game.node)){e.preventDefault();gameJump()}});
$('aboutBtn').onclick=()=>{track('room_object_open',{object:'about'});openPanel(ABOUT(false))};
function showWelcome(){$('wbody').innerHTML=ABOUT(true);$('enter').onclick=hideWelcome}
function hideWelcome(){$('welcome').classList.add('gone');try{localStorage.setItem('introSeen2d','1')}catch(e){}}
$('welcome').addEventListener('click',e=>{if(e.target===$('welcome'))hideWelcome()});
$('slider').addEventListener('input',e=>{auto=false;$('nowBtn').classList.remove('on');t=+e.target.value;lampOverride=null;applyTime()});
$('nowBtn').onclick=()=>{auto=true;$('nowBtn').classList.add('on');lampOverride=null;t=nowHours();$('slider').value=t;setDate(new Date())};
const shiftDay=n=>{const d=new Date(curDate);d.setDate(d.getDate()+n);$('nowBtn').classList.remove('on');setDate(d)};
$('dPrev').onclick=()=>shiftDay(-1);$('dNext').onclick=()=>shiftDay(1);
$('dateIn').addEventListener('change',e=>{if(!e.target.value)return;const[y,m,d]=e.target.value.split('-').map(Number);$('nowBtn').classList.remove('on');setDate(new Date(y,m-1,d))});
timers.push(setInterval(()=>{if(auto){t=nowHours();$('slider').value=t;applyTime()}},20000));

t=nowHours();$('slider').value=t;setDate(new Date());
showWelcome();try{if(localStorage.getItem('introSeen2d')==='1')$('welcome').classList.add('gone')}catch(e){}
const onLink=e=>{const a=e.target.closest&&e.target.closest('a[href]');if(!a)return;const h=a.getAttribute('href')||'';if(/^(https?:|mailto:)/.test(h))track('outbound_click',{link_url:h,link_domain:h.startsWith('mailto:')?'mailto':new URL(h).hostname})};
root.addEventListener('click',onLink);L.push(()=>root.removeEventListener('click',onLink));
return()=>{cancelAnimationFrame(raf);timers.forEach(clearInterval);L.forEach(f=>f());document.body.style.background='';root.innerHTML=''};
}
