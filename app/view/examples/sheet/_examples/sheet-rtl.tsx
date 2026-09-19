"use client";

import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const SheetRtl = () => (
  <div className="flex w-full justify-center">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">فتح</Button>
      </SheetTrigger>
      <SheetContent placement="left">
        <SheetHeader>
          <SheetTitle>تعديل الملف الشخصي</SheetTitle>
          <SheetDescription>
            قم بإجراء تغييرات على ملفك الشخصي هنا. انقر حفظ عند الانتهاء.
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sheet-rtl-name">الاسم</FieldLabel>
              <Input defaultValue="Pedro Duarte" id="sheet-rtl-name" />
            </Field>
            <Field>
              <FieldLabel htmlFor="sheet-rtl-username">اسم المستخدم</FieldLabel>
              <Input defaultValue="peduarte" id="sheet-rtl-username" />
            </Field>
          </FieldGroup>
        </SheetBody>
        <SheetFooter>
          <Button type="submit">حفظ التغييرات</Button>
          <SheetClose asChild>
            <Button variant="outline">إغلاق</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
);

export default SheetRtl;
