'use client';

import { DivProps } from '@peter-present/led-caro';
import { useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { SkillsConfig } from 'src/configs/SkillConfig';
import { PositionType } from 'src/globals';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

export default function Skills(params: DivProps) {
  const [positions, setPositions] = useState<Array<PositionType>>([]);
  const { onMouseMove } = useMagicalBorderScale(setPositions, 'skill-magical-item');

  return (
    <CommonContainer {...params} id="skills">
      <CssHeading title="skills" className="cursor-pointer" />
      <div
        className="flex flex-wrap gap-4 mt-[2rem] magical-borders-content"
        onMouseMove={onMouseMove}
      >
        {SkillsConfig.map((item) => {
          const range = item.position;

          return (
            <Item
              key={item.id}
              positions={positions.slice(range[0], range[1])}
              {...item}
              className="h-fit md:max-w-[calc(33.33333%-16px)] sm:max-w-[calc(50%-16px)] max-w-[100%]"
            />
          );
        })}
      </div>
    </CommonContainer>
  );
}
