"use client";

import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const PaginationRtl = () => (
  <Pagination count={50} pageSize={10}>
    <PaginationPrevious>السابق</PaginationPrevious>
    <PaginationItems />
    <PaginationNext>التالي</PaginationNext>
  </Pagination>
);

export default PaginationRtl;
