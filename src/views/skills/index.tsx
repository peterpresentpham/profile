import { ComponentProps } from 'react';
import ShootingStars from 'src/components/aceternity/ShootingStars';
import CssHeading from 'src/components/CssHeading';
import { SkillsConfig } from 'src/configs/SkillConfig';
import Item from './item';

export default function Skills(params: ComponentProps<'div'>) {
  return (
    <div {...params} id="skills" className="container">
      <CssHeading title="skills" className="cursor-pointer" />
      <ShootingStars />
      <div className="mt-12 columns-1 gap-5 sm:columns-2 md:columns-3">
        {SkillsConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
    </div>
  );
}
