"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import { SignaturePad } from "@/registry/react/components/signature-pad";

const Example = () => {
  const [paths, setPaths] = React.useState<string[]>([]);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <SignaturePad
        className="w-full"
        onDraw={({ paths: nextPaths }) => setPaths(nextPaths)}
        paths={paths}
      />
      <div className="flex items-center justify-between gap-2">
        <p className="text-muted-foreground text-sm">
          {paths.length} path{paths.length === 1 ? "" : "s"}
        </p>
        <Button
          disabled={paths.length === 0}
          onClick={() => setPaths([])}
          size="sm"
          variant="outline"
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Example;
