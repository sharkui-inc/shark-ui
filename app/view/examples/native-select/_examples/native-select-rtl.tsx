"use client";

import { LocaleProvider } from "@/registry/react/components/locale";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <NativeSelect className="w-fit">
        <NativeSelectOption value="">اختر الحالة</NativeSelectOption>
        <NativeSelectOption value="todo">مهام</NativeSelectOption>
        <NativeSelectOption value="in-progress">قيد التنفيذ</NativeSelectOption>
        <NativeSelectOption value="done">منجز</NativeSelectOption>
        <NativeSelectOption value="cancelled">ملغي</NativeSelectOption>
      </NativeSelect>
    </LocaleProvider>
  </div>
);

export default NativeSelectRtl;
