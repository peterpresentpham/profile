import { AnimatePresence, motion } from 'motion/react';
import Sparkles from 'src/components/aceternity/sparkles';
import { HeaderItem } from 'src/components/CssHeading';
import { CloseIcon, LogoIcon } from 'src/components/icons';
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
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-1000000 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            role="dialog"
            aria-modal="true"
            className={cn(
              'bg-black-50 fixed top-0 right-0 z-1000001 h-screen w-screen shadow-xl',
              className
            )}
          >
            <div className="relative h-screen">
              <Sparkles />
              <div className="bg-black-50">
                <div className="relative container flex h-[60px] items-center justify-between md:justify-end">
                  <button
                    type="button"
                    aria-label="Scroll to top"
                    className="flex items-center gap-x-2 md:hidden"
                    onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
                  >
                    <LogoIcon />
                    <p className="font-bold">{MY_NAME}</p>
                  </button>
                  <button type="button" aria-label="Close menu" onClick={onClose}>
                    <CloseIcon width={18} height={18} className="cursor-pointer" />
                  </button>
                  <ContactLine className="absolute top-[60px] right-3 z-50 h-[140px]" />
                </div>
              </div>
              <div className="bg-black-50 container mx-auto flex h-[calc(100%-60px)] flex-col justify-between px-4">
                <div>
                  {HeaderConfig.map((item) => {
                    return (
                      <HeaderItem
                        key={item.id}
                        title={item.title}
                        className="relative mt-4 cursor-pointer"
                        onClick={() => onScroll(item.id)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
