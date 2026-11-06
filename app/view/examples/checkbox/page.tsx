import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCard from "@/registry/react/examples/checkbox/example-card";
import ExampleControlled from "@/registry/react/examples/checkbox/example-controlled";
import ExampleDefault from "@/registry/react/examples/checkbox/example-default";
import ExampleDisabled from "@/registry/react/examples/checkbox/example-disabled";
import ExampleForm from "@/registry/react/examples/checkbox/example-form";
import ExampleGroup from "@/registry/react/examples/checkbox/example-group";
import ExampleIndeterminate from "@/registry/react/examples/checkbox/example-indeterminate";
import ExampleInvalid from "@/registry/react/examples/checkbox/example-invalid";
import ExampleMaxSelected from "@/registry/react/examples/checkbox/example-max-selected";
import ExampleRtl from "@/registry/react/examples/checkbox/example-rtl";
import ExampleWithDescription from "@/registry/react/examples/checkbox/example-with-description";
import ExampleWithField from "@/registry/react/examples/checkbox/example-with-field";
import CheckboxDescription from "./_examples/checkbox-description";
import CheckboxTable from "./_examples/checkbox-table";

const CheckboxExamplePage = () => (
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
          aria-labelledby="indeterminate-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="indeterminate-heading"
          >
            Indeterminate
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIndeterminate />
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
          aria-labelledby="max-selected-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="max-selected-heading"
          >
            Max Selected
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMaxSelected />
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
          aria-labelledby="local-description-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-description-heading"
          >
            Description
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CheckboxDescription />
          </div>
        </section>
        <section
          aria-labelledby="local-table-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-table-heading"
          >
            Table
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CheckboxTable />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CheckboxExamplePage;
