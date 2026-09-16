import CommandBasic from "./_examples/command-basic";
import CommandDialog from "./_examples/command-dialog";
import CommandGroups from "./_examples/command-groups";
import CommandRtl from "./_examples/command-rtl";
import CommandScrollable from "./_examples/command-scrollable";
import CommandShortcuts from "./_examples/command-shortcuts";

const CommandExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CommandBasic />
        </div>
      </section>

      <section aria-labelledby="dialog-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="dialog-heading">
          Dialog
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CommandDialog />
        </div>
      </section>

      <section aria-labelledby="groups-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="groups-heading">
          Groups
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CommandGroups />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CommandRtl />
        </div>
      </section>

      <section
        aria-labelledby="scrollable-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="scrollable-heading"
        >
          Scrollable
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CommandScrollable />
        </div>
      </section>

      <section
        aria-labelledby="shortcuts-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="shortcuts-heading"
        >
          Shortcuts
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CommandShortcuts />
        </div>
      </section>
    </div>
  </div>
);

export default CommandExamplePage;
