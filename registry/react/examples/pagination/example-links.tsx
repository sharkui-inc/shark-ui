"use client";

import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const Example = () => (
  <Pagination
    aria-label="Pagination links"
    count={50}
    getPageUrl={({ page }) => `/products?page=${page}`}
    onClick={(event) => event.preventDefault()} // just to don't navigate to the page
    pageSize={10}
    type="link"
  >
    <PaginationPrevious />
    <PaginationItems />
    <PaginationNext />
  </Pagination>
);

export default Example;
