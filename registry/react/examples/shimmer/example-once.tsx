"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const [key, setKey] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <p
        className="shimmer shimmer-duration-1100 shimmer-once text-muted-foreground text-sm"
        key={key}
      >
        Generating response&hellip;
      </p>
      <Button
        onClick={() => setKey((current) => current + 1)}
        size="sm"
        variant="outline"
      >
        Replay
      </Button>
    </div>
  );
};

export default Example;
