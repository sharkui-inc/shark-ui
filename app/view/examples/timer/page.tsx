import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/timer/example-controlled";
import ExampleCountdown from "@/registry/react/examples/timer/example-countdown";
import ExampleCountdownDate from "@/registry/react/examples/timer/example-countdown-date";
import ExampleCustomSeparator from "@/registry/react/examples/timer/example-custom-separator";
import ExampleDefault from "@/registry/react/examples/timer/example-default";
import ExampleInterval from "@/registry/react/examples/timer/example-interval";
import ExampleOrientationHorizontal from "@/registry/react/examples/timer/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/timer/example-orientation-vertical";
import ExamplePomodoro from "@/registry/react/examples/timer/example-pomodoro";
import ExampleRtl from "@/registry/react/examples/timer/example-rtl";

const TimerExamplePage = () => (
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
            <ExampleControlled />
          </div>
        </section>
        <section
          aria-labelledby="countdown-date-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="countdown-date-heading"
          >
            Countdown Date
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCountdownDate />
          </div>
        </section>
        <section
          aria-labelledby="countdown-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="countdown-heading"
          >
            Countdown
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCountdown />
          </div>
        </section>
        <section
          aria-labelledby="custom-separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-separator-heading"
          >
            Custom Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSeparator />
          </div>
        </section>
        <section
          aria-labelledby="interval-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="interval-heading"
          >
            Interval
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInterval />
          </div>
        </section>
        <section
          aria-labelledby="orientation-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-horizontal-heading"
          >
            Orientation Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="orientation-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-vertical-heading"
          >
            Orientation Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationVertical />
          </div>
        </section>
        <section
          aria-labelledby="pomodoro-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="pomodoro-heading"
          >
            Pomodoro
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePomodoro />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TimerExamplePage;
