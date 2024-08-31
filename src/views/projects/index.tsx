import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { DivProps } from 'src/globals';

export default function Projects(params: DivProps) {
  return (
    <CommonContainer {...params}>
      <CssHeading title="projects" className="cursor-pointer" />
    </CommonContainer>
  );
}
