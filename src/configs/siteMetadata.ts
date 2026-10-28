import { IMAGES } from './images';

export const siteMetadata = {
  title: 'Peter — Software Developer',
  description:
    'A cosy interactive room that follows your clock. Peter is a software developer in Hanoi building web apps, backends, blockchain protocols and small browser games.',
  url: 'https://peter-present.xyz/',
  siteName: 'Peter',
  twitterHandle: '@PhamHon08928762',
  keywords: [
    'software developer',
    'full stack',
    'blockchain',
    'ERC-4337',
    'zero-knowledge',
    'Hanoi',
  ],
  icon: IMAGES.star,
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
