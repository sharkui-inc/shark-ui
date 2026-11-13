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

const TourDemo = () => {
  const tour = useTour({ steps });

  return (
    <Tour tour={tour}>
      <TourTrigger asChild>
        <Button variant="outline">Open</Button>
      </TourTrigger>
      <TourContent>
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
    actions: [{ action: "next", label: "Start Tour" }],
    description: "Install and use this component.",
    id: "step-1",
    title: "Welcome to the tour",
    type: "dialog",
  },
  {
    actions: [
      { action: "prev", label: "Previous" },
      { action: "next", label: "Next" },
    ],
    description: "Add the component from this section.",
    id: "step-2",
    target: () => document.querySelector("#installation"),
    title: "Installation",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Previous" },
      { action: "next", label: "Next" },
    ],
    description: "How to use the component.",
    id: "step-3",
    target: () => document.querySelector("#usage"),
    title: "Usage",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Finish Tour" }],
    description: "The tour is finished.",
    id: "step-4",
    title: "That's it",
    type: "dialog",
  },
];

export default TourDemo;
