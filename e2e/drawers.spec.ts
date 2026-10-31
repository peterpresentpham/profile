import { expect, test } from '@playwright/test';
import { byLabel, openRoom, panel, press, watchErrors } from './lib/room';

const DRAWERS: [label: string, heading: RegExp | null][] = [
  ['Window — Fantasy World', null],
  ['Wall clock — Như Hôm Qua', null],
  ['Caro board — Playground', null],
  ['Corkboard — Recovery Wallet', null],
  ['Bookshelf — Writing', null],
  ['Stone tablet — Decipher', null],
  ['Computer — Workbench', null],
  ['Phone — Say hi', /Found something you like/],
  ['Notebook — About me', null],
];

for (const [label, heading] of DRAWERS) {
  test(`drawer "${label}" opens, has content, and closes with button and Esc`, async ({ page }) => {
    const errs = watchErrors(page);
    await openRoom(page);
    await press(byLabel(page, label));
    await expect(panel(page)).toHaveClass(/open/);
    expect((await page.locator('#pbody').innerText()).trim().length).toBeGreaterThan(20);
    if (heading) await expect(page.locator('#pbody')).toContainText(heading);
    await page.locator('#close').click();
    await expect(panel(page)).not.toHaveClass(/open/);
    await press(byLabel(page, label));
    await expect(panel(page)).toHaveClass(/open/);
    await page.keyboard.press('Escape');
    await expect(panel(page)).not.toHaveClass(/open/);
    expect(errs).toEqual([]);
  });
}

test('drawer links open safely in a new tab', async ({ page }) => {
  await openRoom(page);
  for (const [label] of DRAWERS) {
    await press(byLabel(page, label));
    const links = await page.locator('#pbody a[href^="http"]').evaluateAll((as) =>
      as.map((a) => ({
        href: a.getAttribute('href')!,
        target: a.getAttribute('target'),
        rel: a.getAttribute('rel') ?? '',
      }))
    );
    for (const l of links) {
      expect(l.target, l.href).toBe('_blank');
      expect(l.rel, l.href).toContain('noopener');
    }
    await page.keyboard.press('Escape');
  }
});

test('opening another drawer replaces the content of the first', async ({ page }) => {
  await openRoom(page);
  await press(byLabel(page, 'Phone — Say hi'));
  const a = await page.locator('#pbody').innerText();
  await press(byLabel(page, 'Bookshelf — Writing'));
  expect(await page.locator('#pbody').innerText()).not.toBe(a);
});

test('keyboard: Enter on a focused hot area opens its drawer', async ({ page }) => {
  await openRoom(page);
  await byLabel(page, 'Phone — Say hi').focus();
  await page.keyboard.press('Enter');
  await expect(panel(page)).toHaveClass(/open/);
});

test('contact drawer has an email and the GitHub and LinkedIn links', async ({ page }) => {
  await openRoom(page);
  await press(byLabel(page, 'Phone — Say hi'));
  await expect(page.locator('#pbody a[href^="mailto:"]')).toHaveCount(1);
  await expect(page.locator('#pbody a[href*="github.com/peterpresentpham"]')).toHaveCount(1);
  await expect(page.locator('#pbody a[href*="linkedin.com/in/peter-present"]')).toHaveCount(1);
});
