import { FunctionComponent } from 'react';
import { GithubIcon, LeetCodeIcon, LinkInIcon, MailIcon } from 'src/components/icons';
import { CredentialType, SvgPropsType, ToolType } from 'src/globals';
import { IMAGES } from './images';

export const MY_NAME = 'Peter';
export const DEFAULT_SCALE = { x: '-200px', y: '-200px' };

export const HeaderConfig: Array<{ id: string; title: string }> = [
  { id: 'projects', title: 'projects' },
  { id: 'skills', title: 'skills' },
  { id: 'education', title: 'education' },
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
  { id: 'c++', icon: IMAGES.language['c++'], link: 'https://cplusplus.com/' },
  {
    id: 'c#',
    icon: IMAGES.language['c#'],
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  { id: 'f#', icon: IMAGES.language['f#'], link: 'https://fsharp.org/' },
  { id: 'java', icon: IMAGES.language.java, link: 'https://dev.java/' },
  { id: 'circom', icon: IMAGES.language.circom, link: 'https://docs.circom.io/', isWhite: true },
  { id: 'js', icon: IMAGES.language.js, link: 'https://www.javascript.com/' },
  { id: 'python', icon: IMAGES.language.python, link: 'https://www.python.org/' },
  {
    id: 'solidity',
    icon: IMAGES.language.solidity,
    link: 'https://soliditylang.org/',
    isWhite: true,
  },
  { id: 'golang', icon: IMAGES.language.go, link: 'https://go.dev/' },
];

export const ToolsConfig: Array<ToolType> = [
  { id: 'docker', icon: IMAGES.tools.docker, link: 'https://www.docker.com/' },
  { id: 'react', icon: IMAGES.skill.react, link: 'https://react.dev/' },
  { id: 'next', icon: IMAGES.skill.next, link: 'https://nextjs.org/' },
  { id: 'typescript', icon: IMAGES.tools.ts, link: 'https://www.typescriptlang.org/' },
  { id: 'mui', icon: IMAGES.tools.mui, link: 'https://mui.com/' },
  { id: 'tailwind', icon: IMAGES.tools.tailwindcss, link: 'https://tailwindcss.com/' },
  { id: 'github', icon: IMAGES.tools.github, link: 'https://github.com/phamhongphuc1999' },
  { id: 'gitlab', icon: IMAGES.tools.gitlab, link: 'https://gitlab.com/phamhongphuc1999' },
  { id: 'mysql', icon: IMAGES.tools.mysql, link: 'https://www.mysql.com/' },
  {
    id: 'visual-studio',
    icon: IMAGES.tools.visualstudio,
    link: 'https://visualstudio.microsoft.com/',
  },
  { id: 'vscode', icon: IMAGES.tools.vscode, link: 'https://code.visualstudio.com/' },
  { id: 'latex', icon: IMAGES.tools.latex, link: 'https://www.latex-project.org/', isWhite: true },
  { id: 'mongo', icon: IMAGES.tools.mongodb, link: 'https://www.mongodb.com/' },
];

export const CredentialConfig: Array<CredentialType> = [
  {
    id: 'apache-kafka',
    name: 'Apache Kafka Series - Learn Apache Kafka for Beginners v3',
    credentialId: 'UC-bb291460-3f7b-496e-94da-ed6090dbd63a',
    credentialUrl: 'https://www.udemy.com/certificate/UC-bb291460-3f7b-496e-94da-ed6090dbd63a/',
    skills: [{ id: 'apache-kafka', name: 'Apache Kafka' }],
    issuingOrganization: { icon: IMAGES.certifications.udemy, name: 'Udemy' },
    issueDate: { month: 'Aug', year: 2024 },
  },
];
