import ProgressControlled from "./_examples/progress-controlled";
import ProgressDemo from "./_examples/progress-demo";
import ProgressLabelExample from "./_examples/progress-label";
import ProgressRtl from "./_examples/progress-rtl";

const ProgressExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ProgressDemo />
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
          <ProgressControlled />
        </div>
      </section>

      <section aria-labelledby="label-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="label-heading">
          Label
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ProgressLabelExample />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ProgressRtl />
        </div>
      </section>
    </div>
  </div>
);

export default ProgressExamplePage;
