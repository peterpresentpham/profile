import { CSSProperties } from 'react';
import { DivProps, PositionType } from 'src/globals';
import { cn } from 'src/utils';

interface VibeContentProps extends DivProps {
  mode?: 'normal' | 'simple';
  containerProps?: DivProps;
}

export function VibeContent({ mode = 'normal', containerProps, ...props }: VibeContentProps) {
  return (
    <div
      {...props}
      className={cn(
        mode == 'normal'
          ? 'vibe-content-container p-[1px]'
          : 'simple-vibe-content-container p-[1px]',
        props.className
      )}
    >
      <div
        {...containerProps}
        className={cn('vibe-content magical-borders-inner', containerProps?.className)}
      >
        {props.children}
      </div>
    </div>
  );
}

interface Props extends DivProps {
  mouse: PositionType;
  circleSize?: number;
}

export default function VibeBox(params: Props) {
  const { mouse, circleSize = 600, ...props } = params;

  return (
    <div
      {...props}
      className={cn('vibe-container', props.className)}
      style={
        {
          '--mouse-x': mouse.x,
          '--mouse-y': mouse.y,
          '--circle-size': `${circleSize}px`,
        } as CSSProperties
      }
    >
      {props.children}
    </div>
  );
}
