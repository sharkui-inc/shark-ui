"use client";

import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  Editable,
  EditableArea,
  EditableInput,
  EditablePreview,
} from "@/registry/react/components/editable";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState("Onda");

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.info({ description: value || "Empty", title: "Form submitted" });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <FieldLabel>Display name</FieldLabel>
            <Editable
              activationMode="click"
              onValueChange={({ value: nextValue }) => setValue(nextValue)}
              value={value}
            >
              <EditableArea>
                <EditableInput asChild>
                  <Input />
                </EditableInput>
                <EditablePreview />
              </EditableArea>
            </Editable>
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            onClick={() => setValue("Onda")}
            type="button"
            variant="outline"
          >
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
