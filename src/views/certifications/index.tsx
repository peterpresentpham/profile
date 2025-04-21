'use client';

import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
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
        <div className="mt-[3rem] flex flex-wrap gap-[20px]">
          {CredentialConfig.map((item, index) => {
            const mouse = mouses[index] ?? DEFAULT_SCALE;

            return (
              <div
                key={index}
                className="flex h-fit w-[100%] flex-col gap-[20px] sm:w-[calc(50%-10px)]"
              >
                <Item {...item} mouse={mouse} />
              </div>
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
