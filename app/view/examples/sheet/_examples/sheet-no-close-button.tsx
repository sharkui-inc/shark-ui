import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const SheetNoCloseButton = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent showCloseButton={false}>
      <SheetHeader>
        <SheetTitle>No Close Button</SheetTitle>
        <SheetDescription>
          This sheet doesn&apos;t have a close button in the top-right corner.
          Click outside to close.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

export default SheetNoCloseButton;
