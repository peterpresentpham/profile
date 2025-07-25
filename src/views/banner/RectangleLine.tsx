import { DivProps } from 'src/globals';
import { cn } from 'src/utils';

export default function RectangleLine(params: DivProps) {
  return (
    <div {...params} className={cn('flex w-[40px] flex-col items-center', params.className)}>
      <div className="h-[calc(100%-64px)] w-[1px] bg-gray-50" />
      <div className="h-[64px] w-[40px] border-[1px] border-gray-50" />
    </div>
  );
}
