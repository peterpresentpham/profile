import { IMAGES } from './images';

export const siteMetadata = {
  title: 'Peter Present — Software Developer',
  description:
    'A cosy interactive room that follows your clock. Peter Present is a software developer building web apps, backends, blockchain protocols and small browser games.',
  url: 'https://peter-present.xyz/',
  // the same address without the trailing slash, which is how Next.js writes the canonical and og:url tags
  origin: 'https://peter-present.xyz',
  siteName: 'Peter Present',
  // bump when the content changes in a way worth telling crawlers about (used as the sitemap's lastModified)
  updated: '2026-10-30',
  twitterHandle: '@PhamHon08928762',
  keywords: [
    'software developer',
    'full stack',
    'blockchain',
    'ERC-4337',
    'zero-knowledge',
    'interactive portfolio',
    'browser games',
    'procedural generation',
  ],
  icons: {
    icon: [
      { url: IMAGES.icon, type: 'image/svg+xml' },
      { url: IMAGES.ico, sizes: '48x48' },
    ],
    apple: IMAGES.apple,
  },
  image: {
    url: IMAGES.og,
    width: 1200,
    height: 630,
    alt: 'A cosy room with a window onto today’s world',
  },
  links: {
    github: 'https://github.com/peterpresentpham',
    linkedin: 'https://www.linkedin.com/in/peter-present/',
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-W6VHX4S7',
};
