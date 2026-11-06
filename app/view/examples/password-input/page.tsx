import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutoHide from "@/registry/react/examples/password-input/example-auto-hide";
import ExampleAutocomplete from "@/registry/react/examples/password-input/example-autocomplete";
import ExampleControlled from "@/registry/react/examples/password-input/example-controlled";
import ExampleControlledVisibility from "@/registry/react/examples/password-input/example-controlled-visibility";
import ExampleCustomIndicator from "@/registry/react/examples/password-input/example-custom-indicator";
import ExampleDefault from "@/registry/react/examples/password-input/example-default";
import ExampleDisabled from "@/registry/react/examples/password-input/example-disabled";
import ExampleForm from "@/registry/react/examples/password-input/example-form";
import ExampleInvalid from "@/registry/react/examples/password-input/example-invalid";
import ExampleRtl from "@/registry/react/examples/password-input/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/password-input/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/password-input/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/password-input/example-size-sm";
import ExampleWithField from "@/registry/react/examples/password-input/example-with-field";

const PasswordInputExamplePage = () => (
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
          aria-labelledby="auto-hide-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="auto-hide-heading"
          >
            Auto Hide
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutoHide />
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
          aria-labelledby="controlled-visibility-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-visibility-heading"
          >
            Controlled Visibility
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlledVisibility />
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
            Form
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default PasswordInputExamplePage;
