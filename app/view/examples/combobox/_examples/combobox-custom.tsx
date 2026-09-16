"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/react/components/item";

const ComboboxCustom = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: countries.filter((country) => country.code !== ""),
  });

  return (
    <Combobox
      className="w-full max-w-64"
      collection={collection}
      itemToStringValue={(country) => country.label}
      itemToValue={(country) => country.value}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxInput placeholder="Search countries..." />
      <ComboboxContent>
        <ComboboxEmpty>No countries found.</ComboboxEmpty>
        <ComboboxList>
          {collection.items.map((country) => (
            <ComboboxItem item={country} key={country.code}>
              <Item className="p-0 [--space:--spacing(2)]">
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap">
                    {country.label}
                  </ItemTitle>
                  <ItemDescription>
                    {country.continent} ({country.code})
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

const countries = [
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

export default ComboboxCustom;
