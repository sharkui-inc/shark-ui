"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { MapPinIcon, PlaneIcon, XIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";
import { DialogClose } from "@/registry/react/components/dialog";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (airport) => airport.group,
    initialItems: airports,
  });

  return (
    <CommandDialog>
      <CommandDialogTrigger asChild>
        <Button variant="outline">Open Command</Button>
      </CommandDialogTrigger>

      <CommandDialogContent
        description="Search and select a departure airport."
        fill
        title="Where from?"
      >
        <div className="flex items-start justify-between gap-4 px-3 pt-4">
          <div className="min-w-0">
            <h2 className="font-heading font-semibold text-xl tracking-tight">
              Where from?
            </h2>
          </div>
          <DialogClose asChild>
            <Button
              aria-label="Close"
              className="shrink-0 rounded-full"
              size="icon-md"
              variant="ghost"
            >
              <XIcon aria-hidden />
            </Button>
          </DialogClose>
        </div>

        <Command
          className="min-h-0 rounded-none border-0 bg-transparent **:data-[slot=combobox-control]:m-3"
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
        >
          <CommandInput className="bg-muted/48" placeholder="Origin" />

          <CommandContent>
            <CommandEmpty>No airports found.</CommandEmpty>
            <CommandList>
              {collection.group().map(([group, items]) => (
                <CommandGroup className="px-2 pb-2" heading={group} key={group}>
                  {items.map((airport) => (
                    <CommandItem
                      className="gap-3 rounded-xl px-3 py-3"
                      item={airport}
                      key={airport.value}
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                        {airport.value === "nearby" ? (
                          <MapPinIcon aria-hidden />
                        ) : (
                          <PlaneIcon aria-hidden />
                        )}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <span className="font-medium leading-tight">
                          {airport.name}
                        </span>
                        <span className="truncate text-muted-foreground text-sm">
                          {airport.country
                            ? `${airport.city}, ${airport.country}`
                            : airport.city}
                        </span>
                      </span>
                      {airport.code ? (
                        <CommandShortcut className="rounded-md border bg-muted px-2 py-1 font-mono text-xs tracking-wide">
                          {airport.code}
                        </CommandShortcut>
                      ) : null}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>

          <CommandFooter className="gap-4 px-5 py-3.5 sm:px-6">
            <span className="text-start text-sm leading-normal">
              Sign in to see your recent searches
            </span>
            <Button className="shrink-0" size="sm" variant="outline">
              Sign in
            </Button>
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};

const airports = [
  {
    city: "Nearby airports",
    code: "",
    country: "",
    group: "Suggestions",
    label: "Nearby airports near me",
    name: "Near me",
    value: "nearby",
  },
  {
    city: "León",
    code: "BJX",
    country: "Mexico",
    group: "Recent searches",
    label: "Del Bajío León Mexico BJX",
    name: "Del Bajío",
    value: "bjx",
  },
  {
    city: "Mexico City",
    code: "MEX",
    country: "Mexico",
    group: "Recent searches",
    label: "Mexico City Mexico MEX",
    name: "Mexico City",
    value: "mex",
  },
  {
    city: "Guadalajara",
    code: "GDL",
    country: "Mexico",
    group: "Airports",
    label: "Guadalajara Mexico GDL",
    name: "Miguel Hidalgo y Costilla",
    value: "gdl",
  },
  {
    city: "São Paulo",
    code: "GRU",
    country: "Brazil",
    group: "Airports",
    label: "São Paulo Brazil GRU",
    name: "Guarulhos",
    value: "gru",
  },
  {
    city: "Lisbon",
    code: "LIS",
    country: "Portugal",
    group: "Airports",
    label: "Lisbon Portugal LIS",
    name: "Humberto Delgado",
    value: "lis",
  },
  {
    city: "Los Angeles",
    code: "LAX",
    country: "United States",
    group: "Airports",
    label: "Los Angeles United States LAX",
    name: "Los Angeles International",
    value: "lax",
  },
  {
    city: "New York",
    code: "JFK",
    country: "United States",
    group: "Airports",
    label: "New York United States JFK",
    name: "John F. Kennedy International",
    value: "jfk",
  },
];

export default Example;
