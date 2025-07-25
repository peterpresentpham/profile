import { DivProps } from 'src/globals';
import { cn } from 'src/utils';

export default function CommonContainer(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        'container mx-auto p-4 sm:max-w-[55rem] md:max-w-[80rem] md:p-5',
        props.className
      )}
    >
      {props?.children}
    </div>
  );
}
