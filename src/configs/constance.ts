import { FunctionComponent } from 'react';
import { GithubIcon, LinkInIcon, MailIcon } from 'src/components/icons';
import {
  EthGraphQuery,
  LedCaroDescription,
  ProfileDescription,
  ReactHookUtils,
} from 'src/components/ProjectDescription';
import { ProjectType, SvgPropsType } from 'src/globals';

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
