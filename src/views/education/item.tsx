import Image from 'next/image';
import Link from 'next/link';
import GlowingCard from 'src/components/GlowingCard';
import { DiamondIcon, UnitIcon } from 'src/components/icons';
import { EducationType } from 'src/globals';

export default function Item(params: EducationType) {
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
    skills,
    metadata,
  } = params;
  const dateRange = endDate?.year
    ? `${startDate.year} – ${endDate.year}`
    : `${startDate.year} – Present`;

  return (
    <div id={`education-${id}`} className="relative pl-8">
      {/* dot centered on the border-l timeline line */}
      <div className="bg-black-50 absolute top-5 -left-1.5 h-3 w-3 rounded-full border-2 border-purple-50" />
      <GlowingCard className="flex gap-4 p-4">
        <Link href={schoolUrl} target="_blank" rel="noreferrer" className="shrink-0">
          <Image src={icon} alt={school} width={48} height={48} className="h-auto w-12" />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
            <Link href={schoolUrl} target="_blank" rel="noreferrer">
              <p className="hover-text font-semibold">{school}</p>
              <p className="text-sm text-gray-50">
                {degree}, {fieldOfStudy}
              </p>
            </Link>
            <div className="shrink-0 text-right">
              <p className="text-sm text-gray-50">{dateRange}</p>
              <p className="text-sm text-gray-50">Grade: {grade}</p>
            </div>
          </div>
          {skills && (
            <div className="mt-2 flex items-start gap-x-1">
              <DiamondIcon width={16} height={16} className="mt-1 shrink-0" />
              <div className="flex flex-wrap items-center gap-x-4">
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
            <Link
              target="_blank"
              href={metadata.url}
              className="hover-text mt-2 inline-block text-sm text-gray-50"
            >
              {metadata.title}
            </Link>
          )}
        </div>
      </GlowingCard>
    </div>
  );
}
