"use client";

import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
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

      <TourContent bottomStickOnMobile>
        <TourHeader>
          <TourProgressText />
          <TourTitle />
          <TourDescription />
        </TourHeader>
        <TourFooter>
          <TourNextStep />
        </TourFooter>
      </TourContent>
    </Tour>
  );
};

const steps: TourStepType[] = [
  {
    actions: [{ action: "dismiss", label: "Finish tour" }],
    description: "This step sticks to the bottom of the screen on mobile.",
    id: "welcome",
    title: "Bottom-stuck tour",
    type: "dialog",
  },
];

export default Example;
