"use client";

import { waitForElement, waitForEvent } from "@ark-ui/react/tour";
import { PlusIcon, Trash2Icon, WavesHorizontalIcon } from "lucide-react";
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

interface Note {
  id: string;
  isNew: boolean;
  src: string;
  title: string;
}

const Example = () => {
  const [notes, setNotes] = React.useState<Note[]>(initialNotes);

  const addNote = () => {
    setNotes((current) => [
      ...current.map((note) => ({ ...note, isNew: false })),
      {
        id: crypto.randomUUID(),
        isNew: true,
        src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=harbor-note&waveColor=1a6b5c",
        title: "Harbor note",
      },
    ]);
  };

  const deleteNote = (id: string) => {
    setNotes((current) => current.filter((note) => note.id !== id));
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
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-medium text-sm">
              <WavesHorizontalIcon
                aria-hidden
                className="size-4 text-primary"
              />
              Notes
            </div>
            <Button
              id="tour-element-add"
              onClick={addNote}
              size="sm"
              variant="outline"
            >
              <PlusIcon aria-hidden data-icon="inline-start" />
              Add note
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {notes.map((note) => (
              <div
                className="flex items-center gap-3 rounded-md border bg-background p-2"
                data-tour-note={note.isNew ? "new" : undefined}
                key={note.id}
              >
                <img
                  alt=""
                  className="size-10 rounded-md"
                  height={40}
                  src={note.src}
                  width={40}
                />
                <span className="min-w-0 flex-1 truncate text-sm">
                  {note.title}
                </span>
                <Button
                  aria-label={`Delete ${note.title}`}
                  onClick={() => deleteNote(note.id)}
                  size="icon-sm"
                  variant="ghost"
                >
                  <Trash2Icon aria-hidden />
                </Button>
              </div>
            ))}
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

const initialNotes: Note[] = [
  {
    id: "tide-chart",
    isNew: false,
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=tide-chart&waveColor=2b6cb0",
    title: "Tide chart",
  },
  {
    id: "pier-sketch",
    isNew: false,
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=pier-sketch&waveColor=7c3aed",
    title: "Pier sketch",
  },
];

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Start" }],
    description: "The next step waits until Harbor note is in the list.",
    id: "intro",
    title: "A note that is not here yet",
    type: "dialog",
  },
  {
    description:
      "Add Harbor note. The next step stays hidden until it appears in the list.",
    effect({ next, target, show }) {
      show();
      const [promise, cancel] = waitForEvent(target, "click");
      promise.then(() => next());
      return cancel;
    },
    id: "add-item",
    target: () => document.querySelector<HTMLElement>("#tour-element-add"),
    title: "Add Harbor note",
    type: "tooltip",
  },
  {
    actions: [{ action: "next", label: "Next" }],
    description:
      "Harbor note is in the list. The tour waited for this row before opening.",
    effect({ show }) {
      const [promise, cancel] = waitForElement(
        () => document.querySelector<HTMLElement>('[data-tour-note="new"]'),
        { timeout: 5000 }
      );
      promise.then(() => show());
      return () => cancel();
    },
    id: "new-item",
    target: () => document.querySelector<HTMLElement>('[data-tour-note="new"]'),
    title: "Harbor note",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "Harbor note is on the page.",
    id: "complete",
    title: "Note added",
    type: "dialog",
  },
];

export default Example;
