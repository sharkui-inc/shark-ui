import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>

    <SheetContent showCloseButton>
      <SheetHeader
        description="Use the close button in the top right corner, press Escape, or click the backdrop to dismiss."
        title="Close button"
      />
    </SheetContent>
  </Sheet>
);

export default Example;
