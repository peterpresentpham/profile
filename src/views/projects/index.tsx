'use client';

import { DivProps } from '@peter-present/led-caro';
import { useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { ProjectConfig } from 'src/configs/constance';
import { PositionType } from 'src/globals';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

export default function Projects(params: DivProps) {
  const [positions, setPositions] = useState<Array<PositionType>>([]);
  const { onMouseMove } = useMagicalBorderScale(setPositions, 'project-magical-item');

  return (
    <CommonContainer {...params} id="projects">
      <CssHeading title="projects" className="cursor-pointer" />
      <div
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-[2rem] magical-borders-content"
        onMouseMove={onMouseMove}
      >
        {ProjectConfig.map((item, index) => {
          const position1 = positions[index * 2] ?? { x: '-1px', y: '-1px' };
          const position2 = positions[index * 2 + 1] ?? { x: '-1px', y: '-1px' };

          return (
            <Item
              key={item.id}
              {...item}
              mode={(index % 2) as 0 | 1}
              position1={position1}
              position2={position2}
            />
          );
        })}
      </div>
    </CommonContainer>
  );
}
