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
        <div className="mx-auto w-full max-w-xs">
          <p className="text-muted-foreground text-sm">
            Dragging this panel does nothing. Use the grabber to move it.
          </p>
        </div>
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
