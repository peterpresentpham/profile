/* eslint-disable */
// @ts-nocheck
// Text and hot areas of the drawers. `makeSpots` returns a fresh object per room because the engine stores DOM nodes on it.
export const ABOUT = (welcome)=>`
  <div class="eyebrow">${welcome?'Welcome':'About me'}</div><h2 id="ptitle">Hi, I'm Peter.</h2>
  <p>I write software — web apps, backends, blockchain protocols — and I keep making small worlds: maps that generate themselves, a game about days that repeat, a language that doesn't exist yet.</p>
  <p>This room is where I keep them. <b class="w">The window shows today's world</b> and changes a little every day; the room follows your clock, so the lamp comes on when it gets dark where you are.</p>
  <p class="note">Draft. Add a few lines in your own voice here: what you care about, what you're curious about, what you do away from the keyboard.</p>
  ${welcome?'':`<p><a class="btn" href="mailto:phamhongphuc.present@gmail.com">Email</a><a class="btn g" href="https://github.com/peterpresentpham" target="_blank" rel="noopener noreferrer">GitHub</a><a class="btn g" href="https://www.linkedin.com/in/peter-present/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>`}
  ${welcome?'':'<p class="note">Music on the speaker: Bach, Prelude in C (Kimiko Ishizaka, CC0) in the daytime; Satie, Gymnopédie No. 1 (Robin Alciatore via Musopen, public domain) at night.</p>'}
  ${welcome?'<div style="margin-top:18px"><button class="btn" id="enter" type="button">Come in →</button></div>':''}`;

export const makeSpots = () => ({
  window:{label:'Window — Fantasy World',x:18,y:44,w:546,h:372,html:`
    <div class="eyebrow">Through the window</div><h2 id="ptitle">Fantasy World</h2>
    <p>A procedural fantasy world map generator: deterministic seeds, terrain simulation, hydrology, nations and ethnic regions. Same seed, same world — every time.</p>
    <span class="tag">Next.js</span><span class="tag">Procedural generation</span>
    <a class="btn" href="https://fantasy.peter-present.xyz/" target="_blank" rel="noopener noreferrer">Open the world</a>
    <p class="note">The valley outside is generated too: the weather, season, moon phase and visitors change every day.</p>`},
  clock:{label:'Wall clock — Như Hôm Qua',x:584,y:84,w:112,h:112,html:`
    <div class="eyebrow">Game · Như Hôm Qua</div><h2 id="ptitle">Every day repeats yesterday, unless you do something different.</h2>
    <p>A short browser game about a young office worker's probation week. Each part of the day remembers what you did yesterday: repeat it and it wears down, change it and it freshens, at a cost.</p>
    <span class="tag">Svelte 5</span><span class="tag">TypeScript</span><span class="tag">Vietnamese + English</span>`},
  board:{label:'Caro board — Playground',x:82,y:556,w:262,h:140,html:`
    <div class="eyebrow">Small experiments</div><h2 id="ptitle">Things that run in your browser</h2>
    <div class="row">
      <a href="https://experiment.peter-present.xyz/caro" target="_blank" rel="noopener noreferrer"><span>Caro (Gomoku)</span><span>play ↗</span></a>
      <a href="https://experiment.peter-present.xyz/pikachu" target="_blank" rel="noopener noreferrer"><span>Pikachu match</span><span>play ↗</span></a>
      <a href="https://experiment.peter-present.xyz/process" target="_blank" rel="noopener noreferrer"><span>CPU scheduler</span><span>visualise ↗</span></a>
      <a href="https://fantasy.peter-present.xyz/" target="_blank" rel="noopener noreferrer"><span>Fantasy World</span><span>procedural maps ↗</span></a>
    </div>`},
  cork:{label:'Corkboard — Recovery Wallet',x:722,y:68,w:222,h:188,html:`
    <div class="eyebrow">Thesis project</div><h2 id="ptitle">Recovery ERC-4337 Wallet</h2>
    <p>Lose a seed phrase, lose everything. Classic social recovery leaks the guardian list on-chain. This wallet lets guardians help you recover — without revealing who they are, using zero-knowledge proofs.</p>
    <span class="tag">ERC-4337</span><span class="tag">Zero-knowledge</span><span class="tag">Circom</span><span class="tag">Solidity</span><span class="tag">wagmi</span>
    <h3>Two decisions that shaped it</h3>
    <p><b class="w">Keep guardians private.</b> Commit to the guardian set; guardians prove membership instead of listing addresses.</p>
    <div class="trade"><div class="g"><b>Gain</b>Identities stay hidden</div><div class="c"><b>Cost</b>Heavier proofs; circuit needs audit</div></div>
    <p><b class="w">Verify on-chain.</b> No off-chain service can approve a recovery.</p>
    <div class="trade"><div class="g"><b>Gain</b>No trusted relayer</div><div class="c"><b>Cost</b>More gas</div></div>
    <a class="btn" href="https://experiment.peter-present.xyz/blog/master-thesis" target="_blank" rel="noopener noreferrer">Read the thesis</a><a class="btn g" href="https://github.com/peterpresentpham/account-abstraction-app" target="_blank" rel="noopener noreferrer">UI</a><a class="btn g" href="https://github.com/peterpresentpham/account-abstraction-contract" target="_blank" rel="noopener noreferrer">Contracts</a><a class="btn g" href="https://github.com/peterpresentpham/bundler" target="_blank" rel="noopener noreferrer">Bundler</a>
    <p class="note">Draft: decisions inferred from the project description — rewrite in your own words.</p>`},
  shelf:{label:'Bookshelf — Writing',x:1004,y:38,w:178,h:580,html:`
    <div class="eyebrow">Writing</div><h2 id="ptitle">Notes to myself, in public</h2>
    <div class="row">
      <a href="https://experiment.peter-present.xyz/blog/master-thesis" target="_blank" rel="noopener noreferrer"><span>Account Abstraction Wallet with Social Recovery (ZK)</span><span>Thesis</span></a>
      <a href="https://blog.peter-present.xyz/snark" target="_blank" rel="noopener noreferrer"><span>zk-SNARK, explained</span><span>Note</span></a>
      <a href="https://blog.peter-present.xyz/" target="_blank" rel="noopener noreferrer"><span>All posts</span><span>→</span></a>
    </div>`},
  tablet:{label:'Stone tablet — Decipher',x:1040,y:206,w:100,h:124,html:`
    <div class="eyebrow">Game · Decipher</div><h2 id="ptitle">A new alien language every day.</h2>
    <svg viewBox="0 0 640 110" style="width:100%;height:auto;margin:6px 0 2px;display:block" role="img" aria-label="Carved on the tablet: đèn nhỏ và những đứa con của biển"><use href="#rg0" transform="translate(40,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg1" transform="translate(110,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg2" transform="translate(180,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg3" transform="translate(250,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg4" transform="translate(320,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg5" transform="translate(390,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg6" transform="translate(460,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/><use href="#rg7" transform="translate(530,84) scale(.052,-.052)" fill="#8f8a96" opacity=".9"/></svg><p>Each day's language is generated entirely by algorithm from the UTC date — no backend. You read sentences carved on stone tablets (with translations), work out what each symbol means and how the grammar works, solve puzzles, and finally write a whole passage back in the alien script.</p>
    <p>Two modes: <b class="w">easy</b> (fewer words, three puzzles, earlier hints) and <b class="w">advanced</b> (full vocabulary, four puzzles).</p>
    <span class="tag">Procedural generation</span><span class="tag">Web Audio</span><span class="tag">No backend</span>
    <a class="btn" href="https://decipher.peter-present.xyz/" target="_blank" rel="noopener noreferrer">Play today's language</a>`},
  desk:{label:'Computer — Workbench',x:694,y:310,w:188,h:128,html:`
    <div class="eyebrow">Workbench</div><h2 id="ptitle">What I build with day to day</h2>
    <div class="row">
      <a href="https://github.com/peterpresentpham/profile" target="_blank" rel="noopener noreferrer"><span>This profile site</span><span>Next · React · Tailwind</span></a>
      <a href="https://blog.peter-present.xyz/" target="_blank" rel="noopener noreferrer"><span>Blog platform</span><span>Next · shadcn</span></a>
      <a href="https://github.com/peterpresentpham/nestjs-project" target="_blank" rel="noopener noreferrer"><span>NestJS backend</span><span>PostgreSQL · Redis · WebSocket · JWT</span></a>
      <a href="https://www.npmjs.com/package/@peter-present/react-hook-utils" target="_blank" rel="noopener noreferrer"><span>react-hook-utils</span><span>npm package</span></a>
    </div>
    <h3>What I reach for</h3>
    <p><b class="w">Web:</b> TypeScript · React · Next.js · Svelte · NestJS · PostgreSQL<br><b class="w">Chain:</b> Solidity · ERC-4337 · Circom · wagmi</p>`},
  game:{label:'Play the game — click, tap or Space',x:708,y:324,w:160,h:96,game:true},
  phone:{label:'Phone — Say hi',x:838,y:420,w:52,h:26,html:`
    <div class="eyebrow">Say hi</div><h2 id="ptitle">Found something you like?</h2>
    <p>Happy to talk about any of this — games, languages, ZK, or why days feel the same.</p>
    <a class="btn" href="mailto:phamhongphuc1999.mywork@gmail.com">Email</a><a class="btn g" href="https://github.com/peterpresentpham" target="_blank" rel="noopener noreferrer">GitHub</a><a class="btn g" href="https://www.linkedin.com/in/peter-present/" target="_blank" rel="noopener noreferrer">LinkedIn</a>`},
  lamp:{label:'Lamp — toggle light',x:604,y:326,w:112,h:122,lamp:true},
  ceiling:{label:'Chandelier — toggle light',x:528,y:-14,w:144,h:76,ceil:true},
  cat:{label:'Cat — say hi',x:462,y:626,w:122,h:62,cat:true},
  speaker:{label:'Speaker — music on/off',x:1030,y:131,w:56,h:57,music:true},
  // after the lamp, whose hot area overlaps it: later entries sit on top and receive the click
  notebook:{label:'Notebook — About me',x:655,y:424,w:46,h:20,html:null},
});
