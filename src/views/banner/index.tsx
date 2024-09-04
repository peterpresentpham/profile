import { DivProps, styleMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import QuoteImg from 'public/quote.svg';
import CommonContainer from 'src/components/box/CommonContainer';
import ColorButton from 'src/components/button/ColorButton';
import CaroSpot from './CaroSpot';

export default function Banner(params: DivProps) {
  return (
    <CommonContainer id="overview" {...styleMerge({ className: 'relative' }, params)}>
      <div className="flex flex-wrap gap-4 justify-between sm:pt-[10rem] pt-[5rem]">
        <div className="item1">
          <p className="font-semibold text-[32px] text-white leading-[34px] md:text-start text-center">
            Peter is a <span className="text-purple-50">Fullstack Developer</span>
          </p>
          <p className="text-base text-gray-50 mt-[2rem] md:text-start text-center">
            with experience in developing, implementing, and optimizing web applications.
          </p>
          <div className="md:block flex">
            <ColorButton className="mt-[1rem] mx-auto">Contact me!!!!</ColorButton>
          </div>
        </div>
        <div className="item2">
          <CaroSpot />
        </div>
      </div>
      <div className="container md:max-w-[50rem] flex justify-center mx-auto mt-[5rem]">
        <div className="relative border-[1px] border-gray-50 block-inline px-[0.75rem] py-[1.25rem]">
          <p className="text-[20px] font-medium text-center text-white">
            People who are unable to motivate themselves must be content with mediocrity no matter
            how impressive their other talents
          </p>
          <div className="absolute top-[-10px] left-[5%] bg-black-50 px-[5px]">
            <Image src={QuoteImg} alt="quote" className="w-[30px] h-[20px]" />
          </div>
          <div className="absolute bottom-[-10px] right-[5%] bg-black-50 px-[5px]">
            <Image src={QuoteImg} alt="quote" className="w-[30px] h-[20px]" />
          </div>
        </div>
      </div>
    </CommonContainer>
  );
}
