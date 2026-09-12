"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Swap } from "@/registry/react/components/swap";

const SwapDemo = () => {
  const [swap, setSwap] = React.useState(false);

  return (
    <Button
      aria-label="Toggle dark mode"
      onClick={() => setSwap((value) => !value)}
      size="icon-lg"
      variant="outline"
    >
      <Swap
        off={<SunIcon aria-hidden="true" className="size-4" />}
        on={<MoonIcon aria-hidden="true" className="size-4" />}
        swap={swap}
      />
    </Button>
  );
};

export default SwapDemo;
