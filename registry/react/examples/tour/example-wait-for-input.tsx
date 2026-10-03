"use client";

import type { TourStepEffectArgs } from "@ark-ui/react/tour";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
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
  const tour = useTour({
    closeOnInteractOutside: false,
    keyboardNavigation: false,
    steps,
  });

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Tour tour={tour}>
        <TourTrigger asChild>
          <Button variant="outline">Start tour</Button>
        </TourTrigger>

        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-xs/4">
          <div className="flex items-center gap-3">
            <img
              alt=""
              className="size-10 rounded-md"
              height={40}
              src="https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=maya-chen&waveColor=2b6cb0"
              width={40}
            />
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-medium text-sm">New member</span>
              <span className="truncate text-muted-foreground text-xs">
                Onda workspace
              </span>
            </div>
          </div>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input placeholder="Maya Chen" />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input placeholder="maya@onda.dev" type="email" />
          </Field>
          <Field id="tour-input-terms" orientation="horizontal">
            <Checkbox />
            <FieldLabel>I agree to the Onda workspace terms</FieldLabel>
          </Field>
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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const continueAction = {
  action: "next" as const,
  label: "Continue",
};

const disabledContinueAction = {
  ...continueAction,
  attrs: { disabled: true },
};

const syncContinue = (
  target: TourStepEffectArgs["target"],
  update: TourStepEffectArgs["update"],
  eventName: "change" | "input",
  isValid: (element: HTMLInputElement) => boolean
) => {
  const element = target?.();
  const input =
    element instanceof HTMLInputElement
      ? element
      : element?.querySelector("input");

  if (!(input instanceof HTMLInputElement)) {
    return;
  }

  let enabled: boolean | undefined;

  const sync = () => {
    const valid = isValid(input);

    if (valid === enabled) {
      return;
    }

    enabled = valid;
    update({
      actions: [valid ? continueAction : disabledContinueAction],
    });
  };

  input.addEventListener(eventName, sync);
  sync();

  return () => {
    input.removeEventListener(eventName, sync);
  };
};

const steps: TourStepType[] = [
  {
    actions: [{ action: "next", label: "Start" }],
    description: "Continue enables when a field is valid.",
    id: "intro",
    title: "Join the workspace",
    type: "dialog",
  },
  {
    actions: [disabledContinueAction],
    description:
      "Enter a name with at least two characters. Continue stays off until then.",
    effect({ show, target, update }) {
      show();
      return syncContinue(
        target,
        update,
        "input",
        (element) => element.value.trim().length >= 2
      );
    },
    id: "enter-name",
    target: () => document.querySelector<HTMLInputElement>("#tour-input-name"),
    title: "Your name",
    type: "tooltip",
  },
  {
    actions: [disabledContinueAction],
    description:
      "Enter an address like maya@onda.dev. Continue stays off until it looks like an email.",
    effect({ show, target, update }) {
      show();
      return syncContinue(target, update, "input", (element) =>
        emailRegex.test(element.value)
      );
    },
    id: "enter-email",
    target: () => document.querySelector<HTMLInputElement>("#tour-input-email"),
    title: "Your email",
    type: "tooltip",
  },
  {
    actions: [disabledContinueAction],
    description:
      "Agree to the Onda workspace terms. Continue stays off until the box is checked.",
    effect({ show, target, update }) {
      show();
      return syncContinue(
        target,
        update,
        "change",
        (element) => element.checked
      );
    },
    id: "check-terms",
    target: () => document.getElementById("field::tour-input-terms"),
    title: "Workspace terms",
    type: "tooltip",
  },
  {
    actions: [{ action: "dismiss", label: "Done" }],
    description: "The profile is saved.",
    id: "complete",
    title: "Profile saved",
    type: "dialog",
  },
];

export default Example;
