import { ComponentProps } from 'react';
import CssHeading from 'src/components/CssHeading';
import { ProjectConfig } from 'src/configs/SkillConfig';
import Item from './item';

export default function Projects(props: ComponentProps<'div'>) {
  return (
    <div {...props} id="projects" className="container">
      <CssHeading title="projects" className="cursor-pointer" />
      <div className="mt-12 hidden columns-3 gap-5 md:block">
        {ProjectConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
      <div className="mt-12 hidden columns-2 gap-5 sm:block md:hidden">
        {ProjectConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
      <div className="mt-12 columns-1 gap-5 sm:hidden">
        {ProjectConfig.map((item) => (
          <Item key={item.id} {...item} className="mb-5 break-inside-avoid" />
        ))}
      </div>
    </div>
  );
}
