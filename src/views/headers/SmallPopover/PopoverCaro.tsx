import { AnimationCaro, CounterType } from '@peter-present/led-caro';
import { useState } from 'react';
import { squares } from './PopoverCaroConfig';

export default function PopoverCaro() {
  const [stickColor, setStickColor] = useState('#ffffff');

  function onTick(value: CounterType) {
    if (value.index == 7) setStickColor('#ad6636');
    else if (value.index == 15) setStickColor('#abb2bf');
    else if (value.index == 18) setStickColor('#c778dd');
    else if (value.index == 24) setStickColor('#ad6636');
    else if (value.index == 31) setStickColor('#ffffff');
  }

  return (
    <AnimationCaro
      className="w-full"
      stickColor={stickColor}
      stickSize={0.1}
      rows={6}
      columns={5}
      squares={squares}
      events={{ onTick }}
    />
  );
}
