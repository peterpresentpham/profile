import { Fira_Sans } from 'next/font/google';
import Link from 'next/link';
import ColorfulBox from 'src/components/box/ColorfulBox';
import CssTooltip from 'src/components/CssTooltip';
import { InfoIcon } from 'src/components/icons';
import { DivProps } from 'src/globals';
import { cn } from 'src/utils';
import QuoteSpot from './QuoteSpot';
import RectangleLine from './RectangleLine';

const fira = Fira_Sans({ weight: '400', subsets: ['latin'] });

export default function Banner(params: DivProps) {
  return (
    <div {...params} id="overview" className={cn('relative min-h-screen', params.className)}>
      <div className="relative container mx-auto px-4 pt-[60px] md:max-w-[80rem] md:px-5">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="item1 pt-[5rem] sm:pt-[10rem]">
            <div className="flex flex-wrap items-center justify-center md:block md:flex-nowrap">
              <div className="relative inline-block">
                <p className="text-center text-[32px] leading-[34px] font-semibold md:text-start">
                  Peter
                </p>
                <CssTooltip
                  title="Phạm Hồng Phúc"
                  className={`${fira.className} absolute top-0 right-[-16px]`}
                >
                  <InfoIcon className="h-[16px] w-[16px] cursor-pointer" />
                </CssTooltip>
              </div>
              &nbsp;&nbsp;
              <p className="inline text-center text-[32px] leading-[34px] font-semibold md:text-start">
                is a <span className="text-purple-50">Software Developer</span>
              </p>
            </div>
            <p className="mt-4 text-center text-gray-50 md:text-start">
              with experience in developing, implementing, and optimizing web applications.
            </p>
            <div className="mt-[1rem] flex items-center justify-center gap-[8px] md:justify-start">
              <Link
                href="https://www.linkedin.com/in/peter-present/"
                target="_blank"
                rel="noreferrer"
              >
                <ColorfulBox className="mx-auto mt-[1rem]">Contact me!</ColorfulBox>
              </Link>
            </div>
          </div>
          <div className="item2">
            <RectangleLine className="sticky top-0 hidden h-[260px] md:flex" />
          </div>
        </div>
        <QuoteSpot />
      </div>
    </div>
  );
}
