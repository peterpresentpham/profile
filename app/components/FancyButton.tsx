import Image from 'next/image';
import { DivProps } from 'src/globals';
import VibeImg from 'public/vibe.svg';
import { twMerge } from 'tailwind-merge';

export default function FancyButton(props: DivProps) {
  return (
    <div className="relative w-fit">
      <div
        {...props}
        className={twMerge(
          'rounded-[999px] border-[3px] border-[#000000] bg-[#BAE6FF] text-[24px] font-semibold py-2 px-5',
          props.className
        )}
      >
        {props.children}
      </div>
      <Image
        src={VibeImg}
        alt="vibe-img"
        className="absolute w-[40px] h-auto bottom-[-1.5rem] right-[-2rem]"
      />
    </div>
  );
}
