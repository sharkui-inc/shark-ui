"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Controlled
      </Button>

      <Sheet onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <SheetTrigger asChild>
          <Button variant="outline">Open Uncontrolled</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader
            description="The open state is managed with open and onOpenChange."
            title="Controlled sheet"
          />
          <SheetBody>
            <p className="text-muted-foreground text-sm">
              Use external buttons or the trigger to open and close this sheet.
            </p>
          </SheetBody>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Example;
