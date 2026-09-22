"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Presence } from "@/registry/react/components/presence";

const statusClassName = cn(
  "inline-flex h-8 items-center rounded-lg border border-input bg-muted px-3",
  "font-mono text-muted-foreground text-xs"
);

const Example = () => {
  const [present, setPresent] = React.useState(true);
  const state = present ? "open" : "closed";

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <Button
          clickEffect={false}
          onClick={() => setPresent((value) => !value)}
          variant="outline"
        >
          Toggle
        </Button>
        <span className={statusClassName}>data-state=&quot;{state}&quot;</span>
      </div>
      <Presence asChild present={present} unmountOnExit={false}>
        <div
          className={cn(
            "w-full px-4 py-3",
            "bg-muted text-sm",
            "rounded-md border",
            "origin-top",
            "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
            "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
            "motion-reduce:animate-none"
          )}
        >
          <p className="text-foreground">{state}</p>
        </div>
      </Presence>
    </div>
  );
};

export default Example;
