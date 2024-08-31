import Image from 'next/image';
import SharpImg from 'public/sharp.svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

interface HeaderItemProps extends DivProps {
  title: string;
  active?: boolean;
  imgClass?: string;
  textProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export function HeaderItem({ title, active, imgClass, textProps, ...props }: HeaderItemProps) {
  return (
    <div {...props} className={twMerge('flex items-center', props.className)}>
      <Image src={SharpImg} alt="sharp-img" className={twMerge('w-[16px] h-[16px]', imgClass)} />
      <p
        {...textProps}
        className={twMerge(
          `text-base ${active ? 'text-white font-medium' : 'text-gray-50'}`,
          textProps?.className
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
    <div {...props} className={twMerge('css-heading duration-500 transition-all', props.className)}>
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
