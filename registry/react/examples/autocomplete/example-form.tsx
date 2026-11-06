"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import React from "react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState<string[]>([]);

  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info({
      description: value.join(", ") || "No selection",
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <FieldLabel>Favorite fruit</FieldLabel>
            <Autocomplete
              collection={collection}
              onInputValueChange={({ inputValue }) => filter(inputValue)}
              onValueChange={({ value: nextValue }) => setValue(nextValue)}
              value={value}
            >
              <AutocompleteInput placeholder="Select a fruit" />
              <AutocompleteContent>
                <AutocompleteEmpty />
                <AutocompleteList>
                  {collection.items.map((item) => (
                    <AutocompleteItem item={item} key={item.value}>
                      {item.label}
                    </AutocompleteItem>
                  ))}
                </AutocompleteList>
              </AutocompleteContent>
            </Autocomplete>
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <Button onClick={() => setValue([])} type="button" variant="outline">
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

export default Example;
