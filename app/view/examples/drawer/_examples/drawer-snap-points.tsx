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

const DrawerSnapPoints = () => (
  <Drawer defaultSnapPoint={0.5} snapPoints={[0.25, 0.5, 1]}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open Snap Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Snap points</DrawerTitle>
        <DrawerDescription>
          Drag the drawer to snap between a compact peek and a near full-height
          view.
        </DrawerDescription>
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

export default DrawerSnapPoints;
