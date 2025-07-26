import Link from 'next/link';
import ColorfulBox from 'src/components/box/ColorfulBox';
import { ProjectType } from 'src/globals';
import RelevantSkills from '../skills/RelevantSkills';

export default function Item(params: ProjectType) {
  const { technologies, title, description, links } = params;
  const DescriptionComponent = description;

  return (
    <div className="border border-gray-100">
      <RelevantSkills skills={technologies} />
      <div className="border-t border-gray-100 p-4">
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
