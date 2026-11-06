"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-64 flex-col gap-2">
      <Collapsible
        onOpenChange={({ open: nextOpen }) => setOpen(nextOpen)}
        open={open}
      >
        <CollapsibleTrigger asChild>
          <Button className="w-full" clickEffect={false} variant="outline">
            {open ? "Collapse" : "Expand"}
            <CollapsibleIndicator />
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="p-2">
          <p className="text-muted-foreground text-sm">
            This collapsible is controlled. The state is managed externally.
          </p>
        </CollapsibleContent>
      </Collapsible>

      <p className="text-muted-foreground text-center text-sm">
        {open ? "✅" : "❌"}
      </p>
    </div>
  );
};

export default Example;
