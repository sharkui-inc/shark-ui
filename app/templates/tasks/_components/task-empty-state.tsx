"use client";

import { ClipboardListIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

export const TaskEmptyState = ({
  hasFilters,
  onClearFilters,
  onCreate,
}: {
  hasFilters: boolean;
  onClearFilters: () => void;
  onCreate: () => void;
}) => (
  <State className="min-h-88 border bg-muted/12 px-6 py-12 shadow-xs/5">
    <StateHeader>
      <StateMedia variant="icon">
        <ClipboardListIcon aria-hidden="true" />
      </StateMedia>
      <StateTitle asChild>
        <h2>
          {hasFilters ? "No tasks match this view" : "Your sprint is clear"}
        </h2>
      </StateTitle>
      <StateDescription>
        {hasFilters
          ? "Try adjusting the filters, or create a task that belongs in this view."
          : "Create the first task to turn this sprint into a focused plan."}
      </StateDescription>
    </StateHeader>
    <StateContent className="!flex-row flex-wrap justify-center">
      {hasFilters ? (
        <Button onClick={onClearFilters} size="sm" variant="outline">
          Reset filters
        </Button>
      ) : null}
      <Button onClick={onCreate} size="sm">
        Create task
      </Button>
    </StateContent>
  </State>
);
