import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
};

const ViewExamplesLayout = ({ children }: React.PropsWithChildren) => (
  <main className="min-h-svh bg-background text-foreground">{children}</main>
);

export default ViewExamplesLayout;
