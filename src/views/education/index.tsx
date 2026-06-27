import { ComponentProps } from 'react';
import CssHeading from 'src/components/CssHeading';
import { EducationConfig } from 'src/configs/SkillConfig';
import Item from './item';

export default function Education(params: ComponentProps<'div'>) {
  return (
    <div {...params} id="education" className="container">
      <CssHeading title="education" className="cursor-pointer" />
      <div className="mt-12 ml-3 space-y-6 border-l border-gray-100/20">
        {EducationConfig.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
