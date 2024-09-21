'use client';

import { DivProps, twMerge } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { ProjectConfig, ProjectLayoutConfig } from 'src/configs/ProjectConfig';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

type ProjectLayoutProps = {
  type: 'md' | 'sm' | 'xs';
  className?: string;
};

function ProjectsLayout({ type, className }: ProjectLayoutProps) {
  const { positions, onMouseMove } = useMagicalBorderScale();

  return (
    <div className={twMerge('mt-[2rem] flex flex-wrap gap-4', className)} onMouseMove={onMouseMove}>
      {ProjectLayoutConfig[type].map((layout, index) => {
        return (
          <div
            key={index}
            className="flex h-fit w-[100%] flex-col gap-4 sm:w-[calc(50%-16px)] md:w-[calc(33.33333%-16px)]"
          >
            {layout.map((itemInfo) => {
              const item = ProjectConfig[itemInfo.index];
              const mouse = positions[itemInfo.layoutIndex] ?? DEFAULT_SCALE;

              return <Item key={item.id} {...item} mouse={mouse} />;
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
