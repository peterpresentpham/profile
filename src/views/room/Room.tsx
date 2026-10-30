/* eslint-disable */
// @ts-nocheck
// Full-screen interactive room. The scene is built imperatively by `initRoom`, ported from
// concept/room2d-fullscreen.html; it owns everything under `root` and returns its own teardown.
//
// This file deliberately exports ONLY the component: React Fast Refresh treats such a module as a
// refresh boundary, so editing the engine (or markup.ts, which it imports) re-runs the effect below.
// With the engine in a separate non-component module the effect never re-ran and the old scene
// stayed on screen until a manual reload.
'use client';

import { useEffect, useRef } from 'react';
import { ROOM_HTML } from './markup';
import { $, nowHours } from '../shared/helpers';
import { makeSpots } from './content';
import { setupRidges } from './view';
import { buildDecor, buildFireflies, buildFloor, buildGlow } from './decor';
import { createGame } from './game';
import { createToys } from './toys';
import { createOutside } from '../outside';
import '../shared/motion.css';
import { createCat } from './cat';
import { createMusic } from './music';
import { createAnim } from './anim';
import { createTime } from './time';
import { createCamera } from './camera';
import { createUI } from './ui';
import { buildHotspots } from './hotspots';
import './room.css';

// The room is wired together here. Each module gets the shared runtime `rt`:
//   rt.st   mutable state (clock, lamps, weather of the viewed day, current drawer, drag flag)
//   rt.api  the other modules' public functions (filled in below, called lazily at runtime)
function initRoom(root: HTMLElement): () => void {
  root.innerHTML = ROOM_HTML;
  const track = (event, p = {}) => {
    try {
      (window.dataLayer = window.dataLayer || []).push({ event, ...p });
    } catch (e) {}
  };
  const L = [], timers = [];
  let raf = 0;
  const listen = (t, f) => {
    addEventListener(t, f);
    L.push(() => removeEventListener(t, f));
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // phones and touch screens: lighter effects and fewer per-frame updates (the full scene is heavy for a mobile GPU)
  const lite = matchMedia('(max-width: 820px), (pointer: coarse)').matches;
  root.classList.toggle('room-lite', lite);

  const SPOTS = makeSpots();
  const st = {
    t: 12, auto: true, lampOverride: null, ceilOverride: null, ceilOn: false, lampOn: false, dark: 0,
    curDate: new Date(), S_: { d: 1, g: 0, dim: 1, hor: '#a7d8f5' }, GS: { top: '#3b8fe0', hor: '#a7d8f5', d: 1 },
    cfg: null, phase: 0, V: {}, dragMoved: false, curObj: '', photoOpen: false, photoAfter: false, outsideOpen: false,
  };
  const rt = { root, st, SPOTS, track, L, timers, listen, reduce, lite, api: {} };
  const api = rt.api;

  api.game = createGame(rt);
  buildDecor(api.game.build);
  api.ui = createUI(rt);
  buildHotspots(rt, (id) => api.ui.activate(id));
  api.outside = createOutside(rt);
  api.toys = createToys(rt);
  setupRidges();
  api.cat = createCat(rt);
  api.music = createMusic(rt);
  api.anim = createAnim(rt);
  api.time = createTime(rt);
  buildFireflies(lite);
  buildFloor(lite);

  let last = performance.now(), frame = 0, lagDt = 0;
  (function loop(now) {
    raf = requestAnimationFrame(loop);
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    frame++;
    api.music.tick(dt);
    if (st.outsideOpen) return;   // the Kindle scene covers the room: idle the room's own frame work
    if (!reduce) api.cat.move(dt);
    lagDt += dt;
    if (!lite || frame % 2 === 0) {
      const d = lagDt;
      lagDt = 0;
      if (!reduce) api.anim.moveClouds(d);
      api.time.drawClock(now);
      api.game.tick(d);
    } // half rate on phones
    api.anim.parallax();
  })(last);

  api.camera = createCamera(rt);

  st.t = nowHours();
  $('slider').value = st.t;
  api.time.setDate(new Date());
  api.cat.start();
  api.ui.showWelcome();
  try {
    if (localStorage.getItem('introSeen2d') === '1') $('welcome').classList.add('gone');
  } catch (e) {}
  buildGlow(lite, SPOTS);
  const onLink = (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const h = a.getAttribute('href') || '';
    if (/^(https?:|mailto:)/.test(h))
      track('outbound_click', { from_object: api.ui.isOpen() ? st.curObj : 'welcome', link_url: h, link_domain: h.startsWith('mailto:') ? 'mailto' : new URL(h).hostname });
  };
  root.addEventListener('click', onLink);
  L.push(() => root.removeEventListener('click', onLink));
  return () => {
    cancelAnimationFrame(raf);
    timers.forEach(clearInterval);
    api.cat.dispose();
    api.music.dispose();
    L.forEach((f) => f());
    document.body.style.background = '';
    root.innerHTML = '';
  };
}

// A fresh object every time this module is evaluated. In dev, Fast Refresh re-evaluates the module when the
// engine or markup.ts changes, which changes the effect dependency below and rebuilds the scene.
const MODULE_VERSION = {};

const SHOW_TIME_CONTROLS = process.env.NEXT_PUBLIC_SHOW_TIME_CONTROLS === 'true';

export default function Room() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    return initRoom(ref.current);
  }, [MODULE_VERSION]);

  return <div ref={ref} className="room-root" data-controls={SHOW_TIME_CONTROLS || undefined} />;
}
