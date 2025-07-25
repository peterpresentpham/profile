import Image from 'next/image';
import SharpImg from 'public/sharp.svg';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DivProps } from 'src/globals';
import { cn } from 'src/utils';

interface HeaderItemProps extends DivProps {
  title: string;
  active?: boolean;
  imgClass?: string;
  textProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export function HeaderItem({ title, active, imgClass, textProps, ...props }: HeaderItemProps) {
  return (
    <div {...props} className={cn('flex items-center', props.className)}>
      <Image src={SharpImg} alt="sharp-img" className={cn('h-[16px] w-[16px]', imgClass)} />
      <p
        {...textProps}
        className={cn(active ? 'font-medium' : 'text-gray-50', textProps?.className)}
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
    <div {...props} className={cn('css-heading transition-all duration-500', props.className)}>
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
