import ExampleActiveMenuButton from "@/registry/react/examples/sidebar/example-active-menu-button";
import ExampleCollapsibleGroup from "@/registry/react/examples/sidebar/example-collapsible-group";
import ExampleCollapsibleIcon from "@/registry/react/examples/sidebar/example-collapsible-icon";
import ExampleCollapsibleOffcanvas from "@/registry/react/examples/sidebar/example-collapsible-offcanvas";
import ExampleContent from "@/registry/react/examples/sidebar/example-content";
import ExampleCustomTrigger from "@/registry/react/examples/sidebar/example-custom-trigger";
import ExampleDefault from "@/registry/react/examples/sidebar/example-default";
import ExampleFloating from "@/registry/react/examples/sidebar/example-floating";
import ExampleFooter from "@/registry/react/examples/sidebar/example-footer";
import ExampleGroup from "@/registry/react/examples/sidebar/example-group";
import ExampleHeader from "@/registry/react/examples/sidebar/example-header";
import ExampleInsetLayout from "@/registry/react/examples/sidebar/example-inset-layout";
import ExampleMenuAction from "@/registry/react/examples/sidebar/example-menu-action";
import ExampleMenuBadge from "@/registry/react/examples/sidebar/example-menu-badge";
import ExampleMenuSkeleton from "@/registry/react/examples/sidebar/example-menu-skeleton";
import ExampleMenuSub from "@/registry/react/examples/sidebar/example-menu-sub";
import ExamplePositioning from "@/registry/react/examples/sidebar/example-positioning";
import ExamplePositioningLeft from "@/registry/react/examples/sidebar/example-positioning-left";
import ExampleProviderWidth from "@/registry/react/examples/sidebar/example-provider-width";
import ExampleRail from "@/registry/react/examples/sidebar/example-rail";
import ExampleState from "@/registry/react/examples/sidebar/example-state";
import ExampleVariantSidebar from "@/registry/react/examples/sidebar/example-variant-sidebar";
import SidebarControlled from "./_examples/sidebar-controlled";
import SidebarGroupAction from "./_examples/sidebar-group-action";
import SidebarGroupCollapsible from "./_examples/sidebar-group-collapsible";

const SidebarExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h1 className="text-muted-foreground font-medium" id="default-heading">
          Default
        </h1>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleDefault />
        </div>
      </section>
      <section
        aria-labelledby="active-menu-button-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="active-menu-button-heading"
        >
          Active Menu Button
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleActiveMenuButton />
        </div>
      </section>
      <section
        aria-labelledby="collapsible-group-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="collapsible-group-heading"
        >
          Collapsible Group
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCollapsibleGroup />
        </div>
      </section>
      <section
        aria-labelledby="collapsible-icon-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="collapsible-icon-heading"
        >
          Collapsible Icon
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCollapsibleIcon />
        </div>
      </section>
      <section
        aria-labelledby="collapsible-offcanvas-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="collapsible-offcanvas-heading"
        >
          Collapsible Offcanvas
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCollapsibleOffcanvas />
        </div>
      </section>
      <section
        aria-labelledby="content-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="content-heading">
          Content
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleContent />
        </div>
      </section>
      <section
        aria-labelledby="custom-trigger-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="custom-trigger-heading"
        >
          Custom Trigger
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCustomTrigger />
        </div>
      </section>
      <section
        aria-labelledby="floating-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="floating-heading">
          Floating
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleFloating />
        </div>
      </section>
      <section
        aria-labelledby="footer-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="footer-heading">
          Footer
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleFooter />
        </div>
      </section>
      <section
        aria-labelledby="group-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="group-heading">
          Group
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleGroup />
        </div>
      </section>
      <section
        aria-labelledby="header-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="header-heading">
          Header
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleHeader />
        </div>
      </section>
      <section
        aria-labelledby="inset-layout-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="inset-layout-heading"
        >
          Inset Layout
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleInsetLayout />
        </div>
      </section>
      <section
        aria-labelledby="menu-action-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="menu-action-heading"
        >
          Menu Action
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleMenuAction />
        </div>
      </section>
      <section
        aria-labelledby="menu-badge-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="menu-badge-heading"
        >
          Menu Badge
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleMenuBadge />
        </div>
      </section>
      <section
        aria-labelledby="menu-skeleton-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="menu-skeleton-heading"
        >
          Menu Skeleton
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleMenuSkeleton />
        </div>
      </section>
      <section
        aria-labelledby="menu-sub-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="menu-sub-heading">
          Menu Sub
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleMenuSub />
        </div>
      </section>
      <section
        aria-labelledby="positioning-left-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="positioning-left-heading"
        >
          Positioning Left
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExamplePositioningLeft />
        </div>
      </section>
      <section
        aria-labelledby="positioning-heading"
        className="flex flex-col gap-5 sm:col-span-2"
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
        aria-labelledby="provider-width-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="provider-width-heading"
        >
          Provider Width
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleProviderWidth />
        </div>
      </section>
      <section
        aria-labelledby="rail-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="rail-heading">
          Rail
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleRail />
        </div>
      </section>
      <section
        aria-labelledby="state-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2 className="text-muted-foreground font-medium" id="state-heading">
          State
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleState />
        </div>
      </section>
      <section
        aria-labelledby="variant-sidebar-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="variant-sidebar-heading"
        >
          Variant Sidebar
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleVariantSidebar />
        </div>
      </section>
      <section
        aria-labelledby="local-controlled-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="local-controlled-heading"
        >
          Controlled
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SidebarControlled />
        </div>
      </section>
      <section
        aria-labelledby="local-group-action-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="local-group-action-heading"
        >
          Group Action
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SidebarGroupAction />
        </div>
      </section>
      <section
        aria-labelledby="local-group-collapsible-heading"
        className="flex flex-col gap-5 sm:col-span-2"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="local-group-collapsible-heading"
        >
          Group Collapsible
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SidebarGroupCollapsible />
        </div>
      </section>
    </div>
  </div>
);

export default SidebarExamplePage;
