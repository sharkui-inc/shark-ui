import MenuAvatar from "./_examples/menu-avatar";
import MenuBasic from "./_examples/menu-basic";
import MenuCheckboxes from "./_examples/menu-checkboxes";
import MenuCheckboxesIcons from "./_examples/menu-checkboxes-icons";
import MenuComplex from "./_examples/menu-complex";
import MenuDestructive from "./_examples/menu-destructive";
import MenuIcons from "./_examples/menu-icons";
import MenuRadioGroupDemo from "./_examples/menu-radio-group";
import MenuRadioIcons from "./_examples/menu-radio-icons";
import MenuRtl from "./_examples/menu-rtl";
import MenuShortcuts from "./_examples/menu-shortcuts";
import MenuSubmenu from "./_examples/menu-submenu";

const MenuExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MenuBasic />
        </div>
      </section>

      <section aria-labelledby="avatar-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="avatar-heading">
          Avatar
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MenuAvatar />
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
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MenuCheckboxes />
        </div>
      </section>

      <section
        aria-labelledby="checkboxes-icons-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="checkboxes-icons-heading"
        >
          Checkboxes Icons
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MenuCheckboxesIcons />
        </div>
      </section>

      <section
        aria-labelledby="complex-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="complex-heading">
          Complex
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MenuComplex />
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
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MenuDestructive />
        </div>
      </section>

      <section aria-labelledby="icons-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="icons-heading">
          Icons
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MenuIcons />
        </div>
      </section>

      <section
        aria-labelledby="radio-group-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="radio-group-heading"
        >
          Radio Group
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MenuRadioGroupDemo />
        </div>
      </section>

      <section
        aria-labelledby="radio-icons-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="radio-icons-heading"
        >
          Radio Icons
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MenuRadioIcons />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <MenuRtl />
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
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <MenuShortcuts />
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
          <MenuSubmenu />
        </div>
      </section>
    </div>
  </div>
);

export default MenuExamplePage;
