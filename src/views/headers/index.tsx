'use client';

import { useMousePosition, useScrollPosition } from '@peter-present/react-hook-utils';
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { LogoIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import ContactLine from './ContactLine';

export default function Header() {
  const { position } = useMousePosition();
  const { direction } = useScrollPosition();

  function onScrollClick(id: string) {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    if (position && typeof window !== 'undefined') {
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY - 60,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div
      id="header"
      className="h-[60px] fixed top-0 w-screen shadow-md z-[1000000] duration-500 bg-black-50"
      style={{
        transform: direction == 'down' && position.y > 60 ? 'translateY(-100%)' : '',
      }}
    >
      <CommonContainer className="flex items-center justify-between relative">
        <ContactLine
          className="absolute left-[-4rem] duration-500 z-[400]"
          style={
            direction == 'down' && position.y > 60
              ? { top: '60px', height: '200px' }
              : { top: '60px', height: '140px' }
          }
        />
        <div
          className="flex items-center gap-x-2"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <LogoIcon />
          <p className="text-white font-bold">{MY_NAME}</p>
        </div>
        <div className="flex items-center gap-x-4">
          {HeaderConfig.map((item) => {
            return (
              <HeaderItem
                key={item.id}
                title={item.title}
                active={true}
                className="cursor-pointer"
                onClick={() => onScrollClick(item.id)}
              />
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
