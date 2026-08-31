'use client';

import Link from 'next/link';
import { ComponentProps, ComponentType } from 'react';
import ColorfulBox from 'src/components/box/ColorfulBox';
import GlowingCard from 'src/components/GlowingCard';
import { usePointerOverlay } from 'src/hooks/usePointerOverlay';
import { ProjectType } from 'src/globals';
import RelevantSkills from '../skills/RelevantSkills';
import CaroOverlay from './CaroOverlay';
import FantasyWorldOverlay from './FantasyWorldOverlay';
import PikachuOverlay from './PikachuOverlay';

type Props = ComponentProps<'div'> & ProjectType;

type OverlayProps = { isVisible: boolean; pointerX: number; pointerY: number };

const OVERLAY_BY_PROJECT_ID: Record<string, ComponentType<OverlayProps>> = {
  caro: CaroOverlay,
  'fantasy-world': FantasyWorldOverlay,
  pikachu: PikachuOverlay,
};

export default function Item(params: Props) {
  const { id, technologies, title, description, links, ...props } = params;
  const DescriptionComponent = description;
  const OverlayComponent = OVERLAY_BY_PROJECT_ID[id];
  const { isVisible, position, handlers } = usePointerOverlay();

  return (
    <div {...props}>
      <GlowingCard className="p-4">
        <RelevantSkills skills={technologies} />
      </GlowingCard>
      <GlowingCard
        className="group relative overflow-hidden border-t-0 p-4"
        {...(OverlayComponent ? handlers : {})}
      >
        {OverlayComponent && (
          <OverlayComponent isVisible={isVisible} pointerX={position.x} pointerY={position.y} />
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute top-0 left-0 h-px w-full animate-pulse bg-linear-to-r from-transparent via-purple-200/80 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full animate-pulse bg-linear-to-r from-transparent via-cyan-200/70 to-transparent [animation-delay:220ms]" />
          <div className="absolute top-0 left-0 h-full w-px animate-pulse bg-linear-to-b from-transparent via-purple-200/60 to-transparent [animation-delay:120ms]" />
          <div className="absolute top-0 right-0 h-full w-px animate-pulse bg-linear-to-b from-transparent via-cyan-200/55 to-transparent [animation-delay:320ms]" />
        </div>
        <p className="text-2xl font-medium">{title}</p>
        <div className="mt-4">
          <DescriptionComponent />
        </div>
        {links && (
          <div className="mt-4">
            {links?.map((link) => {
              return (
                <Link key={link.id} href={link.to} target="_blank" rel="noreferrer">
                  <ColorfulBox
                    className="mr-2"
                    color={link.color}
                  >{`${link.symbol} ${link.title}`}</ColorfulBox>
                </Link>
              );
            })}
          </div>
        )}
      </GlowingCard>
    </div>
  );
}
