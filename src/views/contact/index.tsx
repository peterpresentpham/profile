import { DivProps } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';

export default function Contact(params: DivProps) {
  return (
    <CommonContainer {...params} id="contact">
      <CssHeading title="contact" className="cursor-pointer" />
    </CommonContainer>
  );
}
