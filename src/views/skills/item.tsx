/* eslint-disable react/prop-types */
import { DivProps, twMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import { SkillsType } from 'src/globals';
import MoreLinkItem from './MoreLinkItem';
import RelevantSkills from './RelevantSkills';

type Props = SkillsType & DivProps;

export default function Item(params: Props) {
  const { id, name, nameLink, icon, relevantSkills, links, ...props } = params;

  return (
    <div
      {...props}
      id={`skill-${id}`}
      className={twMerge('border-[1px] border-gray-50', props.className)}
    >
      <div className="flex items-center">
        <div className="p-[1rem] flex items-center gap-x-2">
          <Image src={icon} alt={id} className="w-[24px] h-auto" />
          <a
            href={nameLink}
            target="_blank"
            rel="noreferrer"
            className="hover-text text-base text-white"
          >
            {name}
          </a>
        </div>
      </div>
      {relevantSkills && <RelevantSkills skills={relevantSkills} />}
      {links && (
        <div className="p-[1rem] border-t-[1px] border-t-gray-50">
          {links.map((link) => {
            return <MoreLinkItem key={link.id} to={link.to} mode={link.mode} title={link.title} />;
          })}
        </div>
      )}
    </div>
  );
}
