import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomColor from "@/registry/react/examples/badge/example-custom-color";
import ExampleDefault from "@/registry/react/examples/badge/example-default";
import ExamplePill from "@/registry/react/examples/badge/example-pill";
import ExampleRtl from "@/registry/react/examples/badge/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/badge/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/badge/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/badge/example-size-sm";
import ExampleVariantDefault from "@/registry/react/examples/badge/example-variant-default";
import ExampleVariantDestructive from "@/registry/react/examples/badge/example-variant-destructive";
import ExampleVariantInfo from "@/registry/react/examples/badge/example-variant-info";
import ExampleVariantOutline from "@/registry/react/examples/badge/example-variant-outline";
import ExampleVariantSecondary from "@/registry/react/examples/badge/example-variant-secondary";
import ExampleVariantSuccess from "@/registry/react/examples/badge/example-variant-success";
import ExampleVariantWarning from "@/registry/react/examples/badge/example-variant-warning";
import ExampleWithIcon from "@/registry/react/examples/badge/example-with-icon";
import ExampleWithLink from "@/registry/react/examples/badge/example-with-link";
import ExampleWithSpinner from "@/registry/react/examples/badge/example-with-spinner";
import ExampleWithStatus from "@/registry/react/examples/badge/example-with-status";
import BadgeSizes from "./_examples/badge-sizes";
import BadgeVariants from "./_examples/badge-variants";

const BadgeExamplePage = () => (
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
          aria-labelledby="custom-color-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-color-heading"
          >
            Custom Color
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomColor />
          </div>
        </section>
        <section aria-labelledby="pill-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="pill-heading">
            Pill
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePill />
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
          aria-labelledby="size-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-lg-heading"
          >
            Size LG
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeLg />
          </div>
        </section>
        <section
          aria-labelledby="size-md-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-md-heading"
          >
            Size MD
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeMd />
          </div>
        </section>
        <section
          aria-labelledby="size-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-sm-heading"
          >
            Size SM
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeSm />
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
          aria-labelledby="variant-destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-destructive-heading"
          >
            Variant Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDestructive />
          </div>
        </section>
        <section
          aria-labelledby="variant-info-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-info-heading"
          >
            Variant Info
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantInfo />
          </div>
        </section>
        <section
          aria-labelledby="variant-outline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-outline-heading"
          >
            Variant Outline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantOutline />
          </div>
        </section>
        <section
          aria-labelledby="variant-secondary-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-secondary-heading"
          >
            Variant Secondary
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantSecondary />
          </div>
        </section>
        <section
          aria-labelledby="variant-success-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-success-heading"
          >
            Variant Success
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantSuccess />
          </div>
        </section>
        <section
          aria-labelledby="variant-warning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-warning-heading"
          >
            Variant Warning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantWarning />
          </div>
        </section>
        <section
          aria-labelledby="with-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-icon-heading"
          >
            With Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithIcon />
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
          aria-labelledby="with-spinner-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-spinner-heading"
          >
            With Spinner
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithSpinner />
          </div>
        </section>
        <section
          aria-labelledby="with-status-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-status-heading"
          >
            With Status
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithStatus />
          </div>
        </section>
        <section
          aria-labelledby="local-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-size-heading"
          >
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <BadgeSizes />
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
            <BadgeVariants />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default BadgeExamplePage;
