import { SkillsType } from 'src/globals';
import {
  ApacheKafka,
  BlockchainSkill,
  Docker,
  DotNetApi,
  JavaSkill,
  Next,
  React,
  SubSkills,
  Vue,
} from './CoreSkills';

const {
  Ethers,
  Tailwind,
  AntDesign,
  MUI,
  MongoDb,
  MySqlDb,
  Maven,
  Graph,
  Redux,
  AccountAbstraction,
  SoliditySmartContract,
  Circom,
  Dockerfile,
  DockerCompose,
  MobX,
  PrimeVue,
  Pinia,
} = SubSkills;

export const SkillsLayoutConfig: {
  [key: string]: Array<Array<{ index: number; layoutIndex: number }>>;
} = {
  md: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 3, layoutIndex: 1 },
      { index: 6, layoutIndex: 2 },
    ],
    [
      { index: 1, layoutIndex: 3 },
      { index: 4, layoutIndex: 4 },
      { index: 7, layoutIndex: 5 },
    ],
    [
      { index: 2, layoutIndex: 6 },
      { index: 5, layoutIndex: 7 },
    ],
  ],
  sm: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 2, layoutIndex: 1 },
      { index: 6, layoutIndex: 2 },
    ],
    [
      { index: 1, layoutIndex: 3 },
      { index: 3, layoutIndex: 4 },
      { index: 5, layoutIndex: 5 },
      { index: 4, layoutIndex: 6 },
      { index: 7, layoutIndex: 7 },
    ],
  ],
  xs: [
    [
      { index: 0, layoutIndex: 0 },
      { index: 1, layoutIndex: 1 },
      { index: 2, layoutIndex: 2 },
      { index: 3, layoutIndex: 3 },
      { index: 4, layoutIndex: 4 },
      { index: 5, layoutIndex: 5 },
      { index: 6, layoutIndex: 6 },
      { index: 7, layoutIndex: 7 },
    ],
  ],
};

export const SkillsConfig: Array<SkillsType> = [
  {
    ...React,
    relevantSkills: [Next, Redux, MobX, Ethers, AntDesign, MUI, Tailwind],
    links: [
      {
        id: 'account-abstraction-app',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        mode: 'external',
        title: 'Recovery Account Abstraction Wallet that uses zero-knowledge proof',
      },
      {
        id: 'react-hook-utils',
        to: 'https://www.npmjs.com/package/@peter-present/react-hook-utils',
        mode: 'external',
        title: 'Simple package which provides some utility hooks.',
      },
      {
        id: 'led caro',
        to: 'https://www.npmjs.com/package/@peter-present/led-caro',
        mode: 'external',
        title: 'Simple package which draw caro.',
      },
    ],
  },
  {
    ...Next,
    relevantSkills: [React, Redux, Ethers, AntDesign, MUI, Tailwind],
    links: [
      {
        id: 'profile',
        to: 'https://github.com/phamhongphuc1999/profile',
        mode: 'external',
        title: 'My profile written by Next',
      },
      {
        id: 'document',
        to: 'https://my-next-app-one-topaz.vercel.app/',
        mode: 'external',
        title: 'My document',
      },
    ],
  },
  {
    ...BlockchainSkill,
    relevantSkills: [AccountAbstraction, SoliditySmartContract, Circom],
    links: [
      {
        id: 'account-abstraction-app',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        mode: 'external',
        title: 'Recovery Account Abstraction Wallet that uses zero-knowledge proof',
      },
      {
        id: 'account-abstraction-contract',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-contract',
        mode: 'external',
        title: 'Account Abstraction Smart Contract',
      },
      {
        id: 'bundler',
        to: 'https://github.com/phamhongphuc1999/bundler',
        mode: 'external',
        title: 'ERC4337 Bundler',
      },
      {
        id: 'smart-contract-practice',
        to: 'https://github.com/phamhongphuc1999/smart-contract-practice',
        mode: 'external',
        title: 'Smart Contract Practice',
      },
      {
        id: 'snark',
        to: 'https://my-next-app-one-topaz.vercel.app/',
        mode: 'external',
        title: 'Zero-Knowledge Succinct Non-interactive Argument of Knowledge',
      },
    ],
  },
  {
    ...Vue,
    relevantSkills: [PrimeVue, Pinia],
    links: [
      {
        id: 'vue-word-project',
        to: 'https://github.com/phamhongphuc1999/vue-project',
        mode: 'external',
        title: 'VueApp',
      },
    ],
  },
  {
    ...ApacheKafka,
    links: [
      {
        id: 'udemy-course',
        to: 'certification-apache-kafka',
        mode: 'scroll',
        title: 'Apache Kafka Series - Learn Apache Kafka for Beginners v3',
      },
    ],
  },
  {
    ...DotNetApi,
    relevantSkills: [MongoDb, MySqlDb],
    links: [
      {
        id: 'user-api',
        to: 'https://github.com/phamhongphuc1999/UserAPI',
        mode: 'external',
        title: 'Simple API written by C# interacts with mongodb and mysql',
      },
    ],
  },
  {
    ...JavaSkill,
    relevantSkills: [MongoDb, MySqlDb, Maven, Graph],
    links: [
      {
        id: 'java-practice',
        to: 'https://github.com/phamhongphuc1999/JavaPractice/tree/main/simple-api',
        mode: 'external',
        title: 'Simple API written by Java spring boot interacts with mysql',
      },
    ],
  },
  {
    ...Docker,
    relevantSkills: [Dockerfile, DockerCompose],
    links: [
      {
        id: 'java-practice',
        to: 'https://github.com/phamhongphuc1999/JavaPractice',
        mode: 'external',
        title: 'Java practice with docker',
      },
    ],
  },
];
