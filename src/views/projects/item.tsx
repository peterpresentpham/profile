import { DivProps } from '@peter-present/led-caro';
import ColorfulBox from 'src/components/box/ColorfulBox';
import MagicalBorderBox from 'src/components/box/MagicalBorderBox';
import { PositionType, ProjectType } from 'src/globals';

type Props = ProjectType &
  DivProps & { mode: 0 | 1; position1: PositionType; position2: PositionType };

export default function Item(params: Props) {
  const { technologies, title, description, links, mode, position1, position2, ...props } = params;
  const DescriptionComponent = description;

  return (
    <div {...props}>
      <div className="magical-borders-content">
        <MagicalBorderBox scale={position1} containerClassName="p-[1rem] project-magical-item">
          <p className="text-base text-gray-50">{technologies.join(', ')}</p>
        </MagicalBorderBox>
      </div>
      <div className="magical-borders-content">
        <MagicalBorderBox
          scale={position2}
          className="pt-0"
          containerClassName="p-[1rem] project-magical-item"
        >
          <p className="text-medium text-[24px] text-white">{title}</p>
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
        </MagicalBorderBox>
      </div>
    </div>
  );
}
