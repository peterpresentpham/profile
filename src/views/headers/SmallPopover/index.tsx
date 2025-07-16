import { twMerge } from '@peter-present/led-caro';
import Drawer from 'react-modern-drawer';
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { CloseIcon, LogoIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import ContactLine from '../ContactLine';
import PopoverCaro from './PopoverCaro';

interface Props {
  open: boolean;
  onClose?: () => void;
  onScrollClick: (id: string) => void;
  className?: string;
}

export default function SmallPopover({ open, onClose, onScrollClick, className }: Props) {
  function onScroll(id: string) {
    if (onClose) onClose();
    onScrollClick(id);
  }

  return (
    <Drawer
      className={twMerge('bg-black-50 h-screen w-screen transition-all duration-500', className)}
      open={open}
      onClose={onClose}
      direction="right"
      lockBackgroundScroll={true}
    >
      <div className="shadow-md">
        <CommonContainer className="relative flex h-[60px] items-center justify-between sm:justify-end">
          <div
            className="flex items-center gap-x-2 sm:hidden"
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <LogoIcon />
            <p className="font-bold text-white">{MY_NAME}</p>
          </div>
          <CloseIcon width={18} height={18} onClick={onClose} />
          <ContactLine className="absolute top-[60px] right-[12px] h-[140px]" />
        </CommonContainer>
      </div>
      <CommonContainer className="bg-black-50 mx-auto mt-[1rem] flex h-[calc(100%-100px)] flex-col justify-between px-[1rem]">
        <div>
          {HeaderConfig.map((item) => {
            return (
              <HeaderItem
                key={item.id}
                title={item.title}
                className="mt-[1rem] cursor-pointer"
                onClick={() => onScroll(item.id)}
              />
            );
          })}
        </div>
        <div className="mt-[1rem] flex justify-center">
          <PopoverCaro />
        </div>
      </CommonContainer>
    </Drawer>
  );
}
