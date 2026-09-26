"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/react/components/field";
import { Textarea } from "@/registry/react/components/textarea";

const TextareaRtl = () => (
  <Field className="w-full max-w-xs">
    <FieldLabel>التعليقات</FieldLabel>
    <Textarea placeholder="تعليقاتك تساعدنا على التحسين..." rows={4} />
    <FieldDescription>شاركنا أفكارك حول خدمتنا.</FieldDescription>
  </Field>
);

export default TextareaRtl;
