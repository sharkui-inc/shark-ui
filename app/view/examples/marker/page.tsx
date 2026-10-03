import MarkerBorder from "./_examples/marker-border";
import MarkerDemo from "./_examples/marker-demo";
import MarkerIcon from "./_examples/marker-icon";
import MarkerLinkButton from "./_examples/marker-link-button";
import MarkerSeparator from "./_examples/marker-separator";
import MarkerShimmer from "./_examples/marker-shimmer";
import MarkerStatus from "./_examples/marker-status";
import MarkerVariants from "./_examples/marker-variants";

const MarkerExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MarkerDemo />
        </div>
      </section>

      <section aria-labelledby="border-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="border-heading">
          Border
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MarkerBorder />
        </div>
      </section>

      <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="icon-heading">
          Icon
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MarkerIcon />
        </div>
      </section>

      <section
        aria-labelledby="link-button-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="link-button-heading"
        >
          Link Button
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MarkerLinkButton />
        </div>
      </section>

      <section
        aria-labelledby="separator-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="separator-heading"
        >
          Separator
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MarkerSeparator />
        </div>
      </section>

      <section
        aria-labelledby="shimmer-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="shimmer-heading">
          Shimmer
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MarkerShimmer />
        </div>
      </section>

      <section aria-labelledby="status-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="status-heading">
          Status
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MarkerStatus />
        </div>
      </section>

      <section
        aria-labelledby="variants-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="variants-heading">
          Variants
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MarkerVariants />
        </div>
      </section>
    </div>
  </div>
);

export default MarkerExamplePage;
