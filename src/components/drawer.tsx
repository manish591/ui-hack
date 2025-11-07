import { AnimatePresence, motion } from 'motion/react';
import { createContext, useContext, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

export type DrawerContextState = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

export const DrawerContext = createContext<DrawerContextState | null>(null);

export function useDrawerContext() {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('Component must be wrapped in drawer context');
  }

  return context;
}

export function Drawer({
  className,
  children,
}: Readonly<React.ComponentProps<'div'>>) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen],
  );

  return (
    <DrawerContext.Provider value={value}>
      <div className={cn('', className)}>{children}</div>
    </DrawerContext.Provider>
  );
}

export function DrawerTrigger({
  className,
  children,
}: Readonly<React.ComponentProps<'button'>>) {
  const { setIsOpen } = useDrawerContext();

  return (
    <button
      type="button"
      className={cn(
        'bg-primary h-10 px-6 text-lg rounded-md cursor-pointer text-white',
        className,
      )}
      onClick={() => {
        setIsOpen(true);
      }}
    >
      {children}
    </button>
  );
}

export function DrawerContent({
  className,
  children,
}: Readonly<React.ComponentProps<'div'>>) {
  const { isOpen, setIsOpen } = useDrawerContext();

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className={cn(
              'fixed bottom-0 left-0 right-0 w-[93%] mx-auto bg-card rounded-2xl px-6 pt-2 pb-6 z-10',
              className,
            )}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              duration: 0.3,
              ease: [0.79, 0.14, 0.15, 0.86],
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120) setIsOpen(false);
            }}
          >
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-4" />
            {children}
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
