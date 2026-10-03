"use client";

import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectRtl = () => (
  <NativeSelect className="w-fit">
    <NativeSelectOption value="">اختر الحالة</NativeSelectOption>
    <NativeSelectOption value="todo">مهام</NativeSelectOption>
    <NativeSelectOption value="in-progress">قيد التنفيذ</NativeSelectOption>
    <NativeSelectOption value="done">منجز</NativeSelectOption>
    <NativeSelectOption value="cancelled">ملغي</NativeSelectOption>
  </NativeSelect>
);

export default NativeSelectRtl;
