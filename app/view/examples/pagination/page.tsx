import PaginationDemo from "./_examples/pagination-demo";
import PaginationIconsOnly from "./_examples/pagination-icons-only";
import PaginationRtl from "./_examples/pagination-rtl";
import PaginationSimple from "./_examples/pagination-simple";

const PaginationExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <PaginationDemo />
        </div>
      </section>

      <section
        aria-labelledby="icons-only-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="icons-only-heading"
        >
          Icons Only
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <PaginationIconsOnly />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <PaginationRtl />
        </div>
      </section>

      <section aria-labelledby="simple-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="simple-heading">
          Simple
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <PaginationSimple />
        </div>
      </section>
    </div>
  </div>
);

export default PaginationExamplePage;
