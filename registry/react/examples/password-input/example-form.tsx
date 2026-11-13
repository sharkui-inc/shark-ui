"use client";

import type React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { PasswordInput } from "@/registry/react/components/password-input";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("password");
    toast.info({
      description: String(value || "Empty"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <FieldLabel>Password</FieldLabel>
            <PasswordInput
              name="password"
              placeholder="Type your password here"
            />
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
