import Image from 'next/image';
import { VibeContent } from 'src/components/box/VibeBox';
import { EducationType } from 'src/globals';

export default function Item(params: EducationType) {
  const { id, school, url, degree, fieldOfStudy, startDate, endDate, grade, icon } = params;

  return (
    <VibeContent containerProps={{ className: 'p-[1rem] w-full' }} id={`education-${id}`}>
      <div className="flex">
        <div className="mr-[1rem] w-[48px]">
          <a href={url} target="_blank" rel="noreferrer">
            <Image src={icon} alt={school} className="h-auto w-[48px]" />
          </a>
        </div>
        <div className="w-[calc(100%-64px)]">
          <a href={url} target="_blank" rel="noreferrer">
            <p className="hover-text text-base font-semibold text-white">{school}</p>
            <p className="text-base text-white">
              {degree}, {fieldOfStudy}
            </p>
          </a>
          <p className="text-base text-gray-50">
            {startDate.year} - {endDate?.year && <span>{endDate.year}</span>}
          </p>
          <p className="text-base text-white">Grade: {grade}</p>
        </div>
      </div>
    </VibeContent>
  );
}
