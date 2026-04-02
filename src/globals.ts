import { FunctionComponent, SVGProps } from 'react';

export type SvgPropsType = SVGProps<SVGSVGElement>;
export type PositionType = { x: string; y: string };

export type ToolType = { id: string; icon: string; link: string; isWhite?: boolean };
export type ButtonColorType = 'purple' | 'gray' | 'orange' | 'blue';
export type SkillLinkMode = 'scroll' | 'external';
export type SkillIdType =
  | 'mobx'
  | 'apacheKafka'
  | 'react'
  | 'next'
  | 'nest'
  | 'docker'
  | 'dotnet'
  | 'javaSpring'
  | 'ethers'
  | 'tailwind'
  | 'antDesign'
  | 'mui'
  | 'mongodb'
  | 'mysql'
  | 'maven'
  | 'redux'
  | 'blockchain'
  | 'accountAbstraction'
  | 'soliditySmartContract'
  | 'circom'
  | 'pinia'
  | 'vercel'
  | 'wagmi'
  | 'vite'
  | 'theGraph'
  | 'shadcn';
export type EducationId = 'hust-bachelor' | 'hust-master';
export type CredentialId = 'apache-kafka';

export interface CoreSkillsType {
  id: SkillIdType;
  name: string;
  nameLink: string;
  icon?: string;
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
  icon: string;
  skills?: Array<CoreSkillsType>;
  metadata?: { url: string; title: string };
};

export type CredentialType = {
  id: CredentialId;
  name: string;
  credentialId: string;
  credentialUrl: string;
  skills: Array<{ id: SkillIdType; name: string }>;
  issuingOrganization: { icon: string; name: string };
  issueDate: { month: string; year: number };
};
