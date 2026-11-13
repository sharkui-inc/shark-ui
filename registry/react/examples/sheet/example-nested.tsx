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
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader
        description="View and manage a user in your team."
        title="Manage team member"
      />

      <SheetBody className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-muted-foreground text-sm">Name</p>
          <p className="text-sm font-medium">Vinicius Vicentini</p>
        </div>
        <div className="grid gap-1">
          <p className="text-muted-foreground text-sm">Email</p>
          <p className="text-sm font-medium">vinihvc@example.com</p>
        </div>
      </SheetBody>

      <SheetFooter>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Edit details</Button>
          </SheetTrigger>
          <SheetContent showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>Edit details</SheetTitle>
              <SheetDescription>
                Make changes to the member&apos;s information.
              </SheetDescription>
            </SheetHeader>
            <SheetBody>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Vinicius Vicentini" />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input defaultValue="vinihvc@example.com" />
                </Field>
              </FieldGroup>
            </SheetBody>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="ghost">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
