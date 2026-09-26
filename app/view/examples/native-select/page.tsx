import NativeSelectDemo from "./_examples/native-select-demo";
import NativeSelectDisabled from "./_examples/native-select-disabled";
import NativeSelectGroups from "./_examples/native-select-groups";
import NativeSelectInvalid from "./_examples/native-select-invalid";
import NativeSelectRtl from "./_examples/native-select-rtl";

const NativeSelectExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <NativeSelectDemo />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="disabled-heading">
          Disabled
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <NativeSelectDisabled />
        </div>
      </section>

      <section aria-labelledby="groups-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="groups-heading">
          Groups
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <NativeSelectGroups />
        </div>
      </section>

      <section
        aria-labelledby="invalid-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="invalid-heading">
          Invalid
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <NativeSelectInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <NativeSelectRtl />
        </div>
      </section>
    </div>
  </div>
);

export default NativeSelectExamplePage;
