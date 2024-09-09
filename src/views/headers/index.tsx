'use client';

import { useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { LogoIcon, MenuIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import SmallPopover from './SmallPopover';

export default function Header() {
  const [open, setOpen] = useState(false);

  function onScrollClick(id: string) {
    const element = document.getElementById(id);
    const position = element?.getBoundingClientRect();
    if (position && typeof window !== 'undefined') {
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="h-[120px]">
      <div id="header" className="h-[60px] sticky top-0 bg-black-50 z-[1000]">
        <CommonContainer className="flex items-center justify-between relative">
          <button
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <LogoIcon />
            <p className="text-white font-bold">{MY_NAME}</p>
          </button>
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
    </div>
  );
}
