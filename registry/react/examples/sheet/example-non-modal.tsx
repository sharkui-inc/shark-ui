import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <Sheet modal={false}>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader
        description="Shown next to your comments."
        title="Edit profile"
      />
      <SheetBody>
        <Field>
          <FieldLabel>Display name</FieldLabel>
          <Input defaultValue="Ada Lovelace" />
        </Field>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button>Save</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
