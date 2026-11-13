import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/context-menu/example-default";
import ExampleRtl from "@/registry/react/examples/context-menu/example-rtl";
import ContextMenuCheckboxes from "./_examples/context-menu-checkboxes";
import ContextMenuDestructive from "./_examples/context-menu-destructive";
import ContextMenuGroups from "./_examples/context-menu-groups";
import ContextMenuIcons from "./_examples/context-menu-icons";
import ContextMenuRadio from "./_examples/context-menu-radio";
import ContextMenuShortcuts from "./_examples/context-menu-shortcuts";
import ContextMenuSides from "./_examples/context-menu-sides";
import ContextMenuSubmenu from "./_examples/context-menu-submenu";

const ContextMenuExamplePage = () => (
  <PreviewLocaleProvider>
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
        <section
          aria-labelledby="default-heading"
          className="flex flex-col gap-5"
        >
          <h1
            className="text-muted-foreground font-medium"
            id="default-heading"
          >
            Default
          </h1>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDefault />
          </div>
        </section>
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="local-checkboxes-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-checkboxes-heading"
          >
            Checkboxes
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuCheckboxes />
          </div>
        </section>
        <section
          aria-labelledby="local-destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-destructive-heading"
          >
            Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuDestructive />
          </div>
        </section>
        <section
          aria-labelledby="local-groups-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-groups-heading"
          >
            Groups
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuGroups />
          </div>
        </section>
        <section
          aria-labelledby="local-icons-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-icons-heading"
          >
            Icons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuIcons />
          </div>
        </section>
        <section
          aria-labelledby="local-radio-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-radio-heading"
          >
            Radio
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuRadio />
          </div>
        </section>
        <section
          aria-labelledby="local-shortcuts-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-shortcuts-heading"
          >
            Shortcuts
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuShortcuts />
          </div>
        </section>
        <section
          aria-labelledby="local-positioning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-positioning-heading"
          >
            Positioning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuSides />
          </div>
        </section>
        <section
          aria-labelledby="local-submenu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-submenu-heading"
          >
            Submenu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ContextMenuSubmenu />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ContextMenuExamplePage;
