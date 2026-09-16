"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { LocaleProvider } from "@/registry/react/components/locale";
import { Spinner } from "@/registry/react/components/spinner";

const ButtonRtlExample = () => (
  <div className="flex flex-wrap items-center gap-2" dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Button variant="outline">زر</Button>
      <Button variant="destructive">حذف</Button>
      <Button variant="outline">
        إرسال
        <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
      </Button>
      <Button aria-label="إضافة" size="icon-md" variant="outline">
        <PlusIcon aria-hidden="true" />
      </Button>
      <Button variant="secondary">
        <Spinner aria-hidden="true" data-icon="inline-start" />
        جاري التحميل
      </Button>
    </LocaleProvider>
  </div>
);

export default ButtonRtlExample;
