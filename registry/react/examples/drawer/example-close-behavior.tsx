import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Drawer closeOnInteractOutside={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">No close on outside click</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader
          description="Clicking outside does not close this drawer. Press ESC, swipe, or use the close control."
          title="Stays on outside click"
        />
        <DrawerBody>
          <div className="mx-auto w-full max-w-xs">
            <p className="text-muted-foreground text-sm">
              Interact outside is disabled for this drawer.
            </p>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    <Drawer closeOnEscape={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">No close on Escape</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader
          description="Pressing Escape does not close this drawer. Click outside, swipe, or use the close control."
          title="Escape disabled"
        />
        <DrawerBody>
          <div className="mx-auto w-full max-w-xs">
            <p className="text-muted-foreground text-sm">
              Escape is disabled for this drawer.
            </p>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </div>
);

export default Example;
