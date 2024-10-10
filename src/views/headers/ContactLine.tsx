import { DivProps, styleMerge } from '@peter-present/led-caro';
import { ContactConfig } from 'src/configs/constance';

export default function ContactLine(params: DivProps) {
  return (
    <div {...styleMerge({ className: 'flex w-[25px] flex-col items-center gap-2' }, params)}>
      <div className="h-full w-[1px] bg-gray-50" />
      {ContactConfig.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.to}
            target="_blank"
            rel="noreferrer"
            className="contact-icon cursor-pointer"
          >
            <Icon className="h-[25px] w-[25px]" />
          </a>
        );
      })}
    </div>
  );
}
