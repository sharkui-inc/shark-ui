"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const SelectRtl = () => (
  <Select collection={collection} positioning={{ fitViewport: true }}>
    <SelectTrigger className="w-48">
      <SelectValue placeholder="اختر فاكهة" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup heading="الفواكه">
        {collection.items.map((item) => (
          <SelectItem item={item} key={item}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

const collection = createListCollection({
  items: ["موز", "تفاح", "برتقال", "أناناس"],
});

export default SelectRtl;
