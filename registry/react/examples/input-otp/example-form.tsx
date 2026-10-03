"use client";

import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  InputOTP,
  InputOTPSeparator,
  InputOTPSlot,
  useInputOTPContext,
} from "@/registry/react/components/input-otp";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const resetRef = React.useRef<(() => void) | null>(null);

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
            <FieldLabel>Verification code</FieldLabel>
            <InputOTP defaultValue={[]} name="code">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPReset resetRef={resetRef} />
            </InputOTP>
          </Field>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            onClick={() => resetRef.current?.()}
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

const InputOTPReset = (props: {
  resetRef: { current: (() => void) | null };
}) => {
  const { resetRef } = props;
  const inputOTP = useInputOTPContext();

  React.useEffect(() => {
    resetRef.current = () => inputOTP.setValue([]);
    return () => {
      resetRef.current = null;
    };
  }, [inputOTP, resetRef]);

  return null;
};

export default Example;
