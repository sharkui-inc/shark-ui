import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer defaultSnapPoint={0.5} snapPoints={[0.25, 0.5, 1]}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent showCloseButton>
      <DrawerHeader
        description="Drag to 25%, 50%, or 100% height. Swipe down to close."
        title="Snap Points"
      />
      <DrawerBody className="flex flex-col gap-2 text-muted-foreground text-sm">
        <p>
          This drawer has multiple snap points at 25%, 50%, and 100% of the
          viewport height.
        </p>
        <p>
          Drag the grabber to snap between different heights, or swipe to
          dismiss.
        </p>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
