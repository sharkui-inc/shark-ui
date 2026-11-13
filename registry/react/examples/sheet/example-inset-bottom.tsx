import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
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
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent className="max-h-[50vh]" placement="bottom" variant="inset">
      <SheetHeader
        description="Inset sheet sliding in from the bottom."
        title="Inset Bottom"
      />
      <SheetBody>
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input defaultValue="Vinicius Vicentini" />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input defaultValue="vinicius@example.com" />
          </Field>
        </FieldGroup>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button>Save changes</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
