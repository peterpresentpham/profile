'use client';

import { DivProps, twMerge } from '@peter-present/led-caro';
import { useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { ProjectConfig, ProjectLayoutConfig } from 'src/configs/ProjectConfig';
import { PositionType } from 'src/globals';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

type ProjectLayoutProps = {
  type: 'md' | 'sm' | 'xs';
  className?: string;
};

function ProjectsLayout({ type, className }: ProjectLayoutProps) {
  const [positions, setPositions] = useState<Array<PositionType>>([]);
  const { onMouseMove } = useMagicalBorderScale(setPositions, 'project-magical-item');

  return (
    <div
      className={twMerge('magical-borders-content flex flex-wrap gap-4 mt-[2rem]', className)}
      onMouseMove={onMouseMove}
    >
      {ProjectLayoutConfig[type].map((layout, index) => {
        return (
          <div
            key={index}
            className="h-fit flex flex-col gap-4 md:w-[calc(33.33333%-16px)] sm:w-[calc(50%-16px)] w-[100%]"
          >
            {layout.map((itemInfo) => {
              const item = ProjectConfig[itemInfo.index];
              const position1 = positions[itemInfo.layoutIndex * 2] ?? DEFAULT_SCALE;
              const position2 = positions[itemInfo.layoutIndex * 2 + 1] ?? DEFAULT_SCALE;

              return (
                <Item
                  key={item.id}
                  {...item}
                  mode={(itemInfo.index % 2) as 0 | 1}
                  position1={position1}
                  position2={position2}
                  className="h-fit w-[100%]"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function Projects(params: DivProps) {
  return (
    <CommonContainer {...params} id="projects">
      <CssHeading title="projects" className="cursor-pointer" />
      <ProjectsLayout type="md" className="hidden md:flex" />
      <ProjectsLayout type="sm" className="hidden sm:flex md:hidden" />
      <ProjectsLayout type="xs" className="flex sm:hidden" />
    </CommonContainer>
  );
}
