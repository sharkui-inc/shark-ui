"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const Example = () => {
  const finalRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button ref={finalRef} variant="outline">
        Return here
      </Button>
      <Dialog finalFocusEl={() => finalRef.current}>
        <DialogTrigger asChild>
          <Button variant="outline">Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader
            description="Closing returns focus to Return here."
            title="Final focus"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Example;
