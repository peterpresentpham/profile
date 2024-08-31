import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function GrayCard(params: DivProps) {
  return (
    <div {...params} className={twMerge(params.className, 'border-[1px] border-gray-50')}>
      {params.children}
    </div>
  );
}
