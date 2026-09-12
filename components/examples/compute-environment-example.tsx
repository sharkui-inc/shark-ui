"use client";

import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Switch } from "@/registry/react/components/switch";

export const ComputeEnvironmentExample = (
  props: React.ComponentProps<"div">
) => {
  const { className, ...rest } = props;
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div className={cn("flex w-full flex-col gap-6", className)} {...rest}>
      <FieldSet>
        <FieldLegend>Compute Environment</FieldLegend>
        <RadioGroup className="w-full" defaultValue="kubernetes">
          <FieldLabel>
            <Field>
              <FieldContent>
                <RadioGroupItem value="kubernetes">Kubernetes</RadioGroupItem>
                <FieldDescription>
                  Managed containers and orchestration.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
          <FieldLabel>
            <Field>
              <FieldContent>
                <RadioGroupItem value="vm">Virtual Machine</RadioGroupItem>
                <FieldDescription>Traditional VM workloads.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </RadioGroup>
      </FieldSet>

      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel>Number of GPUs</FieldLabel>
          <FieldDescription>You can add more later.</FieldDescription>
        </FieldContent>
        <NumberInput className="max-w-40" defaultValue="4" max={99} min={1}>
          <NumberInputGroup>
            <NumberInputDecrement />
            <NumberInputInput />
            <NumberInputIncrement />
          </NumberInputGroup>
        </NumberInput>
      </Field>

      <Field orientation="horizontal" reverse>
        <Switch />
        <FieldLabel>Wallpaper Tinting</FieldLabel>
      </Field>

      <Button
        className="self-start"
        isLoading={isSaving}
        onClick={async () => {
          setIsSaving(true);
          await new Promise((resolve) => {
            window.setTimeout(resolve, 600);
          });
          setIsSaving(false);
          toast.success({
            description: "Compute settings are saved in this preview.",
            title: "Config saved",
          });
        }}
      >
        Save config
      </Button>
    </div>
  );
};
