/* eslint-disable react/no-unknown-property */
import { cn } from 'src/utils';

type Props = {
  isVisible: boolean;
  pointerX: number;
  pointerY: number;
};

export default function CaroOverlay({ isVisible, pointerX, pointerY }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        maskImage: `radial-gradient(circle 90px at ${pointerX}px ${pointerY}px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
        WebkitMaskImage: `radial-gradient(circle 90px at ${pointerX}px ${pointerY}px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))`,
      }}
    >
      <div className="caro-scan-line absolute inset-x-0 h-0.5 bg-linear-to-r from-transparent via-cyan-200/90 to-transparent blur-[0.4px]" />
      <div className="absolute top-[28%] left-[22%] animate-pulse text-[22px] leading-none font-semibold text-emerald-200/80">
        X
      </div>
      <div className="absolute top-[42%] left-[38%] animate-pulse text-[22px] leading-none font-semibold text-sky-200/80 [animation-delay:120ms]">
        O
      </div>
      <div className="absolute top-[28%] left-[52%] animate-pulse text-[22px] leading-none font-semibold text-emerald-200/80 [animation-delay:220ms]">
        X
      </div>
      <div className="absolute top-[42%] left-[66%] animate-pulse text-[22px] leading-none font-semibold text-sky-200/80 [animation-delay:320ms]">
        O
      </div>
      <div className="absolute top-[28%] left-[80%] animate-pulse text-[22px] leading-none font-semibold text-emerald-200/80 [animation-delay:420ms]">
        X
      </div>
      <div className="absolute top-[57%] left-[46%] animate-pulse text-[20px] leading-none font-semibold text-sky-200/75 [animation-delay:520ms]">
        O
      </div>
      <style jsx>{`
        .caro-scan-line {
          animation: caroScanSweep 2.2s linear infinite;
        }
        @keyframes caroScanSweep {
          0% {
            top: 8%;
            opacity: 0.15;
          }
          45% {
            opacity: 0.9;
          }
          100% {
            top: 88%;
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
