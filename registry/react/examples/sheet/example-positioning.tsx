import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Right</Button>
      </SheetTrigger>
      <SheetContent placement="right">
        <SheetHeader title="Right Positioning Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the right.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Left</Button>
      </SheetTrigger>
      <SheetContent placement="left">
        <SheetHeader title="Left Positioning Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the left.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Top</Button>
      </SheetTrigger>
      <SheetContent placement="top">
        <SheetHeader title="Top Positioning Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the top.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </SheetTrigger>
      <SheetContent placement="bottom">
        <SheetHeader title="Bottom Positioning Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the bottom.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>
  </div>
);

export default Example;
