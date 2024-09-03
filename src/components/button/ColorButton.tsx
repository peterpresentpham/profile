import { DivProps, styleMerge, twMerge } from '@peter-present/led-caro';
import 'src/styles/color-button.style.css';

interface Props extends DivProps {
  color?: 'purple' | 'gray';
}

export default function ColorButton({ color = 'purple', ...props }: Props) {
  return (
    <div
      {...styleMerge(
        { className: 'relative isolate inline-block cursor-pointer overflow-hidden' },
        props
      )}
    >
      <div className="glowing-box-animations">
        <div
          className={twMerge(
            'glowing-box-glow',
            color == 'purple' ? 'glowing-box-purple-bg' : 'glowing-box-white-bg'
          )}
        />
        <div className="glowing-box-stars-masker">
          <div
            className={twMerge(
              'glowing-box-stars',
              color == 'purple' ? 'glowing-box-purple-bg' : 'glowing-box-white-bg'
            )}
          />
        </div>
      </div>
      <div className="glowing-box-borders-masker">
        <div
          className={twMerge(
            'glowing-box-borders',
            color == 'purple' ? 'glowing-box-purple-bg' : 'glowing-box-white-bg'
          )}
        />
      </div>
      <div
        className={twMerge(
          'glowing-box-button text-white',
          color == 'purple' ? 'glowing-box-button-purple-bg' : 'glowing-box-button-white-bg'
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
