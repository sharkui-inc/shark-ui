"use client";

import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";

const FieldCheckbox = () => (
  <FieldGroup className="w-full max-w-xs">
    <FieldSet>
      <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
      <FieldDescription>
        Select the items you want to show on the desktop.
      </FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel className="font-normal">Hard disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel className="font-normal">External disks</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel className="font-normal">CDs, DVDs, and iPods</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel className="font-normal">Connected servers</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <Field orientation="horizontal">
      <Checkbox defaultChecked />
      <FieldContent>
        <FieldLabel>Sync Desktop &amp; Documents folders</FieldLabel>
        <FieldDescription>
          Your Desktop &amp; Documents folders are being synced with iCloud
          Drive. You can access them from other devices.
        </FieldDescription>
      </FieldContent>
    </Field>
  </FieldGroup>
);

export default FieldCheckbox;
