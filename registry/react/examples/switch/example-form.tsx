"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const checked = new FormData(event.currentTarget).has("notifications");
    toast.info({ description: String(checked), title: "Form submitted" });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field orientation="horizontal">
            <Switch name="notifications" />
            <FieldLabel>Enable notifications</FieldLabel>
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
