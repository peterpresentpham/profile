import { SkillsType } from 'src/globals';
import {
  ApacheKafka,
  BlockchainSkill,
  CoreSkills,
  Docker,
  DotNetApi,
  JavaSkill,
  Next,
  React,
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
  ShadcnSkill,
} = CoreSkills;

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
        title: 'Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof',
      },
      {
        id: 'react-hook-utils',
        to: 'https://www.npmjs.com/package/@peter-present/react-hook-utils',
        mode: 'external',
        title: 'Simple package which provides some utility hooks.',
      },
    ],
  },
  {
    ...Next,
    relevantSkills: [React, Redux, Ethers, AntDesign, MUI, ShadcnSkill, Tailwind],
    links: [
      {
        id: 'profile',
        to: 'https://github.com/phamhongphuc1999/profile',
        mode: 'external',
        title: 'My profile written by Next',
      },
      {
        id: 'document',
        to: 'https://blog.peter-present.xyz/',
        mode: 'external',
        title: 'My blog',
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
        title: 'Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof',
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
        to: 'https://blog.peter-present.xyz/snark',
        mode: 'external',
        title: 'zk-SNARK',
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
