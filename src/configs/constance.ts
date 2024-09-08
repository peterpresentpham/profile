import { StaticImageData } from 'next/image';
import UdemyImg from 'public/certifications/udemy.png';
import CPlusPlusImg from 'public/language/cplusplus.svg';
import CSharpImg from 'public/language/csharp.svg';
import FSharpImg from 'public/language/fsharp.svg';
import JavaImg from 'public/language/java.svg';
import JavascriptImg from 'public/language/javascript.svg';
import PythonImg from 'public/language/python.svg';
import SolidityImg from 'public/language/solidity.svg';
import NextImg from 'public/skills/next.svg';
import ReactImg from 'public/skills/react.svg';
import DockerImg from 'public/tools/docker.svg';
import GithubImg from 'public/tools/github.webp';
import GitlabImg from 'public/tools/gitlab.svg';
import LatexImg from 'public/tools/latex.svg';
import MaterialUIImg from 'public/tools/materialui.svg';
import MongoImg from 'public/tools/mongodb.svg';
import MySqlImg from 'public/tools/mysql.svg';
import TailwindImg from 'public/tools/tailwindcss.svg';
import TypescriptImg from 'public/tools/typescript.svg';
import VisualStudioImg from 'public/tools/visualstudio.svg';
import VSCodeImg from 'public/tools/vscode.svg';
import { FunctionComponent } from 'react';
import { GithubIcon, LinkInIcon, MailIcon } from 'src/components/icons';
import {
  EthGraphQuery,
  LedCaroDescription,
  ProfileDescription,
  ReactHookUtils,
} from 'src/components/ProjectDescription';
import { CertificationType, ProjectType, SvgPropsType } from 'src/globals';

export const MY_NAME = 'Peter';

export const HeaderConfig: Array<{ id: string; title: string }> = [
  { id: 'projects', title: 'projects' },
  { id: 'skills', title: 'skills' },
  { id: 'certification', title: 'certification' },
  { id: 'contact', title: 'contact' },
];

export const ContactConfig: Array<{
  id: string;
  to: string;
  icon: FunctionComponent<SvgPropsType>;
}> = [
  { id: 'github', to: 'https://github.com/phamhongphuc1999', icon: GithubIcon },
  { id: 'linkin', to: 'https://www.linkedin.com/in/peter-present/', icon: LinkInIcon },
  { id: 'mail', to: 'mailto:phamhongphuc1999.mywork@gmail.com', icon: MailIcon },
];

export const ProjectConfig: Array<ProjectType> = [
  {
    id: 'profile',
    technologies: ['nextjs', 'reactjs', 'vercel'],
    title: 'Personal profile',
    description: ProfileDescription,
    links: [{ id: 'github', title: 'github', to: 'https://github.com/phamhongphuc1999/profile' }],
  },
  {
    id: 'eth-graph-query',
    technologies: ['vite', 'the graph', 'rest full api'],
    title: 'Eth graph query',
    description: EthGraphQuery,
    links: [{ id: 'npm', title: 'More', to: 'https://www.npmjs.com/package/eth-graph-query' }],
  },
  {
    id: 'react-hooks-util',
    technologies: ['vite', 'react hooks'],
    title: 'React hook utils',
    description: ReactHookUtils,
    links: [
      {
        id: 'npm',
        title: 'More',
        to: 'https://www.npmjs.com/package/@peter-present/react-hook-utils',
      },
    ],
  },
  {
    id: 'led-caro',
    technologies: ['vite', 'bun', 'react', 'css'],
    title: 'Led caro',
    description: LedCaroDescription,
    links: [
      { id: 'npm', title: 'More', to: 'https://www.npmjs.com/package/@peter-present/led-caro' },
    ],
  },
];

export const LanguageConfig: Array<{ id: string; icon: StaticImageData; isWhite?: boolean }> = [
  { id: 'c++', icon: CPlusPlusImg },
  { id: 'c#', icon: CSharpImg },
  { id: 'f#', icon: FSharpImg },
  { id: 'java', icon: JavaImg },
  { id: 'js', icon: JavascriptImg },
  { id: 'python', icon: PythonImg },
  { id: 'solidity', icon: SolidityImg, isWhite: true },
];

export const ToolsConfig: Array<{ id: string; icon: StaticImageData; isWhite?: boolean }> = [
  { id: 'docker', icon: DockerImg },
  { id: 'react', icon: ReactImg },
  { id: 'next', icon: NextImg },
  { id: 'typescript', icon: TypescriptImg },
  { id: 'mui', icon: MaterialUIImg },
  { id: 'tailwind', icon: TailwindImg },
  { id: 'github', icon: GithubImg },
  { id: 'gitlab', icon: GitlabImg },
  { id: 'mysql', icon: MySqlImg },
  { id: 'visual-studio', icon: VisualStudioImg },
  { id: 'vscode', icon: VSCodeImg },
  { id: 'latex', icon: LatexImg, isWhite: true },
  { id: 'mongo', icon: MongoImg },
];

export const CertificationConfig: Array<CertificationType> = [
  {
    id: 'apache-kafka',
    name: 'Apache Kafka Series - Learn Apache Kafka for Beginners v3',
    credentialId: 'UC-bb291460-3f7b-496e-94da-ed6090dbd63a',
    credentialUrl: 'https://www.udemy.com/certificate/UC-bb291460-3f7b-496e-94da-ed6090dbd63a/',
    skills: [{ id: 'apache-kafka', name: 'Apache Kafka' }],
    issuingOrganization: { icon: UdemyImg, name: 'Udemy' },
    issueDate: { month: 'Aug', year: 2024 },
  },
];
