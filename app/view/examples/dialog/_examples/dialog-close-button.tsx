import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const DialogCloseButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Share</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Share link</DialogTitle>
        <DialogDescription>
          Anyone who has this link will be able to view this.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center gap-2 px-6">
        <div className="grid flex-1 gap-2">
          <FieldLabel className="sr-only" htmlFor="dialog-share-link">
            Link
          </FieldLabel>
          <Input
            defaultValue="https://ui.shadcn.com/docs/installation"
            id="dialog-share-link"
            readOnly
          />
        </div>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DialogCloseButton;
