"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Swap, SwapIndicator } from "@/registry/react/components/swap";

const Example = () => {
  const [swap, setSwap] = React.useState(false);

  return (
    <Button
      aria-label="Toggle dark mode"
      onClick={() => setSwap((value) => !value)}
      size="icon-lg"
      variant="outline"
    >
      <Swap swap={swap}>
        <SwapIndicator asChild type="on">
          <span className="text-primary">
            <MoonIcon aria-hidden="true" className="size-4" />
          </span>
        </SwapIndicator>
        <SwapIndicator asChild type="off">
          <span className="text-muted-foreground">
            <SunIcon aria-hidden="true" className="size-4" />
          </span>
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default Example;
