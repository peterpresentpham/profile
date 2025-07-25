import { CSSProperties } from 'react';
import { DivProps } from 'src/globals';
import { cn } from 'src/utils';

interface Props extends DivProps {
  lineWidth?: number;
  lineProps?: DivProps;
  animationProps?: DivProps;
}

export default function AnimatedString({
  lineWidth = 50,
  lineProps,
  animationProps,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={cn('overflow-hidden', props.className)}
      style={{ '--width': `${lineWidth / 2}px` } as CSSProperties}
    >
      <div
        {...animationProps}
        className={cn(
          'animated-string-line flex h-full w-full justify-center',
          animationProps?.className
        )}
      >
        <div
          {...lineProps}
          className={cn('h-full', lineProps?.className)}
          style={{ width: `${lineWidth}px` }}
        />
      </div>
    </div>
  );
}
