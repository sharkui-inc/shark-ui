import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const DrawerNested = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="secondary">Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer</DrawerTitle>
        <DrawerDescription>
          Open another drawer from the same direction.
        </DrawerDescription>
      </DrawerHeader>
      <div className="flex-1 p-4">
        <div className="h-64 w-full rounded-2xl bg-muted" />
      </div>
      <DrawerFooter>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Nested Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Nested Drawer</DrawerTitle>
              <DrawerDescription>
                The parent drawer stays mounted behind this one.
              </DrawerDescription>
            </DrawerHeader>
            <div className="flex-1 p-4">
              <div className="h-64 w-full rounded-2xl bg-muted" />
            </div>
            <DrawerFooter>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Third Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Third Drawer</DrawerTitle>
                    <DrawerDescription>
                      Two drawers are stacked behind this one.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="flex-1 p-4">
                    <div className="h-64 w-full rounded-2xl bg-muted" />
                  </div>
                  <DrawerFooter>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline">Open Fourth Drawer</Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Fourth Drawer</DrawerTitle>
                          <DrawerDescription>
                            This is the frontmost drawer in the stack.
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="flex-1 p-4">
                          <div className="h-64 w-full rounded-2xl bg-muted" />
                        </div>
                        <DrawerFooter>
                          <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                    <DrawerClose asChild>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default DrawerNested;
