import { styleMerge } from '@peter-present/led-caro';
import { DivProps } from 'src/globals';

export default function CommonContainer(params: DivProps) {
  return (
    <div
      {...styleMerge({ className: 'container md:max-w-[80rem] mx-auto md:p-5 p-[1rem]' }, params)}
    >
      {params?.children}
    </div>
  );
}
