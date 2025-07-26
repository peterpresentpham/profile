import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { CredentialConfig } from 'src/configs/constance';
import { DivProps } from 'src/globals';
import Item from './item';

export default function Certification(params: DivProps) {
  return (
    <div {...params} id="certification">
      <CommonContainer>
        <CssHeading title="certifications" className="cursor-pointer" />
        <div className="mt-12 grid grid-cols-12 gap-4">
          {CredentialConfig.map((item, index) => {
            return (
              <div key={index} className="col-span-12 h-fit md:col-span-6">
                <Item {...item} />
              </div>
            );
          })}
        </div>
      </CommonContainer>
    </div>
  );
}
