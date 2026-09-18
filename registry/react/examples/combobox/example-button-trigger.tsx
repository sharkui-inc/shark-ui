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
    initialItems,
  });

  return (
    <div className="flex justify-center">
      <Combobox
        collection={collection}
        defaultValue={["gpt-4.1"]}
        inputBehavior="autohighlight"
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        positioning={{ placement: "top" }}
        selectionBehavior="clear"
      >
        <ComboboxButtonTrigger
          placeholder="Select model"
          showTrigger={false}
          size="sm"
          variant="ghost"
        />
        <ComboboxContent className="max-h-72 w-52">
          <ComboboxSearch />
          <ComboboxList>
            <ComboboxEmpty>No models found.</ComboboxEmpty>
            {collection.items.map((item) => (
              <ComboboxItem item={item} key={item.value}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
};

const ComboboxSearch = () => {
  const { setInputValue } = useComboboxContext();

  return (
    <InputGroup className="mb-2 rounded-xl bg-input/32" size="md">
      <ArkCombobox.Input asChild>
        <InputGroupInput
          aria-label="Search options"
          onBlur={(event) => {
            const { currentTarget, relatedTarget } = event;
            const contentId = currentTarget.getAttribute("aria-controls");
            const content = contentId
              ? currentTarget.ownerDocument.getElementById(contentId)
              : null;
            const isInsideContent =
              relatedTarget instanceof Node && content?.contains(relatedTarget);

            if (!isInsideContent) {
              setInputValue("");
            }
          }}
          placeholder="Search options"
        />
      </ArkCombobox.Input>
      <InputGroupAddon>
        <SearchIcon aria-hidden="true" className="opacity-64" />
      </InputGroupAddon>
    </InputGroup>
  );
};

const initialItems = [
  { label: "GPT-4.1", value: "gpt-4.1" },
  { label: "GPT-4.1 Mini", value: "gpt-4.1-mini" },
  { label: "Claude Sonnet 4", value: "claude-sonnet-4" },
  { label: "Claude Haiku 4.5", value: "claude-haiku-4.5" },
  { label: "Gemini 2.5 Pro", value: "gemini-2.5-pro" },
  { label: "Gemini 2.5 Flash", value: "gemini-2.5-flash" },
];

export default Example;
