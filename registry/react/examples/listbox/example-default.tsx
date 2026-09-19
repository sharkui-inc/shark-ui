"use client";

import { createListCollection } from "@ark-ui/react";
import { createWavesAvatar } from "@/lib/dicebear";
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
      avatar: createWavesAvatar("camille-dubois", "purple"),
      email: "camille@onda.co",
      initials: "CD",
      label: "Camille Dubois",
      value: "camille",
    },
    {
      avatar: createWavesAvatar("edward-lee", "blue"),
      email: "edward@onda.co",
      initials: "EL",
      label: "Edward Lee",
      value: "edward",
    },
    {
      avatar: createWavesAvatar("mila-jensen", "orange"),
      email: "mila@onda.co",
      initials: "MJ",
      label: "Mila Jensen",
      value: "mila",
    },
    {
      avatar: createWavesAvatar("dario-rossi", "green-dark"),
      email: "dario@onda.co",
      initials: "DR",
      label: "Dario Rossi",
      value: "dario",
    },
  ],
});

export default Example;
