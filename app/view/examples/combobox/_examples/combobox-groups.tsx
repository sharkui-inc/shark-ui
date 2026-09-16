"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const ComboboxGroups = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.region,
    initialItems,
  });

  return (
    <Combobox
      className="w-full max-w-64"
      collection={collection}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent className="w-60">
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {collection.group().map(([region, group]) => (
            <ComboboxGroup heading={region} key={region}>
              {group.map((item) => (
                <ComboboxItem item={item} key={item.value}>
                  {item.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

const initialItems = [
  { label: "(GMT-5) New York", region: "Americas", value: "new-york" },
  { label: "(GMT-8) Los Angeles", region: "Americas", value: "los-angeles" },
  { label: "(GMT-6) Chicago", region: "Americas", value: "chicago" },
  { label: "(GMT-5) Toronto", region: "Americas", value: "toronto" },
  { label: "(GMT-8) Vancouver", region: "Americas", value: "vancouver" },
  { label: "(GMT-3) São Paulo", region: "Americas", value: "sao-paulo" },
  { label: "(GMT+0) London", region: "Europe", value: "london" },
  { label: "(GMT+1) Paris", region: "Europe", value: "paris" },
  { label: "(GMT+1) Berlin", region: "Europe", value: "berlin" },
  { label: "(GMT+1) Rome", region: "Europe", value: "rome" },
  { label: "(GMT+1) Madrid", region: "Europe", value: "madrid" },
  { label: "(GMT+1) Amsterdam", region: "Europe", value: "amsterdam" },
  { label: "(GMT+9) Tokyo", region: "Asia/Pacific", value: "tokyo" },
  { label: "(GMT+8) Shanghai", region: "Asia/Pacific", value: "shanghai" },
  { label: "(GMT+8) Singapore", region: "Asia/Pacific", value: "singapore" },
  { label: "(GMT+4) Dubai", region: "Asia/Pacific", value: "dubai" },
  { label: "(GMT+11) Sydney", region: "Asia/Pacific", value: "sydney" },
  { label: "(GMT+9) Seoul", region: "Asia/Pacific", value: "seoul" },
];

export default ComboboxGroups;
