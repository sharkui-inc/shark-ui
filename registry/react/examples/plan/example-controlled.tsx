"use client";

import { useState } from "react";
import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
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
      <Plan onOpenChange={handleOpenChange} open={open} status="in-progress">
        <PlanHeader title="Add email validation" />
        <PlanContent>
          <PlanItem collapsible status="completed">
            <PlanItemTrigger title="Read current validator" />
            <PlanItemContent>
              <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
            </PlanItemContent>
          </PlanItem>
          <PlanItem collapsible status="in-progress">
            <PlanItemTrigger title="Patch isValidEmail" />
            <PlanItemContent>
              <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
              <PlanItemDetailFile>src/app.tsx</PlanItemDetailFile>
            </PlanItemContent>
          </PlanItem>
          <PlanItem status="pending">
            <PlanItemTrigger title="Run unit tests" />
          </PlanItem>
        </PlanContent>
      </Plan>
      <p className="text-muted-foreground text-sm">
        Plan: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
