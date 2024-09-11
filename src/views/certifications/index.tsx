'use client';

import { DivProps } from '@peter-present/led-caro';
import { useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import MagicalBorderBox from 'src/components/box/MagicalBorderBox';
import CssHeading from 'src/components/CssHeading';
import { CertificationConfig, DEFAULT_SCALE } from 'src/configs/constance';
import { PositionType } from 'src/globals';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

export default function Certification(params: DivProps) {
  const [positions, setPositions] = useState<Array<PositionType>>([]);
  const { onMouseMove } = useMagicalBorderScale(setPositions, 'credential-magical-item');

  return (
    <CommonContainer {...params} id="certification">
      <CssHeading title="certifications" className="cursor-pointer" />
      <div
        className="credential-container mt-[2rem] magical-borders-content"
        onMouseMove={onMouseMove}
      >
        {CertificationConfig.map((item, index) => {
          const position = positions[index] ?? DEFAULT_SCALE;

          return (
            <MagicalBorderBox
              key={item.id}
              containerClassName="p-[1rem] credential-magical-item"
              className="credential-container-item"
              scale={position}
            >
              <Item {...item} />
            </MagicalBorderBox>
          );
        })}
      </div>
    </CommonContainer>
  );
}
