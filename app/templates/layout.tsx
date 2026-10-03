import type React from "react";

const TemplatesLayout = (props: React.PropsWithChildren) => {
  const { children } = props;
  return <div className="min-h-svh [--sidebar-width:15rem]">{children}</div>;
};

export default TemplatesLayout;
