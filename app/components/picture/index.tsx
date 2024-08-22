import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function Picture(props: DivProps) {
  return (
    <div {...props} className={twMerge('relative bg-[#ffffff]', props.className)}>
      <div className="absolute h-[6px] top-0 left-[-15px] right-[-10px] bg-[#000000] rounded-[10px]" />
      <div className="absolute h-[6px] bottom-0 left-[-12px] right-[-20px] bg-[#000000] rounded-[10px]" />
      <div className="absolute w-[6px] left-0 top-[-10px] bottom-[-9px] bg-[#000000] rounded-[10px]" />
      <div className="absolute w-[6px] right-0 top-[-15px] bottom-[-8px] bg-[#000000] rounded-[10px]" />
      {props.children}
    </div>
  );
}

interface PortraitProps extends DivProps {
  itemsProps?: DivProps;
}

export function Portrait({ itemsProps, ...props }: PortraitProps) {
  return (
    <Picture {...props} className={twMerge('p-[2rem] relative', props.className)}>
      <div className="absolute top-0 w-[40%] left-[50%] translate-x-[-50%] h-[2rem] flex justify-between items-center">
        <div className="w-[10px] h-[10px] rounded-full bg-[#000000]" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#000000]" />
      </div>
      <div
        {...itemsProps}
        className={twMerge(
          'bg-[#dcdcdd] w-full h-full border-[2px] border-[#000000]',
          itemsProps?.className
        )}
      >
        {props.children}
      </div>
    </Picture>
  );
}
