"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { LocaleProvider } from "@/registry/react/components/locale";
import { Switch } from "@/registry/react/components/switch";

const SwitchRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Field className="max-w-sm" orientation="horizontal">
        <FieldContent>
          <FieldLabel>المشاركة عبر الأجهزة</FieldLabel>
          <FieldDescription>
            يتم مشاركة التركيز عبر الأجهزة، ويتم إيقاف تشغيله عند مغادرة
            التطبيق.
          </FieldDescription>
        </FieldContent>
        <Switch />
      </Field>
    </LocaleProvider>
  </div>
);

export default SwitchRtl;
