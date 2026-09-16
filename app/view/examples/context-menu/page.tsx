import ContextMenuBasic from "./_examples/context-menu-basic";
import ContextMenuCheckboxes from "./_examples/context-menu-checkboxes";
import ContextMenuDestructive from "./_examples/context-menu-destructive";
import ContextMenuGroups from "./_examples/context-menu-groups";
import ContextMenuIcons from "./_examples/context-menu-icons";
import ContextMenuRadio from "./_examples/context-menu-radio";
import ContextMenuRtl from "./_examples/context-menu-rtl";
import ContextMenuShortcuts from "./_examples/context-menu-shortcuts";
import ContextMenuSides from "./_examples/context-menu-sides";
import ContextMenuSubmenu from "./_examples/context-menu-submenu";

const ContextMenuExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ContextMenuBasic />
        </div>
      </section>

      <section
        aria-labelledby="checkboxes-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="checkboxes-heading"
        >
          Checkboxes
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ContextMenuCheckboxes />
        </div>
      </section>

      <section
        aria-labelledby="destructive-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="destructive-heading"
        >
          Destructive
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ContextMenuDestructive />
        </div>
      </section>

      <section aria-labelledby="groups-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="groups-heading">
          Groups
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ContextMenuGroups />
        </div>
      </section>

      <section aria-labelledby="icons-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="icons-heading">
          Icons
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ContextMenuIcons />
        </div>
      </section>

      <section aria-labelledby="radio-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="radio-heading">
          Radio
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ContextMenuRadio />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ContextMenuRtl />
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
          <ContextMenuShortcuts />
        </div>
      </section>

      <section aria-labelledby="sides-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="sides-heading">
          Sides
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ContextMenuSides />
        </div>
      </section>

      <section
        aria-labelledby="submenu-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="submenu-heading">
          Submenu
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ContextMenuSubmenu />
        </div>
      </section>
    </div>
  </div>
);

export default ContextMenuExamplePage;
