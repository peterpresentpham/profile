import Image from 'next/image';
import Link from 'next/link';
import VibeBox, { VibeContent } from 'src/components/box/VibeBox';
import { PositionType, SkillsType } from 'src/globals';
import MoreLinkItem from './MoreLinkItem';
import RelevantSkills from './RelevantSkills';

type Props = SkillsType & { mouse: PositionType };

export default function Item(params: Props) {
  const { id, name, nameLink, icon, relevantSkills, links, mouse } = params;

  return (
    <VibeBox mouse={mouse} id={`skill-${id}`}>
      <VibeContent
        mode="simple"
        containerProps={{ className: 'p-[1rem] flex items-center gap-x-2' }}
      >
        <Image src={icon} alt={id} className="h-auto w-[24px]" />
        <Link
          href={nameLink}
          target="_blank"
          rel="noreferrer"
          className="hover-text text-base text-white"
        >
          {name}
        </Link>
      </VibeContent>
      {relevantSkills && (
        <VibeContent mode="simple" className="pt-0">
          <RelevantSkills skills={relevantSkills} />
        </VibeContent>
      )}
      {links && (
        <VibeContent mode="simple" className="pt-0" containerProps={{ className: 'p-[1rem]' }}>
          {links.map((link) => {
            return <MoreLinkItem key={link.id} to={link.to} mode={link.mode} title={link.title} />;
          })}
        </VibeContent>
      )}
    </VibeBox>
  );
}
