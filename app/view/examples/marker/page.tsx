import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBorder from "@/registry/react/examples/marker/example-border";
import ExampleDefault from "@/registry/react/examples/marker/example-default";
import ExampleIcon from "@/registry/react/examples/marker/example-icon";
import ExampleLinks from "@/registry/react/examples/marker/example-links";
import ExampleRtl from "@/registry/react/examples/marker/example-rtl";
import ExampleSeparator from "@/registry/react/examples/marker/example-separator";
import ExampleShimmer from "@/registry/react/examples/marker/example-shimmer";
import ExampleStatus from "@/registry/react/examples/marker/example-status";
import ExampleVariantBorder from "@/registry/react/examples/marker/example-variant-border";
import ExampleVariantDefault from "@/registry/react/examples/marker/example-variant-default";
import ExampleVariantSeparator from "@/registry/react/examples/marker/example-variant-separator";
import MarkerLinkButton from "./_examples/marker-link-button";
import MarkerVariants from "./_examples/marker-variants";

const MarkerExamplePage = () => (
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
          aria-labelledby="border-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="border-heading">
            Border
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBorder />
          </div>
        </section>
        <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="icon-heading">
            Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIcon />
          </div>
        </section>
        <section
          aria-labelledby="links-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="links-heading">
            Links
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLinks />
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
          aria-labelledby="separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="separator-heading"
          >
            Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSeparator />
          </div>
        </section>
        <section
          aria-labelledby="shimmer-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="shimmer-heading"
          >
            Shimmer
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleShimmer />
          </div>
        </section>
        <section
          aria-labelledby="status-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="status-heading">
            Status
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStatus />
          </div>
        </section>
        <section
          aria-labelledby="variant-border-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-border-heading"
          >
            Variant Border
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantBorder />
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
          aria-labelledby="variant-separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-separator-heading"
          >
            Variant Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantSeparator />
          </div>
        </section>
        <section
          aria-labelledby="local-link-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-link-button-heading"
          >
            Link Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <MarkerLinkButton />
          </div>
        </section>
        <section
          aria-labelledby="local-variants-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-variants-heading"
          >
            Variants
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <MarkerVariants />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default MarkerExamplePage;
