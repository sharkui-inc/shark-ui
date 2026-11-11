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

const Example = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {placements.map((placement) => (
      <Select
        collection={collection}
        key={placement}
        positioning={{ placement }}
      >
        <SelectTrigger aria-label={placement} className="min-w-36 capitalize">
          <SelectValue placeholder={placement} />
        </SelectTrigger>
        <SelectContent>
          <SelectList>
            <SelectGroup heading="Fruits">
              {collection.items.map((item) => (
                <SelectItem item={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectList>
        </SelectContent>
      </Select>
    ))}
  </div>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});

const placements = ["left", "top", "bottom", "right"] as const;

export default Example;
