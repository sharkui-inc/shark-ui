import SwitchChoiceCard from "./_examples/switch-choice-card";
import SwitchDemo from "./_examples/switch-demo";
import SwitchDisabled from "./_examples/switch-disabled";
import SwitchInvalid from "./_examples/switch-invalid";
import SwitchRtl from "./_examples/switch-rtl";
import SwitchSizes from "./_examples/switch-sizes";

const SwitchExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SwitchDemo />
        </div>
      </section>

      <section
        aria-labelledby="choice-card-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="choice-card-heading"
        >
          Choice Card
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SwitchChoiceCard />
        </div>
      </section>

      <section
        aria-labelledby="disabled-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="disabled-heading">
          Disabled
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SwitchDisabled />
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
          <SwitchInvalid />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SwitchRtl />
        </div>
      </section>

      <section aria-labelledby="sizes-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="sizes-heading">
          Sizes
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SwitchSizes />
        </div>
      </section>
    </div>
  </div>
);

export default SwitchExamplePage;
