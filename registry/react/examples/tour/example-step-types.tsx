"use client";

import { Share2Icon } from "lucide-react";
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
  const tour = useTour({ steps });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <div className="overflow-hidden rounded-lg border bg-card shadow-xs/4">
          <img
            alt="Studio print"
            className="h-28 w-full object-cover"
            height={112}
            id="tour-step-types-cover"
            src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=studio-print&waveColor=ea580c"
            width={320}
          />
          <div className="flex items-center justify-between gap-3 p-3">
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-medium text-sm">Studio print</span>
              <span className="truncate text-muted-foreground text-xs">
                Sage ground, teal wash
              </span>
            </div>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-background text-muted-foreground">
              <Share2Icon aria-hidden className="size-4" />
            </span>
          </div>
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
    actions: [{ action: "next", label: "Start tour" }],
    description: "Centered on the page, with no target.",
    id: "welcome",
    title: "This is a dialog",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description:
      "Anchored to the print. Tooltip steps point at a target on the page.",
    id: "tooltip-step",
    target: () => document.querySelector<HTMLElement>("#tour-step-types-cover"),
    title: "This is a tooltip",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Fixed in the corner, with no target.",
    id: "floating-step",
    placement: "bottom-end",
    title: "This is a floating step",
    type: "floating",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "The tour ends on another dialog.",
    id: "complete",
    title: "This is a dialog",
    type: "dialog",
  },
];

export default Example;
