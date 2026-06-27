'use client';

import dynamic from 'next/dynamic';

const BackgroundBeams = dynamic(() => import('src/components/aceternity/background-beams'), {
  ssr: false,
});
const ShootingStars = dynamic(() => import('src/components/aceternity/ShootingStars'), {
  ssr: false,
});
const Sparkles = dynamic(() => import('src/components/aceternity/sparkles'), {
  ssr: false,
});
const ScrollScanBeam = dynamic(() => import('src/components/ScrollScanBeam'), {
  ssr: false,
});

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none">
      <ScrollScanBeam />
      <Sparkles />
      <ShootingStars className="h-screen" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="constellation-dot absolute top-[20%] left-[14%] h-1 w-1 rounded-full bg-cyan-100/60" />
        <div className="constellation-dot-delay absolute top-[34%] left-[30%] h-1 w-1 rounded-full bg-purple-100/60" />
        <div className="constellation-dot absolute top-[24%] left-[48%] h-1 w-1 rounded-full bg-cyan-100/60" />
        <div className="constellation-dot-delay absolute top-[30%] left-[68%] h-1 w-1 rounded-full bg-purple-100/60" />
        <div className="constellation-dot absolute top-[18%] left-[82%] h-1 w-1 rounded-full bg-cyan-100/60" />
        <div className="absolute top-[20%] left-[14%] h-px w-[17%] rotate-15 bg-linear-to-r from-cyan-100/35 to-transparent" />
        <div className="absolute top-[34%] left-[30%] h-px w-[20%] -rotate-12 bg-linear-to-r from-purple-100/30 to-transparent" />
        <div className="absolute top-[24%] left-[48%] h-px w-[22%] rotate-[8deg] bg-linear-to-r from-cyan-100/30 to-transparent" />
      </div>
      <div className="beam-breathing">
        <BackgroundBeams />
      </div>
    </div>
  );
}
