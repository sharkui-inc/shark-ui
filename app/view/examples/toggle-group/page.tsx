import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/toggle-group/example-controlled";
import ExampleCustom from "@/registry/react/examples/toggle-group/example-custom";
import ExampleDefault from "@/registry/react/examples/toggle-group/example-default";
import ExampleDisabled from "@/registry/react/examples/toggle-group/example-disabled";
import ExampleDisabledItem from "@/registry/react/examples/toggle-group/example-disabled-item";
import ExampleForm from "@/registry/react/examples/toggle-group/example-form";
import ExampleHorizontal from "@/registry/react/examples/toggle-group/example-horizontal";
import ExampleOutline from "@/registry/react/examples/toggle-group/example-outline";
import ExamplePill from "@/registry/react/examples/toggle-group/example-pill";
import ExampleRtl from "@/registry/react/examples/toggle-group/example-rtl";
import ExampleSingle from "@/registry/react/examples/toggle-group/example-single";
import ExampleSizeLg from "@/registry/react/examples/toggle-group/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/toggle-group/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/toggle-group/example-size-sm";
import ExampleSpacing from "@/registry/react/examples/toggle-group/example-spacing";
import ExampleVertical from "@/registry/react/examples/toggle-group/example-vertical";

const ToggleGroupExamplePage = () => (
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
          aria-labelledby="custom-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="custom-heading">
            Custom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustom />
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
          aria-labelledby="horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="horizontal-heading"
          >
            Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="outline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="outline-heading"
          >
            Outline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOutline />
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
          aria-labelledby="single-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="single-heading">
            Single
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSingle />
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
          aria-labelledby="spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="spacing-heading"
          >
            Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSpacing />
          </div>
        </section>
        <section
          aria-labelledby="vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="vertical-heading"
          >
            Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVertical />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ToggleGroupExamplePage;
