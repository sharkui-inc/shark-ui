import { ThemeProvider } from "@teispace/next-themes";
import { Provider as JotaiProvider } from "jotai";
import type React from "react";
import { ThemeConfigurationProvider } from "@/lib/theme/provider";

export const Providers = ({ children }: React.PropsWithChildren) => (
  <JotaiProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeConfigurationProvider>{children}</ThemeConfigurationProvider>
    </ThemeProvider>
  </JotaiProvider>
);
