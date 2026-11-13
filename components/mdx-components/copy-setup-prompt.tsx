"use client";

import { CheckIcon } from "lucide-react";
import React from "react";
import { CopyButton } from "@/components/copy-button";
import { FRAMEWORK_ICONS } from "@/components/mdx-components/framework-icons";
import { buildCopySetupPrompt } from "@/lib/copy-setup-prompt";
import {
  DEFAULT_INSTALLATION_FRAMEWORK_ID,
  INSTALLATION_FRAMEWORKS,
  type InstallationFrameworkId,
} from "@/lib/installation-frameworks";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { useCopyToClipboard } from "@/registry/react/hooks/use-copy-to-clipboard";

export const CopySetupPrompt = () => {
  const [frameworkId, setFrameworkId] = React.useState<InstallationFrameworkId>(
    DEFAULT_INSTALLATION_FRAMEWORK_ID
  );

  const prompt = buildCopySetupPrompt(frameworkId);
  const clipboard = useCopyToClipboard({ timeout: 1500, value: prompt });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4">Copy Prompt</Button>
      </DialogTrigger>

      <DialogContent size="xl">
        <DialogHeader description="Select a framework." title="Copy Prompt" />

        <DialogBody className="flex flex-col gap-6">
          <div
            aria-label="Framework"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            role="radiogroup"
          >
            {INSTALLATION_FRAMEWORKS.map((framework) => {
              const selected = framework.id === frameworkId;

              return (
                <Item
                  aria-checked={selected}
                  className={cn(
                    "[--space:--spacing(3)]",
                    "cursor-pointer",
                    "border-input bg-background",
                    "hover:bg-muted/48",
                    selected && "border-foreground/24 ring-foreground/8 ring-1"
                  )}
                  key={framework.id}
                  onClick={() => setFrameworkId(framework.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setFrameworkId(framework.id);
                    }
                  }}
                  role="radio"
                  tabIndex={selected ? 0 : -1}
                  variant="outline"
                >
                  <ItemMedia variant="image">
                    {FRAMEWORK_ICONS[framework.id]}
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{framework.name}</ItemTitle>
                  </ItemContent>
                  <ItemActions>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-4",
                        "inline-flex items-center justify-center",
                        "rounded-sm border shadow-xs/4",
                        selected
                          ? "border-primary bg-primary text-primary-foreground shadow-none"
                          : "border-input bg-transparent"
                      )}
                    >
                      {selected ? (
                        <CheckIcon aria-hidden="true" className="size-3" />
                      ) : null}
                    </span>
                  </ItemActions>
                </Item>
              );
            })}
          </div>

          <PromptFigure prompt={prompt} />
        </DialogBody>

        <DialogFooter>
          <Button onClick={() => clipboard.copy()}>
            {clipboard.copied ? "Copied" : "Copy Prompt"}
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface PromptFigureProps {
  prompt: string;
}

const PromptFigure = (props: PromptFigureProps) => {
  const { prompt } = props;

  const lines = prompt.split("\n");

  return (
    <figure
      className="bg-code text-code-foreground relative mt-0 w-full min-w-0 overflow-hidden rounded-2xl border"
      data-slot="setup-prompt-code"
    >
      <figcaption className="text-muted-foreground flex min-h-11 items-center gap-2 border-b px-4 py-2.5 font-mono text-[.8125rem]">
        prompt.txt
      </figcaption>
      <CopyButton className="absolute inset-e-1.5 top-1.5" value={prompt} />
      <div className="max-h-72 w-full min-w-0 overflow-auto">
        <pre className="bg-code m-0 w-max min-w-full px-4 py-3.5 font-mono text-sm leading-6">
          <code className="flex w-max min-w-full flex-col" data-language="text">
            {lines.map((line, index) => {
              const key = line ? `line-${index}` : `blank-${index}`;

              return (
                <span
                  className="text-code-foreground min-h-6 w-max min-w-full pe-4 whitespace-pre"
                  key={key}
                >
                  {line || "\u00a0"}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </figure>
  );
};
