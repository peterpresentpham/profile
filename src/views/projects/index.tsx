'use client';

import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { ProjectConfig, ProjectLayoutConfig } from 'src/configs/ProjectConfig';
import { DivProps } from 'src/globals';
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
      <div className="mt-12 grid grid-cols-12 gap-5">
        {ProjectLayoutConfig[type].map((layout, index) => {
          return (
            <div
              key={index}
              className="col-span-12 flex h-fit flex-col gap-5 sm:col-span-6 md:col-span-4"
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

export default function Projects(props: DivProps) {
  return (
    <div {...props} id="projects">
      <ProjectsLayout type="md" className="hidden md:block" />
      <ProjectsLayout type="sm" className="hidden sm:block md:hidden" />
      <ProjectsLayout type="xs" className="block sm:hidden" />
    </div>
  );
}
