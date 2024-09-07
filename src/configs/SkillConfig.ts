import KafkaApacheImg from 'public/skills/apache-kafka.png';
import DockerImg from 'public/skills/docker.png';
import NextImg from 'public/skills/next.svg';
import ReactImg from 'public/skills/react.svg';
import { CoreSkillsType, SkillsType, SubSkillType } from 'src/globals';
import DotnetImg from 'public/skills/dotnet.png';

const ApacheKafka: CoreSkillsType = {
  id: 'apache-kafka',
  name: 'Apache Kafka',
  nameLink: 'https://kafka.apache.org/',
  icon: KafkaApacheImg,
};
const React: CoreSkillsType = {
  id: 'reactjs',
  name: 'React',
  nameLink: 'https://react.dev/',
  icon: ReactImg,
};
const Next: CoreSkillsType = {
  id: 'nextjs',
  name: 'Next',
  nameLink: 'https://nextjs.org/',
  icon: NextImg,
};
const Docker: CoreSkillsType = {
  id: 'docker',
  name: 'Docker',
  nameLink: 'https://www.docker.com/',
  icon: DockerImg,
};
const DotNetApi: CoreSkillsType = {
  id: 'dotnet-api',
  name: '.NET API',
  nameLink: 'https://dotnet.microsoft.com/en-us/apps/aspnet/apis',
  icon: DotnetImg,
};
const Ethers: SubSkillType = {
  id: 'ethers',
  name: 'Ethers',
  nameLink: 'https://docs.ethers.org/v6/',
};
const Tailwind: SubSkillType = {
  id: 'tailwind',
  name: 'Tailwind',
  nameLink: 'https://tailwindcss.com/',
};
const AntDesign: SubSkillType = {
  id: 'ant-design',
  name: 'Ant Design',
  nameLink: 'https://ant.design/',
};
const MUISkill: SubSkillType = {
  id: 'mui',
  name: 'Material UI',
  nameLink: 'https://mui.com/',
};

export const SkillsConfig: Array<SkillsType> = [
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
    ...React,
    relevantSkills: [Next, Ethers, AntDesign, MUISkill, Tailwind],
    links: [
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
    relevantSkills: [React, Ethers, AntDesign, MUISkill, Tailwind],
    links: [
      {
        id: 'profile',
        to: 'https://github.com/phamhongphuc1999/profile',
        mode: 'external',
        title: 'My profile written by Next',
      },
    ],
  },
  {
    ...DotNetApi,
    links: [
      {
        id: 'user-api',
        to: 'https://github.com/phamhongphuc1999/UserAPI',
        mode: 'external',
        title: 'Simple API connect to SQL and Mongo database',
      },
    ],
  },
  Docker,
];
