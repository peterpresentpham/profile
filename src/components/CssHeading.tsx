import { DivProps, styleMerge, twMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import SharpImg from 'public/sharp.svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderItemProps extends DivProps {
  title: string;
  active?: boolean;
  imgClass?: string;
  textProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export function HeaderItem({ title, active, imgClass, textProps, ...props }: HeaderItemProps) {
  return (
    <div {...styleMerge({ className: 'flex items-center' }, props)}>
      <Image src={SharpImg} alt="sharp-img" className={twMerge('h-[16px] w-[16px]', imgClass)} />
      <p {...styleMerge({ className: `${active ? 'font-medium' : 'text-gray-50'}` }, textProps)}>
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
    <div {...styleMerge({ className: 'css-heading transition-all duration-500' }, props)}>
      <HeaderItem
        title={title}
        active={true}
        imgClass="w-[28px] h-[28px]"
        textProps={{ className: 'text-[32px]' }}
      />
      <div className="h-[1px] w-full bg-purple-50" />
    </div>
  );
}
