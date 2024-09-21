'use client';

import { DivProps, styleMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import QuoteImg from 'public/quote.svg';
import { MouseEvent, useState } from 'react';
import ColorfulBox from 'src/components/box/ColorfulBox';
import VibeBox, { VibeContent } from 'src/components/box/VibeBox';
import { DEFAULT_SCALE } from 'src/configs/constance';
import CaroSpot from './CaroSpot';
import RectangleLine from './RectangleLine';

export default function Banner(params: DivProps) {
  const [mouse, setMouse] = useState<{ x: string; y: string }>(DEFAULT_SCALE);

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMouse({ x: `${x}px`, y: `${y}px` });
  }

  return (
    <div
      id="overview"
      {...styleMerge(
        {
          className:
            'container relative mx-auto mt-[-60px] min-h-[100vh] px-[1rem] pb-[1rem] pt-[60px] md:max-w-[80rem] md:px-5 md:pb-5',
        },
        params
      )}
    >
      <div className="flex flex-wrap justify-between gap-4">
        <div className="item1 pt-[5rem] sm:pt-[10rem]">
          <p className="text-center text-[32px] font-semibold leading-[34px] text-white md:text-start">
            Peter is a <span className="text-purple-50">Fullstack Developer</span>
          </p>
          <p className="mt-[2rem] text-center text-base text-gray-50 md:text-start">
            with experience in developing, implementing, and optimizing web applications.
          </p>
          <div className="flex md:block">
            <ColorfulBox className="mx-auto mt-[1rem]">Contact me!!!!</ColorfulBox>
          </div>
        </div>
        <div className="item2">
          <RectangleLine className="sticky top-0 hidden h-[260px] md:flex" />
          <div className="flex w-full justify-center pt-[2rem] md:justify-end md:pt-[10rem]">
            <CaroSpot />
          </div>
        </div>
      </div>
      <VibeBox
        mouse={mouse}
        className="container mx-auto mt-[5rem] flex justify-center md:max-w-[50rem]"
        onMouseMove={onMouseMove}
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
