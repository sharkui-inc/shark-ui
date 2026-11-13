import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutoHighlight from "@/registry/react/examples/combobox/example-auto-highlight";
import ExampleButtonTrigger from "@/registry/react/examples/combobox/example-button-trigger";
import ExampleControlled from "@/registry/react/examples/combobox/example-controlled";
import ExampleDefault from "@/registry/react/examples/combobox/example-default";
import ExampleDisabled from "@/registry/react/examples/combobox/example-disabled";
import ExampleForm from "@/registry/react/examples/combobox/example-form";
import ExampleGhostLg from "@/registry/react/examples/combobox/example-ghost-lg";
import ExampleGroup from "@/registry/react/examples/combobox/example-group";
import ExampleInvalid from "@/registry/react/examples/combobox/example-invalid";
import ExampleMultiple from "@/registry/react/examples/combobox/example-multiple";
import ExamplePopup from "@/registry/react/examples/combobox/example-popup";
import ExamplePositioning from "@/registry/react/examples/combobox/example-positioning";
import ExampleRtl from "@/registry/react/examples/combobox/example-rtl";
import ExampleScrollable from "@/registry/react/examples/combobox/example-scrollable";
import ExampleSizeLg from "@/registry/react/examples/combobox/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/combobox/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/combobox/example-size-sm";
import ExampleVariantDefault from "@/registry/react/examples/combobox/example-variant-default";
import ExampleVariantGhost from "@/registry/react/examples/combobox/example-variant-ghost";
import ExampleWithClearButton from "@/registry/react/examples/combobox/example-with-clear-button";
import ExampleWithDescription from "@/registry/react/examples/combobox/example-with-description";
import ExampleWithField from "@/registry/react/examples/combobox/example-with-field";
import ExampleWithStartIcon from "@/registry/react/examples/combobox/example-with-start-icon";
import ExampleWithoutOpenOnClick from "@/registry/react/examples/combobox/example-without-open-on-click";
import ExampleWithoutTrigger from "@/registry/react/examples/combobox/example-without-trigger";
import ComboboxCustom from "./_examples/combobox-custom";
import ComboboxInputGroup from "./_examples/combobox-input-group";

const ComboboxExamplePage = () => (
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
          aria-labelledby="auto-highlight-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="auto-highlight-heading"
          >
            Auto Highlight
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutoHighlight />
          </div>
        </section>
        <section
          aria-labelledby="button-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="button-trigger-heading"
          >
            Button Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleButtonTrigger />
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
          aria-labelledby="ghost-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="ghost-lg-heading"
          >
            Ghost LG
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGhostLg />
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
        <section
          aria-labelledby="popup-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="popup-heading">
            Popup
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePopup />
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
          aria-labelledby="without-open-on-click-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-open-on-click-heading"
          >
            Without Open On Click
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutOpenOnClick />
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
        <section
          aria-labelledby="local-custom-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-custom-heading"
          >
            Custom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ComboboxCustom />
          </div>
        </section>
        <section
          aria-labelledby="local-input-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-input-group-heading"
          >
            Input Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ComboboxInputGroup />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ComboboxExamplePage;
