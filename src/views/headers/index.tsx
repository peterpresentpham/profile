/* eslint-disable react/no-unknown-property */
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';

export default function Header() {
  return (
    <CommonContainer id="header" className="flex items-center justify-between h-[60px]">
      <div className="flex items-center gap-x-2">
        <svg width="16" height="16" viewBox="0 0 31 32" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.5 31.5608C15.469 23.0109 8.54135 16.0895 0 16.0895C8.56041 16.0895 15.5 9.13698 15.5 0.560791C15.5309 9.11068 22.4586 16.0321 31 16.0321C22.4394 16.0321 15.5 22.9846 15.5 31.5608Z"
            fill="#ffffff"
          />
        </svg>
        <p className="text-white font-bold">{MY_NAME}</p>
      </div>
      <div className="flex items-center gap-x-4">
        {HeaderConfig.map((item) => {
          return (
            <HeaderItem key={item.id} title={item.title} active={true} className="cursor-pointer" />
          );
        })}
      </div>
    </CommonContainer>
  );
}
