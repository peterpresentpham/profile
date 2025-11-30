import { ComponentProps } from 'react';
import { cn } from 'src/utils';
import RectangleLine from './RectangleLine';

export default function LargeRectangleLine(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('relative', props.className)}>
      <div className="absolute top-0 right-60 h-[calc(100%+80px)] w-10">
        <RectangleLine className="sticky top-0 mr-2 h-[300px]" />
      </div>
      <div className="absolute top-0 right-48 h-full w-10">
        <RectangleLine className="sticky top-0 mr-2 h-[260px]" />
      </div>
      <div className="absolute top-0 right-36 h-full w-10">
        <RectangleLine className="top-0 mr-2 h-[380px]" />
      </div>
      <div className="absolute top-0 right-24 h-[calc(100%+90px)] w-10">
        <RectangleLine className="sticky top-0 h-[180px]" />
      </div>
      <div className="absolute top-0 right-12 h-full w-10">
        <RectangleLine className="sticky top-0 mr-2 h-[220px]" />
      </div>
      <div className="absolute top-0 right-0 h-[calc(100%-20px)] w-10">
        <RectangleLine className="sticky top-0 h-[140px]" />
      </div>
    </div>
  );
}

export function SmallRectangleLine() {
  return (
    <div className="flex h-[calc(100%+160px)] justify-center md:hidden">
      <RectangleLine className="sticky top-0 mr-2 h-[300px]" />
      <RectangleLine className="sticky top-0 mr-2 h-[260px]" />
      <RectangleLine className="sticky top-0 mr-2 h-[340px]" />
      <RectangleLine className="sticky top-0 mr-2 h-[180px]" />
      <RectangleLine className="sticky top-0 mr-2 h-[220px]" />
      <RectangleLine className="sticky top-0 h-[140px]" />
    </div>
  );
}
