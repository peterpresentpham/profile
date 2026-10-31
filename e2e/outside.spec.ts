import { expect, test } from '@playwright/test';
import { WEATHER, dayCfg } from '../src/views/shared/world';
import { byLabel, openRoom, outside, press, setHour, watchErrors } from './lib/room';

const KINDLE = 'Kindle';
const open = async (page: import('@playwright/test').Page) => {
  await byLabel(page, KINDLE).dispatchEvent('pointerover'); // the scene is built on hover, so the click has little left to do
  await press(byLabel(page, KINDLE));
  await expect(outside(page)).toHaveClass(/on/);
  // settled = the open animation has ended and been cancelled, which leaves the scene with no transform. Until then a close is ignored.
  await expect
    .poll(() => page.locator('#outSvg').evaluate((e) => getComputedStyle(e).transform))
    .toBe('none');
};

test('Kindle opens the house-from-afar scene and the house click returns home', async ({
  page,
}) => {
  const errs = watchErrors(page);
  await openRoom(page);
  await open(page);
  await expect(page.locator('#outSvg')).toBeVisible();
  await expect(page.locator('#outCap')).toContainText('click the house to go home');
  await press(page.locator('#outHome'));
  await page.waitForTimeout(100);
  await expect(outside(page)).not.toHaveClass(/on/);
  expect(errs).toEqual([]);
});

test('Esc closes the scene and focus goes back to the Kindle', async ({ page }) => {
  await openRoom(page);
  await open(page);
  await page.keyboard.press('Escape');
  await page.waitForTimeout(100);
  await expect(outside(page)).not.toHaveClass(/on/);
  await expect(byLabel(page, KINDLE)).toBeFocused();
});

test('there is no Back button any more, the house itself is the way home', async ({ page }) => {
  await openRoom(page);
  await open(page);
  await expect(page.locator('#outBack')).toHaveCount(0);
  await expect(page.locator('#outHome')).toHaveAttribute('data-l', /back inside/i);
});

test('repeated open/close cycles never get stuck', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  for (let i = 0; i < 4; i++) {
    await open(page);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    await expect(outside(page)).not.toHaveClass(/on/);
  }
  expect(errs).toEqual([]);
});

test('hammering the Kindle and Esc during the transition leaves a consistent state', async ({
  page,
}) => {
  const errs = watchErrors(page);
  await openRoom(page);
  for (let i = 0; i < 5; i++) {
    await press(byLabel(page, KINDLE));
    await page.keyboard.press('Escape');
  }
  await page.waitForTimeout(2500);
  const on = await outside(page).evaluate((e) => e.classList.contains('on'));
  if (on) await page.keyboard.press('Escape');
  await expect(outside(page)).not.toHaveClass(/on/);
  expect(errs).toEqual([]);
});

test('the scene never shows the room underneath it while open', async ({ page }) => {
  await openRoom(page);
  await open(page);
  const o = await outside(page).evaluate((e) => ({
    op: getComputedStyle(e).opacity,
    bg: getComputedStyle(e).backgroundColor,
    pos: getComputedStyle(e).position,
  }));
  expect(o.op).toBe('1');
  expect(o.pos).toBe('fixed');
  expect(o.bg).not.toBe('rgba(0, 0, 0, 0)');
});

test('the lake scene has the small house, lake and mountains but no sun or moon', async ({
  page,
}) => {
  await openRoom(page);
  await open(page);
  await expect(page.locator('#outSvg #outHouse')).toHaveCount(1);
  const w = await page
    .locator('#outSvg #outHouse')
    .evaluate((e) => (e as unknown as SVGGraphicsElement).getBBox().width);
  expect(w).toBeLessThan(30); // tiny: 480 units wide scene, house about 13
  expect(await page.locator('#outSvg').innerHTML()).not.toMatch(/moonG|sunG|id="sun"/);
});

test('hotspots: mailbox mails me, signposts go to my sites, boats react', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  await open(page);
  const mail = page.locator('#outHot a[href^="mailto:"]');
  await expect(mail).toHaveCount(1);
  await expect(mail).toHaveAttribute('href', 'mailto:phamhongphuc.present@gmail.com');
  for (const host of ['decipher', 'fantasy', 'experiment']) {
    const a = page.locator(
      `#outHot a[href="https://${host}.peter-present.xyz/"], #outHot a[href^="https://${host}.peter-present.xyz"]`
    );
    await expect(a, host).toHaveCount(1);
    await expect(a).toHaveAttribute('rel', /noopener/);
    await expect(a).toHaveAttribute('target', '_blank');
  }
  for (const b of await page.locator('#outHot button').all()) await b.dispatchEvent('click');
  await page.waitForTimeout(6000);
  expect(errs).toEqual([]);
});

test('the scene is built for any weather and time of day without errors', async ({ page }) => {
  test.setTimeout(240_000);
  const errs = watchErrors(page);
  const days = ['2026-01-10', '2026-04-15', '2026-07-15', '2026-10-20', '2026-10-31', '2026-12-20'];
  for (const d of days) {
    const [y, m, dd] = d.split('-').map(Number);
    for (const h of [3, 6.5, 12, 18.5, 22]) {
      const p = await page.context().newPage();
      watchErrors(p).forEach((e) => errs.push(e));
      await openRoom(p, { at: [y, m, dd, h] });
      await open(p);
      expect(await p.locator('#outSvg').innerHTML(), `${d} ${h}`).toContain('outHouse');
      await p.close();
    }
  }
  expect(errs).toEqual([]);
});

test('the scene shows the same weather as the window on that day', async ({ browser }) => {
  // like the other specs, ask the real generator what the day is, then look at what the page does with it
  const cases: [number, number, number][] = [
    [2026, 10, 30],
    [2026, 10, 31],
    [2026, 1, 10],
    [2026, 7, 15],
    [2026, 4, 15],
  ];
  for (const [y, m, d] of cases) {
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const p = await ctx.newPage();
    const cfg = dayCfg(new Date(y, m - 1, d, 12));
    await openRoom(p, { at: [y, m, d, 12] });
    const fog = Number(await p.locator('#fogRect').evaluate((e) => getComputedStyle(e).opacity));
    await open(p);
    await expect(p.locator('#outCap')).toContainText(WEATHER[cfg.weather as keyof typeof WEATHER]);
    // fog is the one weather that must look the same in both: dense in the window, dense in the scene
    const sceneFog = (await p.locator('#outSvg').innerHTML()).includes('url(#oFogW)');
    expect(sceneFog, cfg.date).toBe(cfg.weather === 'fog');
    expect(fog > 0.5, cfg.date).toBe(cfg.weather === 'fog');
    await ctx.close();
  }
});

test('time slider in the scene is shown only when the build flag is on, and drives the scene', async ({
  page,
}) => {
  await openRoom(page);
  await open(page);
  await expect(page.locator('#outTime')).toBeVisible();
  const before = await page.locator('#outSvg').innerHTML();
  await page.locator('#outSlider').evaluate((el: HTMLInputElement) => {
    el.value = '23';
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.waitForTimeout(200);
  expect(await page.locator('#outSvg').innerHTML()).not.toBe(before);
  await expect(page.locator('#outClock')).toContainText('23');
});

test('lit window shows only when the room lights are on', async ({ page }) => {
  await openRoom(page, { at: [2026, 4, 15, 22] });
  const lights = ['Lamp — toggle light', 'Chandelier — toggle light'];
  const set = async (on: boolean) => {
    for (const l of lights) {
      const h = byLabel(page, l);
      if (((await h.getAttribute('aria-pressed')) === 'true') !== (on && l.startsWith('Lamp')))
        await press(h);
    }
  };
  const scene = async () => {
    await open(page);
    const html = await page.locator('#outSvg').innerHTML();
    await page.keyboard.press('Escape');
    await expect(outside(page)).not.toHaveClass(/on/);
    return html;
  };
  await set(true);
  const lit = await scene();
  await set(false);
  const dark = await scene();
  expect(dark).not.toBe(lit);
});

test('reduced motion: the scene opens and closes instantly', async ({ browser }) => {
  const ctx = await browser.newContext({
    reducedMotion: 'reduce',
    viewport: { width: 1280, height: 800 },
  });
  const p = await ctx.newPage();
  await openRoom(p);
  await press(byLabel(p, KINDLE));
  await expect(outside(p)).toHaveClass(/on/);
  expect(await outside(p).evaluate((e) => e.getAnimations().length)).toBe(0);
  await p.keyboard.press('Escape');
  await expect(outside(p)).not.toHaveClass(/on/);
  await ctx.close();
});

test('while the scene is open the room is not drawing (loop idles)', async ({ page }) => {
  await openRoom(page);
  await open(page);
  const a = await page.locator('#code').innerHTML();
  await page.waitForTimeout(100);
  expect(await page.locator('#code').innerHTML()).toBe(a);
});

test('time slider changes made in the scene carry back to the room', async ({ page }) => {
  await openRoom(page);
  await open(page);
  await page.locator('#outSlider').evaluate((el: HTMLInputElement) => {
    el.value = '2';
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(100);
  expect(Number(await page.locator('#slider').inputValue())).toBeCloseTo(2, 1);
  await setHour(page, 12);
});
