import {
  Pagination,
  PaginationFirst,
  PaginationItems,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

const Example = () => (
  <Pagination
    aria-label="Pagination with first and last controls"
    count={100}
    pageSize={10}
  >
    <PaginationFirst />
    <PaginationPrevious />
    <PaginationItems />
    <PaginationNext />
    <PaginationLast />
  </Pagination>
);

export default Example;
