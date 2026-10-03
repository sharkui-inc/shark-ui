"use client";

import { createListCollection } from "@ark-ui/react";
import { BellOffIcon, CircleIcon, MoonIcon } from "lucide-react";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemDescription,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Item className="w-full max-w-xs p-1" variant="outline">
    <Listbox collection={collection}>
      <ListboxContent>
        {collection.items.map((item) => {
          const Icon = item.icon;

          return (
            <ListboxItem item={item} key={item.value}>
              <Icon aria-hidden />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <ListboxItemText>{item.label}</ListboxItemText>
                <ListboxItemDescription>
                  {item.description}
                </ListboxItemDescription>
              </div>
            </ListboxItem>
          );
        })}
      </ListboxContent>
    </Listbox>
  </Item>
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
