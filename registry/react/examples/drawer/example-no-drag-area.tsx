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
      <DrawerHeader title="Drawer Title" />
      <DrawerBody className="flex flex-col gap-4 text-start text-sm">
        <p className="text-muted-foreground">
          Drag from the header or grabber to move the drawer. This paragraph is
          outside the no-drag area.
        </p>
        <p
          className="rounded-lg border bg-muted/48 p-4 text-foreground"
          data-no-drag
        >
          This is the no-drag area of the drawer. Dragging cannot start here.
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
