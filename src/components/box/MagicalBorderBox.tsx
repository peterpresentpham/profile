/* eslint-disable react/prop-types */
import { DivProps, styleMerge, twMerge } from '@peter-present/led-caro';
import { CSSProperties, ReactNode } from 'react';

interface Props extends DivProps {
  scale: { x: string; y: string };
  containerClassName?: string;
  components?: {
    footer?: ReactNode;
  };
}

export default function MagicalBorderBox(params: Props) {
  const { scale, containerClassName, components, ...props } = params;

  return (
    <div
      {...styleMerge(
        {
          className: 'tags-automation relative flex p-[1px]',
          style: { '--mouse-x': scale.x, '--mouse-y': scale.y } as CSSProperties,
        },
        props
      )}
    >
      <div
        className={twMerge(
          'magical-border-after-before magical-borders-inner tags-automation-inner',
          containerClassName
        )}
      >
        {props.children}
      </div>
      {components?.footer}
    </div>
  );
}
