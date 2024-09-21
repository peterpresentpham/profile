'use client';

import { MouseEvent, useCallback, useState } from 'react';
import { PositionType } from 'src/globals';

export default function useMagicalBorderScale() {
  const [positions, setPositions] = useState<Array<PositionType>>([]);

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const items = event.currentTarget.getElementsByClassName('vibe-container');
      const position: Array<PositionType> = [];
      for (const item of items) {
        const itemRect = item.getBoundingClientRect();
        const x = event.clientX - itemRect.left;
        const y = event.clientY - itemRect.top;
        position.push({ x: `${x}px`, y: `${y}px` });
      }
      setPositions(position);
    },
    [setPositions]
  );

  return { positions, onMouseMove };
}
