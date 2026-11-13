"use client";

import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";

interface TaskHeaderProps {
  onNewTask: () => void;
}

export const TaskHeader = (props: TaskHeaderProps) => {
  const { onNewTask } = props;

  return (
    <header className="bg-muted/24 flex min-h-14 shrink-0 items-center gap-3 border-b px-4 py-3 sm:min-h-16 sm:px-6">
      <div className="flex min-w-0 items-center gap-2.5">
        <h1 className="font-heading truncate text-lg font-semibold tracking-[-0.02em] sm:text-xl">
          Product work
        </h1>
      </div>
      <Button className="ms-auto" onClick={onNewTask}>
        <PlusIcon aria-hidden="true" />
        New task
      </Button>
    </header>
  );
};
