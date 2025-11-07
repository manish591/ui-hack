import { useState } from 'react';
import { drawerData, type DrawerItem } from '@/constants';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/drawer';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [stack, setStack] = useState<DrawerItem[][]>([drawerData]);
  const currentLevel = stack.at(-1);

  const goNext = (item: DrawerItem) => {
    if (item.children) {
      setStack((prev) => [...prev, item.children!]);
    }
  };

  const goBack = () => {
    if (stack.length > 1) {
      setStack((prev) => prev.slice(0, -1));
    }
  };

  if (!currentLevel) {
    return null;
  }

  return (
    <div className="border mx-auto w-full flex items-center min-h-svh justify-center">
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bottom-20">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              className="relative overflow-hidden"
              animate={{
                height: currentLevel.length * 64,
              }}
            >
              <div className="flex items-center">
                {stack.length > 1 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="flex items-center gap-2 h-16"
                  >
                    <ChevronLeft size={18} />
                    <span>Back</span>
                  </button>
                )}
              </div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{
                  duration: 0.25,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute w-full"
              >
                {currentLevel.map((item) => (
                  <button
                    type="button"
                    key={item.title}
                    onClick={() => goNext(item)}
                    className="h-16 w-full flex items-center justify-between rounded-lg hover:bg-gray-100 text-left"
                  >
                    <span className="flex items-start gap-3">
                      {item.icon && <item.icon size={18} className="mt-1" />}
                      <div>
                        {item.title}
                        <p className="text-muted-foreground/70">
                          {item.description}
                        </p>
                      </div>
                    </span>
                    {item.children && <ChevronRight size={18} />}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </DrawerContent>
      </Drawer>
      {/* Bottom bar */}
      <div className="fixed bottom-0 h-16 flex items-center justify-center bg-card w-full z-30">
        <p>Bottom bar</p>
      </div>
    </div>
  );
}
