import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const DrawerSwipeHandle = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="secondary">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer</DrawerTitle>
        <DrawerDescription>Drawer with a swipe handle.</DrawerDescription>
      </DrawerHeader>
      <div className="flex-1 p-4">
        <div className="bg-muted h-64 w-full rounded-2xl" />
      </div>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default DrawerSwipeHandle;
