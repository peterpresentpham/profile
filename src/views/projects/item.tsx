import { DivProps, styleMerge } from '@peter-present/led-caro';
import ColorfulBox from 'src/components/box/ColorfulBox';
import { ProjectType } from 'src/globals';

type Props = ProjectType & DivProps & { mode: 0 | 1 };

export default function Item({ technologies, title, description, links, mode, ...props }: Props) {
  const DescriptionComponent = description;

  return (
    <div {...styleMerge({ className: 'relative flex flex-col p-[1px]' }, props as DivProps)}>
      <div className="p-[1rem]">
        <p className="text-base text-gray-50">{technologies.join(', ')}</p>
      </div>
      <div className="p-[1rem]">
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
                  <ColorfulBox
                    className="mr-[16px]"
                    color={isEven ? 'purple' : 'gray'}
                  >{`${link.title} ${isEven ? '<~>' : '>='}`}</ColorfulBox>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
