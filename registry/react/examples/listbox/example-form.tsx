"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState<string[]>([]);

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
            <FieldLabel>Favorite size</FieldLabel>
            <Listbox
              collection={collection}
              onValueChange={({ value: nextValue }) => setValue(nextValue)}
              value={value}
            >
              <ListboxContent className="rounded-lg border shadow-xs/4">
                {collection.items.map((item) => (
                  <ListboxItem item={item} key={item.value}>
                    <ListboxItemText>{item.label}</ListboxItemText>
                  </ListboxItem>
                ))}
              </ListboxContent>
            </Listbox>
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

const collection = createListCollection({
  items: [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
  ],
});

export default Example;
