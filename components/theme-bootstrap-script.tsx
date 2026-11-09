"use client";

import { useServerInsertedHTML } from "next/navigation";
import React from "react";
import { themeBootstrapScript } from "@/lib/theme/apply";

export const ThemeBootstrapScript = () => {
  const insertedRef = React.useRef(false);

  useServerInsertedHTML(() => {
    // Guard against duplicate inserts during streaming SSR (same pattern as @teispace/next-themes).
    if (insertedRef.current) {
      return null;
    }

    insertedRef.current = true;

    return (
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: The script is generated exclusively from local, allowlisted theme metadata.
        dangerouslySetInnerHTML={{ __html: themeBootstrapScript }}
        suppressHydrationWarning
      />
    );
  });

  return null;
};
