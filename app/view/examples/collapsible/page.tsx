import CollapsibleBasic from "./_examples/collapsible-basic";
import CollapsibleFileTree from "./_examples/collapsible-file-tree";
import CollapsibleRtl from "./_examples/collapsible-rtl";
import CollapsibleSettings from "./_examples/collapsible-settings";

const CollapsibleExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="basic-heading">
          Basic
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <CollapsibleBasic />
        </div>
      </section>

      <section
        aria-labelledby="file-tree-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="file-tree-heading"
        >
          File Tree
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <CollapsibleFileTree />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <CollapsibleRtl />
        </div>
      </section>

      <section
        aria-labelledby="settings-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="settings-heading">
          Settings
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <CollapsibleSettings />
        </div>
      </section>
    </div>
  </div>
);

export default CollapsibleExamplePage;
