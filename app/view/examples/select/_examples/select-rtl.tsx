"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const SelectRtl = () => (
  <Select collection={collection} positioning={{ fitViewport: true }}>
    <SelectTrigger className="min-w-48">
      <SelectValue placeholder="اختر فاكهة" />
    </SelectTrigger>
    <SelectContent>
      <SelectList>
        <SelectGroup heading="الفواكه">
          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectList>
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: ["موز", "تفاح", "برتقال", "أناناس"],
});

export default SelectRtl;
