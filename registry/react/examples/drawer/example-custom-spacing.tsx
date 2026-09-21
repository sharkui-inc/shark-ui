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
    <DrawerContent className="[--space:--spacing(10)]">
      <DrawerHeader
        description="Tighter edge bleed and roomier padding than the defaults."
        title="Custom spacing"
      />
      <DrawerBody>
        <div className="mx-auto w-full max-w-xs rounded-lg border bg-muted px-3 py-3 text-sm">
          The gap around this block comes from the spacing variable.
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
