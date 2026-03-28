import Image from 'next/image';
import {
  ComponentProps,
  DetailedHTMLProps,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { IMAGES } from 'src/configs/images';
import { cn } from 'src/utils';

interface HeaderItemProps extends ComponentProps<'div'> {
  title: string;
  active?: boolean;
  imgClass?: string;
  textProps?: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
}

export function HeaderItem({ title, active, imgClass, textProps, ...props }: HeaderItemProps) {
  const { onClick, onKeyDown, className, ...rest } = props;
  const isClickable = typeof onClick === 'function';

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    onKeyDown?.(event);
    if (!event.defaultPrevented && isClickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.(event as unknown as MouseEvent<HTMLDivElement>);
    }
  }

  return (
    <div
      {...rest}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={cn(
        'flex items-center focus-visible:ring-2 focus-visible:ring-purple-50/60 focus-visible:outline-none',
        className
      )}
    >
      <Image src={IMAGES.sharp} alt="sharp" width={16} height={16} className={imgClass} />
      <p
        {...textProps}
        className={cn(active ? 'font-medium' : 'text-gray-50', textProps?.className)}
      >
        {title}
      </p>
    </div>
  );
}

interface Props extends ComponentProps<'div'> {
  title: string;
}

export default function CssHeading({ title, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        'group w-[30%] transition-all duration-500 hover:w-[40%] max-[760px]:w-[50%] max-[760px]:hover:w-[60%] max-[600px]:w-[80%] max-[600px]:hover:w-full max-[400px]:w-full',
        props.className
      )}
    >
      <HeaderItem
        title={title}
        active={true}
        imgClass="w-[28px] h-[28px]"
        textProps={{ className: 'text-[32px]' }}
      />
      <div className="h-[0.5px] w-full bg-linear-[0.33332turn,var(--color-purple-50)_60%,transparent]" />
    </div>
  );
}
