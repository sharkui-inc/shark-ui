"use client";

import React from "react";
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

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Controlled
      </Button>

      <Dialog onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <DialogTrigger asChild>
          <Button variant="outline">Open Uncontrolled</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader
            description="The open state is managed with open and onOpenChange."
            title="Controlled dialog"
          />
          <DialogBody>
            <p className="text-muted-foreground text-sm">
              Use external buttons or the trigger to open and close this dialog.
            </p>
          </DialogBody>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Example;
