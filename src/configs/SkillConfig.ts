/* eslint-disable quotes */
import { CoreSkillsType, EducationType, ProjectType, SkillIdType, SkillsType } from 'src/globals';
import { IMAGES } from './images';
import {
  AccountAbstractionDescription,
  CaroDescription,
  EthGraphQuery,
  NextAppDescription,
  PikachuDescription,
  ProcessDescription,
  ProfileDescription,
} from 'src/components/ProjectDescription';

export const SKILLS: Record<SkillIdType, CoreSkillsType> = {
  apacheKafka: {
    id: 'apacheKafka',
    name: 'Apache Kafka',
    nameLink: 'https://kafka.apache.org/',
    icon: IMAGES.skill.kafka,
  },
  react: {
    id: 'react',
    name: 'React',
    nameLink: 'https://react.dev/',
    icon: IMAGES.skill.react,
  },
  next: {
    id: 'next',
    name: 'Next',
    nameLink: 'https://nextjs.org/',
    icon: IMAGES.skill.next,
  },
  nest: {
    id: 'nest',
    name: 'Nest',
    nameLink: 'https://nestjs.com/',
    icon: IMAGES.skill.nestjs,
  },
  docker: {
    id: 'docker',
    name: 'Docker',
    nameLink: 'https://www.docker.com/',
    icon: IMAGES.tools.docker,
  },
  dotnet: {
    id: 'dotnet',
    name: '.NET API',
    nameLink: 'https://dotnet.microsoft.com/en-us/apps/aspnet/apis',
    icon: IMAGES.skill['.net'],
  },
  javaSpring: {
    id: 'javaSpring',
    name: 'Java Spring',
    nameLink: 'https://spring.io/projects/spring-boot',
    icon: IMAGES.skill['spring-boot'],
  },
  blockchain: {
    id: 'blockchain',
    name: 'Blockchain',
    nameLink: '',
    icon: IMAGES.skill.blockchain,
  },
  ethers: {
    id: 'ethers',
    name: 'Ethers',
    nameLink: 'https://docs.ethers.org/v6/',
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind',
    nameLink: 'https://tailwindcss.com/',
  },
  antDesign: {
    id: 'antDesign',
    name: 'Ant Design',
    nameLink: 'https://ant.design/',
  },
  mui: {
    id: 'mui',
    name: 'Material UI',
    nameLink: 'https://mui.com/',
  },
  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    nameLink: 'https://www.mongodb.com/',
  },
  mysql: {
    id: 'mysql',
    name: 'MySQL',
    nameLink: 'https://www.mysql.com/',
  },
  maven: {
    id: 'maven',
    name: 'Maven',
    nameLink: 'https://maven.apache.org/guides/index.html',
  },
  redux: {
    id: 'redux',
    name: 'Redux',
    nameLink: 'https://redux.js.org/',
  },
  mobx: {
    id: 'mobx',
    name: 'MobX',
    nameLink: 'https://mobx.js.org/',
  },
  accountAbstraction: {
    id: 'accountAbstraction',
    name: 'Account Abstraction',
    nameLink: 'https://eips.ethereum.org/EIPS/eip-4337',
  },
  soliditySmartContract: {
    id: 'soliditySmartContract',
    name: 'Smart Contract',
    nameLink: 'https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html',
  },
  circom: {
    id: 'circom',
    name: 'Circom',
    nameLink: 'https://docs.circom.io/background/background/',
  },
  pinia: {
    id: 'pinia',
    name: 'Pinia',
    nameLink: 'https://pinia.vuejs.org/',
  },
  vercel: {
    id: 'vercel',
    name: 'Vercel',
    nameLink: 'https://vercel.com/docs',
  },
  wagmi: {
    id: 'wagmi',
    name: 'Wagmi',
    nameLink: 'https://wagmi.sh/',
  },
  vite: {
    id: 'vite',
    name: 'Vite',
    nameLink: 'https://vite.dev/',
  },
  theGraph: {
    id: 'theGraph',
    name: 'The Graph',
    nameLink: 'https://thegraph.com/',
  },
  shadcn: {
    id: 'shadcn',
    name: 'shadcn/ui',
    nameLink: 'https://ui.shadcn.com/',
  },
} as const;

const {
  react,
  next,
  redux,
  mobx,
  ethers,
  antDesign,
  mui,
  tailwind,
  shadcn,
  nest,
  blockchain,
  accountAbstraction,
  soliditySmartContract,
  circom,
  apacheKafka,
  dotnet,
  mongodb,
  mysql,
  javaSpring,
  maven,
  theGraph,
  docker,
  vercel,
  vite,
  wagmi,
} = SKILLS;

export const EducationConfig: Array<EducationType> = [
  {
    id: 'hust-master',
    school: 'Hanoi University of Science and Technology',
    schoolUrl: 'https://hust.edu.vn/en/',
    degree: "Master's degree",
    fieldOfStudy: 'Computer Science',
    startDate: { year: 2023 },
    endDate: { year: 2025 },
    grade: 'CH2022B',
    icon: IMAGES.education.hust,
    skills: [accountAbstraction, circom, soliditySmartContract],
    metadata: {
      url: 'https://blog.peter-present.xyz/master-thesis',
      title: 'Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof',
    },
  },
  {
    id: 'hust-bachelor',
    school: 'Hanoi University of Science and Technology',
    schoolUrl: 'https://hust.edu.vn/en/',
    degree: "Bachelor's degree",
    fieldOfStudy: 'Information Technology',
    startDate: { year: 2017 },
    endDate: { year: 2021 },
    grade: 'K62',
    icon: IMAGES.education.hust,
  },
];

export const ProjectConfig: Array<ProjectType> = [
  {
    id: 'profile',
    technologies: [next, react, vercel, tailwind],
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
    technologies: [next, react, shadcn, tailwind],
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
    technologies: [vite, theGraph],
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
    technologies: [next, react, shadcn, tailwind],
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
    technologies: [react, ethers, mui, wagmi],
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
    technologies: [next, react, shadcn, tailwind],
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
  {
    id: 'process-demo',
    technologies: [next, react, shadcn, tailwind],
    title: 'Process Scheduler demo',
    description: ProcessDescription,
    links: [
      {
        id: 'hosting',
        title: 'live',
        to: 'https://experiment.peter-present.xyz/process',
        symbol: 'ξ',
        color: 'blue',
      },
    ],
  },
];

export const SkillsConfig: Array<SkillsType> = [
  {
    ...react,
    relevantSkills: [next, redux, mobx, ethers, antDesign, mui, tailwind],
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
    ...next,
    relevantSkills: [react, redux, ethers, antDesign, mui, shadcn, tailwind],
    links: [
      {
        id: 'profile',
        to: 'https://github.com/phamhongphuc1999/profile',
        mode: 'external',
        title: 'My profile written by next',
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
    ...nest,
    links: [
      {
        id: 'nest-container',
        to: 'https://github.com/phamhongphuc1999/nestjs-project',
        mode: 'external',
        title: 'My code',
      },
    ],
  },
  {
    ...blockchain,
    relevantSkills: [accountAbstraction, soliditySmartContract, circom],
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
    ...apacheKafka,
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
    ...dotnet,
    relevantSkills: [mongodb, mysql],
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
    ...javaSpring,
    relevantSkills: [mongodb, mysql, maven, theGraph],
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
    ...docker,
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
