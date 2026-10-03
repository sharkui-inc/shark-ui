import { ThemeProvider } from "@teispace/next-themes";
import { Provider as JotaiProvider } from "jotai";
import type React from "react";
import { IframeHotkeys } from "@/components/layout/iframe-hotkeys";
import { ThemeConfigurationProvider } from "@/lib/theme/provider";

export const Providers = (props: React.PropsWithChildren) => {
  const { children } = props;
  return (
    <JotaiProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeConfigurationProvider>
          {children}
          <IframeHotkeys />
        </ThemeConfigurationProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
};
