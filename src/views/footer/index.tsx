import { DivProps, styleMerge } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import { LogoIcon } from 'src/components/icons';
import { ContactConfig, MY_NAME } from 'src/configs/constance';

export default function Footer(props: DivProps) {
  const dt = new Date();
  const date = `${dt.getDate()} ${dt.toLocaleString('default', { month: 'short' })} ${dt.getFullYear()}`;

  return (
    <div {...styleMerge({ className: 'h-[150px] border-t-[1px] border-t-gray-50' }, props)}>
      <CommonContainer className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-center justify-between gap-3 xs:flex-row">
          <div className="flex w-full flex-row justify-between xs:w-auto xs:flex-col">
            <div className="flex items-center gap-x-2">
              <LogoIcon />
              <p className="text-[18px] font-bold text-white">{MY_NAME}</p>
            </div>
            <p className="text-base text-white">Fullstack developer</p>
          </div>
          <div className="flex w-full flex-row justify-between xs:w-auto xs:flex-col">
            <p className="text-bold text-[18px] text-white">Media</p>
            <div className="flex items-center gap-x-4">
              {ContactConfig.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon cursor-pointer"
                  >
                    <Icon className="h-[25px] w-[25px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-base text-gray-50">Hi, welcome in!</p>
          <p className="text-base text-gray-50">© Copyright {date}</p>
        </div>
      </CommonContainer>
    </div>
  );
}
