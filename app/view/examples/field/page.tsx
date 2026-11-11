import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutocomplete from "@/registry/react/examples/field/example-autocomplete";
import ExampleCheckbox from "@/registry/react/examples/field/example-checkbox";
import ExampleCheckboxGroup from "@/registry/react/examples/field/example-checkbox-group";
import ExampleCombobox from "@/registry/react/examples/field/example-combobox";
import ExampleComboboxMultiple from "@/registry/react/examples/field/example-combobox-multiple";
import ExampleDefault from "@/registry/react/examples/field/example-default";
import ExampleDisabled from "@/registry/react/examples/field/example-disabled";
import ExampleGroup from "@/registry/react/examples/field/example-group";
import ExampleInputGroup from "@/registry/react/examples/field/example-input-group";
import ExampleNumberInput from "@/registry/react/examples/field/example-number-input";
import ExampleOrientationHorizontal from "@/registry/react/examples/field/example-orientation-horizontal";
import ExampleOrientationResponsive from "@/registry/react/examples/field/example-orientation-responsive";
import ExampleOrientationVertical from "@/registry/react/examples/field/example-orientation-vertical";
import ExampleRadioGroup from "@/registry/react/examples/field/example-radio-group";
import ExampleReadOnly from "@/registry/react/examples/field/example-read-only";
import ExampleRequired from "@/registry/react/examples/field/example-required";
import ExampleRtl from "@/registry/react/examples/field/example-rtl";
import ExampleSelect from "@/registry/react/examples/field/example-select";
import ExampleSlider from "@/registry/react/examples/field/example-slider";
import ExampleSwitch from "@/registry/react/examples/field/example-switch";
import ExampleTextarea from "@/registry/react/examples/field/example-textarea";
import ExampleWithError from "@/registry/react/examples/field/example-with-error";
import FieldChoiceCard from "./_examples/field-choice-card";
import FieldFieldset from "./_examples/field-fieldset";
import FieldInput from "./_examples/field-input";
import FieldRadio from "./_examples/field-radio";
import FieldResponsive from "./_examples/field-responsive";

const FieldExamplePage = () => (
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
          aria-labelledby="autocomplete-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="autocomplete-heading"
          >
            Autocomplete
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutocomplete />
          </div>
        </section>
        <section
          aria-labelledby="checkbox-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="checkbox-group-heading"
          >
            Checkbox Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCheckboxGroup />
          </div>
        </section>
        <section
          aria-labelledby="checkbox-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="checkbox-heading"
          >
            Checkbox
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCheckbox />
          </div>
        </section>
        <section
          aria-labelledby="combobox-multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="combobox-multiple-heading"
          >
            Combobox Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleComboboxMultiple />
          </div>
        </section>
        <section
          aria-labelledby="combobox-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="combobox-heading"
          >
            Combobox
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCombobox />
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
          aria-labelledby="input-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="input-group-heading"
          >
            Input Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInputGroup />
          </div>
        </section>
        <section
          aria-labelledby="number-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="number-input-heading"
          >
            Number Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNumberInput />
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
          aria-labelledby="orientation-responsive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-responsive-heading"
          >
            Orientation Responsive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationResponsive />
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
        <section
          aria-labelledby="radio-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="radio-group-heading"
          >
            Radio Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRadioGroup />
          </div>
        </section>
        <section
          aria-labelledby="read-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="read-only-heading"
          >
            Read-only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReadOnly />
          </div>
        </section>
        <section
          aria-labelledby="required-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="required-heading"
          >
            Required
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRequired />
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
          aria-labelledby="select-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="select-heading">
            Select
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSelect />
          </div>
        </section>
        <section
          aria-labelledby="slider-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="slider-heading">
            Slider
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSlider />
          </div>
        </section>
        <section
          aria-labelledby="switch-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="switch-heading">
            Switch
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSwitch />
          </div>
        </section>
        <section
          aria-labelledby="textarea-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="textarea-heading"
          >
            Textarea
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTextarea />
          </div>
        </section>
        <section
          aria-labelledby="with-error-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-error-heading"
          >
            With Error
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithError />
          </div>
        </section>
        <section
          aria-labelledby="local-choice-card-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-choice-card-heading"
          >
            Choice Card
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <FieldChoiceCard />
          </div>
        </section>
        <section
          aria-labelledby="local-fieldset-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-fieldset-heading"
          >
            Fieldset
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <FieldFieldset />
          </div>
        </section>
        <section
          aria-labelledby="local-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-input-heading"
          >
            Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <FieldInput />
          </div>
        </section>
        <section
          aria-labelledby="local-radio-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-radio-heading"
          >
            Radio
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <FieldRadio />
          </div>
        </section>
        <section
          aria-labelledby="local-responsive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-responsive-heading"
          >
            Responsive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <FieldResponsive />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default FieldExamplePage;
