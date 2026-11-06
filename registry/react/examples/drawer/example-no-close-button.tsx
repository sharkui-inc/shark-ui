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

    <DrawerContent showCloseButton={false}>
      <DrawerHeader
        description="There is no corner button. Use the footer, Escape, or a downward swipe."
        title="No close button"
      />
      <DrawerBody>
        <div className="mx-auto w-full max-w-xs">
          <p className="text-muted-foreground text-sm">
            The corner stays empty. Close lives in the footer.
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
