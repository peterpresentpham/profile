import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DivProps } from 'src/globals';

export default function Skills(params: DivProps) {
  return (
    <CommonContainer {...params}>
      <CssHeading title="skills" className="cursor-pointer" />
    </CommonContainer>
  );
}
