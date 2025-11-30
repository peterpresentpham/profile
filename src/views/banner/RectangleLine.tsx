import { ComponentProps } from 'react';
import GlowingEffect from 'src/components/aceternity/glowing-effect';
import { cn } from 'src/utils';

export default function RectangleLine(params: ComponentProps<'div'>) {
  return (
    <div {...params} className={cn('relative flex w-10 flex-col items-center', params.className)}>
      <div className="h-[calc(100%-64px)] w-[0.5px] bg-gray-100" />
      <div className="relative h-16 w-10 border-[0.5px] border-gray-100">
        <GlowingEffect />
      </div>
    </div>
  );
}
