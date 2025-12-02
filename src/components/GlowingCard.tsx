import { ComponentProps } from 'react';
import GlowingEffect from './aceternity/glowing-effect';
import { cn } from 'src/utils';

export default function GlowingCard(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('relative border border-gray-100', props.className)}>
      <GlowingEffect />
      {props.children}
    </div>
  );
}
