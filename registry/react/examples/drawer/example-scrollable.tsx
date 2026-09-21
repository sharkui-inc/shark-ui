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
    <DrawerContent>
      <DrawerHeader title="Terms & Conditions" />
      <DrawerBody>
        <div className="mx-auto flex w-full max-w-xs flex-col gap-2">
          {Array.from({ length: 48 }, (_, index) => `box-${index}`).map(
            (key) => (
              <div
                className="h-12 shrink-0 rounded-xl border bg-muted"
                key={key}
              />
            )
          )}
        </div>
      </DrawerBody>
      <DrawerFooter>
        <div className="mx-auto flex w-full max-w-xs flex-col-reverse gap-2">
          <DrawerClose asChild>
            <Button className="w-full" variant="ghost">
              Cancel
            </Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button className="w-full">I Agree</Button>
          </DrawerClose>
        </div>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
