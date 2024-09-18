import { UnitIcon } from 'src/components/icons';
import { SubSkillType } from 'src/globals';

interface Props {
  skills: Array<SubSkillType>;
}

export default function RelevantSkills({ skills }: Props) {
  const _max = skills.length - 1;

  return (
    <div className="flex flex-wrap items-center gap-x-2 p-[1rem]">
      {skills.map((skill, index) => {
        return (
          <div key={skill.id} className="flex items-center gap-x-2">
            <a
              href={skill.nameLink}
              target="_blank"
              rel="noreferrer"
              className="hover-text text-base text-gray-50"
            >
              {skill.name}
            </a>
            {_max > index && <UnitIcon className="h-[5px] w-[5px]" />}
          </div>
        );
      })}
    </div>
  );
}
