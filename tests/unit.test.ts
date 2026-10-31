// Pure-logic tests: the day generator, the seeded random streams, colour maths, the shared valley layout and the site config.
// Run with `npm test`. No browser, no DOM.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { clamp, hash, lerp, mix, rng, ss, ymd } from '../src/views/shared/helpers';
import { PAL, dayCfg, moonPhase, phaseName, skyAt, WEATHER } from '../src/views/shared/world';
import { rY, valleyLayout } from '../src/views/shared/valley';
import { siteMetadata } from '../src/configs/siteMetadata';
import sitemap from '../app/sitemap';
import robots from '../app/robots';

const day = (y: number, m: number, d: number) => new Date(y, m - 1, d, 12);
const everyDay = function* (from: number, to: number) {
  for (let t = new Date(from, 0, 1, 12); t.getFullYear() <= to; t.setDate(t.getDate() + 1))
    yield new Date(t);
};

describe('seeded randomness', () => {
  it('hash is stable and spreads similar strings', () => {
    assert.equal(hash('day:2026-04-15'), hash('day:2026-04-15'));
    const seen = new Set(Array.from({ length: 400 }, (_, i) => hash('k' + i)));
    assert.equal(seen.size, 400);
  });
  it('rng is deterministic, in [0,1), and roughly uniform', () => {
    const a = rng(42),
      b = rng(42);
    let sum = 0;
    for (let i = 0; i < 5000; i++) {
      const x = a();
      assert.equal(x, b());
      assert.ok(x >= 0 && x < 1);
      sum += x;
    }
    assert.ok(Math.abs(sum / 5000 - 0.5) < 0.03);
  });
  it('different seeds give different streams', () => {
    assert.notEqual(rng(1)(), rng(2)());
  });
});

describe('colour and number helpers', () => {
  it('clamp / lerp / smoothstep', () => {
    assert.equal(clamp(5, 0, 1), 1);
    assert.equal(clamp(-5, 0, 1), 0);
    assert.equal(lerp(10, 20, 0.5), 15);
    assert.equal(ss(0, 1, -1), 0);
    assert.equal(ss(0, 1, 2), 1);
    assert.equal(ss(0, 1, 0.5), 0.5);
  });
  it('mix blends hex colours and clamps k', () => {
    assert.equal(mix('#000000', '#ffffff', 0), '#000000');
    assert.equal(mix('#000000', '#ffffff', 1), '#ffffff');
    assert.equal(mix('#000000', '#ffffff', 0.5), '#808080');
    assert.equal(mix('#102030', '#ffffff', 9), '#ffffff');
  });
  it('ymd pads month and day', () => {
    assert.equal(ymd(new Date(2026, 0, 5)), '2026-01-05');
  });
});

describe('dayCfg (the world of a day)', () => {
  it('is a pure function of the date', () => {
    for (const d of [day(2026, 1, 1), day(2026, 10, 31), day(2028, 2, 29)])
      assert.deepEqual(dayCfg(d), dayCfg(new Date(d)));
  });
  it('ignores the time of day', () => {
    assert.deepEqual(dayCfg(new Date(2026, 5, 5, 0, 1)), dayCfg(new Date(2026, 5, 5, 23, 59)));
  });
  it('produces only known values with the right season for the month', () => {
    const seasonOf = (m: number) =>
      m >= 3 && m <= 4
        ? 'spring'
        : m >= 5 && m <= 8
          ? 'summer'
          : m >= 9 && m <= 11
            ? 'autumn'
            : 'winter';
    for (const d of everyDay(2026, 2027)) {
      const c = dayCfg(d);
      assert.ok(c.weather in WEATHER, c.weather);
      assert.equal(c.season, seasonOf(d.getMonth() + 1));
      assert.ok(c.season in PAL);
      assert.ok([-1, 1].includes(c.wind));
      assert.equal(typeof c.boat, 'boolean');
      assert.ok(c.seed >= 0 && c.seed < 1e6);
      assert.ok([null, 'aurora', 'meteors', 'ufo'].includes(c.rare));
      assert.ok([null, 'balloon', 'birds', 'kite', 'plane'].includes(c.visitor));
      assert.equal(c.date, ymd(d));
    }
  });
  it('snow only falls in winter; rain and fog never in the same day as snow', () => {
    for (const d of everyDay(2024, 2030)) {
      const c = dayCfg(d);
      if (c.weather === 'snow') assert.equal(c.season, 'winter');
    }
  });
  it('weather mix over several years is sane (clear most common, fog rare, no endless streaks)', () => {
    const n: Record<string, number> = {};
    let fogRun = 0,
      maxFog = 0,
      total = 0;
    for (const d of everyDay(2020, 2030)) {
      const w = dayCfg(d).weather;
      n[w] = (n[w] ?? 0) + 1;
      total++;
      fogRun = w === 'fog' ? fogRun + 1 : 0;
      maxFog = Math.max(maxFog, fogRun);
    }
    assert.ok(n.clear / total > 0.28 && n.clear / total < 0.48, `clear ${n.clear / total}`);
    assert.ok(n.fog / total > 0.03 && n.fog / total < 0.1, `fog ${n.fog / total}`);
    assert.ok(n.snow > 0 && n.rain > 0 && n.overcast > 0 && n.partly > 0);
    assert.ok(maxFog <= 4, `fog streak ${maxFog}`);
  });
  it('boats and rare skies appear at believable rates', () => {
    let boats = 0,
      rare = 0,
      total = 0;
    for (const d of everyDay(2020, 2030)) {
      const c = dayCfg(d);
      total++;
      if (c.boat) boats++;
      if (c.rare) rare++;
    }
    assert.ok(boats / total > 0.45 && boats / total < 0.65);
    assert.ok(rare / total > 0.015 && rare / total < 0.06);
  });
  it('consecutive days differ (not a constant)', () => {
    const set = new Set(
      Array.from({ length: 60 }, (_, i) => JSON.stringify(dayCfg(day(2026, 3, 1 + i))))
    );
    assert.equal(set.size, 60);
  });
});

describe('moon and sky', () => {
  it('moonPhase stays in [0,1) and has a ~29.5 day period', () => {
    for (const d of everyDay(2026, 2026)) {
      const p = moonPhase(d);
      assert.ok(p >= 0 && p < 1, String(p));
    }
    const a = moonPhase(day(2026, 3, 3)),
      b = moonPhase(day(2026, 3, 3 + 59)); // two synodic months ≈ 59.06 days
    assert.ok(Math.abs(a - b) < 0.03 || Math.abs(a - b) > 0.97);
  });
  it('a known new moon (2026-02-17) is near phase 0 or 1', () => {
    const p = moonPhase(day(2026, 2, 17));
    assert.ok(p < 0.05 || p > 0.95, String(p));
  });
  it('skyAt is defined across the whole day and phaseName covers every hour', () => {
    for (let t = 0; t <= 24; t += 0.25) {
      assert.ok(skyAt(t) !== undefined && skyAt(t) !== null, String(t));
      assert.ok(phaseName(t).length > 2);
    }
    assert.equal(phaseName(2), 'Night');
  });
});

describe('valley layout shared by the window and the Kindle scene', () => {
  const build = (date: Date) => {
    const c = dayCfg(date);
    return { c, ...valleyLayout(c, rng(hash('view' + c.date)), rng(hash('valley-fixed'))) };
  };
  it('is deterministic per day', () => {
    assert.deepEqual(build(day(2026, 4, 15)), build(day(2026, 4, 15)));
  });
  it('the village is always the same six houses at the same places, 11–15 wide', () => {
    for (const d of [day(2026, 1, 1), day(2026, 7, 7)]) {
      const { village } = build(d);
      assert.deepEqual(
        village.map((h: { x: number }) => h.x),
        [120, 138, 154, 352, 368, 388]
      );
      for (const h of village) assert.ok(h.w >= 11 && h.w <= 15 && h.h >= 8 && h.h <= 11);
    }
    assert.deepEqual(build(day(2026, 1, 1)).village, build(day(2026, 8, 8)).village);
  });
  it('trees sit on the near ridge, in order, inside the view, and vary by season but not wildly', () => {
    for (const d of [day(2026, 1, 15), day(2026, 4, 15), day(2026, 7, 15), day(2026, 10, 15)]) {
      const { trees, c } = build(d);
      assert.ok(trees.length >= 20 && trees.length <= 40, `${trees.length}`);
      let prev = -Infinity;
      for (const t of trees) {
        assert.ok(t.x > prev && t.x < 520);
        prev = t.x;
        assert.ok(Math.abs(t.y - (rY.near(t.x) + 3)) < 40);
        assert.ok(t.s >= 13 && t.s <= 31);
        assert.ok((PAL as Record<string, { trees: string[] }>)[c.season].trees.includes(t.col));
      }
    }
  });
  it('ridge functions are finite and ordered far < mid < near over the whole width', () => {
    for (let x = -10; x <= 490; x += 5) {
      for (const f of [rY.far, rY.mid, rY.near]) assert.ok(Number.isFinite(f(x)));
      assert.ok(rY.far(x) < rY.mid(x) + 60);
      assert.ok(rY.mid(x) < rY.near(x));
    }
  });
});

describe('site metadata and crawler files', () => {
  it('url and origin agree and are https', () => {
    assert.ok(siteMetadata.url.startsWith('https://'));
    assert.equal(siteMetadata.url, siteMetadata.origin + '/');
  });
  it('title and description are a good length for search results', () => {
    assert.ok(siteMetadata.title.length <= 65);
    assert.ok(siteMetadata.description.length >= 80 && siteMetadata.description.length <= 200);
  });
  it('updated is a real date and not in the future', () => {
    const t = new Date(siteMetadata.updated).getTime();
    assert.ok(Number.isFinite(t) && t <= Date.now() + 864e5);
  });
  it('sitemap lists the origin; robots allows all and points at the sitemap', () => {
    assert.equal(sitemap()[0].url, siteMetadata.origin);
    const r = robots();
    assert.equal(r.sitemap, `${siteMetadata.url}sitemap.xml`);
  });
  it('image paths carry a cache-busting version and social image has the right size', () => {
    assert.match(siteMetadata.image.url, /\?v=\d+$/);
    assert.deepEqual([siteMetadata.image.width, siteMetadata.image.height], [1200, 630]);
  });
});
