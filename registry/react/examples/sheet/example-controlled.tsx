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
} from "@/registry/react/components/sheet";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open
      </Button>

      <Sheet onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <SheetContent>
          <SheetHeader
            description="The open state is managed with open and onOpenChange."
            title="Controlled sheet"
          />
          <SheetBody>
            <p className="text-muted-foreground text-sm">
              Use the external button or the close button to control this sheet.
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
