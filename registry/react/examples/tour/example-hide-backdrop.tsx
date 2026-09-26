"use client";

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

        <div
          className="flex flex-col gap-1 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
          id="tour-hide-backdrop-note"
        >
          <span className="font-medium text-sm">Release note</span>
          <span className="text-muted-foreground text-xs">
            Stays readable while the tour is open.
          </span>
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
    description:
      "This step has backdrop. the next step will not have backdrop.",
    id: "step-1",
    title: "With backdrop",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Done" },
    ],
    backdrop: false,
    description:
      "Tooltips can hide the backdrop too. The note stays readable behind this step.",
    id: "note",
    target: () =>
      document.querySelector<HTMLElement>("#tour-hide-backdrop-note"),
    title: "Without backdrop",
    type: "tooltip",
  },
];

export default Example;
