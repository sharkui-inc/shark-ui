"use client";

import { useState } from "react";
import {
  Plan,
  PlanAction,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
  PlanTrigger,
} from "@/registry/react/components/plan";

const Example = () => {
  const [open, setOpen] = useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Plan onOpenChange={handleOpenChange} open={open}>
        <PlanHeader title="Add email validation">
          <PlanAction>
            <PlanTrigger />
          </PlanAction>
        </PlanHeader>
        <PlanContent>
          <PlanItem status="completed">
            <PlanItemTrigger
              status="completed"
              title="Read current validator"
            />
            <PlanItemContent>
              <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
            </PlanItemContent>
          </PlanItem>
          <PlanItem status="in-progress">
            <PlanItemTrigger status="in-progress" title="Patch isValidEmail" />
            <PlanItemContent>
              <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
              <PlanItemDetailFile>src/app.tsx</PlanItemDetailFile>
            </PlanItemContent>
          </PlanItem>
          <PlanItem status="pending">
            <PlanItemTrigger status="pending" title="Run unit tests" />
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
