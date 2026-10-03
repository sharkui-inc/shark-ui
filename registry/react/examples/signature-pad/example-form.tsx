"use client";

import React from "react";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  SignaturePad,
  SignaturePadLabel,
  useSignaturePadContext,
} from "@/registry/react/components/signature-pad";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const signatureInputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signature = new FormData(event.currentTarget).get("signature");
    const strokeCount = JSON.parse(String(signature ?? "[]")).length;
    toast.info({
      description: strokeCount
        ? `Signature with ${strokeCount} strokes`
        : "No signature added",
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md">
      <form onSubmit={onSubmit}>
        <SignaturePad
          className="h-auto min-h-0 gap-0 [&_[data-slot=signature-pad-control]]:order-2 [&_[data-slot=signature-pad-control]]:h-40 [&_[data-slot=signature-pad-control]]:min-h-40"
          onDraw={({ paths }) => {
            if (signatureInputRef.current) {
              signatureInputRef.current.value = JSON.stringify(paths);
            }
          }}
        >
          <CardContent className="order-1">
            <SignaturePadLabel>Signature</SignaturePadLabel>
          </CardContent>
          <CardFooter className="order-3 justify-end">
            <SignaturePadClearButton
              onClear={() => {
                if (signatureInputRef.current) {
                  signatureInputRef.current.value = "[]";
                }
              }}
            />
            <input
              defaultValue="[]"
              name="signature"
              ref={signatureInputRef}
              type="hidden"
            />
            <Button type="submit">Submit</Button>
          </CardFooter>
        </SignaturePad>
      </form>
    </Card>
  );
};

const SignaturePadClearButton = (props: { onClear: () => void }) => {
  const { onClear } = props;
  const signaturePad = useSignaturePadContext();

  return (
    <Button
      onClick={() => {
        signaturePad.clear();
        onClear();
      }}
      type="button"
      variant="outline"
    >
      Clear
    </Button>
  );
};

export default Example;
