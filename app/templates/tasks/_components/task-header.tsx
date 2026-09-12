"use client";

import { PlusIcon } from "lucide-react";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";

export const TaskHeader = () => (
  <header className="flex min-h-14 shrink-0 items-center gap-3 border-b bg-muted/24 px-4 py-3 sm:min-h-16 sm:px-6">
    <div className="flex min-w-0 items-center gap-2.5">
      <h1 className="truncate font-heading font-semibold text-lg tracking-[-0.02em] sm:text-xl">
        Product work
      </h1>
      <Badge pill size="sm" variant="secondary">
        Sprint 24
      </Badge>
    </div>
    <Button className="ms-auto">
      <PlusIcon aria-hidden="true" />
      New task
    </Button>
  </header>
);
