import CheckboxBasic from "./_examples/checkbox-basic";
import CheckboxDescription from "./_examples/checkbox-description";
import CheckboxDisabled from "./_examples/checkbox-disabled";
import CheckboxGroupExample from "./_examples/checkbox-group";
import CheckboxInvalid from "./_examples/checkbox-invalid";
import CheckboxRtl from "./_examples/checkbox-rtl";
import CheckboxTable from "./_examples/checkbox-table";

const CheckboxExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="basic-heading">
          Basic
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <CheckboxBasic />
        </div>
      </section>

      <section
        aria-labelledby="description-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="description-heading"
        >
          Description
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <CheckboxDescription />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="disabled-heading">
          Disabled
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <CheckboxDisabled />
        </div>
      </section>

      <section aria-labelledby="group-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="group-heading">
          Group
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <CheckboxGroupExample />
        </div>
      </section>

      <section
        aria-labelledby="invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="invalid-heading">
          Invalid
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <CheckboxInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <CheckboxRtl />
        </div>
      </section>

      <section aria-labelledby="table-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="table-heading">
          Table
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <CheckboxTable />
        </div>
      </section>
    </div>
  </div>
);

export default CheckboxExamplePage;
