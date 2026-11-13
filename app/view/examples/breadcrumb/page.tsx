import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCollapsed from "@/registry/react/examples/breadcrumb/example-collapsed";
import ExampleCustomSeparator from "@/registry/react/examples/breadcrumb/example-custom-separator";
import ExampleDefault from "@/registry/react/examples/breadcrumb/example-default";
import ExampleRtl from "@/registry/react/examples/breadcrumb/example-rtl";
import ExampleWithLink from "@/registry/react/examples/breadcrumb/example-with-link";
import ExampleWithMenu from "@/registry/react/examples/breadcrumb/example-with-menu";
import BreadcrumbDropdown from "./_examples/breadcrumb-dropdown";

const BreadcrumbExamplePage = () => (
  <PreviewLocaleProvider>
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
        <section
          aria-labelledby="default-heading"
          className="flex flex-col gap-5"
        >
          <h1
            className="text-muted-foreground font-medium"
            id="default-heading"
          >
            Default
          </h1>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDefault />
          </div>
        </section>
        <section
          aria-labelledby="collapsed-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="collapsed-heading"
          >
            Collapsed
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCollapsed />
          </div>
        </section>
        <section
          aria-labelledby="custom-separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-separator-heading"
          >
            Custom Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSeparator />
          </div>
        </section>
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="with-link-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-link-heading"
          >
            With Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithLink />
          </div>
        </section>
        <section
          aria-labelledby="with-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-menu-heading"
          >
            With Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithMenu />
          </div>
        </section>
        <section
          aria-labelledby="local-dropdown-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dropdown-heading"
          >
            Dropdown
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <BreadcrumbDropdown />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default BreadcrumbExamplePage;
