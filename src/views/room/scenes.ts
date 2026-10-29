// Animated 2D backdrops for the drawers: one small illustrated scene each, drawn in the same flat style as the room.
// Every scene is a 440x360 SVG body that the drawer anchors to its bottom edge and fades out towards the top, so text stays readable.
// Motion comes from the shared classes in room.css (.d drift, .bob, .tw twinkle, .rise, .sw sweep, .rip, .spin, .sway, .bl blink, .wav, .aur).

const rng = (a: number) => () => {
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const f = (n: number) => n.toFixed(1);

const grad = (id: string, a: string, b: string, mid?: string) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/>${mid ? `<stop offset=".55" stop-color="${mid}"/>` : ''}<stop offset="1" stop-color="${b}"/></linearGradient>`;

const stars = (seed: number, n: number, y0: number, y1: number, col = '#fff') => {
  const r = rng(seed);
  let s = '';
  for (let i = 0; i < n; i++)
    s += `<circle class="tw" cx="${f(r() * 440)}" cy="${f(y0 + r() * (y1 - y0))}" r="${f(0.5 + r() * 1.1)}" fill="${col}" style="--t:${f(2 + r() * 3)}s;--dl:${f(-r() * 4)}s;--o1:.15"/>`;
  return s;
};

const waves = (y: number, col: string, op: number, t: number) => {
  let d = '';
  for (let x = -44; x < 500; x += 44) d += `M${x} ${y}q11 -5 22 0t22 0`;
  return `<g class="wav" style="--t:${t}s"><path d="${d}" fill="none" stroke="${col}" stroke-width="1.4" opacity="${op}" stroke-linecap="round"/></g>`;
};

const gear = (
  cx: number,
  cy: number,
  R: number,
  teeth: number,
  fill: string,
  op: number,
  t: number,
  rev = false
) => {
  let d = '';
  for (let i = 0; i < teeth * 2; i++) {
    const a = (i / (teeth * 2)) * Math.PI * 2,
      k = i % 2 ? R * 0.82 : R,
      a2 = a + (Math.PI / (teeth * 2)) * 0.8;
    d += `${i ? 'L' : 'M'}${f(cx + Math.cos(a) * k)} ${f(cy + Math.sin(a) * k)}L${f(cx + Math.cos(a2) * k)} ${f(cy + Math.sin(a2) * k)}`;
  }
  return `<g class="spin" style="--t:${t}s;${rev ? 'animation-direction:reverse' : ''}"><path d="${d}Z" fill="${fill}" opacity="${op}"/><circle cx="${cx}" cy="${cy}" r="${f(R * 0.32)}" fill="#0000" stroke="#0a0614" stroke-width="3" opacity=".55"/></g>`;
};

// 1. caro drawer: a big lake at dusk with a drifting sailboat
const lake = () => `
<defs>${grad('l0', '#1c1240', '#a8587a', '#5a3a72')}${grad('l1', '#6a4a8e', '#241a48')}<radialGradient id="l2"><stop offset="0" stop-color="#ffd49a"/><stop offset="1" stop-color="#ffb070" stop-opacity="0"/></radialGradient></defs>
<rect width="440" height="360" fill="url(#l0)"/>${stars(3, 22, 0, 120)}
<circle cx="300" cy="196" r="64" fill="url(#l2)" opacity=".55"/><circle cx="300" cy="200" r="22" fill="#ffd9a6"/>
<path d="M0 214L58 160L96 190L150 140L214 206L262 172L330 210L384 150L440 196V224H0Z" fill="#3b2a60"/>
<path d="M0 224L70 190L130 214L210 182L290 220L370 188L440 216V232H0Z" fill="#2c2050"/>
<rect y="222" width="440" height="138" fill="url(#l1)"/>
${[0, 1, 2, 3, 4, 5, 6].map((i) => `<ellipse class="tw" cx="300" cy="${232 + i * 15}" rx="${24 - i * 2}" ry="2" fill="#ffd9a6" style="--t:${f(2.4 + i * 0.5)}s;--dl:${f(-i * 0.6)}s;--o1:.2;--o2:.8"/>`).join('')}
${waves(250, '#c9a6e8', 0.22, 7)}${waves(286, '#c9a6e8', 0.18, 9)}${waves(322, '#c9a6e8', 0.14, 11)}
<g class="d" style="--fx:-70px;--tx:120px;--t:70s"><g class="bob" style="--t:5s"><path d="M120 262h46l-8 11h-30z" fill="#1a1030"/><path d="M142 262V226L166 258z" fill="#ffe6c0" opacity=".9"/><path d="M140 262V232L122 258z" fill="#e8a07a" opacity=".85"/><rect x="141" y="224" width="1.6" height="38" fill="#1a1030"/></g></g>
<g class="rip" style="--t:5s"><ellipse cx="86" cy="300" rx="22" ry="4" fill="none" stroke="#e8d4ff" opacity=".6"/></g><g class="rip" style="--t:5s;--dl:-2.5s"><ellipse cx="86" cy="300" rx="22" ry="4" fill="none" stroke="#e8d4ff" opacity=".6"/></g>
<g class="d" style="--fx:-60px;--tx:420px;--fy:0;--ty:-30px;--t:55s"><path d="M20 78q6 -7 12 0q6 -7 12 0M56 92q5 -6 10 0q5 -6 10 0M2 100q5 -6 10 0q5 -6 10 0" fill="none" stroke="#1a1030" stroke-width="1.8" stroke-linecap="round" opacity=".8"/></g>
<path d="M0 360V318Q40 304 86 322Q130 340 170 360Z" fill="#150c2c"/><g fill="#150c2c"><path class="sway" d="M30 326V282M36 326V270M42 328V288" stroke="#150c2c" stroke-width="2" style="--t:5s"/></g>
<path d="M360 360V332Q400 318 440 330V360Z" fill="#150c2c"/><g class="sway" style="--t:6s"><path d="M392 336L380 296L404 296Z" fill="#150c2c"/><path d="M392 318L374 280L410 280Z" fill="#150c2c"/><path d="M392 300L384 262L400 262Z" fill="#150c2c"/></g>`;

// 2. corkboard drawer: a cabin in the pines, smoke from the chimney
const camp = () => {
  const r = rng(12);
  let pines = '';
  for (let i = 0; i < 14; i++) {
    const x = i * 34 - 10 + r() * 12,
      h = 70 + r() * 70;
    pines += `<path d="M${f(x)} 360L${f(x + 16)} ${f(300 - h * 0.2)}L${f(x + 32)} 360Z M${f(x + 4)} 330L${f(x + 16)} ${f(300 - h)}L${f(x + 28)} 330Z" fill="#0c0820"/>`;
  }
  return `
<defs>${grad('c0', '#0e0826', '#4a2c52', '#2a1a48')}<radialGradient id="c1"><stop offset="0" stop-color="#ffd27a" stop-opacity=".8"/><stop offset="1" stop-color="#ffb050" stop-opacity="0"/></radialGradient></defs>
<rect width="440" height="360" fill="url(#c0)"/>${stars(8, 34, 0, 190)}
<circle cx="90" cy="70" r="20" fill="#fbeccd"/><circle cx="98" cy="64" r="18" fill="#2a1a48" opacity=".9"/>
<path d="M0 250Q80 210 150 240T300 230T440 250V360H0Z" fill="#1a1036"/>
${pines}
<g transform="translate(230 262)"><rect x="-6" y="-8" width="10" height="20" fill="#1a1030"/><rect x="-44" y="10" width="110" height="64" fill="#3a2230"/><path d="M-54 12L11 -34L76 12Z" fill="#2a1824"/><rect x="-24" y="30" width="22" height="22" fill="#ffd27a"/><rect x="26" y="30" width="22" height="22" fill="#ffd27a" class="bl" style="--t:7s"/><rect x="-14" y="40" width="2" height="12" fill="#3a2230" opacity=".6"/><rect x="2" y="44" width="16" height="30" fill="#1e1018"/>
<ellipse cx="-13" cy="42" rx="40" ry="34" fill="url(#c1)" opacity=".5"/></g>
${[0, 1, 2, 3].map((i) => `<circle class="rise" cx="${f(228 + i * 2)}" cy="226" r="${f(6 + i)}" fill="#d9cfe8" opacity=".5" style="--t:7s;--dl:${-i * 1.8}s;--ry:-90px"/>`).join('')}
<rect y="330" width="440" height="30" fill="#0c0820"/>
<g transform="translate(110 336)"><path d="M-10 0L10 -8M-10 -8L10 0" stroke="#4a2c1c" stroke-width="3" stroke-linecap="round"/><path class="bl" d="M0 -6Q-7 -16 0 -26Q7 -16 0 -6Z" fill="#ffb040" style="--t:1.2s"/><circle cx="0" cy="-12" r="26" fill="url(#c1)" opacity=".6"/>
${[0, 1, 2].map((i) => `<circle class="rise" cx="${f(i * 4 - 4)}" cy="-18" r="1.4" fill="#ffd27a" style="--t:3s;--dl:${-i}s;--ry:-60px"/>`).join('')}</g>`;
};

// 3. bookshelf drawer: the lighthouse of "Lampje", its beam sweeping a night sea
const lighthouse = () => `
<defs>${grad('h0', '#0a1030', '#2a4a78', '#18305a')}${grad('h1', '#1c3c6a', '#0a1230')}<linearGradient id="h2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".7"/><stop offset="1" stop-color="#ffe9a8" stop-opacity="0"/></linearGradient></defs>
<rect width="440" height="360" fill="url(#h0)"/>${stars(5, 26, 0, 170)}
<circle cx="72" cy="74" r="18" fill="#f3ecd2"/><circle cx="64" cy="68" r="3" fill="#c8c0a2"/><circle cx="78" cy="80" r="4.4" fill="#c8c0a2"/>
<rect y="214" width="440" height="146" fill="url(#h1)"/>
${waves(240, '#8ab6e8', 0.2, 8)}${waves(272, '#8ab6e8', 0.18, 10)}${waves(306, '#8ab6e8', 0.15, 7)}${waves(338, '#8ab6e8', 0.12, 9)}
<g class="d" style="--fx:-30px;--tx:40px;--t:60s"><g class="bob"><path d="M60 236h44l-6 10H66z" fill="#0a0f24"/><rect x="82" y="214" width="1.6" height="22" fill="#0a0f24"/><path d="M84 216L98 234H84Z" fill="#e8e0c0" opacity=".85"/></g></g>
<path d="M290 360V250Q320 236 346 244L440 236V360Z" fill="#0a1224"/><path d="M296 258Q330 248 360 252" fill="none" stroke="#2a4a78" stroke-width="2" opacity=".6"/>
<g transform="translate(340 246)"><path d="M-17 0L-11 -86H11L17 0Z" fill="#f2ece0"/><path d="M-15 -26L-13.6 -42H13.6L15 -26ZM-12.6 -60L-11.6 -74H11.6L12.6 -60Z" fill="#c0504d"/><rect x="-14" y="-92" width="28" height="7" fill="#1a2440"/><rect x="-9" y="-108" width="18" height="16" fill="#ffe9a8"/><path d="M-13 -108L0 -122L13 -108Z" fill="#c0504d"/>
<g class="sw" style="transform-origin:0px -100px;--t:8s;--a1:-18deg;--a2:18deg"><polygon points="0,-100 -230,-134 -230,-70" fill="url(#h2)" transform="scale(-1 1)"/><polygon points="0,-100 -230,-134 -230,-70" fill="url(#h2)"/></g>
<circle cy="-100" r="16" fill="#ffe9a8" opacity=".35"/></g>
<g class="tw" style="--t:4s;--o1:.5"><circle cx="340" cy="146" r="6" fill="#ffe9a8" opacity=".5"/></g>`;

// 4. tablet drawer: desert ruins with glowing runes
const ruins = () => {
  const r = rng(31);
  let runes = '';
  for (let i = 0; i < 14; i++)
    runes += `<circle class="rise" cx="${f(60 + r() * 330)}" cy="${f(250 + r() * 70)}" r="${f(1 + r() * 1.4)}" fill="#ffd98a" style="--t:${f(5 + r() * 5)}s;--dl:${f(-r() * 8)}s;--ry:-${Math.round(70 + r() * 90)}px"/>`;
  return `
<defs>${grad('r0', '#0c0a22', '#7a4a5a', '#3a2850')}${grad('r1', '#5a3a4a', '#1c1226')}<radialGradient id="r2"><stop offset="0" stop-color="#ffd98a" stop-opacity=".9"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient></defs>
<rect width="440" height="360" fill="url(#r0)"/>${stars(21, 30, 0, 160)}
<path d="M0 238Q90 204 190 232T330 222T440 236V360H0Z" fill="#3a2440"/><path d="M0 266Q120 238 240 262T440 258V360H0Z" fill="url(#r1)"/><path d="M0 306Q150 284 290 304T440 300V360H0Z" fill="#1c1226"/>
<g transform="translate(110 262)"><path d="M-18 0V-80H18V0Z" fill="#2a1c34"/><path d="M-18 -80Q0 -92 18 -80" fill="#2a1c34"/><g class="tw" style="--t:3.4s;--o1:.45;--o2:1" stroke="#ffd98a" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M-6 -66L0 -58L6 -66M0 -58V-44M-7 -40L7 -28"/></g><circle cy="-52" r="26" fill="url(#r2)" opacity=".35"/></g>
<g transform="translate(300 266)"><path d="M-22 0V-110H22V0Z" fill="#2a1c34"/><path d="M-22 -110L0 -124L22 -110Z" fill="#2a1c34"/><g class="tw" style="--t:4.2s;--dl:-1.2s;--o1:.45;--o2:1" stroke="#ffd98a" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M-8 -90H8M0 -90V-74M-8 -66L8 -56M-6 -50L6 -42"/></g><circle cy="-70" r="32" fill="url(#r2)" opacity=".3"/></g>
<path d="M356 266V214L372 214L372 244L388 244V266Z" fill="#2a1c34"/><path d="M40 270V250L60 250V270Z" fill="#2a1c34"/>
<g class="d" style="--fx:-24px;--tx:24px;--t:30s"><path d="M200 250h32v16h-32z" fill="#33223c"/></g>
${runes}`;
};

// 5. computer drawer: a night city, blinking windows and a train crossing
const city = () => {
  const r = rng(44);
  let b = '',
    w = '';
  let x = -4;
  while (x < 440) {
    const bw = 24 + Math.floor(r() * 30),
      bh = 70 + Math.floor(r() * 150),
      y = 330 - bh;
    b += `<rect x="${x}" y="${y}" width="${bw}" height="${bh + 40}" fill="${r() < 0.5 ? '#1c1236' : '#241846'}"/>`;
    for (let wy = y + 8; wy < 322; wy += 11)
      for (let wx = x + 5; wx < x + bw - 6; wx += 8)
        if (r() < 0.42)
          w += `<rect ${r() < 0.18 ? `class="bl" style="--t:${f(4 + r() * 6)}s;--dl:${f(-r() * 8)}s"` : ''} x="${wx}" y="${wy}" width="3.6" height="5" fill="${r() < 0.7 ? '#ffd98a' : '#f29bb8'}" opacity=".85"/>`;
    x += bw + 2;
  }
  return `
<defs>${grad('y0', '#0a0620', '#6a3a7a', '#2a1850')}</defs>
<rect width="440" height="360" fill="url(#y0)"/>${stars(9, 26, 0, 120)}
<circle cx="350" cy="86" r="22" fill="#f7ecd8"/><circle cx="358" cy="80" r="20" fill="#2a1850" opacity=".85"/>
${b}${w}
<g class="d" style="--fx:-120px;--tx:460px;--t:14s"><g><rect x="0" y="270" width="26" height="9" rx="2" fill="#2a1a4a"/><rect x="28" y="270" width="26" height="9" rx="2" fill="#2a1a4a"/><rect x="56" y="270" width="26" height="9" rx="2" fill="#2a1a4a"/>${[4, 12, 20, 32, 40, 48, 60, 68, 76].map((q) => `<rect x="${q}" y="272" width="4" height="3" fill="#ffd98a"/>`).join('')}</g></g>
<rect y="279" width="440" height="3" fill="#120a28"/>
<rect y="330" width="440" height="30" fill="#0e0820"/>
<g class="d" style="--fx:-20px;--tx:20px;--t:26s"><path d="M30 120h34M120 84h42M300 140h40" stroke="#f29bb8" stroke-width="1.4" opacity=".25" stroke-linecap="round"/></g>`;
};

// 6. phone drawer: a dusk sky with drifting clouds and paper planes
const sky = () => `
<defs>${grad('s0', '#1c1442', '#e09a8a', '#7a5a9a')}</defs>
<rect width="440" height="360" fill="url(#s0)"/>${stars(14, 16, 0, 90)}
<circle cx="360" cy="236" r="30" fill="#ffd9b0" opacity=".9"/><circle cx="360" cy="236" r="52" fill="#ffd9b0" opacity=".18"/>
<g class="d" style="--fx:-50px;--tx:60px;--t:60s"><g fill="#f4d4dc" opacity=".55"><ellipse cx="90" cy="130" rx="46" ry="12"/><ellipse cx="118" cy="120" rx="30" ry="12"/><ellipse cx="70" cy="122" rx="26" ry="10"/></g></g>
<g class="d" style="--fx:60px;--tx:-70px;--t:80s"><g fill="#f4d4dc" opacity=".4"><ellipse cx="330" cy="170" rx="54" ry="13"/><ellipse cx="300" cy="160" rx="30" ry="11"/><ellipse cx="358" cy="160" rx="26" ry="10"/></g></g>
<g class="d" style="--fx:-60px;--tx:420px;--fy:60px;--ty:-70px;--t:24s"><g class="bob" style="--t:3s"><path d="M0 0L40 -10L16 12Z" fill="#fff6e6"/><path d="M16 12L40 -10L18 2Z" fill="#d8c4b8"/></g></g>
<g class="d" style="--fx:440px;--tx:-80px;--fy:40px;--ty:-30px;--t:36s"><g class="bob" style="--t:3.6s;--dl:-1s"><path d="M0 0L30 -8L12 8Z" fill="#fff6e6" opacity=".8"/></g></g>
<path d="M0 290Q70 262 150 284T300 276T440 288V360H0Z" fill="#3a2860"/><path d="M0 320Q110 296 220 316T440 310V360H0Z" fill="#1e1442"/>
<g class="d" style="--fx:-8px;--tx:8px;--ty:-14px;--t:7s"><g transform="translate(70 214)"><ellipse rx="14" ry="17" fill="#f29bb8"/><path d="M-3 17L0 21L3 17Z" fill="#f29bb8"/><path d="M0 21Q-6 40 0 58" fill="none" stroke="#f4d4dc" stroke-width="1" opacity=".7"/></g></g>`;

// 7. notebook / about drawer: a golden meadow with a windmill and dandelion seeds
const meadow = () => {
  const r = rng(52);
  let fl = '',
    seeds = '';
  for (let i = 0; i < 26; i++) {
    const x = r() * 440,
      y = 300 + r() * 50;
    fl += `<g class="sway" style="--t:${f(3 + r() * 3)}s;--dl:${f(-r() * 5)}s"><path d="M${f(x)} ${f(y)}v-${Math.round(10 + r() * 10)}" stroke="#2c5a3a" stroke-width="1.2"/><circle cx="${f(x)}" cy="${f(y - 14)}" r="${f(2 + r() * 1.6)}" fill="${['#ffd98a', '#f29bb8', '#fff', '#e8a063'][Math.floor(r() * 4)]}"/></g>`;
  }
  for (let i = 0; i < 9; i++)
    seeds += `<g class="d" style="--fx:${Math.round(-20 + r() * 20)}px;--tx:${Math.round(40 + r() * 80)}px;--fy:0px;--ty:${Math.round(-40 - r() * 30)}px;--t:${f(14 + r() * 12)}s"><circle cx="${f(30 + r() * 300)}" cy="${f(200 + r() * 90)}" r="1.5" fill="#fff6e6" opacity=".85"/></g>`;
  return `
<defs>${grad('m0', '#2a1850', '#f2b27a', '#a8587a')}${grad('m1', '#3a5a3c', '#14281e')}</defs>
<rect width="440" height="360" fill="url(#m0)"/>${stars(6, 14, 0, 80)}
<circle cx="110" cy="222" r="26" fill="#ffe2a8"/><circle cx="110" cy="222" r="56" fill="#ffe2a8" opacity=".2"/>
<path d="M0 262Q100 226 210 258T440 246V360H0Z" fill="#6a4a5a"/><path d="M0 290Q130 258 260 286T440 280V360H0Z" fill="url(#m1)"/>
<g transform="translate(330 254)"><path d="M-10 36L-6 -6H6L10 36Z" fill="#3a2a34"/><path d="M-8 -6L0 -16L8 -6Z" fill="#2a1c26"/><g class="spin" style="--t:14s"><path d="M0 -10L-4 -52L4 -52ZM0 -10L52 -4L52 4ZM0 -10L4 32L-4 32ZM0 -10L-52 4L-52 -4Z" fill="#e8d4b0" opacity=".9" transform="translate(0 0)"/></g></g>
${fl}${seeds}`;
};

// 8. window drawer: aurora over snowy peaks
const aurora = () => `
<defs>${grad('a0', '#060a22', '#143a5a', '#0e2244')}${grad('a1', '#7affc0', '#3a8aff')}</defs>
<rect width="440" height="360" fill="url(#a0)"/>${stars(2, 40, 0, 200)}
<g class="aur" style="--t:9s"><path d="M-20 130Q60 60 140 110T300 90T460 120V170Q380 140 300 160T140 150T-20 180Z" fill="url(#a1)" opacity=".8"/></g>
<g class="aur" style="--t:12s;--dl:-4s"><path d="M-20 150Q80 100 170 140T330 120T460 150V190Q380 170 300 186T150 180T-20 200Z" fill="#b08aff" opacity=".6"/></g>
<g class="aur" style="--t:7s;--dl:-2s"><path d="M60 80Q120 40 190 74T330 66" fill="none" stroke="#9affd0" stroke-width="10" opacity=".45" stroke-linecap="round"/></g>
<path d="M0 270L56 196L90 232L150 150L220 250L270 206L340 160L400 236L440 214V360H0Z" fill="#1a2a4e"/>
<path d="M150 150L132 176L148 170L158 182L170 166ZM340 160L324 182L338 178L350 190L360 174Z" fill="#dff0ff" opacity=".85"/>
<path d="M0 300Q80 270 170 296T320 288T440 296V360H0Z" fill="#0a1430"/>
<g fill="#08102a"><path d="M40 330L50 290L60 330ZM52 330L64 276L76 330ZM360 330L372 284L384 330ZM376 330L386 296L396 330Z"/></g>
<g class="tw" style="--t:3s"><circle cx="220" cy="300" r="2" fill="#ffd98a"/></g>`;

// 9. clock drawer: brass gears turning under a starry sky
const clockwork = () => `
<defs>${grad('k0', '#0c0818', '#3a2a28', '#1c1426')}</defs>
<rect width="440" height="360" fill="url(#k0)"/>${stars(17, 24, 0, 170, '#ffe9b0')}
${gear(110, 270, 78, 14, '#7a5a2a', 0.55, 40)}${gear(238, 304, 52, 10, '#a8782e', 0.5, 26, true)}${gear(330, 236, 66, 12, '#6a4a22', 0.5, 34)}${gear(404, 320, 44, 9, '#8a6226', 0.5, 22, true)}${gear(40, 350, 40, 8, '#8a6226', 0.45, 20, true)}`;

export const SCENES: Record<string, () => string> = {
  board: lake,
  cork: camp,
  shelf: lighthouse,
  tablet: ruins,
  desk: city,
  phone: sky,
  notebook: meadow,
  about: meadow,
  window: aurora,
  clock: clockwork,
};
