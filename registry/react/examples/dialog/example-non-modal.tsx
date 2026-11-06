import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Dialog modal={false}>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader description="Choose a new name." title="Rename" />
      <DialogBody>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input defaultValue="notes.md" />
        </Field>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Save</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
