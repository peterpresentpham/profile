import { expect, test } from '@playwright/test';
import { openRoom } from './lib/room';

// The server for the other specs is built with NEXT_PUBLIC_SHOW_TIME_CONTROLS=true. This one checks the markup contract the
// flag relies on: the room's data-controls attribute is what makes both the room bar and the scene slider visible.
test('time controls are driven by one data-controls attribute on the room root', async ({
  page,
}) => {
  await openRoom(page);
  const root = page.locator('.room-root');
  await expect(root).toHaveAttribute('data-controls', /.*/);
  await expect(page.locator('#bar')).toBeVisible();
  await root.evaluate((e) => e.removeAttribute('data-controls'));
  await expect(page.locator('#bar')).toBeHidden();
  await expect(page.locator('#outTime')).toBeHidden();
});
