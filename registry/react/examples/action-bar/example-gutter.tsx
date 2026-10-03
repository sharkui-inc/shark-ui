"use client";

import {
  ArchiveIcon,
  DownloadIcon,
  PencilIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import React from "react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const [gutter, setGutter] = React.useState<(typeof gutters)[number]>("24px");

  return (
    <ActionBar positioning={{ gutter, placement: "bottom" }}>
      <div className="flex flex-wrap gap-2">
        {gutters.map((value) => (
          <ActionBarTrigger asChild key={value}>
            <Button onClick={() => setGutter(value)} variant="outline">
              {`Gutter ${value}`}
            </Button>
          </ActionBarTrigger>
        ))}
      </div>
      <ActionBarContent aria-label="Bulk actions">
        <ActionBarValue count={3} />
        <ActionBarSeparator />
        <ActionBarBody>
          <Button variant="ghost">
            <PencilIcon data-icon="inline-start" />
            <span className="max-sm:sr-only">Edit</span>
          </Button>
          <Button variant="ghost">
            <DownloadIcon data-icon="inline-start" />
            <span className="max-sm:sr-only">Export</span>
          </Button>
          <Button variant="ghost">
            <ArchiveIcon data-icon="inline-start" />
            <span className="max-sm:sr-only">Archive</span>
          </Button>
          <ActionBarSeparator />
          <Button variant="destructive">
            <Trash2Icon data-icon="inline-start" />
            <span className="max-sm:sr-only">Delete</span>
          </Button>
        </ActionBarBody>
        <ActionBarSeparator />
        <ActionBarClose asChild>
          <Button size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
      </ActionBarContent>
    </ActionBar>
  );
};

const gutters = ["24px", "32px"] as const;

export default Example;
