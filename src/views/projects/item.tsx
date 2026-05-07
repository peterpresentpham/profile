'use client';

import Link from 'next/link';
import { ComponentProps, useState } from 'react';
import ColorfulBox from 'src/components/box/ColorfulBox';
import GlowingCard from 'src/components/GlowingCard';
import { ProjectType } from 'src/globals';
import RelevantSkills from '../skills/RelevantSkills';
import CaroOverlay from './CaroOverlay';
import FantasyWorldOverlay from './FantasyWorldOverlay';
import PikachuOverlay from './PikachuOverlay';

type Props = ComponentProps<'div'> & ProjectType;

export default function Item(params: Props) {
  const { id, technologies, title, description, links, ...props } = params;
  const DescriptionComponent = description;
  const isCaroProject = id === 'caro';
  const isFantasyWorldProject = id === 'fantasy-world';
  const isPikachuProject = id === 'pikachu';
  const hasInteractiveOverlay = isCaroProject || isFantasyWorldProject || isPikachuProject;
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  const updatePointerPosition = (target: EventTarget & HTMLElement, x: number, y: number) => {
    const rect = target.getBoundingClientRect();
    setPointerPosition({ x: x - rect.left, y: y - rect.top });
  };

  const handleMouseEnter = () => {
    if (!hasInteractiveOverlay) return;
    setIsOverlayVisible(true);
  };

  const handleMouseLeave = () => {
    if (!hasInteractiveOverlay) return;
    setIsOverlayVisible(false);
  };

  const handleMouseMove: ComponentProps<'div'>['onMouseMove'] = (event) => {
    if (!hasInteractiveOverlay) return;
    updatePointerPosition(event.currentTarget, event.clientX, event.clientY);
  };

  const handleTouchStart: ComponentProps<'div'>['onTouchStart'] = (event) => {
    if (!hasInteractiveOverlay) return;
    const touch = event.touches[0];
    if (touch) {
      updatePointerPosition(event.currentTarget, touch.clientX, touch.clientY);
    }
    setIsOverlayVisible(true);
  };

  const handleTouchMove: ComponentProps<'div'>['onTouchMove'] = (event) => {
    if (!hasInteractiveOverlay) return;
    const touch = event.touches[0];
    if (touch) {
      updatePointerPosition(event.currentTarget, touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    if (!hasInteractiveOverlay) return;
    setIsOverlayVisible(false);
  };

  return (
    <div {...props}>
      <GlowingCard className="p-4">
        <RelevantSkills skills={technologies} />
      </GlowingCard>
      <GlowingCard
        className="group relative overflow-hidden border-t-0 p-4"
        onMouseEnter={hasInteractiveOverlay ? handleMouseEnter : undefined}
        onMouseLeave={hasInteractiveOverlay ? handleMouseLeave : undefined}
        onMouseMove={hasInteractiveOverlay ? handleMouseMove : undefined}
        onTouchStart={hasInteractiveOverlay ? handleTouchStart : undefined}
        onTouchMove={hasInteractiveOverlay ? handleTouchMove : undefined}
        onTouchEnd={hasInteractiveOverlay ? handleTouchEnd : undefined}
        onTouchCancel={hasInteractiveOverlay ? handleTouchEnd : undefined}
      >
        {isFantasyWorldProject && (
          <FantasyWorldOverlay
            isVisible={isOverlayVisible}
            pointerX={pointerPosition.x}
            pointerY={pointerPosition.y}
          />
        )}
        {isCaroProject && (
          <CaroOverlay
            isVisible={isOverlayVisible}
            pointerX={pointerPosition.x}
            pointerY={pointerPosition.y}
          />
        )}
        {isPikachuProject && (
          <PikachuOverlay
            isVisible={isOverlayVisible}
            pointerX={pointerPosition.x}
            pointerY={pointerPosition.y}
          />
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute top-0 left-0 h-px w-full animate-pulse bg-linear-to-r from-transparent via-purple-200/80 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full animate-pulse bg-linear-to-r from-transparent via-cyan-200/70 to-transparent [animation-delay:220ms]" />
          <div className="absolute top-0 left-0 h-full w-px animate-pulse bg-linear-to-b from-transparent via-purple-200/60 to-transparent [animation-delay:120ms]" />
          <div className="absolute top-0 right-0 h-full w-px animate-pulse bg-linear-to-b from-transparent via-cyan-200/55 to-transparent [animation-delay:320ms]" />
        </div>
        <p className="text-[24px] font-medium">{title}</p>
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
