"use client";

import { Field, FieldDescription } from "@/registry/react/components/field";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

const RadioGroupRtl = () => (
  <RadioGroup className="w-fit" defaultValue="comfortable">
    <Field>
      <RadioGroupItem value="default">افتراضي</RadioGroupItem>
      <FieldDescription>تباعد قياسي لمعظم حالات الاستخدام.</FieldDescription>
    </Field>
    <Field>
      <RadioGroupItem value="comfortable">مريح</RadioGroupItem>
      <FieldDescription>مساحة أكبر بين العناصر.</FieldDescription>
    </Field>
    <Field>
      <RadioGroupItem value="compact">مضغوط</RadioGroupItem>
      <FieldDescription>تباعد أدنى للتخطيطات الكثيفة.</FieldDescription>
    </Field>
  </RadioGroup>
);

export default RadioGroupRtl;
