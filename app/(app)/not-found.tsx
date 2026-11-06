import type { Metadata } from "next";
import { ErrorPage } from "@/app/_components/error-page";
import { NotFoundSearchArrow } from "@/app/_components/not-found-search-arrow";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Page Not Found",
};

const NotFoundPage = () => (
  <>
    <ErrorPage kind="not-found" />
    <NotFoundSearchArrow />
  </>
);

export default NotFoundPage;
