"use client";

import { ClientOnly } from "@/registry/react/components/client-only";

const Example = () => (
  <ClientOnly
    fallback={
      <div className="bg-muted/48 text-muted-foreground rounded-xl border border-dashed px-4 py-3 text-sm">
        Loading…
      </div>
    }
  >
    <CurrentTime />
  </ClientOnly>
);

const CurrentTime = () => {
  const now = new Date();

  return (
    <div className="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
      Current time: {now.toLocaleTimeString()}
    </div>
  );
};

export default Example;
