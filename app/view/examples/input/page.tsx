import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBadge from "@/registry/react/examples/input/example-badge";
import ExampleButtonGroup from "@/registry/react/examples/input/example-button-group";
import ExampleControlled from "@/registry/react/examples/input/example-controlled";
import ExampleDefault from "@/registry/react/examples/input/example-default";
import ExampleDisabled from "@/registry/react/examples/input/example-disabled";
import ExampleFieldGroup from "@/registry/react/examples/input/example-field-group";
import ExampleFile from "@/registry/react/examples/input/example-file";
import ExampleForm from "@/registry/react/examples/input/example-form";
import ExampleGrid from "@/registry/react/examples/input/example-grid";
import ExampleInline from "@/registry/react/examples/input/example-inline";
import ExampleInputGroup from "@/registry/react/examples/input/example-input-group";
import ExampleInvalid from "@/registry/react/examples/input/example-invalid";
import ExamplePill from "@/registry/react/examples/input/example-pill";
import ExampleRtl from "@/registry/react/examples/input/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/input/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/input/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/input/example-size-sm";
import ExampleWithField from "@/registry/react/examples/input/example-with-field";
import InputField from "./_examples/input-field";
import InputFieldgroup from "./_examples/input-fieldgroup";
import InputRequired from "./_examples/input-required";

const InputExamplePage = () => (
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
          aria-labelledby="badge-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="badge-heading">
            Badge
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBadge />
          </div>
        </section>
        <section
          aria-labelledby="button-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="button-group-heading"
          >
            Button Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleButtonGroup />
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
          aria-labelledby="field-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="field-group-heading"
          >
            Field Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFieldGroup />
          </div>
        </section>
        <section aria-labelledby="file-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="file-heading">
            File
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFile />
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
        <section aria-labelledby="grid-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="grid-heading">
            Grid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGrid />
          </div>
        </section>
        <section
          aria-labelledby="inline-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="inline-heading">
            Inline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInline />
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
        <section
          aria-labelledby="local-field-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-field-heading"
          >
            Field
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputField />
          </div>
        </section>
        <section
          aria-labelledby="local-fieldgroup-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-fieldgroup-heading"
          >
            Fieldgroup
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputFieldgroup />
          </div>
        </section>
        <section
          aria-labelledby="local-required-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-required-heading"
          >
            Required
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <InputRequired />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default InputExamplePage;
