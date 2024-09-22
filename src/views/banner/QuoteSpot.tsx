'use client';

import Image from 'next/image';
import QuoteImg from 'public/quote.svg';
import VibeBox, { VibeContent } from 'src/components/box/VibeBox';
import { DEFAULT_SCALE } from 'src/configs/constance';
import useVibeMouses from 'src/hooks/useVibeMouses';

export default function QuoteSpot() {
  const { mouses, onMouseMove } = useVibeMouses();

  return (
    <div onMouseMove={onMouseMove} className="pt-[5rem] md:pb-[5rem]">
      <VibeBox
        mouse={mouses[0] ?? DEFAULT_SCALE}
        className="container mx-auto flex justify-center md:max-w-[50rem]"
      >
        <VibeContent containerProps={{ className: 'p-[32px]' }}>
          <p className="text-center text-[20px] font-medium text-white">
            People who are unable to motivate themselves must be content with mediocrity no matter
            how impressive their other talents
          </p>
          <div className="absolute left-[5%] top-[-10px] z-[200] px-[5px]">
            <Image src={QuoteImg} alt="quote" className="h-[20px] w-auto" />
          </div>
          <div className="absolute bottom-[-10px] right-[5%] z-[200] px-[5px]">
            <Image src={QuoteImg} alt="quote" className="h-[20px] w-auto" />
          </div>
        </VibeContent>
      </VibeBox>
    </div>
  );
}
