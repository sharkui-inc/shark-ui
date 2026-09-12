"use client";

import { useState } from "react";
import {
  PlanItem,
  PlanItemContent,
  PlanItemDetail,
  PlanItemDetailFile,
  PlanItemTrigger,
} from "@/registry/react/components/plan";

const Example = () => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <PlanItem
        collapsible
        onOpenChange={handleOpenChange}
        open={open}
        status="completed"
      >
        <PlanItemTrigger title="Archive resolved support conversations" />
        <PlanItemContent>
          <PlanItemDetail>
            Archived 42 conversations and saved the export to
            <PlanItemDetailFile>exports/support-archive.csv</PlanItemDetailFile>
          </PlanItemDetail>
        </PlanItemContent>
      </PlanItem>
      <p className="text-muted-foreground text-sm">
        Plan item: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
