'use client';

import { AnimationCaro, CounterType } from '@peter-present/led-caro';
import { squares } from './CaroSquareConfig';
import { useState } from 'react';

export default function CaroSpot() {
  const [stickColor, setStickColor] = useState('#abb2bf');

  function onTick(value: CounterType) {
    if (value.index == 0) setStickColor('#abb2bf');
    else if (value.index == 2) setStickColor('rgba(255, 255, 255, 0.8)');
    else if (value.index == 11) setStickColor('#c778dd');
    else if (value.index == 15) setStickColor('rgba(173, 102, 54, 0.8)');
    else if (value.index == 18) setStickColor('rgba(255, 255, 255, 0.8)');
    else if (value.index == 20) setStickColor('#abb2bf');
    else if (value.index == 22) setStickColor('#c778dd');
    else if (value.index == 25) setStickColor('#abb2bf');
  }

  return (
    <AnimationCaro
      stickColor={stickColor}
      stickSize={0.1}
      className="animation-caro"
      rows={10}
      columns={10}
      squares={squares}
      events={{ onTick }}
    />
  );
}
