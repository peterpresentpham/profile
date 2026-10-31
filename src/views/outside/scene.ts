/* eslint-disable */
// @ts-nocheck
import { clamp, mix, rng, hash } from '../shared/helpers';
import { PAL, cloudPath, dayCfg } from '../shared/world';
import { rY, valleyLayout } from '../shared/valley';

// The Kindle scene: the house seen from the village shore, across the lake. It is the reverse of what the room's window shows
// (same lake, mountains, season, weather, visitors and boat), and the house's one big window looks back at you.
// Pure drawing: `createScene(rt)` returns a function that turns the room's current state into SVG markup. Everything that is
// randomness (flowers, mist, sheep...) comes from streams seeded by the date, so the same day always looks the same.
const f = (n) => n.toFixed(1);

export function createScene(rt) {
  const { st, lite } = rt;

  const tint = (hex, k) => {   // same colour grading as the window view in the room
    const { d, g, dim, hor } = st.S_;
    let c = mix(hex, hor, k * 0.55 * (dim < 1 ? 1.3 : 1));
    c = mix(c, '#101a36', (1 - d) * (0.42 + 0.28 * (1 - k)));
    c = mix(c, '#ff8a50', g * 0.2 * (1 - k * 0.5));
    return mix(c, '#8a93a3', (1 - dim) * 0.45);
  };

  function scene() {
    const c = st.cfg, S = st.S_, d = S.d, dark = 1 - d, wx = c.weather, season = c.season, P = PAL[season];
    const r = rng(hash('out' + c.date)), t = st.t;
    const L = valleyLayout(c, rng(hash('view' + c.date)), rng(hash('valley-fixed')));   // the very same valley the window shows
    const snowy = season === 'winter' || wx === 'snow';
    const clear = wx === 'clear' ? 1 : wx === 'partly' ? 0.7 : wx === 'fog' ? 0.25 : 0.08;
    const lampLit = st.lampOn || st.ceilOn;
    const mx = (x) => 476 - x;   // the viewer faces the other way, so the window's left-right is mirrored
    const poly = (fn, x0 = -10, x1 = 490) => {
      let p = `M${x0} 290`;
      for (let x = x0; x <= x1; x += 6) p += ` L${x} ${f(fn(x))}`;
      return `${p} L${x1} 290Z`;
    };
    const yFar = (x) => 134 - (150 - rY.far(mx(x))) * 0.78;
    const yHill = (x) => 150 - (206 - rY.mid(mx(x) + 60)) * 0.5;
    const yMead = (x) => 164 + (rY.near(mx(x)) - 239) * 0.28;
    const BANK = 178;   // where the meadow meets the lake
    const HX = 240, HY = Math.min(yMead(HX) + 5, 172);   // the house, a long way off, set back from the bank
    let s = '';

    s += `<defs><linearGradient id="oSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${st.GS.top}"/><stop offset="1" stop-color="${st.GS.hor}"/></linearGradient>
      <linearGradient id="oFogW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${S.hor}" stop-opacity="0"/><stop offset="1" stop-color="${S.hor}" stop-opacity="1"/></linearGradient>
      <radialGradient id="oVig" cx=".5" cy=".55" r=".75"><stop offset=".62" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient>
      <linearGradient id="oHz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb070" stop-opacity="0"/><stop offset="1" stop-color="#ffb070" stop-opacity=".9"/></linearGradient>
      <clipPath id="oLake"><rect x="-10" y="${BANK}" width="500" height="120"/></clipPath></defs>`;
    s += `<rect x="-10" y="-10" width="500" height="${BANK + 20}" fill="url(#oSky)"/>`;
    // sunrise glow low in the east (right), sunset glow in the west (left); the sun itself is behind you
    if (S.g > 0.05) s += `<ellipse cx="${t < 12 ? 500 : -20}" cy="132" rx="210" ry="64" fill="#ff9a5a" opacity="${f(S.g * 0.5)}"/><rect x="-10" y="92" width="500" height="${BANK - 92}" fill="url(#oHz)" opacity="${f(S.g * 0.4)}"/>`;
    const rs = rng(hash('osky' + c.date)), rf = rng(hash('oflora' + c.date)), rw = rng(hash('owater' + c.date));
    if (dark > 0.6 && (wx === 'clear' || wx === 'partly'))
      for (let i = 0; i < 3; i++) s += `<g transform="translate(${f(60 + rs() * 260)} ${f(8 + rs() * 50)}) rotate(24)"><line class="sht" x1="-16" y1="0" x2="0" y2="0" stroke="#fff" stroke-width=".9" stroke-linecap="round" style="animation-duration:${8 + i * 3}s;animation-delay:${f(-rs() * 9)}s"/></g>`;

    const starOp = Math.pow(dark, 1.4) * (wx === 'clear' ? 1 : wx === 'partly' ? 0.5 : wx === 'fog' ? 0.2 : 0);
    if (starOp > 0.02) {
      // twinkling is animated per group of stars, not per star: a hundred separate animations cost the main thread on every frame
      const buckets = ['', '', '', '', '', ''];
      for (let i = 0, n = lite ? 40 : 80; i < n; i++) {
        buckets[i % 6] += `<circle cx="${f(r() * 480)}" cy="${f(r() * 110)}" r="${f(0.4 + r() * 0.9)}"/>`;
        r(); r();
      }
      s += `<g opacity="${f(starOp)}" fill="#fff">${buckets.map((b, i) => `<g class="tw" style="--t:${f(2.2 + i * 0.55)}s;--dl:${f(-i * 0.8)}s;--o1:.2">${b}</g>`).join('')}</g>`;
    }
    if (c.rare === 'aurora' && dark > 0.3) {
      s += `<g style="mix-blend-mode:screen" opacity="${f(Math.pow(dark, 2))}">`;
      for (let i = 0; i < 3; i++) {
        let p = `M-10 ${70 + i * 16}`;
        for (let x = -10; x <= 490; x += 20) p += ` L${x} ${f(36 + i * 16 + Math.sin(x * 0.025 + i * 1.7) * 16)}`;
        s += `<path class="aur" d="${p} L490 ${110 + i * 16} L-10 ${110 + i * 16}Z" fill="url(#aurG)" style="--dl:${f(-i * 2.6)}s"/>`;
      }
      s += '</g>';
    }

    // visitors of the day: the ones that pass the window, now seen from the other side
    const drift = (inner, x, y, dx, secs) => `<g transform="translate(${f(x)} ${f(y)})"><g class="d" style="--fx:${-dx}px;--tx:${dx}px;--t:${secs}s">${inner}</g></g>`;
    if (c.visitor === 'balloon')
      s += drift(`<ellipse rx="9" ry="11" fill="${tint('#d9483a', 0.1)}"/><path d="M-3 -10Q-9 0 -3 10M3 -10Q9 0 3 10" stroke="${tint('#f3e4b8', 0.1)}" stroke-width="2" fill="none"/><rect x="-2.6" y="14" width="5.2" height="4" fill="${tint('#8a5a3a', 0.1)}"/><path d="M-5 9L-2 14M5 9L2 14" stroke="#3a2d22" stroke-width=".6"/>`, 130 + r() * 220, 44 + r() * 26, -36 * c.wind, 46);
    if (c.visitor === 'birds') {
      let b = '';
      for (let i = 0; i < 6; i++) b += `<path class="bob" d="M-4 0Q-2 -3.4 0 0Q2 -3.4 4 0" stroke="#1d1d2a" stroke-width="1.1" fill="none" transform="translate(${i * 10 + r() * 4} ${r() * 9 + (i % 2) * 4})" style="--t:${f(0.7 + r() * 0.4)}s"/>`;
      s += drift(b, 150 + r() * 120, 52 + r() * 22, -70 * c.wind, 30);
    }
    if (c.visitor === 'kite')
      s += drift(`<polygon points="0,-9 6,0 0,9 -6,0" fill="${tint('#e8574a', 0.1)}"/><path d="M0 9q-5 9 1 17t-3 16" stroke="${tint('#f3e4b8', 0.1)}" stroke-width=".9" fill="none"/>`, 330 + r() * 40, 60, -18, 8);
    if (c.visitor === 'plane')
      s += drift(`<rect x="-6" y="-1" width="12" height="2.2" rx="1" fill="${tint('#f2f2f6', 0.1)}"/><rect x="-52" y="-.4" width="46" height=".8" fill="#fff" opacity=".45"/>`, 240, 26 + r() * 14, -190, 44);

    const nC = { clear: 2, partly: 7, overcast: 13, rain: 12, fog: 4, snow: 11 }[wx];   // the window's own counts
    const cc = wx === 'overcast' || wx === 'rain' || wx === 'snow' ? '#a4adbb' : '#ffffff';
    for (let i = 0; i < nC; i++) {
      const near = i % 3 === 0, sc = (near ? 1.5 : 0.9) + r() * 0.9;   // every third cloud is a close, big one, as in the window
      s += drift(`<path d="${cloudPath(0, 0, sc)}" fill="${tint(cc, near ? 0.15 : 0.45)}"/>`, r() * 480, near ? 30 + r() * 70 : 14 + r() * 90, -26 * c.wind, 50 + r() * 40);
    }

    // mountains (the window's far ridge, mirrored), forest hills, and the meadow the house stands on
    s += `<path d="${poly(yFar)}" fill="${tint(season === 'winter' ? '#9fb0cc' : '#7f8fb8', 0.9)}"/>`;
    const capCol = tint('#ffffff', 0.9);
    for (let x = 8; x < 474; x += 3) {
      const y = yFar(x);
      if (y < 92 && y <= yFar(x - 3) && y <= yFar(x + 3)) {
        s += `<polygon points="${f(x)},${f(y)} ${f(x - 11)},${f(y + 15)} ${f(x - 4)},${f(y + 11)} ${f(x + 1)},${f(y + 17)} ${f(x + 7)},${f(y + 11)} ${f(x + 12)},${f(y + 15)}" fill="${capCol}" opacity="${season === 'winter' ? 0.92 : 0.7}"/>`;
        x += 40;
      }
    }
    // a rainbow stands opposite the sun, so with the sun behind you it is in front of you: the day after rain, in the daytime
    const yest = new Date(st.curDate);
    yest.setDate(yest.getDate() - 1);
    if (d > 0.6 && (wx === 'clear' || wx === 'partly') && dayCfg(yest).weather === 'rain') {
      s += `<g opacity="${f(0.38 * d)}" fill="none" stroke-width="2.2">${['#ff5a5a', '#ffa94d', '#ffe066', '#69db7c', '#4dabf7', '#9775fa'].map((col, i) => `<path d="M${f(320 - 124 - i * 2.2)} ${BANK + 20}A${f(124 + i * 2.2)} ${f(124 + i * 2.2)} 0 0 1 ${f(320 + 124 + i * 2.2)} ${BANK + 20}" stroke="${col}"/>`).join('')}</g>`;
    }
    s += `<path d="${poly(yHill)}" fill="${tint(mix(P.mid, '#2f5a3a', 0.35), 0.62)}"/>`;
    s += `<path d="${poly(yMead)}" fill="${tint(P.mid, 0.5)}"/>`;
    s += decor();
    s += `<rect x="-10" y="${BANK}" width="500" height="120" fill="url(#waterG)"/><rect x="-10" y="${BANK}" width="500" height="120" fill="url(#oSky)" opacity=".28"/>`;

    // the house: tiny, one big window facing the lake (the room is only a part of it)
    const wall = tint(mix('#eadcc0', '#ffc88a', S.g * 0.35), 0.45), roof = tint('#2a8f9a', 0.35), wood = tint('#6a4026', 0.4);
    const house = (live) => {
      let h = `<rect x="-6.5" y="-8" width="13" height="8" fill="${wall}"/><polygon points="-8,-8 0,-14 8,-8" fill="${roof}"/>`;
      if (snowy) h += `<polyline points="-8,-8 0,-14 8,-8" fill="none" stroke="#fff" stroke-width="1.3" stroke-linejoin="round" opacity=".9"/>`;
      h += `<rect x="3.6" y="-13" width="1.7" height="3.6" fill="${tint('#8a4a3a', 0.4)}"/>`;
      if (live && (lampLit || season === 'winter' || season === 'autumn' || wx === 'rain' || wx === 'fog'))
        for (let k = 0; k < 3; k++) h += `<circle class="smk" cx="4.4" cy="-14" r="1.6" fill="#e8e8ee" style="animation-delay:${f(-k * 1.5)}s"/>`;
      h += `<rect x="-5.4" y="-6.8" width="6.6" height="4.2" fill="${wood}"/><rect x="-4.9" y="-6.3" width="5.6" height="3.2" fill="${live && lampLit ? '#ffd98a' : mix('#2a3552', '#9bd0ea', d)}"/>`;
      h += `<path d="M-2.1 -6.3V-3.1M-4.9 -4.7H.7" stroke="${wood}" stroke-width=".5"/>`;
      h += `<rect x="3" y="-4.6" width="2.4" height="4.6" fill="${wood}"/>`;
      return h;
    };
    s += `<ellipse cx="${HX}" cy="${HY}" rx="10" ry="1.6" fill="#000" opacity=".16"/><g transform="translate(${HX} ${HY})">${house(true)}<rect id="outHouse" x="-8" y="-14" width="16" height="14" fill="none"/></g>`;
    if (lampLit) s += `<ellipse cx="${HX - 2}" cy="${HY - 5}" rx="${f(8 + dark * 6)}" ry="${f(5 + dark * 3)}" fill="url(#ffG)" opacity="${f(0.35 + dark * 0.65)}"/>`;

    // bank trees: the window's own trees, mirrored and seen from afar
    const bankY = (xw) => BANK - 1 + (rY.near(xw) - 239) * 0.08;
    const tree = (x, y, sz, col, pine) => {
      const k = tint(col, 0.4);
      if (pine) {
        let o = `<polygon points="${f(x - sz * 0.32)},${f(y)} ${f(x)},${f(y - sz)} ${f(x + sz * 0.32)},${f(y)}" fill="${k}"/><polygon points="${f(x - sz * 0.26)},${f(y - sz * 0.35)} ${f(x)},${f(y - sz * 1.2)} ${f(x + sz * 0.26)},${f(y - sz * 0.35)}" fill="${k}"/>`;
        if (snowy) o += `<polygon points="${f(x - sz * 0.12)},${f(y - sz * 0.9)} ${f(x)},${f(y - sz * 1.2)} ${f(x + sz * 0.12)},${f(y - sz * 0.9)}" fill="#fff" opacity=".85"/>`;
        return o;
      }
      return `<rect x="${f(x - 0.7)}" y="${f(y - sz * 0.3)}" width="1.4" height="${f(sz * 0.3)}" fill="${tint('#5e3d29', 0.4)}"/><ellipse cx="${f(x)}" cy="${f(y - sz * 0.62)}" rx="${f(sz * 0.38)}" ry="${f(sz * 0.42)}" fill="${k}"/>`;
    };
    const trees = L.trees.filter((q) => Math.abs(mx(q.x) - HX) > 12).map((q) => [mx(q.x), bankY(q.x), q.s * 0.55, q.col, q.pine]);
    s += `<rect x="-10" y="${BANK - 3}" width="500" height="5" fill="${tint(mix(P.near, '#000000', 0.12), 0.45)}"/>`;
    s += `<path d="M${HX - 3} ${BANK - 1}h6v2h-6z" fill="${tint('#8a6a44', 0.4)}"/>`;
    s += trees.map((q) => tree(...q)).join('');

    // reflections: the bank, the trees, the house and its lit window
    s += `<g clip-path="url(#oLake)" opacity="${f((snowy ? 0.13 : 0.22) + dark * 0.06)}"><g transform="translate(0 ${2 * BANK - 2}) scale(1 -1)">${trees.map((q) => tree(...q)).join('')}<g transform="translate(${HX} ${HY})">${house(false)}</g></g></g>`;
    if (lampLit) s += `<g opacity="${f(0.25 + dark * 0.55)}">${[0, 1, 2, 3, 4].map((i) => `<rect class="star" x="${f(HX - 5 - i * 0.7)}" y="${f(BANK + 6 + i * 4.5)}" width="${f(7 + i * 1.4)}" height="1.4" fill="#ffd98a" style="animation-delay:${f(-i * 0.5)}s"/>`).join('')}</g>`;
    const glints = ['', '', '', '', '', ''];   // shimmer per group, not per glint (see the stars)
    for (let i = 0; i < 18; i++) {
      glints[i % 6] += `<rect x="${f(r() * 470)}" y="${f(BANK + 6 + r() * 66)}" width="${f(10 + r() * 22)}" height="1.1"/>`;
      r();
    }
    s += `<g fill="#fff" opacity=".3">${glints.map((g, i) => `<g class="star" style="animation-delay:${f(-i * 0.55)}s">${g}</g>`).join('')}</g>`;
    const bx = 120 + r() * 240, by = BANK + 28 + r() * 10;
    if (c.boat)
      s += `<g transform="translate(${f(bx)} ${f(by)})"><g id="oSailGo" data-x="${f(bx)}"><g class="d" style="--fx:-18px;--tx:18px;--t:22s"><path d="M-9 0h18l-3.4 4h-11.2z" fill="${tint('#6b4a35', 0.1)}"/><line x1="0" y1="0" x2="0" y2="-15" stroke="${tint('#3a2d22', 0.1)}" stroke-width=".9"/><path d="M.8 -14L8 -3H.8z" fill="${tint('#f6f0e0', 0.2)}"/><path d="M-.7 -11L-6 -3H-.7z" fill="${tint('#eadfc4', 0.2)}"/></g></g><rect id="oSail" x="-24" y="-18" width="48" height="28" fill="none"/></g>`;
    s += waterLife();

    // the shore you stand on: village roofs (the window's village, mirrored), a pier, reeds, seasonal ground
    const near = tint(mix(P.near, '#000000', 0.3), 0.05);
    const shore = `M-10 290L-10 246Q60 236 130 246T250 250T370 246Q430 238 490 246L490 290Z`;
    L.village.filter((_, k) => [0, 2, 3, 5].includes(k)).forEach(({ w, h, i }, idx) => {
      const X = [52, 146, 336, 430][idx], Y = 252 + (i % 3) * 5, ww = w * 2.4, hh = h * 2.4, k = tint('#a5483a', 0.15);
      s += `<g><rect x="${f(X - ww / 2)}" y="${f(Y - hh)}" width="${f(ww)}" height="${f(hh)}" fill="${tint('#e8d5b5', 0.12)}"/><polygon points="${f(X - ww / 2 - 3)},${f(Y - hh)} ${f(X)},${f(Y - hh - 17)} ${f(X + ww / 2 + 3)},${f(Y - hh)}" fill="${k}"/><rect x="${f(X - 4.5)}" y="${f(Y - hh + 6)}" width="9" height="9" fill="${dark > 0.4 ? '#ffd27a' : tint('#7fb4d8', 0.1)}" opacity="${dark > 0.4 ? f(0.5 + dark * 0.5) : 0.9}"/></g>`;
    });
    s += `<path d="${shore}" fill="${near}"/>`;
    if (snowy) s += `<path d="${shore}" fill="${tint('#ffffff', 0.3)}" opacity="${wx === 'snow' ? 0.6 : 0.4}"/>`;
    s += `<polygon points="214,282 227,236 253,236 266,282" fill="${tint('#8a6a44', 0.15)}"/>`;
    for (let i = 0; i < 6; i++) s += `<rect x="${f(224 - i * 2.2)}" y="${f(240 + i * 7.5)}" width="${f(32 + i * 4.4)}" height="1" fill="#000" opacity=".22"/>`;
    s += `<g transform="translate(184 244)"><g id="oRowGo" style="transform-box:fill-box;transform-origin:center"><g class="sway" style="--t:5s"><path d="M-14 0h28l-5 6h-18z" fill="${tint('#b9566a', 0.1)}"/><path d="M-14 0h28" stroke="${tint('#f2dfe6', 0.1)}" stroke-width="1.2"/></g></g><rect id="oRow" x="-17" y="-5" width="34" height="14" fill="none"/></g>`;
    s += signs();
    const reed = tint(mix(P.near, '#000000', 0.45), 0.05);
    for (const x0 of [14, 46, 92, 150, 296, 338, 440, 468]) {
      let g = '';
      for (let i = 0; i < 6; i++) g += `M${x0 + i * 4} 266q${f(r() * 6 - 3)} -${f(10 + r() * 10)} ${f(r() * 8 - 4)} -${f(18 + r() * 14)}`;
      s += `<g class="sway" style="--t:${f(3 + r() * 2)}s;--dl:${f(-r() * 3)}s"><path d="${g}" fill="none" stroke="${reed}" stroke-width="1.8" stroke-linecap="round"/></g>`;
    }
    if (season === 'spring' || season === 'summer') {
      const fc = ['#ffffff', '#ffd84a', '#ff8ab0', '#b58aff'];
      for (let i = 0; i < 40; i++) s += `<circle cx="${f(r() * 480)}" cy="${f(256 + r() * 18)}" r="${f(1 + r() * 0.8)}" fill="${tint(fc[Math.floor(r() * 4)], 0.05)}"/>`;
    } else if (season === 'autumn')
      for (let i = 0; i < 26; i++) s += `<ellipse cx="${f(r() * 480)}" cy="${f(254 + r() * 20)}" rx="3" ry="1.2" fill="${tint(['#d9692b', '#c4452d', '#e8a23a'][i % 3], 0.05)}" transform="rotate(${f(r() * 90)} 0 0)"/>`;

    // weather in front of everything
    if (wx === 'rain')
      for (let i = 0, n = lite ? 40 : 90; i < n; i++) { const x = r() * 500 - 10; s += `<line class="rd" x1="${f(x)}" y1="0" x2="${f(x - 4)}" y2="12" stroke="#cfe0f2" stroke-width="1" opacity=".5" style="animation-delay:${f(-r() * 0.75)}s"/>`; }
    if (wx === 'snow')
      for (let i = 0, n = lite ? 40 : 70; i < n; i++) s += `<circle class="sn" cx="${f(r() * 500 - 10)}" cy="0" r="${f(1 + r() * 1.5)}" fill="#fff" style="animation-delay:${f(-r() * 7)}s;animation-duration:${f(5 + r() * 5)}s"/>`;
    if (P.par && wx !== 'rain')
      for (let i = 0; i < (lite ? 6 : 14); i++) s += `<ellipse class="lf" cx="${f(r() * 500)}" cy="0" rx="3" ry="1.7" fill="${P.par}" opacity=".9" style="animation-delay:${f(-r() * 9)}s;animation-duration:${f(7 + r() * 6)}s"/>`;
    // the window's fog: clear at the top, solid at the bottom (nearest to you), with the window's own strengths
    const fog = wx === 'fog' ? 0.78 : wx === 'rain' || wx === 'snow' ? 0.22 : wx === 'overcast' ? 0.12 : 0;
    if (fog) s += `<rect x="-10" y="56" width="500" height="214" fill="url(#oFogW)" opacity="${fog}"/>`;
    if (dark > 0.5 && wx !== 'rain' && wx !== 'snow' && season !== 'winter')
      for (let i = 0, n = lite ? 6 : 12; i < n; i++) {
        const x = 20 + r() * 440, y = 215 + r() * 45, sc = 0.8 + r() * 0.6;
        s += `<g transform="translate(${f(x)} ${f(y)})" opacity="${f(clamp(dark * 1.2 - 0.3))}"><g class="ff ${'abc'[i % 3]}" style="animation-delay:${f(-r() * 17)}s;animation-duration:${f(15 + r() * 9)}s"><g style="animation-delay:${f(-r() * 3)}s;animation-duration:${f(2.6 + r() * 2)}s"><circle r="${f(1.5 * sc)}" fill="url(#ffG)"/><circle r="${f(0.3 * sc)}" fill="#f6ffc0"/></g></g></g>`;
      }
    s += `<rect x="-10" y="-10" width="500" height="290" fill="#05041a" opacity="${f(dark * 0.1)}"/><rect x="0" y="0" width="480" height="270" fill="url(#oVig)"/>`;
    return s;

    // the meadow and hills behind the house: flowers, bushes, sheep, a path, a fence, and what each season leaves there
    function decor() {
      let o = '';
      const dot = (x, y, rr, col, op = 1) => `<circle cx="${f(x)}" cy="${f(y)}" r="${f(rr)}" fill="${tint(col, 0.35)}" opacity="${op}"/>`;
      const inMead = () => { const x = 6 + rf() * 468; return [x, yMead(x) + 3 + rf() * (BANK - yMead(x) - 7)]; };
      const inHill = () => { const x = 6 + rf() * 468; return [x, yHill(x) + 4 + rf() * Math.max(2, yMead(x) - yHill(x) - 6)]; };
      const flowers = { spring: ['#ffffff', '#ffd3e2', '#f7b6cf', '#ffe27a'], summer: ['#ffffff', '#ffd84a', '#ff8ab0', '#b58aff', '#ff7a5a'] }[season];
      // distant hills: speckles of colour and small bushes
      for (let i = 0, n = lite ? 40 : 90; i < n; i++) {
        const [x, y] = inHill();
        o += dot(x, y, 0.55 + rf() * 0.4, flowers ? flowers[i % flowers.length] : season === 'autumn' ? ['#d9692b', '#e8a23a', '#c4452d'][i % 3] : '#ffffff', flowers ? 0.6 : season === 'winter' ? 0.55 : 0.7);
      }
      for (let i = 0; i < 14; i++) {
        const [x, y] = inHill();
        o += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(2.5 + rf() * 3)}" ry="${f(1.6 + rf() * 1.6)}" fill="${tint(mix(P.trees[i % P.trees.length], '#1d3a28', 0.45), 0.5)}"/>`;
      }
      // the near meadow: clumps of flowers, tufts, and the season's own things
      if (flowers) {
        for (let i = 0, n = lite ? 18 : 34; i < n; i++) {
          const [x, y] = inMead(), col = flowers[Math.floor(rf() * flowers.length)];
          for (let k = 0; k < 5; k++) o += dot(x + (rf() - 0.5) * 6, y + (rf() - 0.5) * 2.4, 0.7 + rf() * 0.5, col);
        }
        for (let i = 0; i < (lite ? 30 : 70); i++) { const [x, y] = inMead(); o += dot(x, y, 0.6 + rf() * 0.5, flowers[i % flowers.length]); }
      } else if (season === 'autumn') {
        for (let i = 0; i < (lite ? 40 : 80); i++) { const [x, y] = inMead(); o += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(1 + rf() * 0.9)}" ry=".5" fill="${tint(['#d9692b', '#c4452d', '#e8a23a', '#a8571f'][i % 4], 0.35)}" transform="rotate(${f(rf() * 120 - 60)} ${f(x)} ${f(y)})"/>`; }
        for (let i = 0; i < 5; i++) { const [x, y] = inMead(); o += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="2" ry="1.6" fill="${tint('#e8872a', 0.35)}"/><rect x="${f(x - 0.3)}" y="${f(y - 2.2)}" width=".7" height="1" fill="${tint('#4a6b2a', 0.35)}"/>`; }
      } else {
        for (let i = 0; i < 26; i++) { const [x, y] = inMead(); o += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(4 + rf() * 9)}" ry="${f(0.9 + rf() * 0.9)}" fill="#fff" opacity=".55"/>`; }
      }
      for (let i = 0; i < 16; i++) {
        const [x, y] = inMead(), k = tint(season === 'winter' ? '#cfdcc8' : P.near, 0.4);
        o += `<path d="M${f(x - 1.6)} ${f(y)}L${f(x - 0.6)} ${f(y - 3)}L${f(x)} ${f(y)}L${f(x + 0.7)} ${f(y - 3.4)}L${f(x + 1.6)} ${f(y)}Z" fill="${k}"/>`;
      }
      for (let i = 0; i < 7; i++) {
        const [x, y] = inMead();
        if (Math.abs(x - HX) < 16) continue;
        o += `<ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(3.4 + rf() * 3)}" ry="${f(2.4 + rf() * 1.6)}" fill="${tint(P.trees[i % P.trees.length], 0.4)}"/>`;
        if (season === 'spring') o += dot(x - 1, y - 1, 0.9, '#ffd3e2') + dot(x + 1.4, y, 0.9, '#ffffff');
      }
      if (season !== 'winter')
        for (let i = 0; i < 6; i++) {
          const [x, y] = inMead();
          if (Math.abs(x - HX) < 30) continue;
          o += `<g transform="translate(${f(x)} ${f(y)})"><ellipse rx="2.7" ry="1.7" fill="${tint('#f4f1e8', 0.35)}"/><circle cx="${rf() < 0.5 ? -2.6 : 2.6}" cy="-.4" r=".95" fill="${tint('#3a3236', 0.35)}"/></g>`;
        }
      // a path from the door down to the water, and a short fence beside the house
      o += `<path d="M${HX + 3.6} ${HY} q5 3.4 -2 6.4 q-7 3.4 1.4 ${f(BANK - HY - 8)}" fill="none" stroke="${tint(snowy ? '#f2f2f6' : '#d9c79c', 0.4)}" stroke-width="2.2" stroke-linecap="round" opacity=".8"/>`;
      for (let i = 0; i < 6; i++) o += `<rect x="${f(HX - 34 + i * 4.2)}" y="${f(HY - 3 + (i % 2) * 0.3)}" width="1" height="4.6" fill="${tint('#a8845a', 0.4)}"/>`;
      o += `<rect x="${HX - 34}" y="${HY - 1.8}" width="22" height=".8" fill="${tint('#a8845a', 0.4)}"/>`;
      if (season === 'winter') o += `<g transform="translate(${HX + 24} ${HY + 4})"><circle cy="-1.2" r="1.7" fill="#fff"/><circle cy="-3.6" r="1.2" fill="#fff"/><rect x="-.9" y="-5.4" width="1.8" height=".8" fill="#3a3236"/><path d="M0 -3.6l1.5 .3" stroke="#e8872a" stroke-width=".5"/></g>`;
      // dappled sunlight on the slopes (the sun is behind you): patches of light drifting under broken cloud
      if (d > 0.4 && (wx === 'partly' || wx === 'overcast'))
        for (let i = 0; i < 4; i++) o += drift(`<ellipse rx="${f(32 + rf() * 36)}" ry="${f(7 + rf() * 6)}" fill="#fff4c2" opacity="${f(0.1 + 0.08 * d)}"/>`, 60 + rf() * 360, 150 + rf() * 22, 50, 28 + rf() * 20);
      // fireflies over the meadow on warm nights
      if (dark > 0.4 && wx !== 'rain' && wx !== 'snow' && season !== 'winter')
        for (let i = 0, n = lite ? 7 : 16; i < n; i++) {
          const x = 14 + rf() * 452, y = 146 + rf() * 32;
          o += `<g transform="translate(${f(x)} ${f(y)}) scale(.1)" opacity="${f(clamp(dark * 1.5 - 0.3))}"><g class="ff ${'abc'[i % 3]}" style="animation-delay:${f(-rf() * 17)}s;animation-duration:${f(15 + rf() * 9)}s"><g style="animation-delay:${f(-rf() * 3)}s;animation-duration:${f(2.6 + rf() * 2)}s"><circle r="11" fill="url(#ffG)"/><circle r="2.2" fill="#f6ffc0"/></g></g></g>`;
        }
      return o;
    }

    // the lake and its shores through the seasons, and the morning mist
    function waterLife() {
      let o = '';
      if (season === 'spring')
        for (let i = 0; i < 18; i++) o += drift(`<ellipse rx="1.7" ry=".9" fill="${tint('#f7b6cf', 0.15)}" transform="rotate(${f(rw() * 80 - 40)})"/>`, rw() * 480, BANK + 8 + rw() * 52, 14, 18 + rw() * 14);
      if (season === 'summer')
        for (let i = 0; i < 9; i++) { const x = 30 + rw() * 420, y = 222 + rw() * 18; o += `<g transform="translate(${f(x)} ${f(y)})"><ellipse rx="4" ry="1.4" fill="${tint('#3f8f4a', 0.15)}"/>${i % 3 === 0 ? `<circle cy="-1.2" r="1.1" fill="${tint('#ffb6cf', 0.15)}"/>` : ''}</g>`; }
      if (season === 'autumn')
        for (let i = 0; i < 16; i++) o += drift(`<ellipse rx="1.8" ry=".8" fill="${tint(['#d9692b', '#c4452d', '#e8a23a'][i % 3], 0.15)}" transform="rotate(${f(rw() * 100 - 50)})"/>`, rw() * 480, BANK + 10 + rw() * 58, 12, 20 + rw() * 14);
      if (season === 'winter') {
        o += `<path d="M-10 ${BANK}h500v5q-30 3 -60 0t-60 0t-60 0t-60 0t-60 0t-60 0t-60 0t-60 0v-5z" fill="#eef6ff" opacity=".26"/><path d="M-10 250Q40 238 90 244T200 240T320 244T440 238T490 242L490 290L-10 290Z" fill="#eef6ff" opacity=".4"/>`;
        o += drift(`<g><ellipse cy="-4" rx="1" ry="1.1" fill="${tint('#f0d2b4', 0.1)}"/><rect x="-.8" y="-3" width="1.6" height="3" fill="${tint('#c4452d', 0.1)}"/><rect x="-1.2" y="-.3" width="2.4" height=".6" fill="#dfe8f4"/></g>`, 310, 224, 46, 14);
      }
      const m = clamp(1 - Math.abs(t - 6.6) / 3.4);
      if (m > 0.05 && wx !== 'rain' && wx !== 'snow')
        for (let i = 0; i < 7; i++) o += drift(`<ellipse rx="${f(50 + rw() * 40)}" ry="${f(5 + rw() * 4)}" fill="${mix(S.hor, '#ffffff', 0.55)}" opacity="${f(0.26 * m)}"/>`, rw() * 480, BANK + 2 + rw() * 36, 30, 26 + rw() * 16);
      return o;
    }

    // the shore: a mailbox (write to me) and a signpost to the other places
    function signs() {
      const wood = tint('#8a6a44', 0.1), arm = (y, w, dir, col) => `<polygon points="${dir > 0 ? `104,${y} ${104 + w},${y} ${108 + w},${y + 2.2} ${104 + w},${y + 4.4} 104,${y + 4.4}` : `104,${y} ${104 - w},${y} ${100 - w},${y + 2.2} ${104 - w},${y + 4.4} 104,${y + 4.4}`}" fill="${tint(col, 0.1)}"/>`;
      let o = `<rect x="102.8" y="232" width="2.4" height="32" fill="${wood}"/>${arm(234, 17, 1, '#c9854a')}${arm(240.5, 15, -1, '#6a9a7a')}${arm(247, 16, 1, '#8a7ab8')}`;
      o += `<rect id="oSign0" x="100" y="232" width="26" height="8" fill="none"/><rect id="oSign1" x="84" y="239" width="24" height="8" fill="none"/><rect id="oSign2" x="100" y="245.5" width="26" height="8" fill="none"/>`;
      o += `<rect x="383.2" y="246" width="1.8" height="14" fill="${wood}"/><rect x="377" y="239" width="14" height="8" rx="3" fill="${tint('#3a6ea5', 0.1)}"/><rect x="376.6" y="244.4" width="14.8" height="1.2" fill="${tint('#2b5280', 0.1)}"/><rect x="390" y="235" width="1.2" height="6" fill="${tint('#d9483a', 0.1)}"/><rect x="390" y="235" width="4" height="2.4" fill="${tint('#d9483a', 0.1)}"/>`;
      o += `<rect id="oMail" x="375" y="233" width="20" height="16" fill="none"/>`;
      return o;
    }
  }

  return scene;
}
