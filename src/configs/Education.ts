/* eslint-disable quotes */
import { EducationType } from 'src/globals';
import HustImg from 'public/education/hust.png';

export const EducationConfig: Array<EducationType> = [
  {
    id: 'hust-bachelor',
    school: 'Hanoi University of Science and Technology',
    url: 'https://hust.edu.vn/en/',
    degree: "Bachelor's degree",
    fieldOfStudy: 'Information Technology',
    startDate: { year: 2017 },
    endDate: { year: 2021 },
    grade: 'K62',
    icon: HustImg,
  },
];
