import ChartDemo from "./_examples/chart-demo";
import ChartExample from "./_examples/chart-example";
import ChartExampleAxis from "./_examples/chart-example-axis";
import ChartExampleGrid from "./_examples/chart-example-grid";
import ChartExampleLegend from "./_examples/chart-example-legend";
import ChartExampleTooltip from "./_examples/chart-example-tooltip";
import ChartRtl from "./_examples/chart-rtl";
import ChartTooltip from "./_examples/chart-tooltip";

const ChartExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ChartDemo />
        </div>
      </section>

      <section
        aria-labelledby="example-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="example-heading">
          Example
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ChartExample />
        </div>
      </section>

      <section aria-labelledby="axis-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="axis-heading">
          Axis
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ChartExampleAxis />
        </div>
      </section>

      <section aria-labelledby="grid-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="grid-heading">
          Grid
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ChartExampleGrid />
        </div>
      </section>

      <section aria-labelledby="legend-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="legend-heading">
          Legend
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ChartExampleLegend />
        </div>
      </section>

      <section
        aria-labelledby="tooltip-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="tooltip-heading">
          Tooltip
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ChartExampleTooltip />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ChartRtl />
        </div>
      </section>

      <section
        aria-labelledby="chart-tooltip-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="chart-tooltip-heading"
        >
          Tooltip
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ChartTooltip />
        </div>
      </section>
    </div>
  </div>
);

export default ChartExamplePage;
