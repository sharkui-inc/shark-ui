"use client";

import React from "react";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => {
  const [open, setOpen] = React.useState(true);

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Reasoning duration={8} onOpenChange={handleOpenChange} open={open}>
        <ReasoningTrigger />
        <ReasoningContent>
          Orders stall in `pending` because the payment webhook can arrive
          before the row is committed. I should make `handlePaymentEvent`
          idempotent and upsert by `payment_intent_id`.
        </ReasoningContent>
      </Reasoning>
      <p className="text-muted-foreground text-sm">
        Reasoning: {open ? "open" : "closed"}
      </p>
    </div>
  );
};

export default Example;
