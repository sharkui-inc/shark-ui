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

const DrawerSides = () => (
  <Drawer swipeDirection="start">
    <DrawerTrigger asChild>
      <Button variant="secondary">Open Left Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
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

export default DrawerSides;
