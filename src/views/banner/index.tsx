import { Fira_Sans } from 'next/font/google';
import Link from 'next/link';
import ColorfulBox from 'src/components/box/ColorfulBox';
import CommonContainer from 'src/components/box/CommonContainer';
import CssTooltip from 'src/components/CssTooltip';
import { InfoIcon } from 'src/components/icons';
import { DivProps } from 'src/globals';
import { cn } from 'src/utils';
import QuoteSpot from './QuoteSpot';
import RectangleLine from './RectangleLine';

const fira = Fira_Sans({ weight: '400', subsets: ['latin'] });

export default function Banner(params: DivProps) {
  return (
    <CommonContainer
      {...params}
      id="overview"
      className={cn('relative min-h-screen', params.className)}
    >
      <div className="flex flex-wrap justify-between gap-4">
        <div className="item1 pt-20 sm:pt-40">
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
          <div className="mt-4 flex items-center justify-center gap-[8px] md:justify-start">
            <Link
              href="https://www.linkedin.com/in/peter-present/"
              target="_blank"
              rel="noreferrer"
            >
              <ColorfulBox className="mx-auto mt-4">Contact me!</ColorfulBox>
            </Link>
          </div>
        </div>
        <div className="item2">
          <RectangleLine className="sticky top-0 mr-2 h-[340px]" />
          <RectangleLine className="sticky top-0 mr-2 h-[300px]" />
          <RectangleLine className="sticky top-0 mr-2 h-[260px]" />
          <RectangleLine className="sticky top-0 mr-2 h-[220px]" />
          <RectangleLine className="sticky top-0 mr-2 h-[180px]" />
          <RectangleLine className="sticky top-0 h-[140px]" />
        </div>
      </div>
      <QuoteSpot />
    </CommonContainer>
  );
}
