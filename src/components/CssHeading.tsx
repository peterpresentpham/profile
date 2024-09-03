import { styleMerge, twMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import SharpImg from 'public/sharp.svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DivProps } from 'src/globals';

interface HeaderItemProps extends DivProps {
  title: string;
  active?: boolean;
  imgClass?: string;
  textProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export function HeaderItem({ title, active, imgClass, textProps, ...props }: HeaderItemProps) {
  return (
    <div {...styleMerge({ className: 'flex items-center' }, props)}>
      <Image src={SharpImg} alt="sharp-img" className={twMerge('w-[16px] h-[16px]', imgClass)} />
      <p
        {...styleMerge(
          { className: `text-base ${active ? 'text-white font-medium' : 'text-gray-50'}` },
          textProps
        )}
      >
        {title}
      </p>
    </div>
  );
}

interface Props extends DivProps {
  title: string;
}

export default function CssHeading({ title, ...props }: Props) {
  return (
    <div {...styleMerge({ className: 'css-heading duration-500 transition-all' }, props)}>
      <HeaderItem
        title={title}
        active={true}
        imgClass="w-[28px] h-[28px]"
        textProps={{ className: 'text-[32px]' }}
      />
      <div className="h-[1px] bg-purple-50 w-full" />
    </div>
  );
}
