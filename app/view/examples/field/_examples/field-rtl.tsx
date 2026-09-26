"use client";

import { createListCollection } from "@ark-ui/react";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import { Textarea } from "@/registry/react/components/textarea";

const FieldRtl = () => (
  <div className="w-full max-w-md py-6">
    <form>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>طريقة الدفع</FieldLegend>
          <FieldDescription>جميع المعاملات آمنة ومشفرة</FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel>الاسم على البطاقة</FieldLabel>
              <Input placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel>رقم البطاقة</FieldLabel>
              <Input placeholder="1234 5678 9012 3456" required />
              <FieldDescription>
                أدخل رقم البطاقة المكون من 16 رقمًا
              </FieldDescription>
            </Field>
            <div className="grid grid-cols-3 gap-4">
              <Field>
                <FieldLabel>الشهر</FieldLabel>
                <Select collection={monthCollection}>
                  <SelectTrigger>
                    <SelectValue placeholder="ش.ش" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {monthCollection.items.map((item) => (
                        <SelectItem item={item} key={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>السنة</FieldLabel>
                <Select collection={yearCollection}>
                  <SelectTrigger>
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {yearCollection.items.map((item) => (
                        <SelectItem item={item} key={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>CVV</FieldLabel>
                <Input placeholder="123" required />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>عنوان الفوترة</FieldLegend>
          <FieldDescription>
            عنوان الفوترة المرتبط بطريقة الدفع الخاصة بك
          </FieldDescription>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox defaultChecked />
              <FieldLabel className="font-normal">نفس عنوان الشحن</FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>تعليقات</FieldLabel>
              <Textarea
                className="resize-none"
                placeholder="أضف أي تعليقات إضافية"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">إرسال</Button>
          <Button type="button" variant="outline">
            إلغاء
          </Button>
        </Field>
      </FieldGroup>
    </form>
  </div>
);

const monthCollection = createListCollection({
  items: [
    { label: "٠١", value: "01" },
    { label: "٠٢", value: "02" },
    { label: "٠٣", value: "03" },
    { label: "٠٤", value: "04" },
    { label: "٠٥", value: "05" },
    { label: "٠٦", value: "06" },
    { label: "٠٧", value: "07" },
    { label: "٠٨", value: "08" },
    { label: "٠٩", value: "09" },
    { label: "١٠", value: "10" },
    { label: "١١", value: "11" },
    { label: "١٢", value: "12" },
  ],
});

const yearCollection = createListCollection({
  items: [
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
    { label: "2026", value: "2026" },
    { label: "2027", value: "2027" },
    { label: "2028", value: "2028" },
    { label: "2029", value: "2029" },
  ],
});

export default FieldRtl;
