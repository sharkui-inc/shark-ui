import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerSwipeArea,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer>
    <DrawerSwipeArea />
    <DrawerContent>
      <DrawerHeader
        description="Swipe up from the bottom edge of the preview to open this drawer."
        title="Edge swipe"
      />
      <DrawerBody>
        <Button className="w-full" variant="outline">
          Action
        </Button>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
