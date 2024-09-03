import { styleMerge, twMerge } from '@peter-present/led-caro';
import { DivProps } from 'src/globals';
import 'src/styles/color-button.style.css';

interface Props extends DivProps {
  color?: 'purple' | 'gray';
}

export default function ColorButton({ color = 'purple', ...props }: Props) {
  return (
    <div
      {...styleMerge(
        { className: 'relative overflow-hidden isolate inline-block cursor-pointer' },
        props
      )}
    >
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full aspect-square">
        <div className="color-button-glow" />
        <div className="color-button-glow-star-masker" />
      </div>
      <div
        className={twMerge(
          'border-[1px] text-white px-4 py-1',
          color == 'purple' ? 'border-purple-50' : 'border-gray-50'
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
