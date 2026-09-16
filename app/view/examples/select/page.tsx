import SelectAlignItem from "./_examples/select-align-item";
import SelectDemo from "./_examples/select-demo";
import SelectDisabled from "./_examples/select-disabled";
import SelectGroups from "./_examples/select-groups";
import SelectInvalid from "./_examples/select-invalid";
import SelectRtl from "./_examples/select-rtl";
import SelectScrollable from "./_examples/select-scrollable";

const SelectExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SelectDemo />
        </div>
      </section>

      <section
        aria-labelledby="align-item-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="align-item-heading"
        >
          Align Item
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SelectAlignItem />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="disabled-heading">
          Disabled
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SelectDisabled />
        </div>
      </section>

      <section aria-labelledby="groups-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="groups-heading">
          Groups
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SelectGroups />
        </div>
      </section>

      <section
        aria-labelledby="invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="invalid-heading">
          Invalid
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SelectInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SelectRtl />
        </div>
      </section>

      <section
        aria-labelledby="scrollable-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="scrollable-heading"
        >
          Scrollable
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SelectScrollable />
        </div>
      </section>
    </div>
  </div>
);

export default SelectExamplePage;
