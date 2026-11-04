"use client";

import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const FieldChoiceCard = () => (
  <FieldGroup className="w-full max-w-xs">
    <FieldSet>
      <FieldLegend variant="label">Compute Environment</FieldLegend>
      <FieldDescription>
        Select the compute environment for your cluster.
      </FieldDescription>
      <RadioGroup defaultValue="kubernetes">
        <RadioGroupItem
          className="border-input data-[state=checked]:border-primary data-[state=checked]:bg-primary/8 w-full flex-row-reverse items-start gap-3 rounded-xl border p-3 shadow-xs/4"
          value="kubernetes"
        >
          <FieldTitle>Kubernetes</FieldTitle>
          <FieldDescription>
            Run GPU workloads on a K8s cluster.
          </FieldDescription>
        </RadioGroupItem>
        <RadioGroupItem
          className="border-input data-[state=checked]:border-primary data-[state=checked]:bg-primary/8 w-full flex-row-reverse items-start gap-3 rounded-xl border p-3 shadow-xs/4"
          value="vm"
        >
          <FieldTitle>Virtual Machine</FieldTitle>
          <FieldDescription>
            Access a cluster to run GPU workloads.
          </FieldDescription>
        </RadioGroupItem>
      </RadioGroup>
    </FieldSet>
  </FieldGroup>
);

export default FieldChoiceCard;
