import Link from 'next/link';
import { ComponentProps } from 'react';
import ColorfulBox from 'src/components/box/ColorfulBox';
import GlowingCard from 'src/components/GlowingCard';
import { ProjectType } from 'src/globals';
import RelevantSkills from '../skills/RelevantSkills';

type Props = ComponentProps<'div'> & ProjectType;

export default function Item(params: Props) {
  const { technologies, title, description, links, ...props } = params;
  const DescriptionComponent = description;

  return (
    <div {...props}>
      <GlowingCard className="p-4">
        <RelevantSkills skills={technologies} />
      </GlowingCard>
      <GlowingCard className="border-t-0 p-4">
        <p className="text-medium text-[24px]">{title}</p>
        <div className="mt-4">
          <DescriptionComponent />
        </div>
        {links && (
          <div className="mt-4">
            {links?.map((link) => {
              return (
                <Link key={link.id} href={link.to} target="_blank" rel="noreferrer">
                  <ColorfulBox
                    className="mr-2"
                    color={link.color}
                  >{`${link.symbol} ${link.title}`}</ColorfulBox>
                </Link>
              );
            })}
          </div>
        )}
      </GlowingCard>
    </div>
  );
}
