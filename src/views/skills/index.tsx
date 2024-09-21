'use client';

import { DivProps, twMerge } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { SkillsConfig, SkillsLayoutConfig } from 'src/configs/SkillConfig';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

type SkillsLayoutProps = {
  type: 'md' | 'sm' | 'xs';
  className?: string;
};

function SkillsLayout({ type, className }: SkillsLayoutProps) {
  const { positions, onMouseMove } = useMagicalBorderScale();

  return (
    <div
      className={twMerge('magical-borders-content mt-[2rem] flex flex-wrap gap-4', className)}
      onMouseMove={onMouseMove}
    >
      {SkillsLayoutConfig[type].map((layout, index) => {
        return (
          <div
            key={index}
            className="flex h-fit w-[100%] flex-col gap-4 sm:w-[calc(50%-16px)] md:w-[calc(33.33333%-16px)]"
          >
            {layout.map((itemInfo) => {
              const item = SkillsConfig[itemInfo.index];
              const mouse = positions[itemInfo.layoutIndex] ?? DEFAULT_SCALE;

              return <Item key={item.id} mouse={mouse} {...item} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function Skills(params: DivProps) {
  return (
    <CommonContainer {...params} id="skills">
      <CssHeading title="skills" className="cursor-pointer" />
      <SkillsLayout type="md" className="hidden md:flex" />
      <SkillsLayout type="sm" className="hidden sm:flex md:hidden" />
      <SkillsLayout type="xs" className="flex sm:hidden" />
    </CommonContainer>
  );
}
