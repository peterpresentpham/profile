import {
  AccountAbstractionDescription,
  EthGraphQuery,
  LedCaroDescription,
  NextAppDescription,
  ProfileDescription,
} from 'src/components/ProjectDescription';
import { ProjectType } from 'src/globals';
import { Next, React, SubSkills } from './SkillConfig/CoreSkills';

type Type = {
  [key: string]: Array<Array<{ index: number; layoutIndex: number }>>;
};

export const ProjectLayoutConfig: Type = {
  md: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 3, layoutIndex: 1 },
    ],
    [{ index: 1, layoutIndex: 2 }],
    [
      { index: 2, layoutIndex: 3 },
      { index: 4, layoutIndex: 4 },
    ],
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

const { VercelSkill, Ethers, MUI, WagmiSkill, ViteSkill, TheGraphSkill, ShadcnSkill } = SubSkills;

export const ProjectConfig: Array<ProjectType> = [
  {
    id: 'profile',
    technologies: [Next, React, VercelSkill],
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
    technologies: [React, Ethers, MUI, WagmiSkill],
    title: 'Account Abstraction App',
    description: AccountAbstractionDescription,
    links: [
      {
        id: 'frontend-github',
        title: 'User Interface',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        symbol: 'ξ',
        color: 'gray',
      },
      {
        id: 'smart-contract',
        title: 'Smart Contract',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-contract',
        symbol: 'Ξ',
        color: 'purple',
      },
      {
        id: 'bundler',
        title: 'Bundler',
        to: 'https://github.com/phamhongphuc1999/bundler',
        symbol: 'Ψ',
        color: 'orange',
      },
    ],
  },
  {
    id: 'next-app',
    technologies: [Next, ShadcnSkill],
    title: 'My blog app',
    description: NextAppDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://my-next-app-one-topaz.vercel.app/',
        symbol: 'δ',
        color: 'purple',
      },
    ],
  },
  {
    id: 'eth-graph-query',
    technologies: [ViteSkill, TheGraphSkill],
    title: 'Eth graph query',
    description: EthGraphQuery,
    links: [
      {
        id: 'npm',
        title: 'Npm package',
        to: 'https://www.npmjs.com/package/eth-graph-query',
        symbol: 'Σ',
        color: 'gray',
      },
    ],
  },
  {
    id: 'led-caro',
    technologies: [ViteSkill, React],
    title: 'Led caro',
    description: LedCaroDescription,
    links: [
      {
        id: 'npm',
        title: 'Npm package',
        to: 'https://www.npmjs.com/package/@peter-present/led-caro',
        symbol: 'Ω',
        color: 'orange',
      },
    ],
  },
];
