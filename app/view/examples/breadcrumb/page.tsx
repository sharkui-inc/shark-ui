import BreadcrumbBasic from "./_examples/breadcrumb-basic";
import BreadcrumbCollapsed from "./_examples/breadcrumb-collapsed";
import BreadcrumbCustomSeparator from "./_examples/breadcrumb-custom-separator";
import BreadcrumbDropdown from "./_examples/breadcrumb-dropdown";
import BreadcrumbRtl from "./_examples/breadcrumb-rtl";
import BreadcrumbWithLink from "./_examples/breadcrumb-with-link";

const BreadcrumbExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BreadcrumbBasic />
        </div>
      </section>

      <section
        aria-labelledby="custom-separator-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="custom-separator-heading"
        >
          Custom Separator
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BreadcrumbCustomSeparator />
        </div>
      </section>

      <section
        aria-labelledby="dropdown-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="dropdown-heading">
          Dropdown
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BreadcrumbDropdown />
        </div>
      </section>

      <section
        aria-labelledby="collapsed-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="collapsed-heading"
        >
          Collapsed
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BreadcrumbCollapsed />
        </div>
      </section>

      <section aria-labelledby="link-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="link-heading">
          Link Component
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <BreadcrumbWithLink />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <BreadcrumbRtl />
        </div>
      </section>
    </div>
  </div>
);

export default BreadcrumbExamplePage;
