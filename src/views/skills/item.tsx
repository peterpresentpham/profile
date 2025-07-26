import Image from 'next/image';
import Link from 'next/link';
import { SkillsType } from 'src/globals';
import MoreLinkItem from './MoreLinkItem';
import RelevantSkills from './RelevantSkills';

export default function Item(params: SkillsType) {
  const { id, name, nameLink, icon, relevantSkills, links } = params;

  return (
    <div id={`skill-${id}`} className="border border-gray-100">
      <div className="flex items-center gap-x-2 p-4">
        {icon && <Image src={icon} alt={id} className="h-auto w-[24px]" />}
        <Link href={nameLink} target="_blank" rel="noreferrer" className="hover-text">
          {name}
        </Link>
      </div>
      {relevantSkills && (
        <div className="border-t border-gray-100">
          <RelevantSkills skills={relevantSkills} />
        </div>
      )}
      {links && (
        <div className="border-t border-gray-100 p-4">
          {links.map((link) => {
            return <MoreLinkItem key={link.id} to={link.to} mode={link.mode} title={link.title} />;
          })}
        </div>
      )}
    </div>
  );
}
