import { ComponentProps } from 'react';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { LanguageConfig, ToolsConfig } from 'src/configs/constance';
import AnimatedString from './animated-string';
import SlideComponent from './slide-component';

export default function Tools(params: ComponentProps<'div'>) {
  return (
    <CommonContainer {...params} id="tools">
      <CssHeading title="tools" className="cursor-pointer" />
      <div className="overlay relative my-16 h-[0.5px]">
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px] rotate-180"
        />
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px] rotate-180"
          animationProps={{ style: { animationDelay: '3s' } }}
        />
      </div>
      <SlideComponent data={LanguageConfig} />
      <div className="overlay relative my-16 h-[0.5px]">
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px] rotate-180"
        />
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px] rotate-180"
          animationProps={{ style: { animationDelay: '3s' } }}
        />
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px]"
        />
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px]"
          animationProps={{ style: { animationDelay: '3s' } }}
        />
      </div>
      <SlideComponent data={ToolsConfig} direction="right" />
      <div className="overlay relative mt-16 h-[0.5px]">
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px]"
        />
        <AnimatedString
          lineWidth={200}
          lineProps={{ className: 'tool-animated-bg' }}
          className="absolute right-0 left-0 h-[0.5px]"
          animationProps={{ style: { animationDelay: '3s' } }}
        />
      </div>
    </CommonContainer>
  );
}
