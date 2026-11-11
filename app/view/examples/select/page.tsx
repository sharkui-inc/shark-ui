import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAlignItem from "@/registry/react/examples/select/example-align-item";
import ExampleControlled from "@/registry/react/examples/select/example-controlled";
import ExampleDefault from "@/registry/react/examples/select/example-default";
import ExampleDisabled from "@/registry/react/examples/select/example-disabled";
import ExampleEmpty from "@/registry/react/examples/select/example-empty";
import ExampleForm from "@/registry/react/examples/select/example-form";
import ExampleGhostSm from "@/registry/react/examples/select/example-ghost-sm";
import ExampleGrouping from "@/registry/react/examples/select/example-grouping";
import ExampleInvalid from "@/registry/react/examples/select/example-invalid";
import ExampleMaxSelection from "@/registry/react/examples/select/example-max-selection";
import ExampleMultiple from "@/registry/react/examples/select/example-multiple";
import ExamplePositioning from "@/registry/react/examples/select/example-positioning";
import ExampleRtl from "@/registry/react/examples/select/example-rtl";
import ExampleScrollable from "@/registry/react/examples/select/example-scrollable";
import ExampleSizeLg from "@/registry/react/examples/select/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/select/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/select/example-size-sm";
import ExampleVariantDefault from "@/registry/react/examples/select/example-variant-default";
import ExampleVariantGhost from "@/registry/react/examples/select/example-variant-ghost";
import ExampleWithDescription from "@/registry/react/examples/select/example-with-description";
import ExampleWithField from "@/registry/react/examples/select/example-with-field";
import ExampleWithIcon from "@/registry/react/examples/select/example-with-icon";
import ExampleWithoutTrigger from "@/registry/react/examples/select/example-without-trigger";

const SelectExamplePage = () => (
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
          aria-labelledby="align-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="align-item-heading"
          >
            Align Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlignItem />
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
          aria-labelledby="empty-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="empty-heading">
            Empty
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleEmpty />
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
          aria-labelledby="ghost-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="ghost-sm-heading"
          >
            Ghost SM
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGhostSm />
          </div>
        </section>
        <section
          aria-labelledby="grouping-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="grouping-heading"
          >
            Grouping
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGrouping />
          </div>
        </section>
        <section
          aria-labelledby="invalid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="invalid-heading"
          >
            Invalid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInvalid />
          </div>
        </section>
        <section
          aria-labelledby="max-selection-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="max-selection-heading"
          >
            Max Selection
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMaxSelection />
          </div>
        </section>
        <section
          aria-labelledby="multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-heading"
          >
            Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultiple />
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
          aria-labelledby="variant-ghost-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-ghost-heading"
          >
            Variant Ghost
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantGhost />
          </div>
        </section>
        <section
          aria-labelledby="with-description-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-description-heading"
          >
            With Description
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDescription />
          </div>
        </section>
        <section
          aria-labelledby="with-field-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-field-heading"
          >
            With Field
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithField />
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
          aria-labelledby="without-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-trigger-heading"
          >
            Without Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutTrigger />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default SelectExamplePage;
