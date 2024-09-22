import { DivProps, twMerge } from '@peter-present/led-caro';
import Image from 'next/image';
import Marquee, { MarqueeProps } from 'react-fast-marquee';
import CommonContainer from 'src/components/box/CommonContainer';
import CssHeading from 'src/components/CssHeading';
import { LanguageConfig, ToolsConfig } from 'src/configs/constance';
import { ToolType } from 'src/globals';

interface SlideComponentProps extends MarqueeProps {
  data: Array<ToolType>;
}

function SlideComponent({ data, ...props }: SlideComponentProps) {
  return (
    <Marquee
      {...props}
      speed={50}
      autoFill={true}
      pauseOnHover={true}
      className={twMerge('overlay relative cursor-pointer', props.className)}
    >
      {data.map((item) => {
        const isWhite = Boolean(item.isWhite);

        return (
          <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
            <div
              className={twMerge(
                'mr-[4rem]',
                isWhite
                  ? 'flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-white'
                  : ''
              )}
            >
              <Image
                src={item.icon}
                alt={item.id}
                className={isWhite ? 'h-auto w-[80px]' : 'h-auto w-[100px]'}
              />
            </div>
          </a>
        );
      })}
    </Marquee>
  );
}

export default function Tools(params: DivProps) {
  return (
    <CommonContainer {...params} id="tools">
      <CssHeading title="tools" className="cursor-pointer" />
      <SlideComponent data={LanguageConfig} className="mt-[6rem]" />
      <SlideComponent data={ToolsConfig} direction="right" className="mt-[8rem]" />
    </CommonContainer>
  );
}
