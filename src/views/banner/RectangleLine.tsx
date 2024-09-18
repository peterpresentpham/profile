import { DivProps, styleMerge } from '@peter-present/led-caro';

export default function RectangleLine(params: DivProps) {
  return (
    <div {...styleMerge({ className: 'flex w-[40px] flex-col items-center' }, params)}>
      <div className="h-[calc(100%-64px)] w-[1px] bg-gray-50" />
      <div className="h-[64px] w-[40px] border-[1px] border-gray-50" />
    </div>
  );
}
