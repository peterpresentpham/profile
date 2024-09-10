import { UnitIcon } from 'src/components/icons';
import { SubSkillType } from 'src/globals';

interface Props {
  skills: Array<SubSkillType>;
}

export default function RelevantSkills({ skills }: Props) {
  const _max = skills.length - 1;

  return (
    <div className="p-[1rem] flex flex-wrap items-center gap-x-2">
      {skills.map((skill, index) => {
        return (
          <div key={skill.id} className="flex items-center gap-x-2">
            <a
              href={skill.nameLink}
              target="_blank"
              rel="noreferrer"
              className="text-gray-50 text-base hover-text"
            >
              {skill.name}
            </a>
            {_max > index && <UnitIcon className="w-[5px] h-[5px]" />}
          </div>
        );
      })}
    </div>
  );
}
