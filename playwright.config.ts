import { defineConfig, devices } from '@playwright/test';

// Browser tests: the real production build running on Chromium. It gets its own port and fixed env vars, so it does not
// depend on the developer's .env. Screenshots and traces are kept only for failures; reports go to test-reports/ (gitignored).
const PORT = 5192;

export default defineConfig({
  testDir: './e2e',
  outputDir: './test-reports/e2e/artifacts',
  timeout: 60_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  retries: 0,
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-reports/e2e/results.json' }],
    ['html', { outputFolder: 'test-reports/e2e/html', open: 'never' }],
  ],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'off',
    locale: 'en-US',
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1600, height: 900 } },
    },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    // The flag is baked in at build time, so the build must see it. `next build` writes to .next, so stop `next dev` first.
    command: `npm run build && npx next start -p ${PORT}`,
    port: PORT,
    reuseExistingServer: false,
    timeout: 240_000,
    env: {
      NEXT_PUBLIC_SHOW_TIME_CONTROLS: 'true',
      NEXT_PUBLIC_GTM_ID: 'GTM-TEST000',
    },
  },
});
