import { DivProps, styleMerge } from '@peter-present/led-caro';

export default function RectangleLine(params: DivProps) {
  return (
    <div {...styleMerge({ className: 'flex flex-col items-center w-[40px]' }, params)}>
      <div className="h-[calc(100%-64px)] bg-gray-50 w-[1px]" />
      <div className="w-[40px] h-[64px] border-gray-50 border-[1px]" />
    </div>
  );
}
