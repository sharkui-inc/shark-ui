"use client";

import {
  ErrorPage,
  type RuntimeErrorProps,
} from "@/app/_components/error-page";

const ErrorBoundary = (props: RuntimeErrorProps) => (
  <ErrorPage {...props} kind="error" />
);

export default ErrorBoundary;
