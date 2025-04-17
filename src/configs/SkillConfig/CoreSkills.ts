import KafkaApacheImg from 'public/skills/apache-kafka.png';
import BlockchainImg from 'public/skills/blockchain.png';
import DotnetImg from 'public/skills/dotnet.png';
import NextImg from 'public/skills/next.svg';
import ReactImg from 'public/skills/react.svg';
import JavaSpringImg from 'public/skills/spring-boot.png';
import VueImg from 'public/skills/vuejs.png';
import DockerImg from 'public/tools/docker.svg';
import { CoreSkillsType, SubSkillType } from 'src/globals';

export const ApacheKafka: CoreSkillsType = {
  id: 'apache-kafka',
  name: 'Apache Kafka',
  nameLink: 'https://kafka.apache.org/',
  icon: KafkaApacheImg,
};
export const React: CoreSkillsType = {
  id: 'reactjs',
  name: 'React',
  nameLink: 'https://react.dev/',
  icon: ReactImg,
};
export const Next: CoreSkillsType = {
  id: 'nextjs',
  name: 'Next',
  nameLink: 'https://nextjs.org/',
  icon: NextImg,
};
export const Vue: CoreSkillsType = {
  id: 'vuejs',
  name: 'Vue',
  nameLink: 'https://vuejs.org/',
  icon: VueImg,
};
export const Docker: CoreSkillsType = {
  id: 'docker',
  name: 'Docker',
  nameLink: 'https://www.docker.com/',
  icon: DockerImg,
};
export const DotNetApi: CoreSkillsType = {
  id: 'dotnet-api',
  name: '.NET API',
  nameLink: 'https://dotnet.microsoft.com/en-us/apps/aspnet/apis',
  icon: DotnetImg,
};
export const JavaSkill: CoreSkillsType = {
  id: 'java-spring',
  name: 'Java Spring',
  nameLink: 'https://spring.io/projects/spring-boot',
  icon: JavaSpringImg,
};
export const BlockchainSkill: CoreSkillsType = {
  id: 'blockchain',
  name: 'Blockchain',
  nameLink: '',
  icon: BlockchainImg,
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
const MUI: SubSkillType = {
  id: 'mui',
  name: 'Material UI',
  nameLink: 'https://mui.com/',
};
const MongoDb: SubSkillType = {
  id: 'mongodb',
  name: 'MongoDB',
  nameLink: 'https://www.mongodb.com/',
};
const MySqlDb: SubSkillType = {
  id: 'mysql',
  name: 'MySQL',
  nameLink: 'https://www.mysql.com/',
};
const Maven: SubSkillType = {
  id: 'maven',
  name: 'Maven',
  nameLink: 'https://maven.apache.org/guides/index.html',
};
const Graph: SubSkillType = {
  id: 'graph',
  name: 'Graph',
  nameLink: 'https://www.javatpoint.com/java-graph',
};
const Redux: SubSkillType = {
  id: 'redux',
  name: 'Redux',
  nameLink: 'https://redux.js.org/',
};
const MobX: SubSkillType = {
  id: 'mobx',
  name: 'MobX',
  nameLink: 'https://redux.js.org/',
};
const AccountAbstraction: SubSkillType = {
  id: 'account-abstraction',
  name: 'Account Abstraction',
  nameLink: 'https://eips.ethereum.org/EIPS/eip-4337',
};
const SoliditySmartContract: SubSkillType = {
  id: 'solidity-smart-contract',
  name: 'Smart Contract',
  nameLink: 'https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html',
};
const Circom: SubSkillType = {
  id: 'circom',
  name: 'Circom',
  nameLink: 'https://docs.circom.io/background/background/',
};
const DockerCompose: SubSkillType = {
  id: 'docker-compose',
  name: 'Docker Compose',
  nameLink: 'https://docs.docker.com/compose/',
};
const Dockerfile: SubSkillType = {
  id: 'docker-file',
  name: 'Dockerfile',
  nameLink: 'https://docs.docker.com/reference/dockerfile/',
};
const PrimeVue: SubSkillType = {
  id: 'prime-vue',
  name: 'PrimeVue',
  nameLink: 'https://primevue.org/',
};
const Pinia: SubSkillType = {
  id: 'pinia',
  name: 'Pinia',
  nameLink: 'https://pinia.vuejs.org/',
};
const VercelSkill: SubSkillType = {
  id: 'vercel',
  name: 'Vercel',
  nameLink: 'https://vercel.com/docs',
};
const WagmiSkill: SubSkillType = {
  id: 'wagmi',
  name: 'Wagmi',
  nameLink: 'https://wagmi.sh/',
};
const ViteSkill: SubSkillType = {
  id: 'vite',
  name: 'Vite',
  nameLink: 'https://vite.dev/',
};
const TheGraphSkill: SubSkillType = {
  id: 'the-graph',
  name: 'The graph',
  nameLink: 'https://thegraph.com/',
};
const ShadcnSkill: SubSkillType = {
  id: 'shadcn',
  name: 'shadcn/ui',
  nameLink: 'https://ui.shadcn.com/',
};
export const SubSkills = {
  Pinia,
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
  DockerCompose,
  Dockerfile,
  MobX,
  PrimeVue,
  VercelSkill,
  WagmiSkill,
  ViteSkill,
  TheGraphSkill,
  ShadcnSkill,
};
