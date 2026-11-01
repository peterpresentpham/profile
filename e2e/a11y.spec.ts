import { expect, test } from '@playwright/test';
import { byLabel, openRoom, panel, press, watchErrors } from './lib/room';

test('every hot area is big enough to hit: 44px on a phone, 24px on a desktop', async ({
  page,
  isMobile,
}) => {
  await openRoom(page);
  const min = isMobile ? 44 : 24;
  const small = await page.locator('.hot').evaluateAll(
    (els, m) =>
      els
        .map((e) => {
          const r = e.getBoundingClientRect();
          return {
            label: e.getAttribute('aria-label'),
            w: Math.round(r.width),
            h: Math.round(r.height),
          };
        })
        .filter((x) => x.w < m - 1 || x.h < m - 1),
    min
  );
  expect(small).toEqual([]);
});

test('the scene is a group of buttons for assistive technology, not a flat image', async ({
  page,
}) => {
  await openRoom(page);
  await expect(page.locator('#scene')).toHaveAttribute('role', 'group');
});

test.describe('panning a narrow screen without dragging', () => {
  test('arrow buttons slide the room and stop at both ends', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'the room only pans on narrow screens');
    await openRoom(page);
    const x = () => page.locator('#scene').evaluate((e) => e.style.transform);
    const start = await x();
    await page.locator('#panR').dispatchEvent('click');
    await expect.poll(x).not.toBe(start);
    for (let i = 0; i < 5; i++) await page.locator('#panR').dispatchEvent('click');
    await expect(page.locator('#panR')).toBeDisabled();
    await expect(page.locator('#panL')).toBeEnabled();
    for (let i = 0; i < 8; i++) await page.locator('#panL').dispatchEvent('click');
    await expect(page.locator('#panL')).toBeDisabled();
  });

  test('moving focus to an object off screen brings it into view', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'the room only pans on narrow screens');
    await openRoom(page);
    const shelf = byLabel(page, 'Bookshelf — Writing');
    const box = () =>
      shelf.evaluate((e) => {
        const r = e.getBoundingClientRect();
        return { left: r.left, right: r.right, vw: innerWidth };
      });
    await shelf.evaluate((e) => (e as unknown as HTMLElement).focus());
    await expect
      .poll(async () => {
        const b = await box();
        return b.left >= 0 && b.right <= b.vw;
      })
      .toBe(true);
  });

  test('the arrows are not there on a wide screen', async ({ page, isMobile }) => {
    test.skip(isMobile, 'wide screens only');
    await openRoom(page);
    await expect(page.locator('#panL')).toBeHidden();
    await expect(page.locator('#panR')).toBeHidden();
  });
});

test('visually hidden SEO links are kept out of the Tab order', async ({ page }) => {
  await openRoom(page);
  const tabbable = await page
    .locator('.sr-only a')
    .evaluateAll((as) => as.map((a) => a.getAttribute('tabindex')));
  expect(tabbable.length).toBeGreaterThan(0);
  expect(tabbable.every((t) => t === '-1')).toBe(true);
  for (let i = 0; i < 3; i++) await page.keyboard.press('Tab');
  const inSr = await page.evaluate(() => !!document.activeElement?.closest('.sr-only'));
  expect(inSr).toBe(false);
});

test('a keyboard focus ring is visible on a hot area', async ({ page }) => {
  await openRoom(page);
  await byLabel(page, 'Cat — say hi').focus();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Shift+Tab');
  const s = await byLabel(page, 'Cat — say hi').evaluate((e) => {
    const c = getComputedStyle(e);
    return { sw: c.strokeWidth, dash: c.strokeDasharray };
  });
  expect(s.sw).toBe('3px');
  expect(s.dash).toBe('none');
});

test.describe('the drawer', () => {
  test('is inert while closed, so its links are not reachable by Tab', async ({ page }) => {
    await openRoom(page);
    await expect(panel(page)).toHaveAttribute('inert', '');
    await press(byLabel(page, 'Phone — Say hi'));
    await expect(panel(page)).not.toHaveAttribute('inert', '');
    await page.keyboard.press('Escape');
    await expect(panel(page)).toHaveAttribute('inert', '');
  });

  test('puts focus on its close button and gives it back to the object that opened it', async ({
    page,
  }) => {
    await openRoom(page);
    const phone = byLabel(page, 'Phone — Say hi');
    await press(phone);
    await expect(page.locator('#close')).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(phone).toBeFocused();
  });

  test('does not steal focus back when the focus was already somewhere else', async ({ page }) => {
    await openRoom(page);
    await press(byLabel(page, 'Phone — Say hi'));
    await byLabel(page, 'Cat — say hi').focus();
    await page.keyboard.press('Escape');
    await expect(byLabel(page, 'Cat — say hi')).toBeFocused();
  });
});

test('changing the day is announced to screen readers', async ({ page }) => {
  await openRoom(page);
  await page.locator('#dNext').click();
  await expect(page.locator('#live')).toContainText(
    /\d{1,2} \w+ \d{4}: .+, (spring|summer|autumn|winter)/
  );
});

test('music announces what it plays', async ({ page }) => {
  const errs = watchErrors(page);
  await openRoom(page);
  await press(byLabel(page, 'Speaker — music on/off'));
  await expect(page.locator('#live')).toContainText('Music on');
  await press(byLabel(page, 'Speaker — music on/off'));
  await expect(page.locator('#live')).toContainText('Music off');
  expect(errs.filter((e) => !/play\(\)|NotAllowed|media/i.test(e))).toEqual([]);
});

test('touch screens are told what to tap and see the tappable things once', async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, 'touch screens only');
  await openRoom(page, { welcome: true });
  await expect(page.locator('#welcome .tap')).toContainText('Tap');
  await page.locator('#enter').tap();
  await expect(page.locator('#hots')).toHaveClass(/peek/);
  await expect(page.locator('#hots')).not.toHaveClass(/peek/, { timeout: 6000 });
});

test('desktop welcome does not ask for taps', async ({ page, isMobile }) => {
  test.skip(isMobile, 'wide screens only');
  await openRoom(page, { welcome: true });
  await expect(page.locator('#welcome .tap')).toHaveCount(0);
});

test('no text in the drawer or the bars is smaller than 12px', async ({ page }) => {
  await openRoom(page);
  await press(byLabel(page, 'Phone — Say hi'));
  const tiny = await page.evaluate(() => {
    const out: string[] = [];
    for (const e of document.querySelectorAll(
      '#panel *, #bar *, #panhint, .eyebrow, .note, .tag'
    )) {
      const own = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent!.trim());
      if (own && parseFloat(getComputedStyle(e).fontSize) < 12)
        out.push(`${e.className || e.tagName}: ${e.textContent!.trim().slice(0, 20)}`);
    }
    return out;
  });
  expect(tiny).toEqual([]);
});

test('the Writing drawer has its new heading and only working links', async ({ page }) => {
  await openRoom(page);
  await press(byLabel(page, 'Bookshelf — Writing'));
  await expect(page.locator('#pbody h2')).toHaveText('A thesis, in public');
  expect(await page.locator('#pbody a').count()).toBeGreaterThan(0);
  expect(await page.locator('#pbody').innerHTML()).not.toContain('blog.peter-present.xyz');
});
