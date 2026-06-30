import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>

    <DrawerContent showCloseButton>
      <DrawerHeader
        description="Use the close button in the top right corner, press Escape, or swipe down to dismiss."
        title="Close button"
      />
    </DrawerContent>
  </Drawer>
);

export default Example;
