'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import VibeBox from 'src/components/box/VibeBox';
import CssHeading from 'src/components/CssHeading';
import { CredentialConfig, DEFAULT_SCALE } from 'src/configs/constance';
import useMagicalBorderScale from 'src/hooks/useMagicalBorderScale';
import Item from './item';

export default function Certification(params: DivProps) {
  const { positions, onMouseMove } = useMagicalBorderScale();

  return (
    <CommonContainer {...params} id="certification">
      <CssHeading title="certifications" className="cursor-pointer" />
      <div
        className="credential-container magical-borders-content mt-[2rem]"
        onMouseMove={onMouseMove}
      >
        {CredentialConfig.map((item, index) => {
          const position = positions[index] ?? DEFAULT_SCALE;

          return (
            <VibeBox key={item.id} mouse={position}>
              <Item {...item} />
            </VibeBox>
          );
        })}
      </div>
    </CommonContainer>
  );
}
