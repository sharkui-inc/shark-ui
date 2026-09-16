"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const spacingOptions = [
  {
    className: "[--space:--spacing(4)]",
    label: "16px",
    value: "4",
  },
  {
    className: "[--space:--spacing(5)]",
    label: "20px",
    value: "5",
  },
  {
    className: "[--space:--spacing(6)]",
    label: "24px",
    value: "6",
  },
  {
    className: "[--space:--spacing(8)]",
    label: "32px",
    value: "8",
  },
];

const CardSpacing = () => {
  const [spacing, setSpacing] = useState("4");
  const selectedSpacing = spacingOptions.find(
    (option) => option.value === spacing
  );

  return (
    <div className="mx-auto grid w-full max-w-sm gap-4">
      <ToggleGroup
        className="justify-center"
        multiple={false}
        onValueChange={(value) => {
          if (value[0]) {
            setSpacing(value[0]);
          }
        }}
        size="sm"
        value={[spacing]}
        variant="outline"
      >
        {spacingOptions.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value}>
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Card className={selectedSpacing?.className}>
        <CardHeader
          description="Enter your email below to login to your account"
          title="Login to your account"
        >
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <Field>
                <FieldLabel htmlFor="email-spacing">Email</FieldLabel>
                <Input
                  id="email-spacing"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </Field>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <FieldLabel htmlFor="password-spacing">Password</FieldLabel>
                  <a
                    className="ms-auto inline-block text-sm underline-offset-4 hover:underline"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password-spacing" required type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full" variant="outline">
            Login with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardSpacing;
