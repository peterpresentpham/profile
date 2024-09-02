'use client';

import { AnimationCaro } from '@peter-present/led-caro';
import { squares } from './CaroSquareConfig';

export default function CaroSpot() {
  return (
    <AnimationCaro
      stickColor="#C778DD"
      stickSize={0.5}
      className="animation-caro"
      rows={10}
      columns={10}
      squares={squares}
      borderMode="container"
    />
  );
}
