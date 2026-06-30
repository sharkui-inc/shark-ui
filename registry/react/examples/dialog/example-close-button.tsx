import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>

    <DialogContent showCloseButton>
      <DialogHeader
        description="Use the close button in the top right corner, press Escape, or click the backdrop to dismiss."
        title="Close button"
      />
    </DialogContent>
  </Dialog>
);

export default Example;
