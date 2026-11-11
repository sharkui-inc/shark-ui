import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAutoresize from "@/registry/react/examples/textarea/example-autoresize";
import ExampleControlled from "@/registry/react/examples/textarea/example-controlled";
import ExampleDefault from "@/registry/react/examples/textarea/example-default";
import ExampleDisabled from "@/registry/react/examples/textarea/example-disabled";
import ExampleForm from "@/registry/react/examples/textarea/example-form";
import ExampleInvalid from "@/registry/react/examples/textarea/example-invalid";
import ExampleRtl from "@/registry/react/examples/textarea/example-rtl";
import ExampleWithField from "@/registry/react/examples/textarea/example-with-field";
import TextareaButton from "./_examples/textarea-button";
import TextareaField from "./_examples/textarea-field";

const TextareaExamplePage = () => (
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
          aria-labelledby="autoresize-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="autoresize-heading"
          >
            Autoresize
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAutoresize />
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
          aria-labelledby="local-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-button-heading"
          >
            Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <TextareaButton />
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
            <TextareaField />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TextareaExamplePage;
