"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox
    className="w-full max-w-xs"
    collection={collection}
    defaultValue={["camille"]}
  >
    <ListboxContent className="rounded-2xl border shadow-xs/4">
      {collection.items.map((item) => (
        <ListboxItem
          className="flex w-full items-center gap-3 rounded-xl border border-transparent px-2 py-2.5"
          item={item}
          key={item.value}
        >
          <Avatar size="md">
            <AvatarImage alt="" src={item.avatar} />
            <AvatarFallback>{item.initials}</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <ListboxItemText className="block truncate font-medium text-sm">
              {item.label}
            </ListboxItemText>
            <p className="truncate text-muted-foreground text-xs" dir="ltr">
              {item.email}
            </p>
          </div>
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=camille-dubois&waveColor=7c3aed",
      email: "camille@onda.co",
      initials: "CD",
      label: "Camille Dubois",
      value: "camille",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=edward-lee&waveColor=2b6cb0",
      email: "edward@onda.co",
      initials: "EL",
      label: "Edward Lee",
      value: "edward",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=mila-jensen&waveColor=ea580c",
      email: "mila@onda.co",
      initials: "MJ",
      label: "Mila Jensen",
      value: "mila",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=dario-rossi&waveColor=1a6b5c",
      email: "dario@onda.co",
      initials: "DR",
      label: "Dario Rossi",
      value: "dario",
    },
  ],
});

export default Example;
