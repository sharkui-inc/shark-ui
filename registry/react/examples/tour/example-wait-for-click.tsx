"use client";

import { waitForEvent } from "@ark-ui/react/tour";
import { Music2Icon, PencilIcon, PlusIcon, Trash2Icon } from "lucide-react";
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
  const [track, setTrack] = React.useState<string | null>(null);

  const addTrack = () => {
    setTrack("Harbor notes");
  };

  const editTrack = () => {
    setTrack((current) => (current ? "Harbor notes, evening mix" : current));
  };

  const deleteTrack = () => {
    setTrack(null);
  };

  const tour = useTour({
    closeOnInteractOutside: false,
    keyboardNavigation: false,
    steps,
  });

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <div className="flex flex-col gap-3 rounded-lg border bg-card p-3 shadow-xs/4">
          <div className="flex min-h-16 items-center gap-3 rounded-md border bg-background p-2">
            {track ? (
              <>
                <img
                  alt=""
                  className="size-12 rounded-md"
                  height={48}
                  src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=studio-print&waveColor=ea580c"
                  width={48}
                />
                <span className="min-w-0 truncate font-medium text-sm">
                  {track}
                </span>
              </>
            ) : (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <Music2Icon aria-hidden />
                </span>
                <span className="text-muted-foreground text-sm">
                  Queue is empty
                </span>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              id="tour-click-add"
              onClick={addTrack}
              size="sm"
              variant="outline"
            >
              <PlusIcon aria-hidden data-icon="inline-start" />
              Add
            </Button>
            <Button
              id="tour-click-edit"
              onClick={editTrack}
              size="sm"
              variant="outline"
            >
              <PencilIcon aria-hidden data-icon="inline-start" />
              Edit
            </Button>
            <Button
              id="tour-click-delete"
              onClick={deleteTrack}
              size="sm"
              variant="outline"
            >
              <Trash2Icon aria-hidden data-icon="inline-start" />
              Delete
            </Button>
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
    actions: [{ action: "next", label: "Begin" }],
    description: "Each step advances on the matching click.",
    id: "intro",
    title: "Queue the track",
    type: "dialog",
  },
  {
    backdrop: false,
    description:
      "Add Harbor notes to the queue. The tour advances when you click Add, not Next.",
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "click-add",
    target: () => document.querySelector<HTMLElement>("#tour-click-add"),
    title: "Add the track",
    type: "tooltip",
  },
  {
    backdrop: false,
    description:
      "Rename the track. The tour advances when you click Edit, not Next.",
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "click-edit",
    target: () => document.querySelector<HTMLElement>("#tour-click-edit"),
    title: "Edit the title",
    type: "tooltip",
  },
  {
    backdrop: false,
    description:
      "Remove the track from the queue. The tour advances when you click Delete, not Next.",
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "click-delete",
    target: () => document.querySelector<HTMLElement>("#tour-click-delete"),
    title: "Delete the track",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Finish" }],
    description: "The queue is empty.",
    id: "complete",
    title: "Queue cleared",
    type: "dialog",
  },
];

export default Example;
