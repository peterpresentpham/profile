import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function PurpleButton(params: DivProps) {
  return (
    <div
      {...params}
      className={twMerge(
        params.className,
        'border-purple-50 border-[1px] text-white px-4 py-1 inline-block'
      )}
    >
      {params.children}
    </div>
  );
}
