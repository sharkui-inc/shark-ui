"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { LocaleProvider } from "@/registry/react/components/locale";
import { Textarea } from "@/registry/react/components/textarea";

const TextareaRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Field className="w-full max-w-xs" dir="rtl">
        <FieldLabel dir="rtl" htmlFor="feedback">
          التعليقات
        </FieldLabel>
        <Textarea
          dir="rtl"
          id="feedback"
          placeholder="تعليقاتك تساعدنا على التحسين..."
          rows={4}
        />
        <FieldDescription dir="rtl">شاركنا أفكارك حول خدمتنا.</FieldDescription>
      </Field>
    </LocaleProvider>
  </div>
);

export default TextareaRtl;
