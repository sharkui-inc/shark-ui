"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Switch } from "@/registry/react/components/switch";

const SwitchRtl = () => (
  <Field className="max-w-sm" orientation="horizontal">
    <FieldContent>
      <FieldLabel>المشاركة عبر الأجهزة</FieldLabel>
      <FieldDescription>
        يتم مشاركة التركيز عبر الأجهزة، ويتم إيقاف تشغيله عند مغادرة التطبيق.
      </FieldDescription>
    </FieldContent>
    <Switch />
  </Field>
);

export default SwitchRtl;
