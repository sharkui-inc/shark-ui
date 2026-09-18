"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Button } from "@/registry/react/components/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxContext,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/registry/react/components/combobox";

const ComboboxPopup = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: countries,
    itemToString: (country) => country.label,
  });

  return (
    <Combobox
      className="max-w-xs"
      collection={collection}
      defaultValue={[countries[0].value]}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxTrigger asChild>
        <Button className="w-64 justify-between font-normal" variant="outline">
          <ComboboxContext<Country>>
            {({ selectedItems }) => (
              <span className="truncate">
                {selectedItems[0]?.label ?? "Select country"}
              </span>
            )}
          </ComboboxContext>
        </Button>
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search" showTrigger={false} />
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {collection.items.map((item) => (
            <ComboboxItem item={item} key={item.code}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

const countries = [
  { code: "", continent: "", label: "Select country", value: "" },
  {
    code: "ar",
    continent: "South America",
    label: "Argentina",
    value: "argentina",
  },
  {
    code: "au",
    continent: "Oceania",
    label: "Australia",
    value: "australia",
  },
  {
    code: "br",
    continent: "South America",
    label: "Brazil",
    value: "brazil",
  },
  {
    code: "ca",
    continent: "North America",
    label: "Canada",
    value: "canada",
  },
  { code: "cn", continent: "Asia", label: "China", value: "china" },
  {
    code: "co",
    continent: "South America",
    label: "Colombia",
    value: "colombia",
  },
  { code: "eg", continent: "Africa", label: "Egypt", value: "egypt" },
  { code: "fr", continent: "Europe", label: "France", value: "france" },
  { code: "de", continent: "Europe", label: "Germany", value: "germany" },
  { code: "it", continent: "Europe", label: "Italy", value: "italy" },
  { code: "jp", continent: "Asia", label: "Japan", value: "japan" },
  { code: "ke", continent: "Africa", label: "Kenya", value: "kenya" },
  { code: "mx", continent: "North America", label: "Mexico", value: "mexico" },
  {
    code: "nz",
    continent: "Oceania",
    label: "New Zealand",
    value: "new-zealand",
  },
  { code: "ng", continent: "Africa", label: "Nigeria", value: "nigeria" },
  {
    code: "za",
    continent: "Africa",
    label: "South Africa",
    value: "south-africa",
  },
  {
    code: "kr",
    continent: "Asia",
    label: "South Korea",
    value: "south-korea",
  },
  {
    code: "gb",
    continent: "Europe",
    label: "United Kingdom",
    value: "united-kingdom",
  },
  {
    code: "us",
    continent: "North America",
    label: "United States",
    value: "united-states",
  },
];

type Country = (typeof countries)[number];

export default ComboboxPopup;
