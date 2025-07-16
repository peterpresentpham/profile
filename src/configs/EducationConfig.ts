/* eslint-disable quotes */
import HustImg from 'public/education/hust.png';
import { EducationType } from 'src/globals';
import { CoreSkills } from './SkillConfig/CoreSkills';

export const EducationConfig: Array<EducationType> = [
  {
    id: 'hust-master',
    school: 'Hanoi University of Science and Technology',
    schoolUrl: 'https://hust.edu.vn/en/',
    degree: "Master's degree",
    fieldOfStudy: 'Computer Science',
    startDate: { year: 2023 },
    endDate: { year: 2025 },
    grade: 'CH2022B',
    icon: HustImg,
    skills: [CoreSkills.AccountAbstraction, CoreSkills.Circom, CoreSkills.SoliditySmartContract],
    metadata: {
      url: 'https://blog.peter-present.xyz/master-thesis',
      title: 'Account Abstraction Wallet with Social Recovery based on Zero-Knowledge Proof',
    },
  },
  {
    id: 'hust-bachelor',
    school: 'Hanoi University of Science and Technology',
    schoolUrl: 'https://hust.edu.vn/en/',
    degree: "Bachelor's degree",
    fieldOfStudy: 'Information Technology',
    startDate: { year: 2017 },
    endDate: { year: 2021 },
    grade: 'K62',
    icon: HustImg,
  },
];
