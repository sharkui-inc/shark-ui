import { NavigationTabs } from "./_components/navigation-tabs";
import { ThemesFooter } from "./_components/themes-footer";

const ThemesLayout = (_props: LayoutProps<"/themes">) => (
  <main className="flex h-[calc(100dvh-var(--header-height))] min-h-0 flex-col">
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
);

export default ThemesLayout;
