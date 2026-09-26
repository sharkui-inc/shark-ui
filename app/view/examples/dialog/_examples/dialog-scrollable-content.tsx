import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const paragraphs = Array.from({ length: 10 }, (_, index) => index + 1);

const DialogScrollableContent = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Scrollable Content</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Scrollable Content</DialogTitle>
        <DialogDescription>
          This is a dialog with scrollable content.
        </DialogDescription>
      </DialogHeader>
      <div className="max-h-[50vh] overflow-y-auto px-6">
        {paragraphs.map((paragraph) => (
          <p className="mb-4 leading-normal" key={paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

export default DialogScrollableContent;
