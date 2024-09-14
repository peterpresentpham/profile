import UdemyImg from 'public/certifications/udemy.png';
import CPlusPlusImg from 'public/language/cplusplus.svg';
import CSharpImg from 'public/language/csharp.svg';
import FSharpImg from 'public/language/fsharp.svg';
import JavaImg from 'public/language/java.svg';
import JavascriptImg from 'public/language/js.webp';
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
import { GithubIcon, LeetCodeIcon, LinkInIcon, MailIcon } from 'src/components/icons';
import { CredentialType, SvgPropsType, ToolType } from 'src/globals';

export const MY_NAME = 'Peter';
export const DEFAULT_SCALE = { x: '-1px', y: '-1px' };

export const HeaderConfig: Array<{ id: string; title: string }> = [
  { id: 'projects', title: 'projects' },
  { id: 'skills', title: 'skills' },
  { id: 'certification', title: 'certification' },
];

export const ContactConfig: Array<{
  id: string;
  to: string;
  icon: FunctionComponent<SvgPropsType>;
}> = [
  { id: 'github', to: 'https://github.com/phamhongphuc1999', icon: GithubIcon },
  { id: 'linkin', to: 'https://www.linkedin.com/in/peter-present/', icon: LinkInIcon },
  { id: 'leetcode', to: 'https://leetcode.com/u/peter-present/', icon: LeetCodeIcon },
  { id: 'mail', to: 'mailto:phamhongphuc1999.mywork@gmail.com', icon: MailIcon },
];

export const LanguageConfig: Array<ToolType> = [
  { id: 'c++', icon: CPlusPlusImg, link: 'https://cplusplus.com/' },
  { id: 'c#', icon: CSharpImg, link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { id: 'f#', icon: FSharpImg, link: 'https://fsharp.org/' },
  { id: 'java', icon: JavaImg, link: 'https://dev.java/' },
  { id: 'js', icon: JavascriptImg, link: 'https://www.javascript.com/' },
  { id: 'python', icon: PythonImg, link: 'https://www.python.org/' },
  { id: 'solidity', icon: SolidityImg, link: 'https://soliditylang.org/', isWhite: true },
];

export const ToolsConfig: Array<ToolType> = [
  { id: 'docker', icon: DockerImg, link: 'https://www.docker.com/' },
  { id: 'react', icon: ReactImg, link: 'https://react.dev/' },
  { id: 'next', icon: NextImg, link: 'https://nextjs.org/' },
  { id: 'typescript', icon: TypescriptImg, link: 'https://www.typescriptlang.org/' },
  { id: 'mui', icon: MaterialUIImg, link: 'https://mui.com/' },
  { id: 'tailwind', icon: TailwindImg, link: 'https://tailwindcss.com/' },
  { id: 'github', icon: GithubImg, link: 'https://github.com/phamhongphuc1999' },
  { id: 'gitlab', icon: GitlabImg, link: 'https://gitlab.com/phamhongphuc1999' },
  { id: 'mysql', icon: MySqlImg, link: 'https://www.mysql.com/' },
  { id: 'visual-studio', icon: VisualStudioImg, link: 'https://visualstudio.microsoft.com/' },
  { id: 'vscode', icon: VSCodeImg, link: 'https://code.visualstudio.com/' },
  { id: 'latex', icon: LatexImg, link: 'https://www.latex-project.org/', isWhite: true },
  { id: 'mongo', icon: MongoImg, link: 'https://www.mongodb.com/' },
];

export const CredentialConfig: Array<CredentialType> = [
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
