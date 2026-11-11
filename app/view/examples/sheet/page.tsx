import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCloseBehavior from "@/registry/react/examples/sheet/example-close-behavior";
import ExampleCloseButton from "@/registry/react/examples/sheet/example-close-button";
import ExampleControlled from "@/registry/react/examples/sheet/example-controlled";
import ExampleCustomSpacing from "@/registry/react/examples/sheet/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/sheet/example-default";
import ExampleInset from "@/registry/react/examples/sheet/example-inset";
import ExampleInsetBottom from "@/registry/react/examples/sheet/example-inset-bottom";
import ExampleInsetLeft from "@/registry/react/examples/sheet/example-inset-left";
import ExampleInsetRight from "@/registry/react/examples/sheet/example-inset-right";
import ExampleInsetRtl from "@/registry/react/examples/sheet/example-inset-rtl";
import ExampleInsetTop from "@/registry/react/examples/sheet/example-inset-top";
import ExampleMultipleTriggers from "@/registry/react/examples/sheet/example-multiple-triggers";
import ExampleNested from "@/registry/react/examples/sheet/example-nested";
import ExampleNoCloseButton from "@/registry/react/examples/sheet/example-no-close-button";
import ExampleNonModal from "@/registry/react/examples/sheet/example-non-modal";
import ExamplePositioning from "@/registry/react/examples/sheet/example-positioning";
import ExampleRtl from "@/registry/react/examples/sheet/example-rtl";
import ExampleScrollable from "@/registry/react/examples/sheet/example-scrollable";
import ExampleVariantDefault from "@/registry/react/examples/sheet/example-variant-default";

const SheetExamplePage = () => (
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
          aria-labelledby="close-behavior-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="close-behavior-heading"
          >
            Close Behavior
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCloseBehavior />
          </div>
        </section>
        <section
          aria-labelledby="close-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="close-button-heading"
          >
            Close Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCloseButton />
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
          aria-labelledby="custom-spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-spacing-heading"
          >
            Custom Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSpacing />
          </div>
        </section>
        <section
          aria-labelledby="inset-bottom-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-bottom-heading"
          >
            Inset Bottom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetBottom />
          </div>
        </section>
        <section
          aria-labelledby="inset-left-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-left-heading"
          >
            Inset Left
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetLeft />
          </div>
        </section>
        <section
          aria-labelledby="inset-right-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-right-heading"
          >
            Inset Right
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetRight />
          </div>
        </section>
        <section
          aria-labelledby="inset-rtl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-rtl-heading"
          >
            Inset RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetRtl />
          </div>
        </section>
        <section
          aria-labelledby="inset-top-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-top-heading"
          >
            Inset Top
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetTop />
          </div>
        </section>
        <section
          aria-labelledby="inset-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="inset-heading">
            Inset
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInset />
          </div>
        </section>
        <section
          aria-labelledby="multiple-triggers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-triggers-heading"
          >
            Multiple Triggers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultipleTriggers />
          </div>
        </section>
        <section
          aria-labelledby="nested-heading"
          className="flex flex-col gap-5 sm:col-span-2"
        >
          <h2 className="text-muted-foreground font-medium" id="nested-heading">
            Nested
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNested />
          </div>
        </section>
        <section
          aria-labelledby="no-close-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-close-button-heading"
          >
            No Close Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoCloseButton />
          </div>
        </section>
        <section
          aria-labelledby="non-modal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="non-modal-heading"
          >
            Non-Modal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNonModal />
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
          aria-labelledby="scrollable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-heading"
          >
            Scrollable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollable />
          </div>
        </section>
        <section
          aria-labelledby="positioning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="positioning-heading"
          >
            Positioning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePositioning />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default SheetExamplePage;
