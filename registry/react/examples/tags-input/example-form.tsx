"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  TagsInput,
  TagsInputContext,
  TagsInputItem,
} from "@/registry/react/components/tags-input";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("frameworks");
    toast.info({
      description: String(value || "No tags added"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <FieldLabel>Frameworks</FieldLabel>
            <TagsInput
              className="w-full"
              defaultValue={[]}
              name="frameworks"
              placeholder="Add a framework"
            >
              <TagsInputContext>
                {({ value: tags }) =>
                  tags.map((tag, index) => (
                    <TagsInputItem index={index} key={tag} value={tag}>
                      {tag}
                    </TagsInputItem>
                  ))
                }
              </TagsInputContext>
            </TagsInput>
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="reset" variant="outline">
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default Example;
