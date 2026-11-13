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
    <DrawerContent variant="inset">
      <DrawerHeader
        description="On larger screens, the drawer appears with rounded corners and padding."
        title="Inset drawer"
      />
      <DrawerBody>
        <div className="mx-auto w-full max-w-xs">
          <p className="text-muted-foreground text-sm">
            The sheet floats inside the screen instead of meeting the edges.
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
