"use client";

import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const FieldRadio = () => (
  <FieldSet className="w-full max-w-xs">
    <FieldLegend variant="label">Subscription Plan</FieldLegend>
    <FieldDescription>
      Yearly and lifetime plans offer significant savings.
    </FieldDescription>
    <RadioGroup defaultValue="monthly">
      <Field orientation="horizontal">
        <RadioGroupItem id="plan-monthly" value="monthly">
          Monthly ($9.99/month)
        </RadioGroupItem>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="plan-yearly" value="yearly">
          Yearly ($99.99/year)
        </RadioGroupItem>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem id="plan-lifetime" value="lifetime">
          Lifetime ($299.99)
        </RadioGroupItem>
      </Field>
    </RadioGroup>
  </FieldSet>
);

export default FieldRadio;
