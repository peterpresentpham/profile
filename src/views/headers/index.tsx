'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { HeaderItem } from 'src/components/CssHeading';
import { LogoIcon, MenuIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import { useActiveSection } from 'src/hooks/useActiveSection';
import { throttle } from 'src/utils';
import ContactLine from './ContactLine';
import SmallPopover from './SmallPopover';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);
  const activeSection = useActiveSection();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateScrollDir = useCallback(
    throttle(() => {
      const current = window.scrollY;
      setScrolled(current > 60);
      setHidden(current > lastScrollY.current && current > 60);
      lastScrollY.current = current;
    }, 150),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', updateScrollDir, { passive: true });
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
      className={`bg-black-50 fixed top-0 z-[var(--z-header)] h-[60px] w-screen shadow-md transition-transform duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="relative container flex items-center justify-between">
        <ContactLine
          className="absolute top-0 -left-16 z-[var(--z-header-accent)] hidden duration-1000 md:flex"
          style={scrolled ? { height: '260px' } : { height: '200px' }}
        />
        <button
          type="button"
          className="flex cursor-pointer items-center gap-x-2 focus-visible:ring-2 focus-visible:ring-purple-50/60 focus-visible:outline-none"
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
                active={item.id === activeSection}
                showActiveIndicator
                className="cursor-pointer"
                onClick={() => onScrollClick(item.id)}
              />
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Open menu"
          className="block focus-visible:ring-2 focus-visible:ring-purple-50/60 focus-visible:outline-none md:hidden"
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
