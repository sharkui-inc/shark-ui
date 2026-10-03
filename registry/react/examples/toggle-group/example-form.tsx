"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { toast } from "@/registry/react/components/toast";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const Example = () => {
  const [value, setValue] = React.useState(initialValue);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast.info({
      description: value.join(", ") || "No formatting selected",
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardHeader>
          <h3
            className="font-heading font-semibold text-card-foreground text-xl"
            id="formatting-label"
          >
            Text formatting
          </h3>
          <p
            className="text-muted-foreground text-sm"
            id="formatting-description"
          >
            Choose one or more styles to apply.
          </p>
        </CardHeader>
        <CardContent>
          <ToggleGroup
            aria-describedby="formatting-description"
            aria-labelledby="formatting-label"
            className="flex-wrap"
            onValueChange={({ value: newValue }) => setValue(newValue)}
            spacing={2}
            value={value}
            variant="outline"
          >
            <ToggleGroupItem
              aria-label="Bold"
              className="gap-2 px-3"
              value="bold"
            >
              <BoldIcon aria-hidden="true" />
              <span>Bold</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Italic"
              className="gap-2 px-3"
              value="italic"
            >
              <ItalicIcon aria-hidden="true" />
              <span>Italic</span>
            </ToggleGroupItem>
            <ToggleGroupItem
              aria-label="Underline"
              className="gap-2 px-3"
              value="underline"
            >
              <UnderlineIcon aria-hidden="true" />
              <span>Underline</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
        <CardFooter className="flex-col-reverse sm:flex-row sm:justify-end">
          <Button
            className="w-full sm:w-auto"
            onClick={() => setValue([])}
            type="button"
            variant="outline"
          >
            Clear
          </Button>
          <Button className="w-full sm:w-auto" type="submit">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const initialValue = ["bold"];

export default Example;
