# Rules for Claude

## Tests

- Never run any test on your own: `npm test`, `npm run test:e2e`, `npx playwright test` (including a single file or a single case), or `tsx --test`. They are slow and use a lot of resources.
- To run a test, ask first and wait for a clear yes. Each time: an earlier yes does not cover the next run.
- Static checks are fine without asking: `npx tsc --noEmit`, `eslint`, `prettier`.
- Where the tests live: `tests/` (pure logic, `npm test`) and `e2e/` (Playwright on a production build, `npm run test:e2e`, which stops `next dev` first because the build writes to `.next`).

## Git

- Never commit or push on your own. Only do it when the user asks, every time.
- Do not stage files (`git add`) for a commit that was not asked for.
