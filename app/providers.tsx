import { ThemeProvider } from "@teispace/next-themes";
import { Provider as JotaiProvider } from "jotai";
import type React from "react";
import { IframeHotkeys } from "@/components/layout/iframe-hotkeys";
import { ThemeConfigurationProvider } from "@/lib/theme/provider";
import { LocaleProvider } from "@/registry/react/components/locale";

export const Providers = ({ children }: React.PropsWithChildren) => (
  <LocaleProvider locale="en">
    <JotaiProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeConfigurationProvider>
          {children}
          <IframeHotkeys />
        </ThemeConfigurationProvider>
      </ThemeProvider>
    </JotaiProvider>
  </LocaleProvider>
);
