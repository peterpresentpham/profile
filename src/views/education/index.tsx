import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { EducationConfig } from 'src/configs/EducationConfig';
import { DivProps } from 'src/globals';
import Item from './item';

export default function Education(params: DivProps) {
  return (
    <div {...params} id="education">
      <CommonContainer>
        <CssHeading title="education" className="cursor-pointer" />
        <div className="mt-12 grid grid-cols-12 gap-4">
          {EducationConfig.map((item) => {
            return (
              <div key={item.id} className="col-span-12 h-fit md:col-span-10">
                <Item {...item} />
              </div>
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
