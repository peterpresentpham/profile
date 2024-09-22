'use client';

import { MouseEvent, useState } from 'react';
import { PositionType } from 'src/globals';

export default function useVibeMouses() {
  const [mouses, setMouses] = useState<Array<PositionType>>([]);

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const items = event.currentTarget.getElementsByClassName('vibe-container');
    const _mouses: Array<PositionType> = [];
    for (const item of items) {
      const itemRect = item.getBoundingClientRect();
      const x = event.clientX - itemRect.left;
      const y = event.clientY - itemRect.top;
      _mouses.push({ x: `${x}px`, y: `${y}px` });
    }
    setMouses(_mouses);
  }

  return { mouses, onMouseMove };
}
