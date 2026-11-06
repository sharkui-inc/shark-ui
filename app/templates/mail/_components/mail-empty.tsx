"use client";

import { InboxIcon, PenLineIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

interface MailEmptyProps {
  onCompose: () => void;
}

export const MailEmpty = (props: MailEmptyProps) => {
  const { onCompose } = props;

  return (
    <State className="bg-muted/16 border-0">
      <StateHeader>
        <StateMedia variant="icon">
          <InboxIcon aria-hidden="true" />
        </StateMedia>
        <StateTitle asChild>
          <h2>No email selected</h2>
        </StateTitle>
        <StateDescription>
          Select a message from the list to read it here.
        </StateDescription>
      </StateHeader>
      <StateContent>
        <Button onClick={onCompose} size="sm" variant="outline">
          <PenLineIcon aria-hidden="true" />
          New message
        </Button>
      </StateContent>
    </State>
  );
};
