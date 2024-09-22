import { DivProps, styleMerge } from '@peter-present/led-caro';
import ColorfulBox from 'src/components/box/ColorfulBox';
import CaroSpot from './CaroSpot';
import QuoteSpot from './QuoteSpot';
import RectangleLine from './RectangleLine';

export default function Banner(params: DivProps) {
  return (
    <div
      id="overview"
      {...styleMerge(
        {
          className:
            'container relative mx-auto mt-[-60px] min-h-[100vh] px-[1rem] pt-[60px] md:max-w-[80rem] md:px-5',
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
      <QuoteSpot />
    </div>
  );
}
