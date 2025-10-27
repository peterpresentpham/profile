import Image from 'next/image';
import Link from 'next/link';
import GlowingEffect from 'src/components/aceternity/glowing-effect';
import { SkillsType } from 'src/globals';
import MoreLinkItem from './MoreLinkItem';
import RelevantSkills from './RelevantSkills';

export default function Item(params: SkillsType) {
  const { id, name, nameLink, icon, relevantSkills, links } = params;

  return (
    <div id={`skill-${id}`}>
      <div className="relative flex items-center gap-x-2 border border-gray-100 p-4">
        <GlowingEffect />
        {icon && <Image src={icon} alt={id} className="h-auto w-6" />}
        <Link href={nameLink} target="_blank" rel="noreferrer" className="hover-text">
          {name}
        </Link>
      </div>
      {relevantSkills && (
        <div className="relative border border-t-0 border-gray-100">
          <GlowingEffect />
          <RelevantSkills skills={relevantSkills} />
        </div>
      )}
      {links && (
        <div className="relative border border-t-0 border-gray-100 p-4">
          <GlowingEffect />
          {links.map((link) => {
            return <MoreLinkItem key={link.id} to={link.to} mode={link.mode} title={link.title} />;
          })}
        </div>
      )}
    </div>
  );
}
