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
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

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
      <DrawerBody className="text-start">
        <div className="mx-auto w-full max-w-xs">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input placeholder="Onda" />
          </Field>
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

export default DrawerDemo;
