import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleByte from "@/registry/react/examples/format/example-byte";
import ExampleByteUnitDisplay from "@/registry/react/examples/format/example-byte-unit-display";
import ExampleByteUnitSystem from "@/registry/react/examples/format/example-byte-unit-system";
import ExampleDefault from "@/registry/react/examples/format/example-default";
import ExampleNumber from "@/registry/react/examples/format/example-number";
import ExampleNumberCompact from "@/registry/react/examples/format/example-number-compact";
import ExampleNumberCurrency from "@/registry/react/examples/format/example-number-currency";
import ExampleNumberPercent from "@/registry/react/examples/format/example-number-percent";
import ExampleRelativeTime from "@/registry/react/examples/format/example-relative-time";
import ExampleRelativeTimeShort from "@/registry/react/examples/format/example-relative-time-short";
import ExampleRtl from "@/registry/react/examples/format/example-rtl";
import ExampleTime from "@/registry/react/examples/format/example-time";

const FormatExamplePage = () => (
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
        <section
          aria-labelledby="byte-unit-display-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="byte-unit-display-heading"
          >
            Byte Unit Display
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleByteUnitDisplay />
          </div>
        </section>
        <section
          aria-labelledby="byte-unit-system-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="byte-unit-system-heading"
          >
            Byte Unit System
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleByteUnitSystem />
          </div>
        </section>
        <section aria-labelledby="byte-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="byte-heading">
            Byte
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleByte />
          </div>
        </section>
        <section
          aria-labelledby="number-compact-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="number-compact-heading"
          >
            Number Compact
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNumberCompact />
          </div>
        </section>
        <section
          aria-labelledby="number-currency-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="number-currency-heading"
          >
            Number Currency
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNumberCurrency />
          </div>
        </section>
        <section
          aria-labelledby="number-percent-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="number-percent-heading"
          >
            Number Percent
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNumberPercent />
          </div>
        </section>
        <section
          aria-labelledby="number-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="number-heading">
            Number
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNumber />
          </div>
        </section>
        <section
          aria-labelledby="relative-time-short-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="relative-time-short-heading"
          >
            Relative Time Short
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRelativeTimeShort />
          </div>
        </section>
        <section
          aria-labelledby="relative-time-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="relative-time-heading"
          >
            Relative Time
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRelativeTime />
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
        <section aria-labelledby="time-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="time-heading">
            Time
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTime />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default FormatExamplePage;
