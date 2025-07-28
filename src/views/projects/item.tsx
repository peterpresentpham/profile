import Link from 'next/link';
import GlowingEffect from 'src/components/aceternity/glowing-effect';
import ColorfulBox from 'src/components/box/ColorfulBox';
import { ProjectType } from 'src/globals';
import RelevantSkills from '../skills/RelevantSkills';

export default function Item(params: ProjectType) {
  const { technologies, title, description, links } = params;
  const DescriptionComponent = description;

  return (
    <div>
      <div className="relative border border-gray-100">
        <GlowingEffect />
        <RelevantSkills skills={technologies} />
      </div>
      <div className="relative border border-t-0 border-gray-100 p-4">
        <GlowingEffect />
        <p className="text-medium text-[24px]">{title}</p>
        <div className="mt-[1rem]">
          <DescriptionComponent />
        </div>
        {links && (
          <div className="mt-[1rem]">
            {links?.map((link) => {
              return (
                <Link key={link.id} href={link.to} target="_blank" rel="noreferrer">
                  <ColorfulBox
                    className="mr-[8px]"
                    color={link.color}
                  >{`${link.symbol} ${link.title}`}</ColorfulBox>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
