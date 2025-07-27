import Drawer from 'react-modern-drawer';
import CommonContainer from 'src/components/box/CommonContainer';
import { HeaderItem } from 'src/components/CssHeading';
import { CloseIcon, LogoIcon } from 'src/components/icons';
import Sparkles from 'src/components/aceternity/sparkles';
import { HeaderConfig, MY_NAME } from 'src/configs/constance';
import { cn } from 'src/utils';
import ContactLine from '../ContactLine';

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
      className={cn('h-screen w-screen transition-all duration-500', className)}
      open={open}
      onClose={onClose}
      direction="right"
      lockBackgroundScroll={true}
    >
      <div className="relative h-screen">
        <div className="bg-black-50">
          <CommonContainer className="relative flex h-[60px] items-center justify-between sm:justify-end">
            <div
              className="flex items-center gap-x-2 sm:hidden"
              onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
            >
              <LogoIcon />
              <p className="font-bold">{MY_NAME}</p>
            </div>
            <CloseIcon width={18} height={18} onClick={onClose} />
            <ContactLine className="absolute top-[60px] right-[12px] h-[140px]" />
          </CommonContainer>
        </div>
        <CommonContainer className="bg-black-50 mx-auto flex h-[calc(100%-60px)] flex-col justify-between px-[1rem]">
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
        </CommonContainer>
        <Sparkles />
      </div>
    </Drawer>
  );
}
