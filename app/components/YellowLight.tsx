import Image from 'next/image';
import LightImg from 'public/light.svg';
import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function YellowLight(props: DivProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'p-2 rounded-full border-[2px] border-[#000000] bg-[#FFDC58] aspect-square flex items-center justify-center',
        props.className
      )}
      style={{ boxShadow: '2.5px 2.5px 0.5px #000000' }}
    >
      <Image src={LightImg} alt="light" className="w-auto h-[95%]" />
    </div>
  );
}
