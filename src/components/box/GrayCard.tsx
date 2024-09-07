'use client';

import { DivProps, styleMerge } from '@peter-present/led-caro';
import { CSSProperties, MouseEvent, useState } from 'react';

export default function GrayCard(params: DivProps) {
  const [scale, setScale] = useState<{ x: string; y: string }>({ x: '-1px', y: '-1px' });

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setScale({ x: `${x}px`, y: `${y}px` });
  }

  return (
    <div
      {...styleMerge(
        { className: 'border-[1px] border-gray-50' },
        { style: { '--mouse-x': scale.x, '--mouse-y': scale.y } as CSSProperties, onMouseMove },
        params
      )}
    >
      {params.children}
    </div>
  );
}
