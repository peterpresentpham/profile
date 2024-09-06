import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';

export default function Skills(params: DivProps) {
  return (
    <CommonContainer {...params} id="skills">
      <CssHeading title="skills" className="cursor-pointer" />
    </CommonContainer>
  );
}
