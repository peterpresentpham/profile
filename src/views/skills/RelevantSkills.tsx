import Link from 'next/link';
import { UnitIcon } from 'src/components/icons';
import { CoreSkillsType } from 'src/globals';

interface Props {
  skills: Array<CoreSkillsType>;
}

export default function RelevantSkills({ skills }: Props) {
  const _max = skills.length - 1;

  return (
    <div className="flex flex-wrap items-center gap-x-2 p-4">
      {skills.map((skill, index) => {
        return (
          <div key={skill.id} className="flex items-center gap-x-2">
            <Link
              href={skill.nameLink}
              target="_blank"
              rel="noreferrer"
              className="hover-text text-gray-50"
            >
              {skill.name}
            </Link>
            {_max > index && <UnitIcon className="h-[5px] w-[5px]" />}
          </div>
        );
      })}
    </div>
  );
}
