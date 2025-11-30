import { ComponentProps } from 'react';
import { cn } from 'src/utils';

export default function CommonContainer(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('container mx-auto p-4 sm:max-w-220 md:max-w-7xl md:p-5', props.className)}
    >
      {props?.children}
    </div>
  );
}
