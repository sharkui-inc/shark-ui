import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/segment-group/example-controlled";
import ExampleCustomIndicator from "@/registry/react/examples/segment-group/example-custom-indicator";
import ExampleDefault from "@/registry/react/examples/segment-group/example-default";
import ExampleDisabled from "@/registry/react/examples/segment-group/example-disabled";
import ExampleDisabledItem from "@/registry/react/examples/segment-group/example-disabled-item";
import ExampleForm from "@/registry/react/examples/segment-group/example-form";
import ExampleIndicatorOnHover from "@/registry/react/examples/segment-group/example-indicator-on-hover";
import ExampleOrientationHorizontal from "@/registry/react/examples/segment-group/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/segment-group/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/segment-group/example-rtl";
import ExampleVariantUnderline from "@/registry/react/examples/segment-group/example-variant-underline";
import ExampleVariantUnderlineOrientationVertical from "@/registry/react/examples/segment-group/example-variant-underline-orientation-vertical";

const SegmentGroupExamplePage = () => (
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
          aria-labelledby="custom-indicator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-indicator-heading"
          >
            Custom Indicator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomIndicator />
          </div>
        </section>
        <section
          aria-labelledby="disabled-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-item-heading"
          >
            Disabled Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabledItem />
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
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form Integration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="indicator-on-hover-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="indicator-on-hover-heading"
          >
            Indicator On Hover
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIndicatorOnHover />
          </div>
        </section>
        <section
          aria-labelledby="orientation-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-horizontal-heading"
          >
            Orientation Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="orientation-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-vertical-heading"
          >
            Orientation Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationVertical />
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
          aria-labelledby="variant-underline-orientation-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-underline-orientation-vertical-heading"
          >
            Variant Underline Orientation Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantUnderlineOrientationVertical />
          </div>
        </section>
        <section
          aria-labelledby="variant-underline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-underline-heading"
          >
            Variant Underline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantUnderline />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default SegmentGroupExamplePage;
