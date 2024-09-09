'use client';

import { DivProps, styleMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import QuoteImg from 'public/quote.svg';
import { MouseEvent, useState } from 'react';
import ColorfulBox from 'src/components/box/ColorfulBox';
import MagicalBorderBox from 'src/components/box/MagicalBorderBox';
import CaroSpot from './CaroSpot';
import RectangleLine from './RectangleLine';

export default function Banner(params: DivProps) {
  const [scale, setScale] = useState<{ x: string; y: string }>({ x: '-1px', y: '-1px' });

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setScale({ x: `${x}px`, y: `${y}px` });
  }

  return (
    <div
      id="overview"
      {...styleMerge(
        {
          className:
            'container md:max-w-[80rem] mx-auto md:px-5 md:pb-5 px-[1rem] pb-[1rem] relative min-h-[100vh] mt-[-60px]',
        },
        params
      )}
    >
      <div className="flex flex-wrap gap-4 justify-between">
        <div className="item1 sm:pt-[10rem] pt-[5rem]">
          <p className="font-semibold text-[32px] text-white leading-[34px] md:text-start text-center">
            Peter is a <span className="text-purple-50">Fullstack Developer</span>
          </p>
          <p className="text-base text-gray-50 mt-[2rem] md:text-start text-center">
            with experience in developing, implementing, and optimizing web applications.
          </p>
          <div className="md:block flex">
            <ColorfulBox className="mt-[1rem] mx-auto">Contact me!!!!</ColorfulBox>
          </div>
        </div>
        <div className="item2">
          <RectangleLine className="h-[260px] sticky top-0 md:flex hidden" />
          <div className="w-full md:pt-[10rem] pt-[2rem] flex md:justify-end justify-center">
            <CaroSpot />
          </div>
        </div>
      </div>
      <div
        className="container md:max-w-[50rem] flex justify-center mx-auto mt-[5rem] magical-borders-content"
        onMouseMove={onMouseMove}
      >
        <MagicalBorderBox
          scale={scale}
          containerClassName="p-[32px]"
          components={{
            footer: (
              <>
                <div className="absolute top-[-10px] left-[5%] px-[5px] z-[200]">
                  <Image src={QuoteImg} alt="quote" className="w-auto h-[20px]" />
                </div>
                <div className="absolute bottom-[-10px] right-[5%] px-[5px] z-[200]">
                  <Image src={QuoteImg} alt="quote" className="w-auto h-[20px]" />
                </div>
              </>
            ),
          }}
        >
          <p className="text-[20px] font-medium text-center text-white">
            People who are unable to motivate themselves must be content with mediocrity no matter
            how impressive their other talents
          </p>
        </MagicalBorderBox>
      </div>
    </div>
  );
}
