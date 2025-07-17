import { DivProps, styleMerge } from '@peter-present/led-caro';

export default function CommonContainer(params: DivProps) {
  return (
    <div
      {...styleMerge(
        { className: 'container mx-auto p-4 sm:max-w-[55rem] md:max-w-[80rem] md:p-5' },
        params
      )}
    >
      {params?.children}
    </div>
  );
}
