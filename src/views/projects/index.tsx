import { ComponentProps } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { ProjectConfig } from 'src/configs/ProjectConfig';
import Item from './item';

export default function Projects(props: ComponentProps<'div'>) {
  return (
    <CommonContainer {...props} id="projects">
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
    </CommonContainer>
  );
}
