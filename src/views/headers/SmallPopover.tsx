import { twMerge } from '@peter-present/led-caro';
import Drawer from 'react-modern-drawer';
import { HeaderItem } from 'src/components/CssHeading';
import { CloseIcon, LogoIcon } from 'src/components/icons';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';

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
      className={twMerge(
        'h-full sm:w-[430px] w-full transition-all duration-500 bg-black-50',
        className
      )}
      open={open}
      onClose={onClose}
      direction="right"
      lockBackgroundScroll={true}
    >
      <div className="h-[60px] shadow-md flex items-center justify-between sm:justify-end bg-black-50">
        <div
          className="flex sm:hidden items-center gap-x-2"
          onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
          <LogoIcon />
          <p className="text-white font-bold">{MY_NAME}</p>
        </div>
        <CloseIcon width={18} height={18} onClick={onClose} />
      </div>
      <div className="mt-[1rem] bg-black-50">
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
      </div>
    </Drawer>
  );
}
