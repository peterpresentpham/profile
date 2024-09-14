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
  ZKContract,
} = SubSkills;

export const SkillsLayoutConfig: {
  [key: string]: Array<Array<{ index: number; layoutIndex: [number, number] }>>;
} = {
  md: [
    [
      { index: 0, layoutIndex: [0, 3] },
      { index: 3, layoutIndex: [3, 5] },
      { index: 6, layoutIndex: [5, 6] },
    ],
    [
      { index: 1, layoutIndex: [6, 9] },
      { index: 4, layoutIndex: [9, 12] },
    ],
    [
      { index: 2, layoutIndex: [12, 15] },
      { index: 5, layoutIndex: [15, 18] },
    ],
  ],
  sm: [
    [
      { index: 0, layoutIndex: [0, 3] },
      { index: 2, layoutIndex: [3, 6] },
      { index: 4, layoutIndex: [6, 9] },
      { index: 6, layoutIndex: [9, 10] },
    ],
    [
      { index: 1, layoutIndex: [10, 13] },
      { index: 3, layoutIndex: [13, 15] },
      { index: 5, layoutIndex: [15, 18] },
    ],
  ],
  xs: [
    [
      { index: 0, layoutIndex: [0, 3] },
      { index: 1, layoutIndex: [3, 6] },
      { index: 2, layoutIndex: [6, 9] },
      { index: 3, layoutIndex: [9, 11] },
      { index: 4, layoutIndex: [11, 14] },
      { index: 5, layoutIndex: [14, 17] },
      { index: 6, layoutIndex: [17, 18] },
    ],
  ],
};

export const SkillsConfig: Array<SkillsType> = [
  {
    ...React,
    relevantSkills: [Next, Redux, Ethers, AntDesign, MUI, Tailwind],
    links: [
      {
        id: 'account-abstraction-app',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        mode: 'external',
        title: 'Recovery Account Abstraction Wallet that uses EDDSA signature',
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
    position: [0, 3],
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
    ],
    position: [3, 6],
  },
  {
    ...BlockchainSkill,
    relevantSkills: [AccountAbstraction, SoliditySmartContract, ZKContract],
    links: [
      {
        id: 'account-abstraction-app',
        to: 'https://github.com/phamhongphuc1999/account-abstraction-app',
        mode: 'external',
        title: 'Recovery Account Abstraction Wallet that uses EDDSA signature',
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
    ],
    position: [6, 9],
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
    position: [9, 11],
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
    position: [11, 14],
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
    position: [14, 17],
  },
  { ...Docker, position: [17, 18] },
];
