'use client';

import { ComponentProps, useState } from 'react';

export function usePointerOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updatePosition = (target: EventTarget & HTMLElement, x: number, y: number) => {
    const rect = target.getBoundingClientRect();
    setPosition({ x: x - rect.left, y: y - rect.top });
  };

  const handlers: Pick<
    ComponentProps<'div'>,
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onTouchStart'
    | 'onTouchMove'
    | 'onTouchEnd'
    | 'onTouchCancel'
  > = {
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    onMouseMove: (event) => updatePosition(event.currentTarget, event.clientX, event.clientY),
    onTouchStart: (event) => {
      const touch = event.touches[0];
      if (touch) updatePosition(event.currentTarget, touch.clientX, touch.clientY);
      setIsVisible(true);
    },
    onTouchMove: (event) => {
      const touch = event.touches[0];
      if (touch) updatePosition(event.currentTarget, touch.clientX, touch.clientY);
    },
    onTouchEnd: () => setIsVisible(false),
    onTouchCancel: () => setIsVisible(false),
  };

  return { isVisible, position, handlers };
}
