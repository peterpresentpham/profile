import { DivProps, twMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { LanguageConfig, ToolsConfig } from 'src/configs/constance';

export default function Tools(params: DivProps) {
  return (
    <CommonContainer {...params} id="tools">
      <CssHeading title="tools" className="cursor-pointer" />
      <Marquee speed={50} autoFill={true} pauseOnHover={true} className="mt-[5rem] cursor-pointer">
        {LanguageConfig.map((language) => {
          const isWhite = Boolean(language.isWhite);

          return (
            <div key={language.id} className={twMerge('mr-[4rem]', isWhite ? 'bg-white' : '')}>
              <Image src={language.icon} alt={language.id} className="w-[100px] h-auto" />
            </div>
          );
        })}
      </Marquee>
      <Marquee
        speed={50}
        autoFill={true}
        pauseOnHover={true}
        direction="right"
        className="mt-[8rem] cursor-pointer"
      >
        {ToolsConfig.map((tool) => {
          const isWhite = Boolean(tool.isWhite);

          return (
            <div key={tool.id} className={twMerge('mr-[4rem]', isWhite ? 'bg-white' : '')}>
              <Image src={tool.icon} alt={tool.id} className="w-[100px] h-auto" />
            </div>
          );
        })}
      </Marquee>
    </CommonContainer>
  );
}
