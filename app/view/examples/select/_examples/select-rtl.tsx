"use client";

import { createListCollection } from "@ark-ui/react";
import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const items = ["موز", "تفاح", "برتقال", "أناناس"];

const collection = createListCollection({ items });

const SelectRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Select collection={collection} positioning={{ fitViewport: true }}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="اختر فاكهة" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup heading="الفواكه">
            {items.map((item) => (
              <SelectItem item={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </LocaleProvider>
  </div>
);

export default SelectRtl;
