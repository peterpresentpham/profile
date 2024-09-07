import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { SkillsConfig } from 'src/configs/SkillConfig';
import Item from './item';

export default function Skills(params: DivProps) {
  return (
    <CommonContainer {...params} id="skills">
      <CssHeading title="skills" className="cursor-pointer" />
      <div className="flex flex-wrap gap-4 mt-[2rem]">
        {SkillsConfig.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              className="h-fit md:max-w-[calc(33.33333%-16px)] sm:max-w-[calc(50%-16px)] max-w-[100%]"
            />
          );
        })}
      </div>
    </CommonContainer>
  );
}
