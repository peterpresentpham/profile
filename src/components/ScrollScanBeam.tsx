'use client';

import { motion, useMotionValue, useSpring, useTransform, useVelocity } from 'motion/react';
import { useEffect, useState } from 'react';

const STREAK_H = 300;

export default function ScrollLightRay() {
  const [vh, setVh] = useState(800);
  const scrollY = useMotionValue(0);
  const velocity = useVelocity(scrollY);

  const rawOpacity = useTransform(velocity, [-3000, -200, 0, 200, 3000], [0.9, 0.65, 0, 0.65, 0.9]);
  const opacity = useSpring(rawOpacity, { stiffness: 300, damping: 35 });

  const rayY = useMotionValue(0);

  useEffect(() => {
    setVh(window.innerHeight);
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScrollY;
      lastScrollY = current;
      scrollY.set(current);

      const currentVh = window.innerHeight;
      const next = (((rayY.get() + delta * 1.6) % currentVh) + currentVh) % currentVh;
      rayY.set(next);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY, rayY]);

  const smoothY = useSpring(rayY, { stiffness: 500, damping: 50 });

  return (
    <motion.div
      className="pointer-events-none fixed top-0 right-10 z-50 w-0.5 overflow-hidden"
      style={{ opacity, height: '100vh' }}
    >
      <motion.div className="absolute w-full" style={{ y: smoothY, height: STREAK_H }}>
        <div className="h-full w-full bg-linear-to-b from-transparent via-purple-50/75 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-50/55 to-transparent blur-[3px]" />
      </motion.div>
      {/* Ghost at -vh offset so the streak loops seamlessly */}
      <motion.div
        className="absolute w-full"
        style={{ y: smoothY, marginTop: -vh, height: STREAK_H }}
      >
        <div className="h-full w-full bg-linear-to-b from-transparent via-purple-50/75 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-50/55 to-transparent blur-[3px]" />
      </motion.div>
    </motion.div>
  );
}
