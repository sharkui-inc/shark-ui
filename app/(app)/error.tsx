"use client";

import {
  ErrorPage,
  type RuntimeErrorProps,
} from "@/app/_components/error-page";

const AppErrorBoundary = (props: RuntimeErrorProps) => (
  <ErrorPage {...props} kind="error" />
);

export default AppErrorBoundary;
