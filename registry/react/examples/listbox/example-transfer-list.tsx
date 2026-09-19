"use client";

import { createListCollection } from "@ark-ui/react";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import { createWavesAvatar } from "@/lib/dicebear";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { Item } from "@/registry/react/components/item";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

type Person = (typeof people)[number];

const Example = () => {
  const [team, setTeam] = React.useState(["dario", "aya"]);
  const [availableValue, setAvailableValue] = React.useState<string[]>([]);
  const [teamValue, setTeamValue] = React.useState<string[]>([]);

  const teamSet = new Set(team);
  const availableCollection = createListCollection({
    items: people.filter((person) => !teamSet.has(person.value)),
  });
  const teamCollection = createListCollection({
    items: people.filter((person) => teamSet.has(person.value)),
  });

  return (
    <div className="mx-auto grid w-full max-w-4xl gap-3 px-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-4 sm:px-6 lg:px-8">
      <MemberList
        collection={availableCollection}
        label="Available people"
        onValueChange={(details) => setAvailableValue(details.value)}
        value={availableValue}
      />
      <div className="flex justify-center gap-2 sm:flex-col">
        <Button
          aria-label="Add selected people to the project"
          disabled={!availableValue.length}
          onClick={() => {
            setTeam((current) => [...current, ...availableValue]);
            setAvailableValue([]);
          }}
          size="icon-md"
          title="Add to project"
        >
          <PlusIcon aria-hidden="true" />
        </Button>
        <Button
          aria-label="Remove selected people from the project"
          disabled={!teamValue.length}
          onClick={() => {
            setTeam((current) =>
              current.filter((value) => !teamValue.includes(value))
            );
            setTeamValue([]);
          }}
          size="icon-md"
          title="Remove from project"
          variant="outline"
        >
          <MinusIcon aria-hidden="true" />
        </Button>
      </div>
      <MemberList
        collection={teamCollection}
        label="Product launch team"
        onValueChange={(details) => setTeamValue(details.value)}
        value={teamValue}
      />
    </div>
  );
};

interface MemberListProps {
  collection: ReturnType<typeof createListCollection<Person>>;
  label: string;
  onValueChange: (details: { value: string[] }) => void;
  value: string[];
}

const MemberList = ({
  collection,
  label,
  onValueChange,
  value,
}: MemberListProps) => (
  <Item
    className="flex-col flex-nowrap items-stretch gap-0 overflow-hidden p-0"
    variant="outline"
  >
    <div className="flex items-center justify-between gap-3 border-border border-b px-4 py-3">
      <h4 className="font-medium text-sm">{label}</h4>
      <span className="text-muted-foreground text-xs tabular-nums">
        {collection.items.length} people
      </span>
    </div>
    <Listbox
      className="min-h-48 p-2"
      collection={collection}
      onValueChange={onValueChange}
      selectionMode="multiple"
      value={value}
    >
      <ListboxContent className="overflow-visible">
        {collection.items.map((person) => (
          <ListboxItem
            className="flex w-full items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 text-start data-selected:border-input data-selected:bg-accent"
            item={person}
            key={person.value}
            showIndicator={false}
          >
            <Avatar size="md">
              <AvatarImage alt="" src={person.avatar} />
              <AvatarFallback>{person.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <ListboxItemText className="block truncate font-medium text-sm">
                {person.label}
              </ListboxItemText>
              <p className="truncate text-muted-foreground text-xs">
                {person.role}
              </p>
            </div>
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Item>
);

const people = [
  {
    avatar: createWavesAvatar("camille-dubois", "purple"),
    initials: "CD",
    label: "Camille Dubois",
    role: "Product designer",
    value: "camille",
  },
  {
    avatar: createWavesAvatar("edward-lee", "blue"),
    initials: "EL",
    label: "Edward Lee",
    role: "Frontend engineer",
    value: "edward",
  },
  {
    avatar: createWavesAvatar("mila-jensen", "orange"),
    initials: "MJ",
    label: "Mila Jensen",
    role: "Marketing lead",
    value: "mila",
  },
  {
    avatar: createWavesAvatar("dario-rossi", "green-dark"),
    initials: "DR",
    label: "Dario Rossi",
    role: "Product manager",
    value: "dario",
  },
  {
    avatar: createWavesAvatar("aya-tanaka", "amber"),
    initials: "AT",
    label: "Aya Tanaka",
    role: "Research lead",
    value: "aya",
  },
] as const;

export default Example;
