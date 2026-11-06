import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/chart/example-default";
import ExampleRtl from "@/registry/react/examples/chart/example-rtl";
import ExampleThemingElements from "@/registry/react/examples/chart/example-theming-elements";
import ExampleThemingFormats from "@/registry/react/examples/chart/example-theming-formats";
import ExampleThemingPalette from "@/registry/react/examples/chart/example-theming-palette";
import ExampleThemingPie from "@/registry/react/examples/chart/example-theming-pie";
import ExampleThemingTheme from "@/registry/react/examples/chart/example-theming-theme";
import ExampleThemingVariables from "@/registry/react/examples/chart/example-theming-variables";
import ExampleUsageAxis from "@/registry/react/examples/chart/example-usage-axis";
import ExampleUsageChart from "@/registry/react/examples/chart/example-usage-chart";
import ExampleUsageConfig from "@/registry/react/examples/chart/example-usage-config";
import ExampleUsageData from "@/registry/react/examples/chart/example-usage-data";
import ExampleUsageGrid from "@/registry/react/examples/chart/example-usage-grid";
import ExampleUsageLegend from "@/registry/react/examples/chart/example-usage-legend";
import ExampleUsageTooltip from "@/registry/react/examples/chart/example-usage-tooltip";
import ChartExample from "./_examples/chart-example";
import ChartExampleAxis from "./_examples/chart-example-axis";
import ChartExampleGrid from "./_examples/chart-example-grid";
import ChartExampleLegend from "./_examples/chart-example-legend";
import ChartExampleTooltip from "./_examples/chart-example-tooltip";
import ChartTooltip from "./_examples/chart-tooltip";

const ChartExamplePage = () => (
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="theming-elements-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="theming-elements-heading"
          >
            Theming Elements
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThemingElements />
          </div>
        </section>
        <section
          aria-labelledby="theming-formats-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="theming-formats-heading"
          >
            Theming Formats
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThemingFormats />
          </div>
        </section>
        <section
          aria-labelledby="theming-palette-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="theming-palette-heading"
          >
            Theming Palette
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThemingPalette />
          </div>
        </section>
        <section
          aria-labelledby="theming-pie-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="theming-pie-heading"
          >
            Theming Pie
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThemingPie />
          </div>
        </section>
        <section
          aria-labelledby="theming-theme-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="theming-theme-heading"
          >
            Theming Theme
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThemingTheme />
          </div>
        </section>
        <section
          aria-labelledby="theming-variables-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="theming-variables-heading"
          >
            Theming Variables
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThemingVariables />
          </div>
        </section>
        <section
          aria-labelledby="usage-axis-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-axis-heading"
          >
            Usage Axis
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageAxis />
          </div>
        </section>
        <section
          aria-labelledby="usage-chart-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-chart-heading"
          >
            Usage Chart
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageChart />
          </div>
        </section>
        <section
          aria-labelledby="usage-config-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-config-heading"
          >
            Usage Config
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageConfig />
          </div>
        </section>
        <section
          aria-labelledby="usage-data-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-data-heading"
          >
            Usage Data
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageData />
          </div>
        </section>
        <section
          aria-labelledby="usage-grid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-grid-heading"
          >
            Usage Grid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageGrid />
          </div>
        </section>
        <section
          aria-labelledby="usage-legend-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-legend-heading"
          >
            Usage Legend
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageLegend />
          </div>
        </section>
        <section
          aria-labelledby="usage-tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="usage-tooltip-heading"
          >
            Usage Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUsageTooltip />
          </div>
        </section>
        <section
          aria-labelledby="local-example-axis-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-example-axis-heading"
          >
            Example Axis
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ChartExampleAxis />
          </div>
        </section>
        <section
          aria-labelledby="local-example-grid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-example-grid-heading"
          >
            Example Grid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ChartExampleGrid />
          </div>
        </section>
        <section
          aria-labelledby="local-example-legend-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-example-legend-heading"
          >
            Example Legend
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ChartExampleLegend />
          </div>
        </section>
        <section
          aria-labelledby="local-example-tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-example-tooltip-heading"
          >
            Example Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ChartExampleTooltip />
          </div>
        </section>
        <section
          aria-labelledby="local-example-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-example-heading"
          >
            Example
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ChartExample />
          </div>
        </section>
        <section
          aria-labelledby="local-tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-tooltip-heading"
          >
            Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ChartTooltip />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ChartExamplePage;
