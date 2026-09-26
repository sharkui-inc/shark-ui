import TooltipDemo from "./_examples/tooltip-demo";
import TooltipDisabled from "./_examples/tooltip-disabled";
import TooltipKeyboard from "./_examples/tooltip-keyboard";
import TooltipRtl from "./_examples/tooltip-rtl";
import TooltipSides from "./_examples/tooltip-sides";

const TooltipExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TooltipDemo />
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
          <TooltipDisabled />
        </div>
      </section>

      <section
        aria-labelledby="keyboard-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="keyboard-heading">
          Keyboard
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TooltipKeyboard />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <TooltipRtl />
        </div>
      </section>

      <section aria-labelledby="sides-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="sides-heading">
          Sides
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TooltipSides />
        </div>
      </section>
    </div>
  </div>
);

export default TooltipExamplePage;
