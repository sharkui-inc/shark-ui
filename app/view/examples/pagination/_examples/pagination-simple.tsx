import {
  Pagination,
  PaginationItems,
} from "@/registry/react/components/pagination";

const PaginationSimple = () => (
  <Pagination count={50} defaultPage={2} pageSize={10}>
    <PaginationItems />
  </Pagination>
);

export default PaginationSimple;
