import Image from 'next/image';
import SmileImg from 'public/backwater/backwater-smile.png';
import OrangeBackwaterImg from 'public/backwater/orange-backwater.svg';
import PencilImg from 'public/pencil.png';
import CommonContainer from 'src/components/box/CommonContainer';
import FancyButton from 'src/components/FancyButton';
import { Portrait } from 'src/components/picture';
import YellowLight from 'src/components/YellowLight';
import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function Overview(props: DivProps) {
  return (
    <CommonContainer {...props} className={twMerge('min-h-[calc(100vh-150px)]', props.className)}>
      <div className="grid grid-cols-2">
        <div>
          <Image src={SmileImg} alt="smile" className="w-[140px] h-[140px]" />
          <div className="flex items-center">
            <p className="text-[45px] font-semibold">{'I am '}</p>
            <Image src={PencilImg} alt="pencil" className="w-[40px] h-[40px] ml-[0.5rem]" />
            <p className="text-[45px] font-semibold">{' a'}</p>
          </div>
          <p className="text-[45px] font-semibold">{' software developer'}</p>
          <FancyButton className="mt-[3rem]">See Portfolio</FancyButton>
        </div>
        <div className="flex items-center justify-end">
          <div className="h-[90%] relative">
            <Portrait className="h-full aspect-square">123</Portrait>
            <YellowLight className="absolute w-[60px] left-[-10px] top-[20%]" />
            <Image
              src={OrangeBackwaterImg}
              alt="orange-backwater"
              className="absolute right-0 bottom-0 w-[65px] h-auto"
            />
          </div>
        </div>
      </div>
    </CommonContainer>
  );
}
