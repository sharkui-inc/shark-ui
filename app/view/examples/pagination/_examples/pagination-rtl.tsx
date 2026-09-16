"use client";

import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const PaginationRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Pagination count={50} pageSize={10}>
        <PaginationPrevious>السابق</PaginationPrevious>
        <PaginationItems />
        <PaginationNext>التالي</PaginationNext>
      </Pagination>
    </LocaleProvider>
  </div>
);

export default PaginationRtl;
