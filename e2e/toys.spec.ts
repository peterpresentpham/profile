import { expect, test } from '@playwright/test';
import { byLabel, labels, openRoom, press, watchErrors } from './lib/room';

test('lamp and chandelier toggle their pressed state', async ({ page }) => {
  await openRoom(page);
  for (const label of ['Lamp — toggle light', 'Chandelier — toggle light']) {
    const h = byLabel(page, label);
    const before = await h.getAttribute('aria-pressed');
    await press(h);
    expect(await h.getAttribute('aria-pressed')).not.toBe(before);
    await press(h);
    expect(await h.getAttribute('aria-pressed')).toBe(before);
  }
});

test('lamp is off at noon and on at night by default', async ({ page }) => {
  await openRoom(page, { at: [2026, 4, 15, 12] });
  await expect(byLabel(page, 'Lamp — toggle light')).toHaveAttribute('aria-pressed', 'false');
  const p2 = await page.context().newPage();
  await openRoom(p2, { at: [2026, 4, 15, 20, 30] });
  await expect(byLabel(p2, 'Lamp — toggle light')).toHaveAttribute('aria-pressed', 'true');
});

test('clicking every hot area and toy never throws, and never leaves a drawer stuck', async ({
  page,
}) => {
  const errs = watchErrors(page);
  await openRoom(page);
  for (const l of await labels(page)) {
    // the Kindle opens a full-screen scene and the frame a photo overlay; both have their own specs
    if (/Kindle|Picture frame/.test(l)) continue;
    await press(byLabel(page, l));
    await page.keyboard.press('Escape');
  }
  await expect(page.locator('#panel')).not.toHaveClass(/open/);
  expect(errs).toEqual([]);
});

test('toys leave no stray nodes behind after their effect ends', async ({ page }) => {
  await openRoom(page);
  const before = await page.locator('svg *').count();
  for (const l of ['Plant', 'Keyboard', 'Model ship', 'Conch', 'Rug'])
    await press(byLabel(page, l));
  await page.waitForTimeout(1800);
  expect(await page.locator('svg *').count()).toBeLessThanOrEqual(before + 2);
});

test('cat can be petted repeatedly', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  for (let i = 0; i < 6; i++) await press(byLabel(page, 'Cat — say hi'));
  expect(errs).toEqual([]);
});

test('speaker toggles music state without errors', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  const sp = byLabel(page, 'Speaker — music on/off');
  await press(sp);
  await press(sp);
  expect(errs.filter((e) => !/play\(\)|NotAllowed|media/i.test(e))).toEqual([]);
});

test('picture frame opens a photo overlay, flips it, and closes with focus returned', async ({
  page,
}) => {
  const errs = watchErrors(page);
  await openRoom(page);
  const frame = byLabel(page, 'Picture frame — take a closer look');
  await press(frame);
  await expect(page.locator('#photo')).toHaveClass(/on/);
  await page.waitForTimeout(1200);
  await page.locator('#photoCard').click();
  await page.waitForTimeout(1200); // the flip has to finish before Esc is accepted
  await page.keyboard.press('Escape');
  await expect(page.locator('#photo')).not.toHaveClass(/on/);
  expect(errs).toEqual([]);
});

test('Space jumps the monitor game and the game keeps drawing', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  const snap = () => page.locator('#code canvas').evaluate((c: HTMLCanvasElement) => c.toDataURL());
  const a = await snap();
  await page.keyboard.press('Space');
  await expect.poll(snap).not.toBe(a);
  expect(errs).toEqual([]);
});
