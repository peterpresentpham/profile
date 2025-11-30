import { StaticImageData } from 'next/image';
import { FunctionComponent, SVGProps } from 'react';

export type SvgPropsType = SVGProps<SVGSVGElement>;
export type PositionType = { x: string; y: string };

export type ToolType = { id: string; icon: StaticImageData; link: string; isWhite?: boolean };

export type ButtonColorType = 'purple' | 'gray' | 'orange' | 'blue';
export type SkillLinkMode = 'scroll' | 'external';
export type SkillIdType =
  | 'mobx'
  | 'apache-kafka'
  | 'reactjs'
  | 'nextjs'
  | 'docker'
  | 'dotnet-api'
  | 'java-spring'
  | 'ethers'
  | 'tailwind'
  | 'ant-design'
  | 'mui'
  | 'mongodb'
  | 'mysql'
  | 'maven'
  | 'graph'
  | 'redux'
  | 'blockchain'
  | 'account-abstraction'
  | 'solidity-smart-contract'
  | 'circom'
  | 'docker-compose'
  | 'docker-file'
  | 'vuejs'
  | 'prime-vue'
  | 'pinia'
  | 'vercel'
  | 'wagmi'
  | 'vite'
  | 'the-graph'
  | 'shadcn';
export type EducationId = 'hust-bachelor' | 'hust-master';
export type CredentialId = 'apache-kafka';

export interface CoreSkillsType {
  id: SkillIdType;
  name: string;
  nameLink: string;
  icon?: StaticImageData;
}

export type ProjectType = {
  id: string;
  technologies: Array<CoreSkillsType>;
  title: string;
  description: FunctionComponent;
  links?: Array<{
    id: string;
    title: string;
    to: string;
    symbol: string;
    color: ButtonColorType;
  }>;
};

export interface SkillsType extends CoreSkillsType {
  relevantSkills?: Array<CoreSkillsType>;
  links?: Array<{ id: string; to: string; mode: SkillLinkMode; title: string }>;
}

export type EducationType = {
  id: EducationId;
  school: string;
  schoolUrl: string;
  degree: string;
  fieldOfStudy: string;
  startDate: { year: number };
  endDate?: { year: number };
  grade: string;
  icon: StaticImageData;
  skills?: Array<CoreSkillsType>;
  metadata?: { url: string; title: string };
};

export type CredentialType = {
  id: CredentialId;
  name: string;
  credentialId: string;
  credentialUrl: string;
  skills: Array<{ id: SkillIdType; name: string }>;
  issuingOrganization: { icon: StaticImageData; name: string };
  issueDate: { month: string; year: number };
};
