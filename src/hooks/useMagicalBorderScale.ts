'use client';

import { Dispatch, MouseEvent, SetStateAction, useCallback } from 'react';
import { PositionType } from 'src/globals';

export default function useMagicalBorderScale(
  setPositions: Dispatch<SetStateAction<Array<PositionType>>>,
  itemClassName: string
) {
  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const items = event.currentTarget.getElementsByClassName(itemClassName);
      const position: Array<PositionType> = [];
      for (const item of items) {
        const itemRect = item.getBoundingClientRect();
        const x = event.clientX - itemRect.left;
        const y = event.clientY - itemRect.top;
        position.push({ x: `${x}px`, y: `${y}px` });
      }
      setPositions(position);
    },
    [itemClassName, setPositions]
  );

  return { onMouseMove };
}
