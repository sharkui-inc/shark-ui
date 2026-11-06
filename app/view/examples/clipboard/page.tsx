import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/clipboard/example-controlled";
import ExampleCustomTimeout from "@/registry/react/examples/clipboard/example-custom-timeout";
import ExampleDefault from "@/registry/react/examples/clipboard/example-default";
import ExampleDifferentIcon from "@/registry/react/examples/clipboard/example-different-icon";
import ExampleHookOnly from "@/registry/react/examples/clipboard/example-hook-only";
import ExampleIconOnly from "@/registry/react/examples/clipboard/example-icon-only";
import ExampleRtl from "@/registry/react/examples/clipboard/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/clipboard/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/clipboard/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/clipboard/example-size-sm";
import ExampleSizeXl from "@/registry/react/examples/clipboard/example-size-xl";
import ExampleSizeXs from "@/registry/react/examples/clipboard/example-size-xs";
import ExampleValueText from "@/registry/react/examples/clipboard/example-value-text";

const ClipboardExamplePage = () => (
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
          aria-labelledby="custom-timeout-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-timeout-heading"
          >
            Custom Timeout
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomTimeout />
          </div>
        </section>
        <section
          aria-labelledby="different-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="different-icon-heading"
          >
            Different Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDifferentIcon />
          </div>
        </section>
        <section
          aria-labelledby="hook-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="hook-only-heading"
          >
            Hook Only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHookOnly />
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
          aria-labelledby="value-text-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="value-text-heading"
          >
            Value Text
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleValueText />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ClipboardExamplePage;
