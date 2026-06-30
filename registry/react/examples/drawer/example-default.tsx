import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const DrawerDemo = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="Make changes to your account here. Swipe down to close."
        title="Edit Profile"
      />

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

export default DrawerDemo;
