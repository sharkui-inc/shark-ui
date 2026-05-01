import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { ThemesProvider } from "@/providers/themes";

export const Providers = ({ children }: React.PropsWithChildren) => (
  <JotaiProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      scriptProps={{ type: "application/json" }}
    >
      <ThemesProvider>{children}</ThemesProvider>
    </ThemeProvider>
  </JotaiProvider>
);
