"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { LocaleProvider } from "@/registry/react/components/locale";

const InputRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Field className="w-full max-w-64" dir="rtl">
        <FieldLabel htmlFor="input-rtl-api-key">مفتاح API</FieldLabel>
        <Input
          dir="rtl"
          id="input-rtl-api-key"
          placeholder="sk-..."
          type="password"
        />
        <FieldDescription>
          مفتاح API الخاص بك مشفر ومخزن بأمان.
        </FieldDescription>
      </Field>
    </LocaleProvider>
  </div>
);

export default InputRtl;
