import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCard from "@/registry/react/examples/switch/example-card";
import ExampleControlled from "@/registry/react/examples/switch/example-controlled";
import ExampleDefault from "@/registry/react/examples/switch/example-default";
import ExampleDisabled from "@/registry/react/examples/switch/example-disabled";
import ExampleForm from "@/registry/react/examples/switch/example-form";
import ExampleInvalid from "@/registry/react/examples/switch/example-invalid";
import ExampleRtl from "@/registry/react/examples/switch/example-rtl";
import ExampleSize from "@/registry/react/examples/switch/example-size";
import ExampleWithField from "@/registry/react/examples/switch/example-with-field";
import SwitchChoiceCard from "./_examples/switch-choice-card";
import SwitchSizes from "./_examples/switch-sizes";

const SwitchExamplePage = () => (
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
        <section aria-labelledby="card-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="card-heading">
            Card
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCard />
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
        <section aria-labelledby="size-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="size-heading">
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSize />
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
            <SwitchChoiceCard />
          </div>
        </section>
        <section
          aria-labelledby="local-sizes-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-sizes-heading"
          >
            Sizes
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <SwitchSizes />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default SwitchExamplePage;
