import GrayCard from 'src/components/box/GrayCard';
import ColorButton from 'src/components/button/ColorButton';
import { DivProps, ProjectType } from 'src/globals';

type Props = ProjectType & DivProps & { mode: 0 | 1 };

export default function Item({ technologies, title, description, links, mode, ...props }: Props) {
  const DescriptionComponent = description;

  return (
    <GrayCard {...props}>
      <div className="p-[1rem]">
        <p className="text-base text-gray-50">{technologies.join(', ')}</p>
      </div>
      <div className="p-[1rem] border-t-[1px] border-t-gray-50">
        <p className="text-[24px] text-white text-medium">{title}</p>
        <div className="mt-[1rem]">
          <DescriptionComponent />
        </div>
        {links && (
          <div className="mt-[1rem]">
            {links?.map((link, index) => {
              const isEven = index % 2 == mode;

              return (
                <a key={link.id} href={link.to} target="_blank" rel="noreferrer">
                  <ColorButton
                    color={isEven ? 'purple' : 'gray'}
                  >{`${link.title} ${isEven ? '<~>' : '>='}`}</ColorButton>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </GrayCard>
  );
}
