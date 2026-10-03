"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const InputRtl = () => (
  <Field className="w-full max-w-64">
    <FieldLabel>مفتاح API</FieldLabel>
    <Input placeholder="sk-..." type="password" />
    <FieldDescription>مفتاح API الخاص بك مشفر ومخزن بأمان.</FieldDescription>
  </Field>
);

export default InputRtl;
