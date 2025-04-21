'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import VibeBox from 'src/components/box/VibeBox';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { EducationConfig } from 'src/configs/Education';
import useVibeMouses from 'src/hooks/useVibeMouses';
import Item from './item';

export default function Education(params: DivProps) {
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <div {...params} id="education" onMouseMove={onMouseMove}>
      <CommonContainer>
        <CssHeading title="education" className="cursor-pointer" />
        <div className="mt-[3rem]">
          {EducationConfig.map((item, index) => {
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
