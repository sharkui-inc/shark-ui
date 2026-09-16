"use client";

import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { LocaleProvider } from "@/registry/react/components/locale";

const DialogRtl = () => (
  <div className="flex w-full justify-center" dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">فتح الحوار</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm" dir="rtl">
            <DialogHeader>
              <DialogTitle>تعديل الملف الشخصي</DialogTitle>
              <DialogDescription>
                قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند
                الانتهاء.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="dialog-rtl-name">الاسم</FieldLabel>
                  <Input
                    defaultValue="Pedro Duarte"
                    id="dialog-rtl-name"
                    name="name"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="dialog-rtl-username">
                    اسم المستخدم
                  </FieldLabel>
                  <Input
                    defaultValue="@peduarte"
                    id="dialog-rtl-username"
                    name="username"
                  />
                </Field>
              </FieldGroup>
            </DialogBody>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">إلغاء</Button>
              </DialogClose>
              <Button type="submit">حفظ التغييرات</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </LocaleProvider>
  </div>
);

export default DialogRtl;
