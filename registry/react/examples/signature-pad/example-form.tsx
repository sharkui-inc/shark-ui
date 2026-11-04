"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import { Field } from "@/registry/react/components/field";
import {
  SignaturePad,
  SignaturePadLabel,
  useSignaturePadContext,
} from "@/registry/react/components/signature-pad";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const signatureInputRef = React.useRef<HTMLInputElement>(null);
  const previewRef = React.useRef<(() => Promise<string>) | null>(null);

  const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const signature = new FormData(event.currentTarget).get("signature");
    const strokeCount = JSON.parse(String(signature ?? "[]")).length;

    const preview = strokeCount ? await previewRef.current?.() : null;

    toast.info({
      description: preview ? (
        <img
          alt="Submitted signature"
          className="mt-1.5 h-16 w-56 object-contain dark:invert"
          height={64}
          src={preview}
          width={224}
        />
      ) : (
        "No signature added"
      ),
      title: "Form submitted",
    });
  };

  return (
    <Card asChild className="w-full max-w-md pb-0">
      <form onSubmit={onSubmit}>
        <Field className="gap-0">
          <SignaturePad
            className={cn(
              "h-auto min-h-0 gap-0",
              "[&_[data-slot=signature-pad-control]]:order-2",
              "[&_[data-slot=signature-pad-control]]:h-40",
              "[&_[data-slot=signature-pad-control]]:min-h-40",
              "[&_[data-slot=signature-pad-control]]:rounded-none",
              "[&_[data-slot=signature-pad-control]]:border-x-0",
              "[&_[data-slot=signature-pad-control]]:border-b-0",
              "[&_[data-slot=signature-pad-control]]:shadow-none",
              "[&_[data-slot=signature-pad-clear]]:hidden"
            )}
            onDraw={({ paths }) => {
              if (signatureInputRef.current) {
                signatureInputRef.current.value = JSON.stringify(paths);
              }
            }}
          >
            <CardContent className="order-1 pb-4">
              <SignaturePadLabel>Signature</SignaturePadLabel>
            </CardContent>
            <CardFooter className="order-3 justify-end">
              <SignaturePadClearButton
                onClear={() => {
                  if (signatureInputRef.current) {
                    signatureInputRef.current.value = "[]";
                  }
                }}
                previewRef={previewRef}
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
        </Field>
      </form>
    </Card>
  );
};

interface SignaturePadClearButtonProps {
  onClear: () => void;
  previewRef: React.RefObject<(() => Promise<string>) | null>;
}

const SignaturePadClearButton = (props: SignaturePadClearButtonProps) => {
  const { onClear, previewRef } = props;

  const signaturePad = useSignaturePadContext();

  previewRef.current = () => signaturePad.getDataUrl("image/png");

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
