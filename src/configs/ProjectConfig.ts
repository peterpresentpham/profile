import {
  AccountAbstractionDescription,
  CaroDescription,
  EthGraphQuery,
  NextAppDescription,
  PikachuDescription,
  ProfileDescription,
} from 'src/components/ProjectDescription';
import { ProjectType } from 'src/globals';
import { CoreSkills, Next, React } from './SkillConfig/CoreSkills';

const { VercelSkill, Ethers, MUI, WagmiSkill, ViteSkill, TheGraphSkill, ShadcnSkill, Tailwind } =
  CoreSkills;

export const ProjectConfig: Array<ProjectType> = [
  {
    id: 'profile',
    technologies: [Next, React, VercelSkill, Tailwind],
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
    id: 'next-app',
    technologies: [Next, React, ShadcnSkill, Tailwind],
    title: 'My blog app',
    description: NextAppDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://blog.peter-present.xyz/',
        symbol: 'δ',
        color: 'purple',
      },
      {
        id: 'github',
        title: 'github',
        to: 'https://github.com/phamhongphuc1999/my-next-app',
        symbol: 'β',
        color: 'orange',
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
    id: 'caro',
    technologies: [Next, React, ShadcnSkill, Tailwind],
    title: 'Caro',
    description: CaroDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://experiment.peter-present.xyz/caro',
        symbol: 'η',
        color: 'orange',
      },
    ],
  },
  {
    id: 'account-abstraction-app',
    technologies: [React, Ethers, MUI, WagmiSkill],
    title: 'Recovery ERC-4337 Wallet',
    description: AccountAbstractionDescription,
    links: [
      {
        id: 'frontend-github',
        title: 'UI',
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
        color: 'blue',
      },
      {
        id: 'arithmetic-circuit',
        title: 'Arithmetic circuit',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-contract/tree/main/circom',
        symbol: 'φ',
        color: 'orange',
      },
    ],
  },
  {
    id: 'pikachu',
    technologies: [Next, React, ShadcnSkill, Tailwind],
    title: 'Pikachu',
    description: PikachuDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://experiment.peter-present.xyz/pikachu',
        symbol: 'η',
        color: 'gray',
      },
    ],
  },
];
