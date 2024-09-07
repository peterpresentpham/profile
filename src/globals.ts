import { StaticImageData } from 'next/image';
import { FunctionComponent, SVGProps } from 'react';

export type SvgPropsType = SVGProps<SVGSVGElement>;

export type ProjectType = {
  id: string;
  technologies: Array<string>;
  title: string;
  description: FunctionComponent;
  links?: Array<{ id: string; title: string; to: string }>;
};

export type SkillLinkMode = 'scroll' | 'external';
export type SkillIdType =
  | 'apache-kafka'
  | 'reactjs'
  | 'nextjs'
  | 'docker'
  | 'dotnet-api'
  | 'ethers'
  | 'tailwind'
  | 'ant-design'
  | 'mui';
export type CredentialId = 'apache-kafka';

export type SubSkillType = {
  id: SkillIdType;
  name: string;
  nameLink: string;
};
export interface CoreSkillsType extends SubSkillType {
  icon: StaticImageData;
}

export interface SkillsType extends CoreSkillsType {
  relevantSkills?: Array<SubSkillType>;
  links?: Array<{ id: string; to: string; mode: SkillLinkMode; title: string }>;
}

export type CertificationType = {
  id: CredentialId;
  name: string;
  credentialId: string;
  credentialUrl: string;
  skills: Array<{ id: SkillIdType; name: string }>;
  issuingOrganization: {
    icon: StaticImageData;
    name: string;
  };
  issueDate: {
    month: string;
    year: number;
  };
};
