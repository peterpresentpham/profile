import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { ProjectConfig } from 'src/configs/constance';
import { DivProps } from 'src/globals';
import Item from './item';

export default function Projects(params: DivProps) {
  return (
    <CommonContainer {...params} id="projects">
      <CssHeading title="projects" className="cursor-pointer" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-col2-1 gap-4 mt-[2rem]">
        {ProjectConfig.map((item, index) => {
          return <Item key={item.id} {...item} mode={(index % 2) as 0 | 1} />;
        })}
      </div>
    </CommonContainer>
  );
}
