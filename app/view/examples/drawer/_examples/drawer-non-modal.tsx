import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const DrawerNonModal = () => (
  <Drawer modal={false} swipeDirection="end">
    <DrawerTrigger asChild>
      <Button variant="outline">Non Modal</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Non Modal Drawer</DrawerTitle>
      </DrawerHeader>
      <div className="flex-1 p-4">
        <div className="h-64 w-full rounded-2xl bg-muted" />
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default DrawerNonModal;
