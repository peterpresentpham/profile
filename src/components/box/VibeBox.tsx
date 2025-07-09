import { DivProps, styleMerge } from '@peter-present/led-caro';
import { CSSProperties } from 'react';
import { PositionType } from 'src/globals';

interface VibeContentProps extends DivProps {
  mode?: 'normal' | 'simple';
  containerProps?: DivProps;
}

export function VibeContent({ mode = 'normal', containerProps, ...props }: VibeContentProps) {
  return (
    <div
      {...styleMerge(
        {
          className:
            mode == 'normal'
              ? 'vibe-content-container p-[1px]'
              : 'simple-vibe-content-container p-[1px]',
        },
        props
      )}
    >
      <div {...styleMerge({ className: 'vibe-content magical-borders-inner' }, containerProps)}>
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
      {...styleMerge(
        {
          className: 'vibe-container',
          style: {
            '--mouse-x': mouse.x,
            '--mouse-y': mouse.y,
            '--circle-size': `${circleSize}px`,
          } as CSSProperties,
        },
        props
      )}
    >
      {props.children}
    </div>
  );
}
