import KbdButton from "./_examples/kbd-button";
import KbdDemo from "./_examples/kbd-demo";
import KbdGroup from "./_examples/kbd-group";
import KbdInputGroup from "./_examples/kbd-input-group";
import KbdRtl from "./_examples/kbd-rtl";
import KbdTooltip from "./_examples/kbd-tooltip";

const KbdExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <KbdDemo />
        </div>
      </section>

      <section aria-labelledby="button-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="button-heading">
          Button
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <KbdButton />
        </div>
      </section>

      <section aria-labelledby="group-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="group-heading">
          Group
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <KbdGroup />
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
          <KbdInputGroup />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <KbdRtl />
        </div>
      </section>

      <section
        aria-labelledby="tooltip-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="tooltip-heading">
          Tooltip
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <KbdTooltip />
        </div>
      </section>
    </div>
  </div>
);

export default KbdExamplePage;
