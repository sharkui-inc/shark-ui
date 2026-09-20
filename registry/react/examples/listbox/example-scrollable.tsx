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
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=aya-tanaka&waveColor=ca8a04",
      email: "aya@onda.co",
      initials: "AT",
      label: "Aya Tanaka",
      value: "aya",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=noah-berg&waveColor=e11d48",
      email: "noah@onda.co",
      initials: "NB",
      label: "Noah Berg",
      value: "noah",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=sofia-alvarez&waveColor=7c3aed",
      email: "sofia@onda.co",
      initials: "SA",
      label: "Sofia Alvarez",
      value: "sofia",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=liam-okafor&waveColor=2b6cb0",
      email: "liam@onda.co",
      initials: "LO",
      label: "Liam Okafor",
      value: "liam",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=elena-petrov&waveColor=ea580c",
      email: "elena@onda.co",
      initials: "EP",
      label: "Elena Petrov",
      value: "elena",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=kai-nakamura&waveColor=1a6b5c",
      email: "kai@onda.co",
      initials: "KN",
      label: "Kai Nakamura",
      value: "kai",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=isla-moreau&waveColor=ca8a04",
      email: "isla@onda.co",
      initials: "IM",
      label: "Isla Moreau",
      value: "isla",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=omar-hassan&waveColor=e11d48",
      email: "omar@onda.co",
      initials: "OH",
      label: "Omar Hassan",
      value: "omar",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=nina-volkov&waveColor=7c3aed",
      email: "nina@onda.co",
      initials: "NV",
      label: "Nina Volkov",
      value: "nina",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=felix-brandt&waveColor=2b6cb0",
      email: "felix@onda.co",
      initials: "FB",
      label: "Felix Brandt",
      value: "felix",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=priya-sharma&waveColor=ea580c",
      email: "priya@onda.co",
      initials: "PS",
      label: "Priya Sharma",
      value: "priya",
    },
    {
      avatar:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=jonas-eriksson&waveColor=1a6b5c",
      email: "jonas@onda.co",
      initials: "JE",
      label: "Jonas Eriksson",
      value: "jonas",
    },
  ],
});

export default Example;
