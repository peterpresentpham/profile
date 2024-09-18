import { DivProps, styleMerge } from '@peter-present/led-caro';
import CommonContainer from 'src/components/box/CommonContainer';
import { LogoIcon } from 'src/components/icons';
import { ContactConfig, MY_NAME } from 'src/configs/constance';

export default function Footer(props: DivProps) {
  return (
    <div {...styleMerge({ className: 'h-[150px] border-t-[1px] border-t-gray-50' }, props)}>
      <CommonContainer className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-x-2">
              <LogoIcon />
              <p className="font-bold text-white">{MY_NAME}</p>
            </div>
            <p className="text-base text-white">Fullstack developer</p>
          </div>
          <div>
            <p className="text-medium text-[24px] text-white">Media</p>
            <div className="flex items-center gap-x-4">
              {ContactConfig.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.id}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <Icon className="h-[25px] w-[25px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-base text-gray-50">© Copyright {new Date().getFullYear()}</p>
        </div>
      </CommonContainer>
    </div>
  );
}
