// `?v=` busts caches: next.config.mjs serves these files with a one-year immutable cache, so bump it when you replace one.
const V = '?v=2';

export const IMAGES = {
  icon: `/icon.svg${V}`,
  ico: `/favicon.ico${V}`,
  apple: `/apple-touch-icon.png${V}`,
  og: `/og.jpg${V}`,
};
