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
    <DrawerContent>
      <DrawerHeader title="No drag area" />
      <DrawerBody className="text-start text-sm">
        <div className="mx-auto flex w-full max-w-xs flex-col gap-4">
          <p className="text-muted-foreground">
            Drag the header or the grabber. This paragraph still starts a drag.
          </p>
          <p
            className="rounded-lg border bg-muted p-4 text-foreground"
            data-no-drag
          >
            Dragging cannot start in this area.
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
