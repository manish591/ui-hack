import { Drawer, DrawerContent, DrawerTrigger } from '@/components/drawer';

export default function App() {
  return (
    <div className="border mx-auto w-full flex items-center min-h-svh justify-center">
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent className="bottom-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            tempore doloribus quas iste dolores doloremque? Temporibus, adipisci
            animi illum cum dolores, eligendi et, explicabo quibusdam laudantium
            porro excepturi provident sapiente.
          </p>
        </DrawerContent>
      </Drawer>
      {/* Bottom bar */}
      <div className="fixed bottom-0 h-16 flex items-center justify-center bg-card w-full z-30">
        <p>Bottom bar</p>
      </div>
    </div>
  );
}
