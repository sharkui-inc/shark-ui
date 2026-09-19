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
  <Listbox className="w-fit" collection={collection} defaultValue={["camille"]}>
    <ListboxContent className="h-80 rounded-2xl border shadow-xs/4">
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
    {
      avatar: createWavesAvatar("aya-tanaka", "amber"),
      email: "aya@onda.co",
      initials: "AT",
      label: "Aya Tanaka",
      value: "aya",
    },
    {
      avatar: createWavesAvatar("noah-berg", "rose"),
      email: "noah@onda.co",
      initials: "NB",
      label: "Noah Berg",
      value: "noah",
    },
    {
      avatar: createWavesAvatar("sofia-alvarez", "purple"),
      email: "sofia@onda.co",
      initials: "SA",
      label: "Sofia Alvarez",
      value: "sofia",
    },
    {
      avatar: createWavesAvatar("liam-okafor", "blue"),
      email: "liam@onda.co",
      initials: "LO",
      label: "Liam Okafor",
      value: "liam",
    },
    {
      avatar: createWavesAvatar("elena-petrov", "orange"),
      email: "elena@onda.co",
      initials: "EP",
      label: "Elena Petrov",
      value: "elena",
    },
    {
      avatar: createWavesAvatar("kai-nakamura", "green-dark"),
      email: "kai@onda.co",
      initials: "KN",
      label: "Kai Nakamura",
      value: "kai",
    },
    {
      avatar: createWavesAvatar("isla-moreau", "amber"),
      email: "isla@onda.co",
      initials: "IM",
      label: "Isla Moreau",
      value: "isla",
    },
    {
      avatar: createWavesAvatar("omar-hassan", "rose"),
      email: "omar@onda.co",
      initials: "OH",
      label: "Omar Hassan",
      value: "omar",
    },
    {
      avatar: createWavesAvatar("nina-volkov", "purple"),
      email: "nina@onda.co",
      initials: "NV",
      label: "Nina Volkov",
      value: "nina",
    },
    {
      avatar: createWavesAvatar("felix-brandt", "blue"),
      email: "felix@onda.co",
      initials: "FB",
      label: "Felix Brandt",
      value: "felix",
    },
    {
      avatar: createWavesAvatar("priya-sharma", "orange"),
      email: "priya@onda.co",
      initials: "PS",
      label: "Priya Sharma",
      value: "priya",
    },
    {
      avatar: createWavesAvatar("jonas-eriksson", "green-dark"),
      email: "jonas@onda.co",
      initials: "JE",
      label: "Jonas Eriksson",
      value: "jonas",
    },
  ],
});

export default Example;
