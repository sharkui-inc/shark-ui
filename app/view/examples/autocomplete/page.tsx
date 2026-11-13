import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/autocomplete/example-controlled";
import ExampleDefault from "@/registry/react/examples/autocomplete/example-default";
import ExampleDisabled from "@/registry/react/examples/autocomplete/example-disabled";
import ExampleForm from "@/registry/react/examples/autocomplete/example-form";
import ExampleGroup from "@/registry/react/examples/autocomplete/example-group";
import ExampleInvalid from "@/registry/react/examples/autocomplete/example-invalid";
import ExampleRtl from "@/registry/react/examples/autocomplete/example-rtl";
import ExampleScrollable from "@/registry/react/examples/autocomplete/example-scrollable";
import ExampleSizeLg from "@/registry/react/examples/autocomplete/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/autocomplete/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/autocomplete/example-size-sm";
import ExampleVariantDefault from "@/registry/react/examples/autocomplete/example-variant-default";
import ExampleVariantGhost from "@/registry/react/examples/autocomplete/example-variant-ghost";
import ExampleWithClearButton from "@/registry/react/examples/autocomplete/example-with-clear-button";
import ExampleWithDescription from "@/registry/react/examples/autocomplete/example-with-description";
import ExampleWithField from "@/registry/react/examples/autocomplete/example-with-field";
import ExampleWithStartIcon from "@/registry/react/examples/autocomplete/example-with-start-icon";
import ExampleWithTrigger from "@/registry/react/examples/autocomplete/example-with-trigger";

const AutocompleteExamplePage = () => (
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
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form Integration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="group-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="group-heading">
            Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroup />
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
          aria-labelledby="with-clear-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-clear-button-heading"
          >
            With Clear Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithClearButton />
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
          aria-labelledby="with-start-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-start-icon-heading"
          >
            With Start Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithStartIcon />
          </div>
        </section>
        <section
          aria-labelledby="with-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-trigger-heading"
          >
            With Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithTrigger />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default AutocompleteExamplePage;
