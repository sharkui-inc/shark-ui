import type React from "react";

const TemplatesLayout = ({ children }: React.PropsWithChildren) => (
  <div className="min-h-svh [--sidebar-width:15rem]">{children}</div>
);

export default TemplatesLayout;
