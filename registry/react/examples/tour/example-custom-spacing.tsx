"use client";

import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourPreviousStep,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
  useTour,
} from "@/registry/react/components/tour";

const Example = () => {
  const tour = useTour({ steps });

  return (
    <Tour tour={tour}>
      <TourTrigger asChild>
        <Button variant="outline">Start tour</Button>
      </TourTrigger>
      <TourContent className="max-w-md [--space:--spacing(6)]">
        <TourHeader>
          <TourProgressText />
          <TourTitle />
          <TourDescription />
        </TourHeader>

        <TourFooter>
          <TourPreviousStep />
          <TourNextStep />
        </TourFooter>
      </TourContent>
    </Tour>
  );
};

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Next" }],
    description: "`[--space:--spacing(6)]` on this dialog.",
    id: "spacing",
    title: "Custom spacing",
    type: "dialog",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "`md:[--space:--spacing(6)]` changes spacing by screen size.",
    id: "breakpoints",
    title: "Breakpoint utilities",
    type: "dialog",
  },
];

export default Example;
