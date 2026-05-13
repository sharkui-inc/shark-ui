"use client";

import { Checkbox, CheckboxGroup } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";

const Example = () => (
  <FieldGroup className="w-full max-w-xs">
    <FieldSet>
      <FieldLegend variant="label">Newsletter</FieldLegend>
      <FieldDescription>
        Choose how you want to receive updates about new features and product
        releases.
      </FieldDescription>
      <Field className="w-full max-w-xs" orientation="horizontal">
        <Checkbox defaultChecked disabled value="weekly" />
        <FieldLabel>Weekly digest</FieldLabel>
      </Field>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend variant="label">Updates</FieldLegend>
      <FieldDescription>
        Get notified about important account activity.{" "}
        <a href="#">View activity log</a>
      </FieldDescription>
      <CheckboxGroup>
        <Field className="w-full max-w-xs" orientation="horizontal">
          <Checkbox value="security" />
          <FieldLabel>Security alerts</FieldLabel>
        </Field>
        <Field className="w-full max-w-xs" orientation="horizontal">
          <Checkbox value="billing" />
          <FieldLabel>Billing reminders</FieldLabel>
        </Field>
      </CheckboxGroup>
    </FieldSet>
  </FieldGroup>
);

export default Example;
