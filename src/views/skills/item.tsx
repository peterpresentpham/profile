/* eslint-disable react/prop-types */
import { DivProps } from '@peter-present/led-caro';
import Image from 'next/image';
import MagicalBorderBox from 'src/components/box/MagicalBorderBox';
import { PositionType, SkillsType } from 'src/globals';
import MoreLinkItem from './MoreLinkItem';
import RelevantSkills from './RelevantSkills';

type Props = SkillsType & DivProps & { positions: Array<PositionType> };

export default function Item(params: Props) {
  const { id, name, nameLink, icon, relevantSkills, links, positions, ...props } = params;

  return (
    <div {...props} id={`skill-${id}`}>
      <div className="magical-borders-content">
        <MagicalBorderBox
          scale={positions[0] ?? { x: '-1px', y: '-1px' }}
          className="none-liner-tag-automation"
          containerClassName="p-[1rem] flex items-center gap-x-2 skill-magical-item"
        >
          <Image src={icon} alt={id} className="w-[24px] h-auto" />
          <a
            href={nameLink}
            target="_blank"
            rel="noreferrer"
            className="hover-text text-base text-white"
          >
            {name}
          </a>
        </MagicalBorderBox>
      </div>
      {relevantSkills && (
        <div className="magical-borders-content">
          <MagicalBorderBox
            scale={positions[1] ?? { x: '-1px', y: '-1px' }}
            className="pt-0 none-liner-tag-automation"
            containerClassName="skill-magical-item"
          >
            <RelevantSkills skills={relevantSkills} />
          </MagicalBorderBox>
        </div>
      )}
      {links && (
        <div className="magical-borders-content">
          <MagicalBorderBox
            scale={positions[relevantSkills ? 2 : 1] ?? { x: '-1px', y: '-1px' }}
            className="pt-0 none-liner-tag-automation"
            containerClassName="p-[1rem] skill-magical-item"
          >
            {links.map((link) => {
              return (
                <MoreLinkItem key={link.id} to={link.to} mode={link.mode} title={link.title} />
              );
            })}
          </MagicalBorderBox>
        </div>
      )}
    </div>
  );
}
