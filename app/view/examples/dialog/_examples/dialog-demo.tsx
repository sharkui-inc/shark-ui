import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const DialogDemo = () => (
  <Dialog>
    <form>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="dialog-demo-name">Name</FieldLabel>
              <Input
                defaultValue="Pedro Duarte"
                id="dialog-demo-name"
                name="name"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="dialog-demo-username">Username</FieldLabel>
              <Input
                defaultValue="@peduarte"
                id="dialog-demo-username"
                name="username"
              />
            </Field>
          </FieldGroup>
        </DialogBody>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
);

export default DialogDemo;
