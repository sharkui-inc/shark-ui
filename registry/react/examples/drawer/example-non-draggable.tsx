import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent draggable={false}>
      <DrawerHeader
        description="Drag-to-dismiss is disabled on the content. Use the grabber to drag."
        title="Non-Draggable Drawer"
      />
      <DrawerBody>
        <p className="text-muted-foreground text-sm">
          Set <code className="text-foreground">draggable</code> to{" "}
          <code className="text-foreground">false</code> on{" "}
          <code className="text-foreground">DrawerContent</code> to disable
          drag-to-dismiss on the panel. The drawer can still be dragged by the
          grabber.
        </p>
      </DrawerBody>
      <DrawerFooter>
        <div className="mx-auto w-full max-w-xs">
          <DrawerClose asChild>
            <Button className="w-full" variant="outline">
              Close
            </Button>
          </DrawerClose>
        </div>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
