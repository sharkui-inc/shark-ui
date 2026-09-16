"use client";

import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/react/components/field";
import { LocaleProvider } from "@/registry/react/components/locale";

const CheckboxRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <FieldGroup className="w-full max-w-sm">
        <Field orientation="horizontal">
          <Checkbox />
          <FieldLabel>قبول الشروط والأحكام</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox defaultChecked />
          <FieldContent>
            <FieldLabel>قبول الشروط والأحكام</FieldLabel>
            <FieldDescription>
              بالنقر على هذا المربع، فإنك توافق على الشروط.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field disabled orientation="horizontal">
          <Checkbox disabled />
          <FieldLabel>تفعيل الإشعارات</FieldLabel>
        </Field>
        <FieldLabel>
          <Field orientation="horizontal">
            <Checkbox />
            <FieldContent>
              <FieldTitle>تفعيل الإشعارات</FieldTitle>
              <FieldDescription>
                يمكنك تفعيل أو إلغاء تفعيل الإشعارات في أي وقت.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldLabel>
      </FieldGroup>
    </LocaleProvider>
  </div>
);

export default CheckboxRtl;
