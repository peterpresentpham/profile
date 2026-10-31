// Helpers shared by the specs: a fixed clock, a quiet network, error watching and the few DOM handles the room exposes.
import { expect, type Locator, type Page } from '@playwright/test';

export interface OpenOptions {
  /** local date and time the page believes it is; default is a clear spring noon */
  at?: [number, number, number, number?, number?];
  /** show the welcome card (default: already dismissed) */
  welcome?: boolean;
}

export const NOON: OpenOptions['at'] = [2026, 4, 15, 12, 0];

/** Collects uncaught page errors and console errors; assert `toEqual([])` at the end of a test. */
export function watchErrors(page: Page): string[] {
  const errs: string[] = [];
  page.on('pageerror', (e) => errs.push(`pageerror: ${e.message}`));
  page.on('console', (m) => {
    if (m.type() === 'error' && !/Failed to load resource/.test(m.text()))
      errs.push(`console: ${m.text()}`);
  });
  return errs;
}

export async function openRoom(page: Page, o: OpenOptions = {}) {
  const [y, mo, d, h = 12, mi = 0] = o.at ?? NOON!;
  // block third parties: tests must not depend on (or send events to) Google Tag Manager
  await page.route(/googletagmanager|google-analytics/, (r) => r.abort());
  // fixed, not faked: Date says what we want but timers and animations run in real time like for a visitor
  await page.clock.setFixedTime(new Date(y, mo - 1, d, h, mi, 0));
  // a fresh context has empty storage, so the welcome card shows on its own; otherwise pretend it was already dismissed
  if (!o.welcome)
    await page.addInitScript(() => {
      try {
        localStorage.setItem('introSeen2d', '1');
      } catch {
        /* storage blocked: the page must cope */
      }
    });
  await page.goto('/', { waitUntil: 'load' });
  await expect(page.locator('.hot').first()).toBeAttached();
  return page;
}

/** The hot area with this aria-label. SVG rects have no text, so match on the attribute. */
export const byLabel = (page: Page, label: string): Locator =>
  page.locator(`.hot[aria-label="${label}"]`);

export const labels = (page: Page) =>
  page.locator('.hot').evaluateAll((els) => els.map((e) => e.getAttribute('aria-label') ?? ''));

/** SVG hit areas sit under other layers; dispatching the click keeps the test about behaviour, not about hover geometry. */
export const press = (l: Locator) => l.dispatchEvent('click');

export const panel = (page: Page) => page.locator('#panel');
export const outside = (page: Page) => page.locator('#outside');

/** Stable fingerprint of the window view for a day (trees and village are seeded per date). */
export const windowFingerprint = (page: Page) =>
  page.evaluate(() =>
    ['trees', 'village'].map((id) => document.getElementById(id)?.innerHTML ?? '').join('|')
  );

export async function setDate(page: Page, ymd: string) {
  await page.locator('#dateIn').fill(ymd);
  await page.locator('#dateIn').dispatchEvent('change');
}

export async function setHour(page: Page, hours: number) {
  await page.locator('#slider').evaluate((el: HTMLInputElement, v) => {
    el.value = String(v);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }, hours);
}
