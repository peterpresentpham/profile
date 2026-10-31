import { expect, test } from '@playwright/test';
import { byLabel, labels, openRoom, watchErrors } from './lib/room';

test('loads without runtime errors and builds the whole room', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  await expect(page.locator('svg').first()).toBeVisible();
  expect((await labels(page)).length).toBeGreaterThanOrEqual(15);
  expect(errs).toEqual([]);
});

test('does not scroll sideways', async ({ page }) => {
  await openRoom(page);
  const over = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  expect(over).toBeLessThanOrEqual(1);
});

test('every hot area is keyboard reachable and named', async ({ page }) => {
  await openRoom(page);
  const all = await page.locator('.hot').evaluateAll((els) =>
    els.map((e) => ({
      tab: e.getAttribute('tabindex'),
      role: e.getAttribute('role'),
      label: e.getAttribute('aria-label'),
    }))
  );
  for (const h of all) {
    expect(h.tab).toBe('0');
    expect(h.role).toBe('button');
    expect((h.label ?? '').length).toBeGreaterThan(2);
  }
  expect(new Set(all.map((h) => h.label)).size).toBe(all.length);
});

test('focusing a hot area shows its tooltip', async ({ page }) => {
  await openRoom(page);
  await byLabel(page, 'Cat — say hi').focus();
  await expect(page.locator('#tip')).toHaveClass(/on/);
  await expect(page.locator('#tip')).toHaveText('Cat — say hi');
});

test('welcome card appears for a first visit and stays dismissed afterwards', async ({ page }) => {
  await openRoom(page, { welcome: true });
  const card = page.locator('#welcome');
  await expect(card).not.toHaveClass(/gone/);
  await page.locator('#enter').click();
  await expect(card).toHaveClass(/gone/);
  expect(await page.evaluate(() => localStorage.getItem('introSeen2d'))).toBe('1');
  await page.reload();
  await expect(page.locator('#welcome')).toHaveClass(/gone/);
});

test('works when localStorage is unavailable', async ({ page }) => {
  const errs = watchErrors(page);
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new Error('blocked');
      },
    });
  });
  await page.route(/googletagmanager/, (r) => r.abort());
  await page.goto('/');
  await expect(page.locator('.hot').first()).toBeAttached();
  expect(errs.filter((e) => !/blocked/.test(e))).toEqual([]);
});
