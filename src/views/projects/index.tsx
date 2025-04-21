'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { ProjectConfig, ProjectLayoutConfig } from 'src/configs/ProjectConfig';
import useVibeMouses from 'src/hooks/useVibeMouses';
import Item from './item';

type ProjectLayoutProps = {
  type: 'md' | 'sm' | 'xs';
  className?: string;
};

function ProjectsLayout({ type, className }: ProjectLayoutProps) {
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <CommonContainer className={className} onMouseMove={onMouseMove}>
      <CssHeading title="projects" className="cursor-pointer" />
      <div className="mt-[3rem] flex flex-wrap gap-[20px]">
        {ProjectLayoutConfig[type].map((layout, index) => {
          return (
            <div
              key={index}
              className="flex h-fit w-[100%] flex-col gap-[20px] sm:w-[calc(50%-10px)] md:w-[calc(100%/3-40px/3)]"
            >
              {layout.map((itemInfo) => {
                const item = ProjectConfig[itemInfo.index];
                const mouse = mouses[itemInfo.layoutIndex] ?? DEFAULT_SCALE;

                return <Item key={item.id} {...item} mouse={mouse} />;
              })}
            </div>
          );
        })}
      </div>
    </CommonContainer>
  );
}

export default function Projects(params: DivProps) {
  return (
    <div {...params} id="projects">
      <ProjectsLayout type="md" className="hidden md:block" />
      <ProjectsLayout type="sm" className="hidden sm:block md:hidden" />
      <ProjectsLayout type="xs" className="block sm:hidden" />
    </div>
  );
}
