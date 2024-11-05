import {
  AccountAbstractionDescription,
  EthGraphQuery,
  LedCaroDescription,
  NextAppDescription,
  ProfileDescription,
} from 'src/components/ProjectDescription';
import { ProjectType } from 'src/globals';

type Type = {
  [key: string]: Array<Array<{ index: number; layoutIndex: number }>>;
};

export const ProjectLayoutConfig: Type = {
  md: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 3, layoutIndex: 1 },
    ],
    [
      { index: 1, layoutIndex: 2 },
      { index: 4, layoutIndex: 3 },
    ],
    [{ index: 2, layoutIndex: 4 }],
  ],
  sm: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 2, layoutIndex: 1 },
      { index: 4, layoutIndex: 2 },
    ],
    [
      { index: 1, layoutIndex: 3 },
      { index: 3, layoutIndex: 4 },
    ],
  ],
  xs: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 1, layoutIndex: 1 },
      { index: 2, layoutIndex: 2 },
      { index: 3, layoutIndex: 3 },
      { index: 4, layoutIndex: 4 },
    ],
  ],
};

export const ProjectConfig: Array<ProjectType> = [
  {
    id: 'profile',
    technologies: ['next', 'react', 'vercel'],
    title: 'Personal profile',
    description: ProfileDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://peter-present.xyz/',
        symbol: 'Γ',
        color: 'gray',
      },
      {
        id: 'github',
        title: 'github',
        to: 'https://github.com/phamhongphuc1999/profile',
        symbol: 'Δ',
        color: 'purple',
      },
    ],
  },
  {
    id: 'account-abstraction-app',
    technologies: ['react', 'ethers', 'mui', 'wagmi'],
    title: 'Account Abstraction App',
    description: AccountAbstractionDescription,
    links: [
      {
        id: 'github',
        title: 'github',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        symbol: 'Θ',
        color: 'gray',
      },
    ],
  },
  {
    id: 'next-app',
    technologies: ['next'],
    title: 'Next app',
    description: NextAppDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://my-next-app-one-topaz.vercel.app/',
        symbol: 'Π',
        color: 'purple',
      },
    ],
  },
  {
    id: 'eth-graph-query',
    technologies: ['vite', 'the graph', 'rest full api'],
    title: 'Eth graph query',
    description: EthGraphQuery,
    links: [
      {
        id: 'npm',
        title: 'More',
        to: 'https://www.npmjs.com/package/eth-graph-query',
        symbol: 'Σ',
        color: 'gray',
      },
    ],
  },
  {
    id: 'led-caro',
    technologies: ['vite', 'bun', 'react', 'css'],
    title: 'Led caro',
    description: LedCaroDescription,
    links: [
      {
        id: 'npm',
        title: 'More',
        to: 'https://www.npmjs.com/package/@peter-present/led-caro',
        symbol: 'Ω',
        color: 'purple',
      },
    ],
  },
];
