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
    <div className="flex items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Controlled
      </Button>

      <Drawer onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Uncontrolled</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader
            description="The open state is managed with open and onOpenChange."
            title="Controlled drawer"
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
