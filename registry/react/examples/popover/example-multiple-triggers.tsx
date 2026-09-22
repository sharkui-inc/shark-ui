"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => {
  const [activeItem, setActiveItem] = React.useState<
    (typeof items)[number] | null
  >(null);

  return (
    <Popover
      onTriggerValueChange={({ value }) => {
        setActiveItem(items.find((item) => item.value === value) ?? null);
      }}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <PopoverTrigger asChild key={item.value} value={item.value}>
            <Button variant="outline">{item.label}</Button>
          </PopoverTrigger>
        ))}
      </div>
      <PopoverContent className="w-72">
        <PopoverHeader
          description={
            activeItem?.detail ?? "Pick an action to see its details."
          }
          title={activeItem?.label ?? "Select an action"}
        />
        <PopoverBody>
          <p className="text-muted-foreground text-sm">
            One popover, shared across every trigger.
          </p>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const items = [
  {
    detail: "Share this item with others via link or email.",
    label: "Share",
    value: "share",
  },
  {
    detail: "Export this item as PDF, CSV, or JSON.",
    label: "Export",
    value: "export",
  },
  {
    detail: "Move this item to the archive for later reference.",
    label: "Archive",
    value: "archive",
  },
];

export default Example;
