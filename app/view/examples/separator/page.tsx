import SeparatorDemo from "./_examples/separator-demo";
import SeparatorList from "./_examples/separator-list";
import SeparatorMenu from "./_examples/separator-menu";
import SeparatorRtl from "./_examples/separator-rtl";
import SeparatorVertical from "./_examples/separator-vertical";

const SeparatorExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SeparatorDemo />
        </div>
      </section>

      <section aria-labelledby="list-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="list-heading">
          List
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SeparatorList />
        </div>
      </section>

      <section aria-labelledby="menu-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="menu-heading">
          Menu
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SeparatorMenu />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <SeparatorRtl />
        </div>
      </section>

      <section
        aria-labelledby="vertical-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="vertical-heading">
          Vertical
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <SeparatorVertical />
        </div>
      </section>
    </div>
  </div>
);

export default SeparatorExamplePage;
