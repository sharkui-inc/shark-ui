import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const DialogNoCloseButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">No Close Button</Button>
    </DialogTrigger>
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>No Close Button</DialogTitle>
        <DialogDescription>
          This dialog doesn&apos;t have a close button in the top-right corner.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default DialogNoCloseButton;
