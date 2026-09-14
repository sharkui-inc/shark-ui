"use client";

import type React from "react";
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/react/components/pagination";

interface PaginationDemoProps {
  formatPage?: (page: number) => React.ReactNode;
  nextLabel?: string;
  previousLabel?: string;
}

export const PaginationDemo = (props: PaginationDemoProps) => {
  const { formatPage, nextLabel = "Next", previousLabel = "Previous" } = props;

  return (
    <Pagination count={50} pageSize={10}>
      <PaginationPrevious>{previousLabel}</PaginationPrevious>
      <PaginationItems formatPage={formatPage} />
      <PaginationNext>{nextLabel}</PaginationNext>
    </Pagination>
  );
};

const PaginationDefaultExample = () => <PaginationDemo />;

export default PaginationDefaultExample;
