import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
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
        description="The corner button, Escape, and a downward swipe all dismiss it."
        title="Close button"
      />
      <DrawerBody>
        <div className="mx-auto w-full max-w-xs">
          <p className="text-muted-foreground text-sm">
            The close button stays in the top corner.
          </p>
        </div>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
