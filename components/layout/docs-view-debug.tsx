import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

const viewDocSections = new Set([
  "ai-components",
  "components",
  "helpers",
  "hooks",
  "utilities",
]);

const getComponentViewHref = (slugs: string[]) => {
  const [section, name] = slugs;

  if (!(section && name && viewDocSections.has(section))) {
    return;
  }

  return `/view/examples/${name}`;
};

interface DocsViewDebugProps extends React.ComponentProps<typeof Button> {
  slugs: string[];
}

export const DocsViewDebug = (props: DocsViewDebugProps) => {
  const { slugs, className, ...rest } = props;

  const viewHref = getComponentViewHref(slugs);

  if (!(viewHref && process.env.NODE_ENV === "development")) {
    return null;
  }

  return (
    <Button
      asChild
      className={cn("hidden sm:inline-flex", className)}
      size="sm"
      variant="outline"
      {...rest}
    >
      <Link href={viewHref}>Debug</Link>
    </Button>
  );
};
