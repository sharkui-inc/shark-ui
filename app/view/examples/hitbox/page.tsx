import ExampleAxes from "@/registry/react/examples/hitbox/example-axes";
import ExampleBasic from "@/registry/react/examples/hitbox/example-basic";
import ExampleCustom from "@/registry/react/examples/hitbox/example-custom";
import ExampleDebug from "@/registry/react/examples/hitbox/example-debug";
import ExampleDefault from "@/registry/react/examples/hitbox/example-default";
import ExampleSidebar from "@/registry/react/examples/hitbox/example-sidebar";
import ExampleSides from "@/registry/react/examples/hitbox/example-sides";

const HitboxExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5"
      >
        <h1 className="text-muted-foreground font-medium" id="default-heading">
          Default
        </h1>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleDefault />
        </div>
      </section>
      <section aria-labelledby="axes-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="axes-heading">
          Axes
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleAxes />
        </div>
      </section>
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="basic-heading">
          Basic
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleBasic />
        </div>
      </section>
      <section aria-labelledby="custom-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="custom-heading">
          Custom
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCustom />
        </div>
      </section>
      <section aria-labelledby="debug-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="debug-heading">
          Debug
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleDebug />
        </div>
      </section>
      <section
        aria-labelledby="sidebar-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="sidebar-heading">
          Sidebar
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSidebar />
        </div>
      </section>
      <section aria-labelledby="sides-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="sides-heading">
          Sides
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSides />
        </div>
      </section>
    </div>
  </div>
);

export default HitboxExamplePage;
