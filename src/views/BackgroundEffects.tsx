/* eslint-disable react/no-unknown-property */
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

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none">
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
      <style jsx>{`
        .beam-breathing {
          animation: beamBreathing 5.8s ease-in-out infinite;
        }
        .constellation-dot {
          animation: constellationPulse 2.4s ease-in-out infinite;
        }
        .constellation-dot-delay {
          animation: constellationPulse 3s ease-in-out infinite;
          animation-delay: 300ms;
        }
        @keyframes beamBreathing {
          0% {
            opacity: 0.72;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.72;
          }
        }
        @keyframes constellationPulse {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.35);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
