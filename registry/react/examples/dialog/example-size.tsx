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

const DialogSizeDemo = () => (
  <div className="grid grid-cols-5 gap-2">
    {sizes.map((size) => (
      <Dialog key={size}>
        <DialogTrigger asChild>
          <Button variant="outline">{size}</Button>
        </DialogTrigger>

        <DialogContent size={size}>
          <DialogHeader
            description={`This dialog uses the ${size} size variant.`}
            title={`Size: ${size}`}
          />
          <DialogBody>
            <p className="text-muted-foreground text-sm">
              Resize the viewport or open other sizes to compare panel widths.
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ))}
  </div>
);

const sizes = [
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "fullscreen",
] as const;

export default DialogSizeDemo;
