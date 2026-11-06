import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SkipNavContent } from "@/registry/react/components/skip-nav";
import { NavigationTabs } from "./_components/navigation-tabs";
import { ThemesFooter } from "./_components/themes-footer";
import { ThemesWelcomeDialog } from "./_components/themes-welcome-dialog";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = createMetadata({
  description: "Hand-picked color themes for Shark UI.",
  title: "Themes",
  url: "/themes",
});

const ThemesPage = () => (
  <SkipNavContent asChild>
    <main className="flex h-[calc(100dvh-var(--header-height))] min-h-0 flex-col">
      <ThemesWelcomeDialog />

      <h1 className="sr-only">Theme builder</h1>

      <section
        aria-label="Theme preview"
        className="flex min-h-0 flex-1 flex-col"
      >
        <div className="container flex min-h-0 flex-1 flex-col py-4">
          <NavigationTabs />
        </div>
      </section>

      <ThemesFooter />
    </main>
  </SkipNavContent>
);

export default ThemesPage;
