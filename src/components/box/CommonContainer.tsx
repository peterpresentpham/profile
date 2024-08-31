import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function CommonContainer(params: DivProps) {
  return (
    <div
      {...params}
      className={twMerge('container md:max-w-[80rem] mx-auto md:p-5 p-[1rem]', params.className)}
    >
      {params?.children}
    </div>
  );
}
