/* eslint-disable react/no-unknown-property */
'use client';

import { ComponentProps } from 'react';
import { cn } from 'src/utils';

export default function CssTooltip(props: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'before-top-3 before-max-w-xs relative inline before:absolute before:left-1/2 before:w-max before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-slate-900 before:px-3 before:py-2 before:text-[16px] before:text-white before:opacity-0 before:transition-all before:content-[attr(data-tip)] after:absolute after:-top-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 hover:before:-translate-y-[calc(100%+4px)] hover:before:opacity-100 hover:after:opacity-100',
        props.className
      )}
      data-tip={props.title}
    >
      {props.children}
      <style jsx>{`
        div:hover::before {
          animation: tooltipFloat 1.2s ease-in-out infinite;
        }
        @keyframes tooltipFloat {
          0% {
            transform: translateX(-50%) translateY(calc(-100% - 4px));
          }
          50% {
            transform: translateX(-50%) translateY(calc(-100% - 8px));
          }
          100% {
            transform: translateX(-50%) translateY(calc(-100% - 4px));
          }
        }
      `}</style>
    </div>
  );
}
