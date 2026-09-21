"use client";

import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";
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
  const tour = useTour({ keyboardNavigation: true, steps });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <div className="flex flex-col gap-2">
          <div
            className="flex items-center justify-between gap-3 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
            id="tour-keyboard-next"
          >
            <span className="flex items-center gap-2 font-medium text-sm">
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground rtl:rotate-180"
              />
              Next step
            </span>
          </div>
          <div
            className="flex items-center justify-between gap-3 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
            id="tour-keyboard-back"
          >
            <span className="flex items-center gap-2 font-medium text-sm">
              <ArrowLeftIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground rtl:rotate-180"
              />
              Previous step
            </span>
          </div>
          <div
            className="flex items-center justify-between gap-3 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
            id="tour-keyboard-close"
          >
            <span className="flex items-center gap-2 font-medium text-sm">
              <XIcon
                aria-hidden="true"
                className="size-4 text-muted-foreground"
              />
              Close tour
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
    actions: [{ action: "next", label: "Next" }],
    description: "Right arrow goes to the next step.",
    id: "next",
    target: () => document.querySelector<HTMLElement>("#tour-keyboard-next"),
    title: "Next step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Left arrow goes to the previous step.",
    id: "back",
    target: () => document.querySelector<HTMLElement>("#tour-keyboard-back"),
    title: "Previous step",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Escape closes the tour.",
    id: "close",
    target: () => document.querySelector<HTMLElement>("#tour-keyboard-close"),
    title: "Close tour",
    type: "tooltip",
  },
];

export default Example;
