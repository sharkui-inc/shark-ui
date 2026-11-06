"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import { SearchIcon } from "lucide-react";
import {
  Combobox,
  ComboboxButtonTrigger,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  useComboboxContext,
} from "@/registry/react/components/combobox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const Example = () => {
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
      onInputValueChange={({ inputValue }) => filter(inputValue)}
      selectionBehavior="clear"
    >
      <ComboboxButtonTrigger placeholder="Select country" />
      <ComboboxContent className="max-h-72">
        <ComboboxSearch />
        <ComboboxList>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
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

const ComboboxSearch = () => {
  const { setInputValue } = useComboboxContext();

  return (
    <InputGroup className="bg-input/32 rounded-xl" size="md">
      <ArkCombobox.Input asChild>
        <InputGroupInput
          aria-label="Search countries"
          onBlur={(event) => {
            const { currentTarget, relatedTarget } = event;
            const contentId = currentTarget.getAttribute("aria-controls");
            const content = contentId
              ? currentTarget.ownerDocument.querySelector(
                  `#${CSS.escape(contentId)}`
                )
              : null;
            const isInsideContent =
              relatedTarget instanceof Node && content?.contains(relatedTarget);

            if (!isInsideContent) {
              setInputValue("");
            }
          }}
          placeholder="Search"
        />
      </ArkCombobox.Input>
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" className="opacity-64" />
      </InputGroupAddon>
    </InputGroup>
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

export default Example;
