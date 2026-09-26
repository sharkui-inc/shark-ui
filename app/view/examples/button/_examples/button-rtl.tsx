"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Spinner } from "@/registry/react/components/spinner";

const ButtonRtlExample = () => (
  <div className="flex flex-wrap items-center gap-2">
    <Button variant="outline">زر</Button>
    <Button variant="destructive">حذف</Button>
    <Button variant="outline">
      إرسال
      <ArrowRightIcon aria-hidden data-icon="inline-end" />
    </Button>
    <Button aria-label="إضافة" size="icon-md" variant="outline">
      <PlusIcon aria-hidden />
    </Button>
    <Button variant="secondary">
      <Spinner aria-hidden data-icon="inline-start" />
      جاري التحميل
    </Button>
  </div>
);

export default ButtonRtlExample;
