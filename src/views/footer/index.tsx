import CommonContainer from 'src/components/box/CommonContainer';
import { LogoIcon } from 'src/components/icons';
import { ContactConfig, MY_NAME } from 'src/configs/constance';

export default function Footer() {
  return (
    <div className="border-t-[1px] border-t-gray-50 h-[150px]">
      <CommonContainer className="h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-x-2">
              <LogoIcon />
              <p className="text-white font-bold">{MY_NAME}</p>
            </div>
            <p className="text-base text-white">Fullstack developer</p>
          </div>
          <div>
            <p className="text-[24px] text-white text-medium">Media</p>
            <div className="flex items-center gap-x-4">
              {ContactConfig.map((item) => {
                const Icon = item.icon;

                return <Icon key={item.id} className="w-[24px] h-[24px]" />;
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
