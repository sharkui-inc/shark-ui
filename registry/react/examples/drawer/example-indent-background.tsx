"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProvider,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative h-80 w-full max-w-lg",
        "bg-black",
        "rounded-xl border",
        "overflow-hidden",
        "transform-[translateZ(0)]"
      )}
      ref={containerRef}
    >
      <DrawerProvider className="flex h-full items-center justify-center">
        <Drawer modal={false}>
          <DrawerTrigger asChild>
            <Button variant="outline">Open</Button>
          </DrawerTrigger>
          <DrawerContent container={containerRef}>
            <DrawerHeader
              description="The page scales back and the background shows around it."
              title="Notifications"
            />
            <DrawerBody>
              <div className="mx-auto w-full max-w-xs">
                <p className="text-muted-foreground text-sm">
                  You are all caught up.
                </p>
              </div>
            </DrawerBody>
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
      </DrawerProvider>
    </div>
  );
};

export default Example;
