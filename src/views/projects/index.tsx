'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { ProjectConfig, ProjectLayoutConfig } from 'src/configs/ProjectConfig';
import { PositionType } from 'src/globals';
import useVibeMouses from 'src/hooks/useVibeMouses';
import Item from './item';

type ProjectLayoutProps = {
  type: 'md' | 'sm' | 'xs';
  mouses: Array<PositionType>;
  className?: string;
};

function ProjectsLayout({ type, mouses, className }: ProjectLayoutProps) {
  return (
    <CommonContainer className={className}>
      <CssHeading title="projects" className="cursor-pointer" />
      <div className="mt-[3rem] flex flex-wrap gap-[1.25rem]">
        {ProjectLayoutConfig[type].map((layout, index) => {
          return (
            <div
              key={index}
              className="flex h-fit w-[100%] flex-col gap-[1.25rem] sm:w-[calc(50%-20px)] md:w-[calc(33.33333%-20px)]"
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
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <div {...params} id="projects" onMouseMove={onMouseMove}>
      <ProjectsLayout type="md" mouses={mouses} className="hidden md:block" />
      <ProjectsLayout type="sm" mouses={mouses} className="hidden sm:block md:hidden" />
      <ProjectsLayout type="xs" mouses={mouses} className="block sm:hidden" />
    </div>
  );
}
