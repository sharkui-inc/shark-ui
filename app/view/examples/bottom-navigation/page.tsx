import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/bottom-navigation/example-controlled";
import ExampleDefault from "@/registry/react/examples/bottom-navigation/example-default";
import ExampleDisabled from "@/registry/react/examples/bottom-navigation/example-disabled";
import ExampleIconOnly from "@/registry/react/examples/bottom-navigation/example-icon-only";
import ExampleRtl from "@/registry/react/examples/bottom-navigation/example-rtl";
import ExampleVariantDefault from "@/registry/react/examples/bottom-navigation/example-variant-default";
import ExampleVariantInset from "@/registry/react/examples/bottom-navigation/example-variant-inset";
import ExampleVariantInsetRtl from "@/registry/react/examples/bottom-navigation/example-variant-inset-rtl";
import ExampleWithLinks from "@/registry/react/examples/bottom-navigation/example-with-links";

const BottomNavigationExamplePage = () => (
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
          aria-labelledby="controlled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-heading"
          >
            Controlled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlled />
          </div>
        </section>
        <section
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section
          aria-labelledby="icon-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="icon-only-heading"
          >
            Icon Only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIconOnly />
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
          aria-labelledby="variant-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-default-heading"
          >
            Variant Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDefault />
          </div>
        </section>
        <section
          aria-labelledby="variant-inset-rtl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-inset-rtl-heading"
          >
            Variant Inset RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantInsetRtl />
          </div>
        </section>
        <section
          aria-labelledby="variant-inset-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-inset-heading"
          >
            Variant Inset
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantInset />
          </div>
        </section>
        <section
          aria-labelledby="with-links-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-links-heading"
          >
            With Links
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithLinks />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default BottomNavigationExamplePage;
