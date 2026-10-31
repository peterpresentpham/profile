/* eslint-disable */
// @ts-nocheck
import './outside.css';
import { $ } from '../shared/helpers';
import { WEATHER } from '../shared/world';
import { createScene } from './scene';

// The Kindle on the floor is an easter egg: it opens a full-screen view of the house from across the lake.
// This module is the behaviour (open/close transition, the clickable things in the scene, the time slider);
// scene.ts draws it. It is built when the room is, and reaches the room only through the shared runtime `rt`.
const MAIL = 'mailto:phamhongphuc.present@gmail.com';

export function createOutside(rt) {
  const { st, track, reduce, lite, listen } = rt;
  const ov = $('outside'), svg = $('outSvg'), home = $('outHome'), cap = $('outCap'), hot = $('outHot'), slider = $('outSlider'), clockEl = $('outClock');
  let cx = 0, cy = 0, busy = false, from = null;
  const scene = createScene(rt);

  // things to click in the scene: invisible buttons and links laid over markers in the SVG, sized from where those landed on screen
  const go = (id, frames, ms, then) => {   // an animation on a boat that cannot be started twice
    const g = $(id);
    if (!g || g.__go) return;
    g.__go = true;
    const a = g.animate(frames, { duration: ms, easing: 'ease-in-out' });
    a.onfinish = () => { g.__go = false; then && then(); };
  };
  const sail = () => {
    const g = $('oSailGo'), x = +g.dataset.x, hide = () => { $('oSail').parentNode.style.opacity = ''; };
    go('oSailGo', [{ transform: 'translateX(0px)' }, { transform: `translateX(${520 - x}px)` }], 3600, () =>
      go('oSailGo', [{ transform: `translateX(${-x - 40}px)` }, { transform: 'translateX(0px)' }], 3600, hide));
  };
  const row = () => go('oRowGo', [{ transform: 'translate(0px,0px) scale(1)' }, { transform: 'translate(34px,-40px) scale(.7)', offset: 0.45 }, { transform: 'translate(34px,-40px) scale(.7)', offset: 0.55 }, { transform: 'translate(0px,0px) scale(1)' }], 6400);
  const addHot = (m, label, o) => {
    if (!$(m)) return;
    const e = document.createElement(o.href ? 'a' : 'button');
    if (o.href) {
      e.href = o.href;
      if (!o.href.startsWith('mailto:')) { e.target = '_blank'; e.rel = 'noopener noreferrer'; }
    } else e.type = 'button';
    e.dataset.l = label;
    e.dataset.m = m;
    e.setAttribute('aria-label', label);
    e.addEventListener('click', () => { track('room_outside_click', { target: m }); o.fn && o.fn(); });
    hot.appendChild(e);
  };
  const hots = () => {
    hot.replaceChildren();
    addHot('oRow', 'Row out on the lake', { fn: row });
    if (st.cfg.boat) addHot('oSail', 'Set the boat sailing', { fn: sail });
    addHot('oMail', 'Write to me', { href: MAIL });
    addHot('oSign0', 'Decipher', { href: 'https://decipher.peter-present.xyz/' });
    addHot('oSign1', 'Fantasy World', { href: 'https://fantasy.peter-present.xyz/' });
    addHot('oSign2', 'Experiments', { href: 'https://experiment.peter-present.xyz/' });
  };
  const put = (e, m, pad) => {
    const r = m.getBoundingClientRect();
    Object.assign(e.style, { left: r.left - pad + 'px', top: r.top - pad + 'px', width: r.width + pad * 2 + 'px', height: r.height + pad * 2 + 'px' });
  };
  const place = () => {
    const h = $('outHouse');
    if (h) put(home, h, 12);
    [...hot.children].forEach((e) => { const m = $(e.dataset.m); if (m) put(e, m, 5); });
  };
  // everything the scene shows comes from the room's state; paint() draws it again after the time changes
  const paint = () => {
    svg.innerHTML = scene();
    const H = Math.floor(st.t), M = Math.floor((st.t - H) * 60);
    clockEl.textContent = `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}`;
    cap.textContent = `Home, across the lake · ${WEATHER[st.cfg.weather]} · click the house to go home`;
    hots();
  };
  // building the scene is the biggest piece of work in the click, so it is done as soon as the pointer or a finger is on the Kindle
  let warm = '';
  const keyOf = () => `${st.cfg.date}|${st.t}|${st.lampOn}|${st.ceilOn}`;
  const prewarm = (e) => {
    if (st.outsideOpen || busy || !(e.target.closest && e.target.closest('.hot[aria-label="Kindle"]')) || warm === keyOf()) return;
    paint();
    warm = keyOf();
  };
  ['pointerover', 'pointerdown', 'focusin'].forEach((t) => listen(t, prewarm));
  let pend = 0;
  slider.addEventListener('input', () => {
    if (busy) return;
    st.auto = false;
    $('nowBtn').classList.remove('on');
    st.t = +slider.value;
    st.lampOverride = null;
    st.ceilOverride = null;
    $('slider').value = st.t;
    rt.api.time.apply();
    if (!pend) pend = requestAnimationFrame(() => { pend = 0; paint(); place(); });
  });
  // The transition only animates opacity and transform, which the browser runs on the compositor without touching the main
  // thread. (A growing clip-path, the earlier iris, is repainted by the main thread on every frame and stuttered; so does anything
  // that restyles the whole page at the start or end, so nothing here toggles classes on the room.) It goes in two beats so the
  // room and the scene are never on screen together: the room dims into the dark backdrop, then the scene comes up out of it.
  const raf2 = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));
  let anims = [];
  const play = (shown, done) => {
    const kids = [...ov.children], fade = (el, o, k) => el.animate(shown ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }], { fill: 'both', ...o });
    const dim = shown ? { duration: 320, easing: 'ease-in' } : { duration: 320, delay: 240, easing: 'ease-out' };
    const lift = shown ? { duration: 560, delay: 280, easing: 'ease-out' } : { duration: 280, easing: 'ease-in' };
    anims = [fade(ov, dim), ...kids.map((k) => fade(k, lift))];
    anims.push(svg.animate(shown ? [{ transform: 'scale(1.06)' }, { transform: 'scale(1)' }] : [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }], { fill: 'both', ...lift }));
    Promise.all(anims.map((a) => a.finished)).then(done, () => {});
  };
  const clear = () => {
    anims.forEach((a) => a.cancel());   // only these; ov.getAnimations() would also kill the scene's own looping animations
    anims = [];
    [ov, ...ov.children].forEach((el) => (el.style.opacity = ''));
  };
  function open(toy) {
    if (st.outsideOpen || busy) return;
    st.outsideOpen = true;
    busy = true;
    from = toy;
    track('room_easter_egg_open', { egg: 'outside' });
    if (warm !== keyOf()) paint();
    warm = '';
    slider.value = st.t;
    const r = toy.rect.getBoundingClientRect();
    svg.style.transformOrigin = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;   // the scene grows out of the Kindle
    const settle = () => {
      clear();
      busy = false;
    };
    if (reduce) {
      ov.classList.add('on');
      place();
      settle();
    } else {
      [ov, ...ov.children].forEach((el) => (el.style.opacity = '0'));
      ov.classList.add('on');
      raf2(() => {
        place();
        play(true, settle);
      });
    }
    home.focus({ preventScroll: true });
  }
  function close() {
    if (!st.outsideOpen || busy) return;
    busy = true;
    const done = () => {
      clear();
      ov.classList.remove('on');
      st.outsideOpen = false;
      busy = false;
      if (from) from.rect.focus({ preventScroll: true });
    };
    if (reduce) return done();
    play(false, done);
  }
  home.addEventListener('click', close);
  listen('resize', () => st.outsideOpen && place());
  listen('keydown', (e) => { if (e.key === 'Escape') close(); });
  return { open, close };
}
