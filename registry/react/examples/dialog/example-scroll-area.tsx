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

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>

    <DialogContent size="lg">
      <DialogHeader title="Terms & Conditions" />
      <DialogBody scrollFade>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 48 }, (_, i) => `box-${i}`).map((key) => (
            <div
              className="h-12 shrink-0 rounded-xl border bg-muted"
              key={key}
            />
          ))}
        </div>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="ghost">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>I Agree</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default Example;
