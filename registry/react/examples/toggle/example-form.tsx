"use client";

import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { toast } from "@/registry/react/components/toast";
import { Toggle } from "@/registry/react/components/toggle";

const Example = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const pressedInputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = new FormData(event.currentTarget).get("compactMode");
    toast.info({
      description: String(value ?? "false"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit} ref={formRef}>
        <CardContent>
          <Toggle
            aria-label="Enable compact mode"
            defaultPressed={false}
            onPressedChange={(pressed) => {
              if (pressedInputRef.current) {
                pressedInputRef.current.value = String(pressed);
              }
            }}
            variant="outline"
          >
            Compact mode
          </Toggle>
          <input
            defaultValue="false"
            name="compactMode"
            ref={pressedInputRef}
            type="hidden"
          />
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            onClick={() => {
              const toggle = formRef.current?.querySelector<HTMLButtonElement>(
                '[data-slot="toggle"]'
              );
              if (toggle?.getAttribute("aria-pressed") === "true") {
                toggle.click();
              }
            }}
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
