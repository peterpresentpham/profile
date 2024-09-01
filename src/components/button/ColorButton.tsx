import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

interface Props extends DivProps {
  color?: 'purple' | 'gray';
}

export default function ColorButton({ color = 'purple', ...props }: Props) {
  return (
    <div
      {...props}
      className={twMerge(
        props.className,
        'border-[1px] text-white px-4 py-1 inline-block cursor-pointer'
      )}
      style={{ borderColor: color == 'purple' ? '#C778DD' : '#ABB2BF' }}
    >
      {props.children}
    </div>
  );
}
