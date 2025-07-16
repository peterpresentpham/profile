'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DEFAULT_SCALE } from 'src/configs/constance';
import { EducationConfig } from 'src/configs/EducationConfig';
import useVibeMouses from 'src/hooks/useVibeMouses';
import Item from './item';

export default function Education(params: DivProps) {
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <div {...params} id="education" onMouseMove={onMouseMove}>
      <CommonContainer>
        <CssHeading title="education" className="cursor-pointer" />
        <div className="mt-12 grid grid-cols-12 gap-4">
          {EducationConfig.map((item, index) => {
            const mouse = mouses[index] ?? DEFAULT_SCALE;

            return (
              <div key={item.id} className="col-span-12 h-fit">
                <Item {...item} mouse={mouse} />
              </div>
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
