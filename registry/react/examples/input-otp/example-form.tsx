"use client";

import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field } from "@/registry/react/components/field";
import {
  InputOTP,
  InputOTPLabel,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/react/components/input-otp";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const [value, setValue] = React.useState<string[]>([]);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submittedValue = new FormData(event.currentTarget).get("code");
    toast.info({
      description: String(submittedValue || "No code entered"),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <CardContent>
          <Field>
            <InputOTP
              name="code"
              onValueChange={({ value: nextValue }) => setValue(nextValue)}
              value={value}
            >
              <InputOTPLabel>Verification code</InputOTPLabel>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTP>
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

export default Example;
