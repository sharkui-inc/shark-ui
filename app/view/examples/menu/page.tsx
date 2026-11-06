import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCheckbox from "@/registry/react/examples/menu/example-checkbox";
import ExampleControlled from "@/registry/react/examples/menu/example-controlled";
import ExampleDefault from "@/registry/react/examples/menu/example-default";
import ExampleDestructive from "@/registry/react/examples/menu/example-destructive";
import ExampleDialog from "@/registry/react/examples/menu/example-dialog";
import ExampleDisabled from "@/registry/react/examples/menu/example-disabled";
import ExampleGroupLabel from "@/registry/react/examples/menu/example-group-label";
import ExampleIcons from "@/registry/react/examples/menu/example-icons";
import ExampleLink from "@/registry/react/examples/menu/example-link";
import ExampleMultipleTriggers from "@/registry/react/examples/menu/example-multiple-triggers";
import ExampleNested from "@/registry/react/examples/menu/example-nested";
import ExamplePositioning from "@/registry/react/examples/menu/example-positioning";
import ExampleQuickItem from "@/registry/react/examples/menu/example-quick-item";
import ExampleRadioGroup from "@/registry/react/examples/menu/example-radio-group";
import ExampleRtl from "@/registry/react/examples/menu/example-rtl";
import ExampleShortcuts from "@/registry/react/examples/menu/example-shortcuts";
import ExampleWithDescription from "@/registry/react/examples/menu/example-with-description";
import ExampleWithScroll from "@/registry/react/examples/menu/example-with-scroll";
import ExampleWithSeparator from "@/registry/react/examples/menu/example-with-separator";
import MenuAvatar from "./_examples/menu-avatar";
import MenuCheckboxes from "./_examples/menu-checkboxes";
import MenuCheckboxesIcons from "./_examples/menu-checkboxes-icons";
import MenuComplex from "./_examples/menu-complex";
import MenuRadioIcons from "./_examples/menu-radio-icons";
import MenuSubmenu from "./_examples/menu-submenu";

const MenuExamplePage = () => (
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
        <section
          aria-labelledby="checkbox-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="checkbox-heading"
          >
            Checkbox
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCheckbox />
          </div>
        </section>
        <section
          aria-labelledby="controlled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-heading"
          >
            Controlled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlled />
          </div>
        </section>
        <section
          aria-labelledby="destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="destructive-heading"
          >
            Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDestructive />
          </div>
        </section>
        <section
          aria-labelledby="dialog-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="dialog-heading">
            Dialog
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDialog />
          </div>
        </section>
        <section
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section
          aria-labelledby="group-label-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="group-label-heading"
          >
            Group Label
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroupLabel />
          </div>
        </section>
        <section
          aria-labelledby="icons-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="icons-heading">
            Icons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIcons />
          </div>
        </section>
        <section aria-labelledby="link-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="link-heading">
            Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLink />
          </div>
        </section>
        <section
          aria-labelledby="multiple-triggers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-triggers-heading"
          >
            Multiple Triggers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultipleTriggers />
          </div>
        </section>
        <section
          aria-labelledby="nested-heading"
          className="flex flex-col gap-5 sm:col-span-2"
        >
          <h2 className="text-muted-foreground font-medium" id="nested-heading">
            Nested
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNested />
          </div>
        </section>
        <section
          aria-labelledby="positioning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="positioning-heading"
          >
            Positioning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePositioning />
          </div>
        </section>
        <section
          aria-labelledby="quick-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="quick-item-heading"
          >
            Quick Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleQuickItem />
          </div>
        </section>
        <section
          aria-labelledby="radio-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="radio-group-heading"
          >
            Radio Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRadioGroup />
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
          aria-labelledby="shortcuts-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="shortcuts-heading"
          >
            Shortcuts
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleShortcuts />
          </div>
        </section>
        <section
          aria-labelledby="with-description-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-description-heading"
          >
            With Description
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDescription />
          </div>
        </section>
        <section
          aria-labelledby="with-scroll-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-scroll-heading"
          >
            With Scroll
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithScroll />
          </div>
        </section>
        <section
          aria-labelledby="with-separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-separator-heading"
          >
            With Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithSeparator />
          </div>
        </section>
        <section
          aria-labelledby="local-avatar-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-avatar-heading"
          >
            Avatar
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <MenuAvatar />
          </div>
        </section>
        <section
          aria-labelledby="local-checkboxes-icons-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-checkboxes-icons-heading"
          >
            Checkboxes Icons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <MenuCheckboxesIcons />
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
            <MenuCheckboxes />
          </div>
        </section>
        <section
          aria-labelledby="local-complex-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-complex-heading"
          >
            Complex
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <MenuComplex />
          </div>
        </section>
        <section
          aria-labelledby="local-radio-icons-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-radio-icons-heading"
          >
            Radio Icons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <MenuRadioIcons />
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
            <MenuSubmenu />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default MenuExamplePage;
