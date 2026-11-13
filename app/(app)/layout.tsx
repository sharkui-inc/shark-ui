import { SiteHeader } from "@/components/layout/header/header";
import { SkipNavLink } from "@/registry/react/components/skip-nav";

export const dynamic = "force-static";
export const revalidate = false;

const AppLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <>
      <SkipNavLink />

      <SiteHeader />

      {children}
    </>
  );
};

export default AppLayout;
