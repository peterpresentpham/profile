import Link from 'next/link';
import { UnitIcon } from 'src/components/icons';
import { CoreSkillsType } from 'src/globals';

interface Props {
  skills: Array<CoreSkillsType>;
}

export default function RelevantSkills({ skills }: Props) {
  const _max = skills.length - 1;

  return (
    <div className="flex flex-wrap items-center gap-x-2">
      {skills.map((skill, index) => {
        return (
          <div key={skill.id} className="group/skill flex items-center gap-x-2">
            <Link
              href={skill.nameLink}
              target="_blank"
              rel="noreferrer"
              className="hover-text text-gray-50 transition-transform duration-300 group-hover/skill:-translate-y-px"
            >
              {skill.name}
            </Link>
            {_max > index && (
              <span className="inline-flex h-2.5 w-2.5 items-center justify-center">
                <UnitIcon className="h-[5px] w-[5px] transition-transform duration-300 group-hover/skill:animate-[spin_1.4s_linear_infinite]" />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
