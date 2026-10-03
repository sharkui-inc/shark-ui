"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverAnchor,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "@/registry/react/components/popover";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
      <PopoverAnchor asChild>
        <Button onClick={() => setOpen(true)} variant="outline">
          Open controlled
        </Button>
      </PopoverAnchor>

      <PopoverContent className="min-w-80">
        <PopoverHeader
          description="The open state is managed with open and onOpenChange."
          title="Controlled popover"
        />
        <PopoverBody>
          <p className="text-muted-foreground text-sm">
            Use the external button or the close button to control this popover.
          </p>
        </PopoverBody>
        <PopoverFooter>
          <PopoverClose asChild>
            <Button variant="outline">Close</Button>
          </PopoverClose>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Example;
