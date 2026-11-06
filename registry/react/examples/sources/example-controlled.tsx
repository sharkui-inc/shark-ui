"use client";

import React from "react";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";

const Example = () => {
  const [open, setOpen] = React.useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Sources onOpenChange={handleOpenChange} open={open}>
        <SourcesTrigger count={2} />
        <SourcesContent>
          <Source href="#" title="React Documentation" />
          <Source href="#" title="Ark UI" />
        </SourcesContent>
      </Sources>
      <p className="text-muted-foreground text-sm">
        Sources: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
