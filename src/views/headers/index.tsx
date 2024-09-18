'use client';

import { useEffect, useState } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { LogoIcon, MenuIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import ContactLine from './ContactLine';
import SmallPopover from './SmallPopover';

export default function Header() {
  const [position, setPosition] = useState(typeof window != 'undefined' ? window.scrollY : 0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window != 'undefined') {
      const threshold = 0;
      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.scrollY;
        setPosition(scrollY);
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

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
    <div
      id="header"
      className={`fixed top-0 z-[1000000] h-[60px] w-screen bg-black-50 shadow-md duration-500 ${position > 60 && 'translate-y-[-100%]'}`}
    >
      <CommonContainer className="relative flex items-center justify-between">
        <ContactLine
          className="absolute left-[-4rem] top-0 z-[400] hidden duration-1000 md:flex"
          style={position > 60 ? { height: '260px' } : { height: '200px' }}
        />
        <button
          className="flex cursor-pointer items-center gap-x-2"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <LogoIcon />
          <p className="font-bold text-white">{MY_NAME}</p>
        </button>
        <div className="hidden items-center gap-x-4 md:flex">
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
          className="block md:hidden"
          width="18"
          height="18"
          onClick={() => setOpen(true)}
        />
      </CommonContainer>
      <SmallPopover
        open={open}
        onClose={() => setOpen(false)}
        onScrollClick={onScrollClick}
        className="block md:hidden"
      />
    </div>
  );
}
