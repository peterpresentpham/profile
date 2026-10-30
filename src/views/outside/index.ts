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
  // Smoothness: the heavy parts are kept off the transition. The scene is built and laid out while still clipped to
  // nothing, every animation (room and scene) is paused while the iris moves, and once the scene covers the screen the
  // room underneath stays frozen (animations paused, frame loop idle, see Room.tsx) for as long as the scene is open. Nothing is
  // hidden, torn down or rebuilt at the end of a transition, because each of those costs a long frame of its own.
  const root = rt.root, raf2 = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));
  const radius = () => Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy));
  function open(toy) {
    if (st.outsideOpen || busy) return;
    st.outsideOpen = true;
    busy = true;
    from = toy;
    track('room_easter_egg_open', { egg: 'outside' });
    paint();
    slider.value = st.t;
    const r = toy.rect.getBoundingClientRect();
    cx = r.left + r.width / 2;
    cy = r.top + r.height / 2;
    const settle = () => {
      ov.getAnimations().forEach((a) => a.cancel());
      ov.style.clipPath = ov.style.opacity = '';
      ov.classList.remove('hold');
      busy = false;
    };
    if (reduce) {
      ov.classList.add('on');
      place();
      settle();
    } else {
      ov.style.clipPath = lite ? '' : `circle(0px at ${cx}px ${cy}px)`;
      ov.style.opacity = lite ? '0' : '';
      ov.classList.add('on', 'hold');
      root.classList.add('out-busy');
      raf2(() => {
        place();
        const a = ov.animate(lite ? [{ opacity: 0 }, { opacity: 1 }] : [{ clipPath: `circle(0px at ${cx}px ${cy}px)` }, { clipPath: `circle(${radius()}px at ${cx}px ${cy}px)` }], { duration: lite ? 380 : 900, easing: lite ? 'ease-out' : 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
        a.onfinish = settle;
      });
    }
    home.focus({ preventScroll: true });
  }
  function close() {
    if (!st.outsideOpen || busy) return;
    busy = true;
    const done = () => {
      ov.getAnimations().forEach((a) => a.cancel());
      ov.style.clipPath = ov.style.opacity = '';
      ov.classList.remove('on', 'hold');
      root.classList.remove('out-busy');
      st.outsideOpen = false;
      busy = false;
      if (from) from.rect.focus({ preventScroll: true });
    };
    if (reduce) return done();
    ov.classList.add('hold');
    raf2(() => {
      const a = ov.animate(lite ? [{ opacity: 1 }, { opacity: 0 }] : [{ clipPath: `circle(${radius()}px at ${cx}px ${cy}px)` }, { clipPath: `circle(0px at ${cx}px ${cy}px)` }], { duration: lite ? 300 : 650, easing: lite ? 'ease-in' : 'cubic-bezier(.5,0,.8,.4)', fill: 'forwards' });
      a.onfinish = done;
    });
  }
  home.addEventListener('click', close);
  listen('resize', () => st.outsideOpen && place());
  listen('keydown', (e) => { if (e.key === 'Escape') close(); });
  return { open, close };
}
