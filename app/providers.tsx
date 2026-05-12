import { ThemeProvider } from "@teispace/next-themes";
import { Provider as JotaiProvider } from "jotai";
import type React from "react";
import { ThemesProvider } from "@/providers/themes";

export const Providers = ({ children }: React.PropsWithChildren) => (
  <JotaiProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemesProvider>{children}</ThemesProvider>
    </ThemeProvider>
  </JotaiProvider>
);
