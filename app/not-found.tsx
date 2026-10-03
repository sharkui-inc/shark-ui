import { SkipNavLink } from "@registry/react/components/skip-nav";
import type { Metadata } from "next";
import { ErrorPage } from "@/app/_components/error-page";
import { NotFoundSearchArrow } from "@/app/_components/not-found-search-arrow";
import { SiteHeader } from "@/components/layout/header/header";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Page Not Found",
};

const NotFoundPage = () => (
  <>
    <SkipNavLink />
    <SiteHeader />
    <ErrorPage kind="not-found" />
    <NotFoundSearchArrow />
  </>
);

export default NotFoundPage;
