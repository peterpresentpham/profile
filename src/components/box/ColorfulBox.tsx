import { DivProps, styleMerge, twMerge } from '@peter-present/led-caro';
import { ButtonColorType } from 'src/globals';

type StyleType = 'box' | 'button';

const ColorConfig: { [key in StyleType]: { [key1 in ButtonColorType]: string } } = {
  box: {
    purple: 'glowing-box-purple-bg',
    gray: 'glowing-box-white-bg',
    orange: 'glowing-box-orange-bg',
  },
  button: {
    purple: 'glowing-box-button-purple-bg',
    gray: 'glowing-box-button-white-bg',
    orange: 'glowing-box-button-orange-bg',
  },
};

interface Props extends DivProps {
  color?: ButtonColorType;
}

export default function ColorfulBox({ color = 'purple', ...props }: Props) {
  return (
    <div
      {...styleMerge(
        { className: 'relative isolate inline-block cursor-pointer overflow-hidden' },
        props
      )}
    >
      <div className="glowing-box-animations">
        <div className={twMerge('glowing-box-glow', ColorConfig.box[color])} />
        <div className="glowing-box-stars-masker">
          <div className={twMerge('glowing-box-stars', ColorConfig.box[color])} />
        </div>
      </div>
      <div className="glowing-box-borders-masker">
        <div className={twMerge('glowing-box-borders', ColorConfig.box[color])} />
      </div>
      <div className={twMerge('glowing-box-button text-white', ColorConfig.button[color])}>
        {props.children}
      </div>
    </div>
  );
}
