import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const ViewAiComponentsLayout = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <div className="bg-background text-foreground h-svh overflow-hidden">
      {children}
    </div>
  );
};

export default ViewAiComponentsLayout;
