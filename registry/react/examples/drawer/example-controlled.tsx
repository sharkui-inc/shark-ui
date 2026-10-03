"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <p className="text-muted-foreground text-sm">
        {open ? "Open" : "Closed"}
      </p>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open from state
      </Button>
      <Drawer onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open from trigger</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader
            description="Both buttons write the same open state."
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
