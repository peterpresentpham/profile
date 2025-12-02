import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';
import GlowingCard from 'src/components/GlowingCard';
import { SkillsType } from 'src/globals';
import MoreLinkItem from './MoreLinkItem';
import RelevantSkills from './RelevantSkills';

type Props = ComponentProps<'div'> & SkillsType;

export default function Item(params: Props) {
  const { id, name, nameLink, icon, relevantSkills, links, ...props } = params;

  return (
    <div id={`skill-${id}`} {...props}>
      <GlowingCard className="flex items-center gap-x-2 p-4">
        {icon && <Image src={icon} alt={id} className="h-auto w-6" />}
        <Link href={nameLink} target="_blank" rel="noreferrer" className="hover-text">
          {name}
        </Link>
      </GlowingCard>
      {relevantSkills && (
        <GlowingCard className="border-t-0 p-4">
          <RelevantSkills skills={relevantSkills} />
        </GlowingCard>
      )}
      {links && (
        <GlowingCard className="border-t-0 p-4">
          {links.map((link) => {
            return <MoreLinkItem key={link.id} to={link.to} mode={link.mode} title={link.title} />;
          })}
        </GlowingCard>
      )}
    </div>
  );
}
