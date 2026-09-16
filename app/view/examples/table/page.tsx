import TableActions from "./_examples/table-actions";
import TableDemo from "./_examples/table-demo";
import TableFooterExample from "./_examples/table-footer";
import TableRtl from "./_examples/table-rtl";

const TableExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TableDemo />
        </div>
      </section>

      <section aria-labelledby="actions-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="actions-heading">
          Actions
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <TableActions />
        </div>
      </section>

      <section aria-labelledby="footer-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="footer-heading">
          Footer
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <TableFooterExample />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <TableRtl />
        </div>
      </section>
    </div>
  </div>
);

export default TableExamplePage;
