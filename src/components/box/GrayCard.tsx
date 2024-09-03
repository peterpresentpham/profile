import { styleMerge } from '@peter-present/led-caro';
import { DivProps } from 'src/globals';

export default function GrayCard(params: DivProps) {
  return (
    <div {...styleMerge({ className: 'border-[1px] border-gray-50' }, params)}>
      {params.children}
    </div>
  );
}
