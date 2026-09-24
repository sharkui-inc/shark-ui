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
    <DrawerContent variant="default">
      <DrawerHeader
        description="This drawer uses the default variant, flush with the screen edge."
        title="Default drawer"
      />
      <DrawerBody>
        <div className="mx-auto w-full max-w-xs">
          <p className="text-muted-foreground text-sm">
            The panel meets the edges of the screen.
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
