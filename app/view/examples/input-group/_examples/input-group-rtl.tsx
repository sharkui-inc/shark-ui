"use client";

import { SearchIcon } from "lucide-react";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";
import { LocaleProvider } from "@/registry/react/components/locale";
import { Spinner } from "@/registry/react/components/spinner";

const InputGroupRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="grid w-full max-w-sm gap-6">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="بحث..." />
          <InputGroupAddon>
            <SearchIcon aria-hidden="true" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">١٢ نتيجة</InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="جاري البحث..." />
          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="جاري حفظ التغييرات..." />
          <InputGroupAddon align="inline-end">
            <InputGroupText>جاري الحفظ...</InputGroupText>
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <FieldGroup className="max-w-sm">
          <Field>
            <FieldLabel htmlFor="rtl-textarea">منطقة النص</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="rtl-textarea"
                placeholder="اكتب تعليقًا..."
              />
              <InputGroupAddon align="block-end">
                <InputGroupText>٠/٢٨٠</InputGroupText>
                <InputGroupButton
                  className="ms-auto"
                  size="sm"
                  variant="default"
                >
                  نشر
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>تذييل موضع أسفل منطقة النص.</FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </LocaleProvider>
  </div>
);

export default InputGroupRtl;
