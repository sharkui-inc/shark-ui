"use client";

import { createListCollection } from "@ark-ui/react";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  Pagination,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const rowsPerPage = createListCollection({
  items: [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ],
});

const PaginationIconsOnly = () => (
  <div className="flex items-center justify-between gap-4">
    <Field className="w-fit" orientation="horizontal">
      <FieldLabel>Rows per page</FieldLabel>
      <Select collection={rowsPerPage} defaultValue={["25"]}>
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {rowsPerPage.items.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
    <Pagination className="mx-0 w-auto" count={50} pageSize={10}>
      <PaginationPrevious withLabel={false} />
      <PaginationNext withLabel={false} />
    </Pagination>
  </div>
);

export default PaginationIconsOnly;
