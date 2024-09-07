import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { CertificationConfig } from 'src/configs/constance';
import Item from './item';

export default function Certification(params: DivProps) {
  return (
    <CommonContainer {...params} id="certification">
      <CssHeading title="certifications" className="cursor-pointer" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-[2rem]">
        {CertificationConfig.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </CommonContainer>
  );
}
