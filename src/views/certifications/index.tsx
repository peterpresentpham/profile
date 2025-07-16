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
        <div className="mt-12 grid grid-cols-12 gap-4">
          {CredentialConfig.map((item, index) => {
            const mouse = mouses[index] ?? DEFAULT_SCALE;

            return (
              <div key={index} className="col-span-12 h-fit sm:col-span-6">
                <Item {...item} mouse={mouse} />
              </div>
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
