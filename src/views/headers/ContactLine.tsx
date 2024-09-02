import { ContactConfig } from 'src/configs/constance';
import { DivProps } from 'src/globals';
import { twMerge } from 'tailwind-merge';

export default function ContactLine(params: DivProps) {
  return (
    <div
      {...params}
      className={twMerge('flex flex-col items-center w-[25px] gap-2', params.className)}
    >
      <div className="h-full bg-gray-50 w-[1px]" />
      {ContactConfig.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.to}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
          >
            <Icon className="w-[25px] h-[25px]" />
          </a>
        );
      })}
    </div>
  );
}
