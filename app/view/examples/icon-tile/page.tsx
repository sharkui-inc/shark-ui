import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCircular from "@/registry/react/examples/icon-tile/example-circular";
import ExampleCustomColor from "@/registry/react/examples/icon-tile/example-custom-color";
import ExampleCustomSize from "@/registry/react/examples/icon-tile/example-custom-size";
import ExampleDefault from "@/registry/react/examples/icon-tile/example-default";
import ExampleRtl from "@/registry/react/examples/icon-tile/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/icon-tile/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/icon-tile/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/icon-tile/example-size-sm";
import ExampleSizeXl from "@/registry/react/examples/icon-tile/example-size-xl";
import ExampleSizeXs from "@/registry/react/examples/icon-tile/example-size-xs";
import ExampleVariantDefault from "@/registry/react/examples/icon-tile/example-variant-default";
import ExampleVariantOutline from "@/registry/react/examples/icon-tile/example-variant-outline";
import ExampleVariantSecondary from "@/registry/react/examples/icon-tile/example-variant-secondary";

const IconTileExamplePage = () => (
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
          aria-labelledby="circular-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="circular-heading"
          >
            Circular
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCircular />
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
        <section
          aria-labelledby="custom-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-size-heading"
          >
            Custom Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSize />
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
          aria-labelledby="size-xl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-xl-heading"
          >
            Size XL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeXl />
          </div>
        </section>
        <section
          aria-labelledby="size-xs-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-xs-heading"
          >
            Size XS
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeXs />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default IconTileExamplePage;
