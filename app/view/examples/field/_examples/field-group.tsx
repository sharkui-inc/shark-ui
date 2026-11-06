"use client";

import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";

const FieldGroupExample = () => (
  <FieldGroup className="w-full max-w-xs">
    <FieldSet>
      <FieldLabel>Responses</FieldLabel>
      <FieldDescription>
        Get notified when ChatGPT responds to requests that take time, like
        research or image generation.
      </FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        <Field orientation="horizontal">
          <Checkbox defaultChecked disabled />
          <FieldLabel className="font-normal">Push notifications</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLabel>Tasks</FieldLabel>
      <FieldDescription>
        Get notified when tasks you&apos;ve created have updates.{" "}
        <a href="#">Manage tasks</a>
      </FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel className="font-normal">Push notifications</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel className="font-normal">Email notifications</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  </FieldGroup>
);

export default FieldGroupExample;
