/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import { cn } from 'src/utils';
import { IMAGES } from 'src/configs/images';

type Props = {
  isVisible: boolean;
  pointerX: number;
  pointerY: number;
};

export default function PikachuOverlay({ isVisible, pointerX, pointerY }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        maskImage: `radial-gradient(circle 170px at ${pointerX}px ${pointerY}px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.72) 48%, rgba(0, 0, 0, 0))`,
        WebkitMaskImage: `radial-gradient(circle 170px at ${pointerX}px ${pointerY}px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.72) 48%, rgba(0, 0, 0, 0))`,
      }}
    >
      <div
        className="absolute inset-0 animate-[pulse_2.2s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(250, 204, 21, 0.30), transparent 42%), radial-gradient(circle at 70% 65%, rgba(253, 224, 71, 0.24), transparent 45%)',
          mixBlendMode: 'screen',
        }}
      />
      <div className="absolute top-[35%] left-[16%] h-1 w-14 -rotate-12 animate-[pulse_0.9s_ease-in-out_infinite] rounded-full bg-yellow-200/80 blur-[0.5px]" />
      <div className="absolute top-[48%] left-[28%] h-1 w-12 rotate-6 animate-[pulse_1.1s_ease-in-out_infinite] rounded-full bg-amber-100/75 blur-[0.5px]" />
      <div className="absolute top-[30%] left-[64%] h-1 w-14 rotate-12 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-yellow-200/80 blur-[0.5px]" />
      <div className="absolute top-[58%] left-[58%] h-1 w-10 -rotate-18 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-amber-100/75 blur-[0.5px]" />
      <div className="pikachu-arc absolute top-[24%] left-[18%] h-0.5 w-18 bg-linear-to-r from-transparent via-yellow-100 to-transparent" />
      <div className="pikachu-arc-delay absolute top-[44%] left-[56%] h-0.5 w-16 bg-linear-to-r from-transparent via-yellow-200 to-transparent" />
      <div className="absolute top-[26%] left-[26%] h-2 w-2 animate-ping rounded-full bg-yellow-100/80" />
      <div className="absolute top-[47%] left-[68%] h-1.5 w-1.5 animate-ping rounded-full bg-amber-100/85 [animation-delay:180ms]" />
      <div className="absolute top-[34%] left-[46%] h-1.5 w-1.5 animate-ping rounded-full bg-yellow-100/85 [animation-delay:320ms]" />
      <div className="absolute bottom-1 left-[10%] animate-[bounce_1.6s_ease-in-out_infinite]">
        <Image src={IMAGES.pikachu1} alt="Pikachu 1" width={62} height={62} unoptimized />
      </div>
      <div className="absolute bottom-1 left-[41%] animate-[bounce_1.2s_ease-in-out_infinite]">
        <Image src={IMAGES.pikachu2} alt="Pikachu 2" width={72} height={72} unoptimized />
      </div>
      <div className="absolute right-[8%] bottom-1 animate-[bounce_1.8s_ease-in-out_infinite]">
        <Image src={IMAGES.pikachu3} alt="Pikachu 3" width={64} height={64} unoptimized />
      </div>
      <style jsx>{`
        .pikachu-arc {
          animation: arcPulse 0.95s ease-in-out infinite;
        }
        .pikachu-arc-delay {
          animation: arcPulse 1.15s ease-in-out infinite;
          animation-delay: 180ms;
        }
        @keyframes arcPulse {
          0% {
            opacity: 0.15;
            transform: scaleX(0.65) skewX(-20deg);
            filter: brightness(1);
          }
          50% {
            opacity: 0.95;
            transform: scaleX(1.1) skewX(-12deg);
            filter: brightness(1.35);
          }
          100% {
            opacity: 0.15;
            transform: scaleX(0.65) skewX(-20deg);
            filter: brightness(1);
          }
        }
      `}</style>
    </div>
  );
}
