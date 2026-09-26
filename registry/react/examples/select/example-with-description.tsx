"use client";

import { createListCollection } from "@ark-ui/react";
import { BellOffIcon, CircleIcon, MoonIcon } from "lucide-react";
import { MenuItemDescription } from "@/registry/react/components/menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => (
  <Select collection={collection} defaultValue={["available"]}>
    <SelectTrigger className="w-64">
      <SelectValue placeholder="Select a status" />
    </SelectTrigger>
    <SelectContent>
      {collection.items.map((item) => {
        const Icon = item.icon;

        return (
          <SelectItem item={item} key={item.value}>
            <Icon aria-hidden />
            <span className="flex min-w-0 flex-col gap-0.5">
              <span>{item.label}</span>
              <MenuItemDescription>{item.description}</MenuItemDescription>
            </span>
          </SelectItem>
        );
      })}
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: [
    {
      description: "Ready for new messages.",
      icon: CircleIcon,
      label: "Available",
      value: "available",
    },
    {
      description: "Away until later today.",
      icon: MoonIcon,
      label: "Away",
      value: "away",
    },
    {
      description: "Mute all notifications.",
      icon: BellOffIcon,
      label: "Do not disturb",
      value: "dnd",
    },
  ],
});

export default Example;
