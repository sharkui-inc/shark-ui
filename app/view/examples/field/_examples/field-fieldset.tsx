"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const FieldFieldset = () => (
  <FieldSet className="w-full max-w-sm">
    <FieldLegend>Address Information</FieldLegend>
    <FieldDescription>
      We need your address to deliver your order.
    </FieldDescription>
    <FieldGroup>
      <Field>
        <FieldLabel>Street Address</FieldLabel>
        <Input placeholder="123 Main St" type="text" />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field>
          <FieldLabel>City</FieldLabel>
          <Input placeholder="New York" type="text" />
        </Field>
        <Field>
          <FieldLabel>Postal Code</FieldLabel>
          <Input placeholder="90502" type="text" />
        </Field>
      </div>
    </FieldGroup>
  </FieldSet>
);

export default FieldFieldset;
