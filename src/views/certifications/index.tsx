'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import VibeBox from 'src/components/box/VibeBox';
import CssHeading from 'src/components/CssHeading';
import { CredentialConfig, DEFAULT_SCALE } from 'src/configs/constance';
import useVibeMouses from 'src/hooks/useVibeMouses';
import Item from './item';

export default function Certification(params: DivProps) {
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <div {...params} id="certification" onMouseMove={onMouseMove}>
      <CommonContainer>
        <CssHeading title="certifications" className="cursor-pointer" />
        <div className="credential-container magical-borders-content mt-[3rem]">
          {CredentialConfig.map((item, index) => {
            const mouse = mouses[index] ?? DEFAULT_SCALE;

            return (
              <VibeBox key={item.id} mouse={mouse}>
                <Item {...item} />
              </VibeBox>
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
