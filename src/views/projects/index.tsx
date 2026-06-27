'use client';

import { ComponentProps, useState } from 'react';
import CssHeading from 'src/components/CssHeading';
import { ProjectConfig } from 'src/configs/SkillConfig';
import { CoreSkillsType } from 'src/globals';
import { cn } from 'src/utils';
import Item from './item';

const allTechs: CoreSkillsType[] = Array.from(
  new Map(ProjectConfig.flatMap((p) => p.technologies).map((t) => [t.id, t])).values()
);

export default function Projects(props: ComponentProps<'div'>) {
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = selected
    ? ProjectConfig.filter((p) => p.technologies.some((t) => t.id === selected))
    : ProjectConfig;

  return (
    <div {...props} id="projects" className="container">
      <CssHeading title="projects" className="cursor-pointer" />
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelected(null)}
          className={cn(
            'rounded-full border px-3 py-1 text-sm transition-colors duration-200',
            selected === null
              ? 'border-purple-50 bg-purple-50/10 text-purple-50'
              : 'border-gray-100 text-gray-50 hover:border-purple-50/60 hover:text-white'
          )}
        >
          All
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech.id}
            type="button"
            onClick={() => setSelected(selected === tech.id ? null : tech.id)}
            className={cn(
              'rounded-full border px-3 py-1 text-sm transition-colors duration-200',
              selected === tech.id
                ? 'border-purple-50 bg-purple-50/10 text-purple-50'
                : 'border-gray-100 text-gray-50 hover:border-purple-50/60 hover:text-white'
            )}
          >
            {tech.name}
          </button>
        ))}
      </div>
      <div className="mt-8 columns-1 gap-5 sm:columns-2 md:columns-3">
        {filtered.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
    </div>
  );
}
