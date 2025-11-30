import { ComponentProps } from 'react';
import ShootingStars from 'src/components/aceternity/ShootingStars';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { SkillsConfig } from 'src/configs/SkillConfig';
import Item from './item';

export default function Skills(params: ComponentProps<'div'>) {
  return (
    <CommonContainer {...params} id="skills">
      <CssHeading title="skills" className="cursor-pointer" />
      <ShootingStars />
      <div className="mt-12 hidden columns-3 gap-5 md:block">
        {SkillsConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
      <div className="mt-12 hidden columns-2 gap-5 sm:block md:hidden">
        {SkillsConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
      <div className="mt-12 columns-1 gap-5 sm:hidden">
        {SkillsConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
    </CommonContainer>
  );
}
