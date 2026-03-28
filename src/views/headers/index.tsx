'use client';

import { useCallback, useEffect, useState } from 'react';
import { HeaderItem } from 'src/components/CssHeading';
import { LogoIcon, MenuIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import { throttle } from 'src/utils';
import ContactLine from './ContactLine';
import SmallPopover from './SmallPopover';

export default function Header() {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateScrollDir = useCallback(
    throttle(() => {
      const scrollY = window.scrollY;
      setPosition(scrollY);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [updateScrollDir]);

  const onScrollClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element && typeof window !== 'undefined') {
      const position = element.getBoundingClientRect();
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div
      id="header"
      className={`bg-black-50 fixed top-0 z-1000000 h-[60px] w-screen shadow-md duration-500 ${position > 60 && '-translate-y-full'}`}
    >
      <div className="relative container flex items-center justify-between">
        <ContactLine
          className="absolute top-0 -left-16 z-400 hidden duration-1000 md:flex"
          style={position > 60 ? { height: '260px' } : { height: '200px' }}
        />
        <button
          type="button"
          className="flex cursor-pointer items-center gap-x-2"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <LogoIcon />
          <p className="font-bold">{MY_NAME}</p>
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
        <button
          type="button"
          aria-label="Open menu"
          className="block md:hidden"
          onClick={() => setOpen(true)}
        >
          <MenuIcon width="18" height="18" />
        </button>
      </div>
      <SmallPopover
        open={open}
        onClose={() => setOpen(false)}
        onScrollClick={onScrollClick}
        className="block md:hidden"
      />
    </div>
  );
}
