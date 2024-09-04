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
      className={twMerge('h-screen w-screen transition-all duration-500 bg-black-50', className)}
      open={open}
      onClose={onClose}
      direction="right"
      lockBackgroundScroll={true}
    >
      <div className="shadow-md">
        <CommonContainer className="flex items-center justify-between sm:justify-end h-[60px] relative">
          <div
            className="flex sm:hidden items-center gap-x-2"
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <LogoIcon />
            <p className="text-white font-bold">{MY_NAME}</p>
          </div>
          <CloseIcon width={18} height={18} onClick={onClose} />
          <ContactLine className="absolute right-[12px] top-[60px] h-[140px]" />
        </CommonContainer>
      </div>
      <CommonContainer className="mt-[1rem] bg-black-50 mx-auto px-[1rem]">
        {HeaderConfig.map((item) => {
          return (
            <HeaderItem
              key={item.id}
              title={item.title}
              className="cursor-pointer mt-[1rem]"
              onClick={() => onScroll(item.id)}
            />
          );
        })}
        <div className="flex justify-center mt-[1rem]">
          <PopoverCaro />
        </div>
      </CommonContainer>
    </Drawer>
  );
}
