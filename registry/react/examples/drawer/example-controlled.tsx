"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/registry/react/components/drawer";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <p className="text-muted-foreground text-sm">
        {open ? "Open" : "Closed"}
      </p>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open
      </Button>
      <Drawer onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <DrawerContent>
          <DrawerHeader
            description="The open state is managed with open and onOpenChange."
            title="Controlled"
          />
          <DrawerFooter>
            <div className="mx-auto w-full max-w-xs">
              <DrawerClose asChild>
                <Button className="w-full" variant="outline">
                  Close
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Example;
