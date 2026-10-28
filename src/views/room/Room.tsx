'use client';

import { useEffect, useRef } from 'react';
import { initRoom } from './engine';
import './room.css';

const SHOW_TIME_CONTROLS = process.env.NEXT_PUBLIC_SHOW_TIME_CONTROLS === 'true';

/** Full-screen interactive room. The scene is built imperatively by `initRoom`. */
export default function Room() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    return initRoom(ref.current);
  }, []);

  return <div ref={ref} className="room-root" data-controls={SHOW_TIME_CONTROLS || undefined} />;
}
