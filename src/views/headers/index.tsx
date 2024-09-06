'use client';

import { useScrollPosition } from '@peter-present/react-hook-utils';
import { useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { LogoIcon, MenuIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import ContactLine from './ContactLine';
import SmallPopover from './SmallPopover';

export default function Header() {
  const { position } = useScrollPosition();
  const [open, setOpen] = useState(false);
  const isTransform = position > 60;

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
      style={{ transform: isTransform ? 'translateY(-100%)' : '' }}
    >
      <CommonContainer className="flex items-center justify-between relative">
        <ContactLine
          className="absolute left-[-4rem] duration-1000 z-[400] top-0 md:flex hidden"
          style={isTransform ? { height: '260px' } : { height: '200px' }}
        />
        <div
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <LogoIcon />
          <p className="text-white font-bold">{MY_NAME}</p>
        </div>
        <div className="md:flex hidden items-center gap-x-4">
          {HeaderConfig.map((item) => {
            return (
              <HeaderItem
                key={item.id}
                title={item.title}
                className="cursor-pointer"
                onClick={() => onScrollClick(item.id)}
              />
            );
          })}
        </div>
        <MenuIcon
          className="md:hidden block"
          width="18"
          height="18"
          onClick={() => setOpen(true)}
        />
      </CommonContainer>
      <SmallPopover
        open={open}
        onClose={() => setOpen(false)}
        onScrollClick={onScrollClick}
        className="md:hidden block"
      />
    </div>
  );
}
