'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import { LogoIcon } from 'src/components/icons';
import { ContactConfig, MY_NAME } from 'src/configs/constance';
import { DivProps } from 'src/globals';
import { cn } from 'src/utils';

export default function Footer(props: DivProps) {
  const { currentHour, date } = useMemo(() => {
    const dt = new Date();
    const date = `${dt.getDate()} ${dt.toLocaleString('default', { month: 'short' })} ${dt.getFullYear()}`;
    const currentHour = dt.getHours();
    return { currentHour, date };
  }, []);

  return (
    <div {...props} className={cn('h-[150px] border-t-[1px] border-t-gray-50', props.className)}>
      <CommonContainer className="flex h-full flex-col justify-between">
        <div className="xs:flex-row flex flex-col items-center justify-between gap-3">
          <div className="xs:w-auto xs:flex-col flex w-full flex-row justify-between">
            <div className="flex items-center gap-x-2">
              <LogoIcon />
              <p className="text-[18px] font-bold">{MY_NAME}</p>
            </div>
            <p>Software developer</p>
          </div>
          <div className="xs:w-auto xs:flex-col flex w-full flex-row justify-between">
            <p className="text-bold text-[18px]">Media</p>
            <div className="flex items-center gap-x-4">
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
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-50">{`Hi, ${currentHour < 12 && currentHour > 5 ? 'Good morning' : currentHour >= 12 && currentHour < 19 ? 'Good afternoon' : currentHour >= 19 && currentHour < 23 ? 'Good night' : 'Sleep peacefully'}`}</p>
          <p className="text-gray-50">© Copyright {date}</p>
        </div>
      </CommonContainer>
    </div>
  );
}
