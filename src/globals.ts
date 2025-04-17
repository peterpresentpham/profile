import { StaticImageData } from 'next/image';
import { FunctionComponent, SVGProps } from 'react';

export type SvgPropsType = SVGProps<SVGSVGElement>;
export type PositionType = { x: string; y: string };

export type ToolType = { id: string; icon: StaticImageData; link: string; isWhite?: boolean };

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
export type CredentialId = 'apache-kafka';

export type SubSkillType = {
  id: SkillIdType;
  name: string;
  nameLink: string;
};
export interface CoreSkillsType extends SubSkillType {
  icon: StaticImageData;
}

export type ProjectType = {
  id: string;
  technologies: Array<SubSkillType>;
  title: string;
  description: FunctionComponent;
  links?: Array<{
    id: string;
    title: string;
    to: string;
    symbol: string;
    color: 'purple' | 'gray';
  }>;
};

export interface SkillsType extends CoreSkillsType {
  relevantSkills?: Array<SubSkillType>;
  links?: Array<{ id: string; to: string; mode: SkillLinkMode; title: string }>;
}

export type CredentialType = {
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
