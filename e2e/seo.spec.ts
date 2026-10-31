import { expect, test } from '@playwright/test';

const ORIGIN = 'https://peter-present.xyz';

test('head carries title, description, canonical and social tags', async ({ page }) => {
  await page.route(/googletagmanager/, (r) => r.abort());
  await page.goto('/');
  await expect(page).toHaveTitle(/Peter Present/);
  const meta = (sel: string) => page.locator(sel).first().getAttribute('content');
  expect((await meta('meta[name="description"]'))!.length).toBeGreaterThan(50);
  expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(ORIGIN);
  expect(await meta('meta[property="og:url"]')).toBe(ORIGIN);
  expect(await meta('meta[property="og:title"]')).toMatch(/Peter Present/);
  expect(await meta('meta[property="og:image"]')).toContain('/og.jpg');
  expect(await meta('meta[name="twitter:card"]')).toBe('summary_large_image');
});

test('JSON-LD is valid and describes the site and the person', async ({ page }) => {
  await page.goto('/');
  const raw = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(raw.length).toBeGreaterThan(0);
  const types = raw
    .flatMap((r) => JSON.parse(r)['@graph'] ?? [JSON.parse(r)])
    .map((n: { '@type': string }) => n['@type']);
  expect(types).toEqual(expect.arrayContaining(['WebSite', 'Person']));
});

test('crawlers get real text without running scripts', async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Peter Present');
  expect(await page.locator('h2').count()).toBeGreaterThan(0);
  expect(
    await page.locator('a[href^="https://github.com/peterpresentpham"]').count()
  ).toBeGreaterThan(0);
  await ctx.close();
});

test('robots.txt and sitemap.xml point at the canonical origin', async ({ request }) => {
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toMatch(/User-Agent: \*/i);
  expect(robots).toContain(`Sitemap: ${ORIGIN}/sitemap.xml`);
  const sm = await request.get('/sitemap.xml');
  expect(sm.ok()).toBe(true);
  expect(await sm.text()).toContain(`<loc>${ORIGIN}</loc>`);
});

test('static assets referenced by the head exist', async ({ request, page }) => {
  await page.goto('/');
  const hrefs = await page
    .locator('link[rel~="icon"], link[rel="apple-touch-icon"]')
    .evaluateAll((e) => e.map((x) => x.getAttribute('href')!));
  expect(hrefs.length).toBeGreaterThan(0);
  for (const h of [...hrefs, '/og.jpg']) expect((await request.get(h)).ok(), h).toBe(true);
});

test('unknown paths return 404', async ({ request }) => {
  expect((await request.get('/no-such-page')).status()).toBe(404);
});
