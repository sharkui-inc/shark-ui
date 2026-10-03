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

const DialogRtl = () => (
  <div className="flex w-full justify-center">
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">فتح الحوار</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>تعديل الملف الشخصي</DialogTitle>
            <DialogDescription>
              قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <FieldGroup>
              <Field>
                <FieldLabel>الاسم</FieldLabel>
                <Input defaultValue="Pedro Duarte" name="name" />
              </Field>
              <Field>
                <FieldLabel>اسم المستخدم</FieldLabel>
                <Input defaultValue="@peduarte" name="username" />
              </Field>
            </FieldGroup>
          </DialogBody>
          <DialogFooter>
            <Button type="submit">حفظ التغييرات</Button>
            <DialogClose asChild>
              <Button variant="outline">إلغاء</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  </div>
);

export default DialogRtl;
