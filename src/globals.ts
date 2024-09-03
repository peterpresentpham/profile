import { FunctionComponent, SVGProps } from 'react';

export type LanguageType = 'en' | 'vi';
export type SvgPropsType = SVGProps<SVGSVGElement>;

export type ProjectType = {
  id: string;
  technologies: Array<string>;
  title: string;
  description: FunctionComponent;
  links?: Array<{ id: string; title: string; to: string }>;
};
