import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';

export default function Certification(params: DivProps) {
  return (
    <CommonContainer {...params} id="certification">
      <CssHeading title="certification" className="cursor-pointer" />
    </CommonContainer>
  );
}
