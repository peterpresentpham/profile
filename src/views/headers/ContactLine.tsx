import Link from 'next/link';
import { ComponentProps } from 'react';
import { ContactConfig } from 'src/configs/constance';
import { cn } from 'src/utils';

export default function ContactLine(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={cn('flex w-[25px] flex-col items-center gap-2', props.className)}>
      <div className="h-full w-[0.5px] bg-gray-100" />
      {ContactConfig.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.id}
            href={item.to}
            target="_blank"
            rel="noreferrer"
            className="contact-icon cursor-pointer"
          >
            <Icon className="h-[25px] w-[25px]" />
          </Link>
        );
      })}
    </div>
  );
}
