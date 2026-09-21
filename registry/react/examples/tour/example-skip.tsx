"use client";

import { BellIcon, MailIcon, MoonIcon } from "lucide-react";
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

        <div className="flex flex-col gap-2">
          <div
            className="flex items-center gap-3 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
            id="tour-skip-notifications"
          >
            <BellIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
            <div className="flex min-w-0 flex-col">
              <span className="font-medium text-sm">Notifications</span>
              <span className="text-muted-foreground text-xs">
                Mentions and replies
              </span>
            </div>
          </div>
          <div
            className="flex items-center gap-3 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
            id="tour-skip-digest"
          >
            <MailIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
            <div className="flex min-w-0 flex-col">
              <span className="font-medium text-sm">Weekly digest</span>
              <span className="text-muted-foreground text-xs">
                Monday morning summary
              </span>
            </div>
          </div>
          <div
            className="flex items-center gap-3 rounded-lg border bg-card px-3 py-2.5 shadow-xs/4"
            id="tour-skip-quiet"
          >
            <MoonIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
            <div className="flex min-w-0 flex-col">
              <span className="font-medium text-sm">Quiet hours</span>
              <span className="text-muted-foreground text-xs">10pm to 7am</span>
            </div>
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
    actions: [
      { action: "dismiss", label: "Skip" },
      { action: "next", label: "Next" },
    ],
    description: "Mentions and replies. Skip ends the tour.",
    id: "notifications",
    target: () =>
      document.querySelector<HTMLElement>("#tour-skip-notifications"),
    title: "Notifications",
    type: "tooltip",
  },
  {
    actions: [
      { action: "dismiss", label: "Skip" },
      { action: "prev", label: "Back" },
      { action: "next", label: "Next" },
    ],
    description: "Sent every Monday. Skip ends the tour.",
    id: "digest",
    target: () => document.querySelector<HTMLElement>("#tour-skip-digest"),
    title: "Weekly digest",
    type: "tooltip",
  },
  {
    actions: [
      { action: "prev", label: "Back" },
      { action: "dismiss", label: "Finish" },
    ],
    description: "Muted from 10pm to 7am.",
    id: "quiet",
    target: () => document.querySelector<HTMLElement>("#tour-skip-quiet"),
    title: "Quiet hours",
    type: "tooltip",
  },
];

export default Example;
