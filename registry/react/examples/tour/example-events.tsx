"use client";

import { ArrowRightIcon, CircleCheckIcon, PlayIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourActions,
  TourContent,
  TourDescription,
  TourHeader,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
  useTour,
} from "@/registry/react/components/tour";

const Example = () => {
  const [logs, setLogs] = React.useState<{ id: string; message: string }[]>([]);

  const addLog = (message: string) => {
    setLogs((current) => [...current, { id: crypto.randomUUID(), message }]);
  };

  const tour = useTour({
    onStatusChange: (details) => addLog(`Status: ${details.status}`),
    onStepChange: (details) =>
      addLog(`Step changed: ${details.stepId ?? "unknown"}`),
    steps,
  });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <div className="flex flex-col gap-2">
          <div
            className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm shadow-xs/4"
            id="tour-events-started"
          >
            <PlayIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
            Started
          </div>
          <div
            className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm shadow-xs/4"
            id="tour-events-advanced"
          >
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground rtl:rotate-180"
            />
            Advanced
          </div>
          <div
            className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 text-sm shadow-xs/4"
            id="tour-events-finished"
          >
            <CircleCheckIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
            Finished
          </div>
        </div>

        <div className="flex h-28 flex-col gap-1 overflow-y-auto rounded-lg border bg-muted p-3 font-mono text-muted-foreground text-xs">
          <span className="font-medium font-sans text-foreground text-sm">
            Event log
          </span>
          {logs.length === 0 ? (
            <span>Start the tour to record step and status changes.</span>
          ) : (
            logs.map((log) => <span key={log.id}>{log.message}</span>)
          )}
        </div>

        <TourContent>
          <TourHeader>
            <TourProgressText />
            <TourTitle />
            <TourDescription />
          </TourHeader>
          <TourActions />
        </TourContent>
      </Tour>
    </div>
  );
};

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "Opening the tour logs the first events.",
    id: "started",
    target: () => document.querySelector<HTMLElement>("#tour-events-started"),
    title: "Started",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "This step logs another step change.",
    id: "advanced",
    target: () => document.querySelector<HTMLElement>("#tour-events-advanced"),
    title: "Advanced",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Finishing logs the status change.",
    id: "finished",
    target: () => document.querySelector<HTMLElement>("#tour-events-finished"),
    title: "Finished",
    type: "tooltip",
  },
];

export default Example;
