import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const ViewExamplesLayout = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="bg-background text-foreground min-h-svh">{children}</div>
  );
};

export default ViewExamplesLayout;
