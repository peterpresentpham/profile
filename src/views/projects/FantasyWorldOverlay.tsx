/* eslint-disable react/no-unknown-property */
import { cn } from 'src/utils';

type Props = {
  isVisible: boolean;
  pointerX: number;
  pointerY: number;
};

export default function FantasyWorldOverlay({ isVisible, pointerX, pointerY }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        maskImage: `radial-gradient(circle 190px at ${pointerX}px ${pointerY}px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.72) 45%, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0))`,
        WebkitMaskImage: `radial-gradient(circle 190px at ${pointerX}px ${pointerY}px, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.72) 45%, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0))`,
      }}
    >
      <div
        className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(52, 211, 153, 0.28), transparent 40%), radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.24), transparent 45%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.18), transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0 animate-[spin_20s_linear_infinite]"
        style={{
          backgroundImage:
            'linear-gradient(115deg, rgba(255,255,255,0.30) 1.5px, transparent 1.5px), linear-gradient(25deg, rgba(255,255,255,0.24) 1px, transparent 1px)',
          backgroundSize: '22px 22px, 30px 30px',
        }}
      />
      <div
        className="absolute inset-0 animate-[pulse_2.8s_ease-in-out_infinite]"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.20), rgba(251, 191, 36, 0.00) 42%), radial-gradient(circle at 35% 65%, rgba(167, 139, 250, 0.24), rgba(167, 139, 250, 0.00) 44%)',
          mixBlendMode: 'screen',
        }}
      />
      <div className="absolute top-[34%] left-[18%] h-3 w-3 animate-[ping_2s_ease-in-out_infinite] rounded-full bg-emerald-200/90 blur-[0.5px]" />
      <div className="absolute top-[22%] left-[62%] h-2.5 w-2.5 animate-[ping_2.4s_ease-in-out_infinite] rounded-full bg-sky-200/90 blur-[0.5px]" />
      <div className="absolute top-[68%] left-[74%] h-3 w-3 animate-[ping_2.8s_ease-in-out_infinite] rounded-full bg-amber-100/90 blur-[0.5px]" />
      <div className="fantasy-rune absolute top-[18%] left-[20%] text-sm text-violet-100/75">ᚠ</div>
      <div className="fantasy-rune-delay absolute top-[24%] left-[56%] text-sm text-cyan-100/70">
        ᛟ
      </div>
      <div className="fantasy-rune absolute top-[58%] left-[72%] text-sm text-emerald-100/70">
        ᚱ
      </div>
      <div className="fantasy-rune-delay absolute top-[64%] left-[38%] text-sm text-amber-100/70">
        ᛞ
      </div>
      <style jsx>{`
        .fantasy-rune {
          animation: runeFloat 3.2s ease-in-out infinite;
        }
        .fantasy-rune-delay {
          animation: runeFloat 3.8s ease-in-out infinite;
          animation-delay: 220ms;
        }
        @keyframes runeFloat {
          0% {
            transform: translateY(0px);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-6px);
            opacity: 0.9;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
}
