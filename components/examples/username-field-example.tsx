"use client";

import { useEffect, useState } from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const AVAILABILITY_DESCRIPTION = {
  available: "Available.",
  idle: "Shown on your public profile.",
  taken: "That name is taken. Try another.",
} as const;

export const UsernameFieldExample = (props: React.ComponentProps<"div">) => {
  const [name, setName] = useState("");
  const [availability, setAvailability] = useState<
    "available" | "idle" | "taken"
  >("idle");

  useEffect(() => {
    const trimmed = name.trim();

    if (trimmed.length === 0) {
      setAvailability("idle");
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setAvailability(
        trimmed.toLowerCase().includes("admin") ? "taken" : "available"
      );
    }, 400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [name]);

  return (
    <Field invalid={availability === "taken"} {...props}>
      <FieldLabel>Name</FieldLabel>
      <Input
        onChange={(event) => setName(event.target.value)}
        placeholder="Jane Doe"
        value={name}
      />
      <FieldDescription>
        {AVAILABILITY_DESCRIPTION[availability]}
      </FieldDescription>
    </Field>
  );
};
