import Image from 'next/image';
import BlackStarImg from 'public/black-star.png';
import CommonContainer from 'src/components/box/CommonContainer';
import { MY_NAME } from 'src/config/constance';
import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

function Square(props: DivProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'w-[10px] h-[10px] border-[#000000] border-[3px] bg-white',
        props.className
      )}
    />
  );
}

export default function Header(props: DivProps) {
  return (
    <div
      {...props}
      className={twMerge('h-[150px] border-b-[#000000] border-b-[4px]', props.className)}
    >
      <CommonContainer className="max-w-3xl">
        <div className="grid grid-cols-6 bg-[#ffffff] border-[#000000] border-[4px] h-[60px] relative">
          <Square className="absolute top-[-10px] left-[-10px]" />
          <Square className="absolute top-[-10px] right-[-10px]" />
          <Square className="absolute bottom-[-10px] left-[-10px]" />
          <Square className="absolute bottom-[-10px] right-[-10px]" />
          <div className="col-span-3 flex items-center gap-2 border-r-[#000000] border-r-[4px]">
            <Image src={BlackStarImg} alt="black-star" className="w-[25px] h-[25px]" />
            <p className="text-[#0C0C0C] font-semibold text-[24px]">{MY_NAME}</p>
          </div>
          <div className="flex items-center justify-center border-r-[#000000] border-r-[4px]">
            <p className="text-[#0C0C0C] text-[18px] font-medium">About//</p>
          </div>
          <div className="flex items-center justify-center border-r-[#000000] border-r-[4px]">
            <p className="text-[#0C0C0C] text-[18px] font-medium">Experience</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-[#0C0C0C] text-[18px] font-medium">Education</p>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
}
