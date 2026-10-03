import BadgeBasic from "./_examples/badge-basic";
import BadgeCustomColor from "./_examples/badge-custom-color";
import BadgePill from "./_examples/badge-pill";
import BadgeRtl from "./_examples/badge-rtl";
import BadgeSizes from "./_examples/badge-sizes";
import BadgeVariants from "./_examples/badge-variants";
import BadgeWithIcon from "./_examples/badge-with-icon";
import BadgeWithLink from "./_examples/badge-with-link";
import BadgeWithSpinner from "./_examples/badge-with-spinner";
import BadgeWithStatus from "./_examples/badge-with-status";

const BadgeExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BadgeBasic />
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
          <BadgeVariants />
        </div>
      </section>

      <section aria-labelledby="sizes-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="sizes-heading">
          Sizes
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BadgeSizes />
        </div>
      </section>

      <section aria-labelledby="pill-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="pill-heading">
          Pill
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BadgePill />
        </div>
      </section>

      <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="icon-heading">
          With Icon
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BadgeWithIcon />
        </div>
      </section>

      <section aria-labelledby="link-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="link-heading">
          With Link
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BadgeWithLink />
        </div>
      </section>

      <section
        aria-labelledby="spinner-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="spinner-heading">
          With Spinner
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BadgeWithSpinner />
        </div>
      </section>

      <section aria-labelledby="status-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="status-heading">
          With Status
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BadgeWithStatus />
        </div>
      </section>

      <section
        aria-labelledby="custom-color-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="custom-color-heading"
        >
          Custom Color
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BadgeCustomColor />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BadgeRtl />
        </div>
      </section>
    </div>
  </div>
);

export default BadgeExamplePage;
