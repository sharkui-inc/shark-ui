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
  <Drawer modal={false}>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="This drawer allows interaction with elements outside. Focus trapping and scroll prevention are disabled."
        title="Non-Modal Drawer"
      />
      <DrawerBody>
        <p className="text-muted-foreground text-sm">
          Set <code className="text-foreground">modal</code> to{" "}
          <code className="text-foreground">false</code> on the drawer root to
          interact with the page behind it while the drawer is open.
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
