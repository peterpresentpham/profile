import Image from 'next/image';
import Link from 'next/link';
import VibeBox, { VibeContent } from 'src/components/box/VibeBox';
import { DiamondIcon, UnitIcon } from 'src/components/icons';
import { EducationType, PositionType } from 'src/globals';

export default function Item(params: EducationType & { mouse: PositionType }) {
  const {
    id,
    school,
    schoolUrl,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    grade,
    icon,
    mouse,
    skills,
    metadata,
  } = params;

  return (
    <VibeBox mouse={mouse}>
      <VibeContent containerProps={{ className: 'p-[1rem] w-full' }} id={`education-${id}`}>
        <div className="flex">
          <div className="mr-4 w-[48px]">
            <Link href={schoolUrl} target="_blank" rel="noreferrer">
              <Image src={icon} alt={school} className="h-auto w-[48px]" />
            </Link>
          </div>
          <div className="w-[calc(100%-64px)]">
            <Link href={schoolUrl} target="_blank" rel="noreferrer">
              <p className="hover-text font-semibold">{school}</p>
              <p>
                {degree}, {fieldOfStudy}
              </p>
            </Link>
            <p className="text-gray-50">
              {startDate.year} - {endDate?.year && <span>{endDate.year}</span>}
            </p>
            <p>Grade: {grade}</p>
            {skills && (
              <div className="flex items-center gap-x-1">
                <DiamondIcon width={16} height={16} />
                <div className="flex items-center gap-x-4">
                  {skills.map((skill, index) => {
                    const _max = skills.length - 1;

                    return (
                      <Link
                        key={skill.id}
                        className="flex items-center gap-x-2"
                        target="_blank"
                        href={skill.nameLink}
                      >
                        <p className="hover-text text-gray-50">{skill.name}</p>
                        {_max > index && <UnitIcon className="h-[5px] w-[5px]" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            {metadata && (
              <Link target="_blank" href={metadata.url} className="hover-text">
                {metadata.title}
              </Link>
            )}
          </div>
        </div>
      </VibeContent>
    </VibeBox>
  );
}
