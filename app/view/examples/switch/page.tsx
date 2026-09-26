import SwitchChoiceCard from "./_examples/switch-choice-card";
import SwitchDemo from "./_examples/switch-demo";
import SwitchDescription from "./_examples/switch-description";
import SwitchDisabled from "./_examples/switch-disabled";
import SwitchInvalid from "./_examples/switch-invalid";
import SwitchRtl from "./_examples/switch-rtl";
import SwitchSizes from "./_examples/switch-sizes";

const SwitchExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SwitchDemo />
        </div>
      </section>

      <section
        aria-labelledby="choice-card-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="choice-card-heading"
        >
          Choice Card
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SwitchChoiceCard />
        </div>
      </section>

      <section
        aria-labelledby="description-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="description-heading"
        >
          Description
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SwitchDescription />
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
          <SwitchDisabled />
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
          <SwitchInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SwitchRtl />
        </div>
      </section>

      <section aria-labelledby="sizes-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="sizes-heading">
          Sizes
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SwitchSizes />
        </div>
      </section>
    </div>
  </div>
);

export default SwitchExamplePage;
