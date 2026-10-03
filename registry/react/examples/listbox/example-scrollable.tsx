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

const backgrounds = [
  "f3e8fb",
  "e8f1fb",
  "faf0e4",
  "eef4e6",
  "faf6e0",
  "f8e8ee",
] as const;

const waveColors = [
  "7c3aed",
  "2b6cb0",
  "ea580c",
  "1a6b5c",
  "ca8a04",
  "e11d48",
] as const;

const people = [
  { label: "Camille Dubois", value: "camille" },
  { label: "Edward Lee", value: "edward" },
  { label: "Mila Jensen", value: "mila" },
  { label: "Dario Rossi", value: "dario" },
  { label: "Aya Tanaka", value: "aya" },
  { label: "Noah Berg", value: "noah" },
  { label: "Sofia Alvarez", value: "sofia" },
  { label: "Liam Okafor", value: "liam" },
  { label: "Elena Petrov", value: "elena" },
  { label: "Kai Nakamura", value: "kai" },
  { label: "Isla Moreau", value: "isla" },
  { label: "Omar Hassan", value: "omar" },
  { label: "Nina Volkov", value: "nina" },
  { label: "Felix Brandt", value: "felix" },
  { label: "Priya Sharma", value: "priya" },
  { label: "Jonas Eriksson", value: "jonas" },
  { label: "Amara Okonkwo", value: "amara" },
  { label: "Theo Martins", value: "theo" },
  { label: "Yuki Sato", value: "yuki" },
  { label: "Nora Lindqvist", value: "nora" },
  { label: "Mateo Vargas", value: "mateo" },
  { label: "Leila Haddad", value: "leila" },
  { label: "Hugo Lefevre", value: "hugo" },
  { label: "Zara Ahmed", value: "zara" },
  { label: "Diego Silva", value: "diego" },
  { label: "Ingrid Olsen", value: "ingrid" },
  { label: "Ravi Patel", value: "ravi" },
  { label: "Chloe Nguyen", value: "chloe" },
  { label: "Andre Costa", value: "andre" },
  { label: "Mei Chen", value: "mei" },
  { label: "Soren Bakker", value: "soren" },
  { label: "Fatima Zahra", value: "fatima" },
  { label: "Luca Bianchi", value: "luca" },
  { label: "Hannah Kim", value: "hannah" },
  { label: "Pavel Novak", value: "pavel" },
  { label: "Aisha Rahman", value: "aisha" },
  { label: "Owen Murphy", value: "owen" },
  { label: "Vera Kowalski", value: "vera" },
  { label: "Kenji Watanabe", value: "kenji" },
  { label: "Iris Fontaine", value: "iris" },
];

const collection = createListCollection({
  items: people.map((person, index) => {
    const [first = "", last = ""] = person.label.split(" ");
    const palette = index % backgrounds.length;

    return {
      avatar: `https://api.dicebear.com/10.x/waves/svg?backgroundColor=${backgrounds[palette]}&scale=1.2&seed=${person.value}&waveColor=${waveColors[palette]}`,
      email: `${person.value}@onda.co`,
      initials: `${first.charAt(0)}${last.charAt(0)}`,
      label: person.label,
      value: person.value,
    };
  }),
});

export default Example;
