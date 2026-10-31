import { expect, test } from '@playwright/test';
import { dayCfg } from '../src/views/shared/world';
import { openRoom, setDate, setHour, watchErrors, windowFingerprint } from './lib/room';

test('the room starts at the time of the visitor', async ({ page }) => {
  await openRoom(page, { at: [2026, 4, 15, 9, 30] });
  expect(Number(await page.locator('#slider').inputValue())).toBeCloseTo(9.5, 1);
  await expect(page.locator('#nowBtn')).toHaveClass(/on/);
});

test('night darkens the room, noon does not', async ({ page }) => {
  await openRoom(page);
  const dark = () => page.locator('#dark').evaluate((e) => Number(getComputedStyle(e).opacity));
  await setHour(page, 12);
  const noon = await dark();
  await setHour(page, 23);
  const night = await dark();
  expect(night).toBeGreaterThan(noon + 0.3);
});

test('dragging the slider leaves auto mode, "Now" returns to it', async ({ page }) => {
  await openRoom(page);
  await setHour(page, 3);
  await expect(page.locator('#nowBtn')).not.toHaveClass(/on/);
  await page.locator('#nowBtn').click();
  await expect(page.locator('#nowBtn')).toHaveClass(/on/);
  expect(Number(await page.locator('#slider').inputValue())).toBeCloseTo(12, 0);
});

test('the window valley is the same for the same date and differs across dates', async ({
  page,
}) => {
  const errs = watchErrors(page);
  await openRoom(page);
  const fps = new Map<string, string>();
  for (const d of ['2026-01-10', '2026-04-15', '2026-07-15', '2026-10-20']) {
    await setDate(page, d);
    fps.set(d, await windowFingerprint(page));
  }
  expect(new Set(fps.values()).size).toBe(4);
  await setDate(page, '2026-04-15');
  expect(await windowFingerprint(page)).toBe(fps.get('2026-04-15'));
  await page.reload();
  await setDate(page, '2026-04-15');
  expect(await windowFingerprint(page)).toBe(fps.get('2026-04-15'));
  expect(errs).toEqual([]);
});

test('previous/next day buttons move the date by exactly one day', async ({ page }) => {
  await openRoom(page);
  await setDate(page, '2026-03-31');
  await page.locator('#dNext').click();
  expect(await page.locator('#dateIn').inputValue()).toBe('2026-04-01');
  await page.locator('#dPrev').click();
  await page.locator('#dPrev').click();
  expect(await page.locator('#dateIn').inputValue()).toBe('2026-03-30');
});

test('every month and the extremes of the day render without errors', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  for (let m = 1; m <= 12; m++) {
    await setDate(page, `2026-${String(m).padStart(2, '0')}-15`);
    for (const h of [0, 5.5, 7, 12, 18.5, 23.99]) await setHour(page, h);
  }
  await setDate(page, '2028-02-29');
  expect(errs).toEqual([]);
});

test('clock hands follow the slider', async ({ page }) => {
  await openRoom(page);
  const rot = (id: string) => page.locator(`#${id}`).getAttribute('transform');
  await setHour(page, 3);
  const a = await rot('hHand');
  await setHour(page, 9);
  expect(await rot('hHand')).not.toBe(a);
});

test('a day with a flock of birds animates every bird (keyframes must be valid CSS)', async ({
  page,
}) => {
  const d = new Date(2026, 3, 1, 12);
  while (dayCfg(d).visitor !== 'birds') d.setDate(d.getDate() + 1);
  await openRoom(page, { at: [d.getFullYear(), d.getMonth() + 1, d.getDate(), 12] });
  const birds = page.locator('#Lvis path[d^="M-6 0Q"]');
  await expect(birds).toHaveCount(6);
  // an invalid keyframe does not throw: the browser drops the property and the animation object still exists, so look inside
  const frames = await birds.evaluateAll((els) =>
    els.map((e) =>
      (
        (e.getAnimations()[0].effect as KeyframeEffect).getKeyframes() as { transform?: string }[]
      ).map((k) => k.transform ?? '')
    )
  );
  for (const f of frames) {
    expect(f).toHaveLength(2);
    for (const t of f) expect(t).toContain('scaleY');
  }
});
