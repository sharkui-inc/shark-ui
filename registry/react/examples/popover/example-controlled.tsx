"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open controlled
      </Button>

      <Popover onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open uncontrolled</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <PopoverHeader
            description="The open state is managed with open and onOpenChange."
            title="Controlled popover"
          />
          <PopoverBody>
            <p className="text-muted-foreground text-sm">
              Use external buttons or the trigger to open and close this
              popover.
            </p>
          </PopoverBody>
          <PopoverFooter>
            <PopoverClose asChild>
              <Button variant="outline">Close</Button>
            </PopoverClose>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Example;
