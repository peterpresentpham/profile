# Peter's profile

My personal site: instead of a page you scroll, a small room you can look around. It follows your clock (lamp on when it's dark where you are), the window shows a world that changes every day, and each object opens a little drawer about something I've made.

Live: https://peter-present.xyz/

## What's in the room

- **Window**: a generated valley with the day's weather, season, moon phase and visitors (now and then something rarer).
- **Lights**: a desk lamp and a chandelier, each switchable. With every light off, the stickers on the walls glow in the dark.
- **Objects**: corkboard, bookshelf, tablet, computer, notebook, phone, caro board, the cat. Click one to open its drawer; click outside or press `Esc` to close it.
- **Computer**: a small runner game on the monitor. Click it to make the runner jump.
- **Speaker**: off by default. Click it for piano: Bach by day, Satie at night.

## Run it

Needs Node 20+.

```shell
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Configuration

Copy `.env.example` to `.env` if you want to change something.

| Variable                         | What it does                                                     |
| -------------------------------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_SHOW_TIME_CONTROLS` | `true` shows a bar to scrub the time and date. Off by default.   |
| `NEXT_PUBLIC_GTM_ID`             | Google Tag Manager container id (defaults to the production one) |

`NEXT_PUBLIC_*` values are read at build time.
