import { DivProps } from 'src/globals';
import { cn } from 'src/utils';

export default function CssTooltip(props: DivProps) {
  return (
    <div
      {...props}
      className={cn(
        'before-top-3 before-max-w-xs relative inline before:absolute before:left-1/2 before:w-max before:-translate-x-1/2 before:-translate-y-full before:rounded-md before:bg-slate-900 before:px-3 before:py-2 before:text-[16px] before:text-white before:opacity-0 before:transition-all before:content-[attr(data-tip)] after:absolute after:-top-3 after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 hover:before:opacity-100 hover:after:opacity-100',
        props.className
      )}
      data-tip={props.title}
    >
      {props.children}
    </div>
  );
}
