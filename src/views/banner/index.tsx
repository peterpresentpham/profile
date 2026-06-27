'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { ComponentProps, useEffect, useState } from 'react';
import ColorfulBox from 'src/components/box/ColorfulBox';
import { cn } from 'src/utils';
import LargeRectangleLine, { SmallRectangleLine } from './large-rectangle-line';
import QuoteSpot from './QuoteSpot';

const ROLES = ['Software Developer', 'Blockchain Engineer'];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
        className="whitespace-nowrap text-purple-50"
      >
        {ROLES[index]}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Banner(params: ComponentProps<'div'>) {
  return (
    <div
      {...params}
      id="overview"
      className={cn('relative container min-h-screen', params.className)}
    >
      <div className="flex flex-wrap gap-4 pb-20 max-md:justify-between">
        <div className="pt-20 sm:pt-30 md:w-1/2 md:pt-40 lg:w-1/3">
          <div className="flex flex-col items-center text-center font-sans text-[32px] leading-[40px] font-semibold md:items-start md:text-start">
            <span>I am a</span>
            <RotatingRole />
          </div>
          <p className="mt-4 text-center text-gray-50 md:text-start">
            passionate about building things that work well — web apps, APIs, and blockchain
            protocols alike.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
            <Link
              href="https://www.linkedin.com/in/peter-present/"
              target="_blank"
              rel="noreferrer"
            >
              <ColorfulBox className="mx-auto mt-4">Contact me!</ColorfulBox>
            </Link>
          </div>
        </div>
        <LargeRectangleLine className="max-md:hidden md:w-1/3" />
      </div>
      <QuoteSpot />
      <SmallRectangleLine />
    </div>
  );
}
