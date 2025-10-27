'use client';

import Link from 'next/link';
import { StarIcon } from 'src/components/icons';
import { SkillLinkMode } from 'src/globals';

interface Props {
  to: string;
  mode: SkillLinkMode;
  title: string;
}

function CoreLinkItem({ title }: { title: string }) {
  return (
    <div className="skill-link-container flex gap-x-2">
      <div className="h-5 w-5">
        <StarIcon width={20} height={20} className="skill-star-icon inline-block" />
      </div>
      <span className="skill-link-text inline-block text-gray-50">{`${title}`}</span>
    </div>
  );
}

export default function MoreLinkItem({ to, mode, title }: Props) {
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

  return mode == 'scroll' ? (
    <div onClick={() => onScrollClick(to)}>
      <CoreLinkItem title={title} />
    </div>
  ) : (
    <Link href={to} target="_blank" rel="noreferrer">
      <CoreLinkItem title={title} />
    </Link>
  );
}
