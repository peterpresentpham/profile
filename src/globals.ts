import { DetailedHTMLProps, FunctionComponent, HTMLAttributes, SVGProps } from 'react';

export type LanguageType = 'en' | 'vi';
export type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export type SvgPropsType = SVGProps<SVGSVGElement>;

export type ProjectType = {
  id: string;
  technologies: Array<string>;
  title: string;
  description: FunctionComponent;
  links?: Array<{ id: string; title: string; to: string }>;
};
