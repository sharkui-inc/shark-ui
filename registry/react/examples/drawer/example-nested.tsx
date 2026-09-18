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
      <Button variant="outline">Open first drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="Open the next step, then swipe it down slowly to see this drawer restore continuously."
        title="First step"
      />
      <DrawerBody>
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="w-full" variant="outline">
              Continue
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader
              description="This taller step makes the previous drawer resize smoothly. Swipe down to return."
              title="Second step"
            />
            <DrawerBody className="flex flex-col gap-3 text-start text-muted-foreground text-sm">
              <p>
                The first drawer stays visible behind this one and adjusts to
                this panel&apos;s height.
              </p>
              <p>
                Drag this drawer slowly to watch the first step restore with the
                same gesture progress.
              </p>
              <p>
                The background panel also regains its scale, position, color,
                and shadow together.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button className="w-full" variant="outline">
                  Back
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
