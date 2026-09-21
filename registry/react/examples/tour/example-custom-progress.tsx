"use client";

import { CircleCheckIcon, EyeIcon, FileTextIcon, SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourPreviousStep,
  type TourStepType,
  TourTitle,
  TourTrigger,
  useTour,
  useTourContext,
} from "@/registry/react/components/tour";

const Example = () => {
  const tour = useTour({ steps });

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <ReleaseGates />

        <TourContent>
          <TourHeader>
            <TourTitle />
            <TourDescription />
          </TourHeader>
          <TourFooter className="grid-cols-[minmax(0,1fr)_auto]">
            <TourProgressMeter />
            <div className="col-start-2 row-start-1 flex gap-2">
              <TourPreviousStep className="col-start-auto row-start-auto justify-self-auto" />
              <TourNextStep className="col-start-auto row-start-auto justify-self-auto" />
            </div>
          </TourFooter>
        </TourContent>
      </Tour>
    </div>
  );
};

const ReleaseGates = () => {
  const tour = useTourContext();
  const current = gates.findIndex((gate) => gate.id === tour.step?.id);
  const active = tour.open ? current : -1;

  return (
    <div className="flex w-full flex-col gap-1 rounded-lg border bg-card p-1">
      {gates.map((gate, index) => {
        const Icon = gate.icon;
        const isCurrent = index === active;
        const isComplete = index < active;

        return (
          <div
            className={cn(
              "flex items-center gap-3 rounded-md px-2.5 py-2",
              isCurrent && "bg-accent"
            )}
            id={gate.targetId}
            key={gate.id}
          >
            <Icon
              aria-hidden="true"
              className={cn(
                "size-4 shrink-0",
                isComplete ? "text-primary" : "text-muted-foreground"
              )}
            />
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-medium text-sm">{gate.label}</span>
              <span className="truncate text-muted-foreground text-xs">
                {gate.detail}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

const TourProgressMeter = () => {
  const tour = useTourContext();
  const current = gates.findIndex((gate) => gate.id === tour.step?.id);
  const value = current < 0 ? 1 : current + 1;

  return (
    <div
      aria-valuemax={gates.length}
      aria-valuemin={1}
      aria-valuenow={value}
      aria-valuetext={tour.getProgressText()}
      className="col-start-1 row-start-1 flex w-fit items-center gap-1 justify-self-start"
      role="progressbar"
    >
      {gates.map((gate, index) => (
        <div
          className={cn(
            "h-1 w-5 rounded-full",
            "transition-[background-color] duration-150 ease-out",
            "motion-reduce:transition-none",
            index <= current ? "bg-primary" : "bg-foreground/16"
          )}
          key={gate.id}
        />
      ))}
    </div>
  );
};

const gates = [
  {
    detail: "Notes and outline",
    icon: FileTextIcon,
    id: "draft",
    label: "Draft",
    targetId: "tour-progress-draft",
  },
  {
    detail: "Design check",
    icon: EyeIcon,
    id: "review",
    label: "Review",
    targetId: "tour-progress-review",
  },
  {
    detail: "Final sign-off",
    icon: CircleCheckIcon,
    id: "approve",
    label: "Approve",
    targetId: "tour-progress-approve",
  },
  {
    detail: "Ship to the workspace",
    icon: SendIcon,
    id: "publish",
    label: "Publish",
    targetId: "tour-progress-publish",
  },
];

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description:
      "The release starts here. The meter beside the actions fills as you move.",
    id: "draft",
    target: () => document.querySelector<HTMLElement>("#tour-progress-draft"),
    title: "Draft",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Design checks the release before it can ship.",
    id: "review",
    target: () => document.querySelector<HTMLElement>("#tour-progress-review"),
    title: "Review",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "One check remains before this goes out.",
    id: "approve",
    target: () => document.querySelector<HTMLElement>("#tour-progress-approve"),
    title: "Approve",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "The release is ready to ship.",
    id: "publish",
    target: () => document.querySelector<HTMLElement>("#tour-progress-publish"),
    title: "Publish",
    type: "tooltip",
  },
];

export default Example;
