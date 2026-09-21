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
          id="tour-without-arrow-note"
        >
          <span className="font-medium text-sm">Release note</span>
          <span className="text-muted-foreground text-xs">
            Stays readable while the tour is open.
          </span>
        </div>

        <TourContent showArrow={false}>
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
    actions: [{ action: "dismiss", label: "Done" }],
    description:
      "The callout stays attached to the note, with no arrow between them.",
    id: "note",
    target: () =>
      document.querySelector<HTMLElement>("#tour-without-arrow-note"),
    title: "No arrow",
    type: "tooltip",
  },
];

export default Example;
