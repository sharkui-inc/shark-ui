import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAlign from "@/registry/react/examples/message-bubble/example-align";
import ExampleCollapsible from "@/registry/react/examples/message-bubble/example-collapsible";
import ExampleContextMenu from "@/registry/react/examples/message-bubble/example-context-menu";
import ExampleDefault from "@/registry/react/examples/message-bubble/example-default";
import ExampleGroup from "@/registry/react/examples/message-bubble/example-group";
import ExampleLinks from "@/registry/react/examples/message-bubble/example-links";
import ExamplePopover from "@/registry/react/examples/message-bubble/example-popover";
import ExampleReactions from "@/registry/react/examples/message-bubble/example-reactions";
import ExampleRtl from "@/registry/react/examples/message-bubble/example-rtl";
import ExampleTooltip from "@/registry/react/examples/message-bubble/example-tooltip";
import ExampleTrigger from "@/registry/react/examples/message-bubble/example-trigger";
import ExampleVariantDefault from "@/registry/react/examples/message-bubble/example-variant-default";
import ExampleVariantDestructive from "@/registry/react/examples/message-bubble/example-variant-destructive";
import ExampleVariantGhost from "@/registry/react/examples/message-bubble/example-variant-ghost";
import ExampleVariantOutline from "@/registry/react/examples/message-bubble/example-variant-outline";
import ExampleVariantSecondary from "@/registry/react/examples/message-bubble/example-variant-secondary";
import ExampleVariantTinted from "@/registry/react/examples/message-bubble/example-variant-tinted";

const MessageBubbleExamplePage = () => (
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
          aria-labelledby="align-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="align-heading">
            Align
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlign />
          </div>
        </section>
        <section
          aria-labelledby="collapsible-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="collapsible-heading"
          >
            Collapsible
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCollapsible />
          </div>
        </section>
        <section
          aria-labelledby="context-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="context-menu-heading"
          >
            Context Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleContextMenu />
          </div>
        </section>
        <section
          aria-labelledby="group-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="group-heading">
            Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroup />
          </div>
        </section>
        <section
          aria-labelledby="links-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="links-heading">
            Links
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLinks />
          </div>
        </section>
        <section
          aria-labelledby="popover-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="popover-heading"
          >
            Popover
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePopover />
          </div>
        </section>
        <section
          aria-labelledby="reactions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="reactions-heading"
          >
            Reactions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReactions />
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
          aria-labelledby="tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="tooltip-heading"
          >
            Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTooltip />
          </div>
        </section>
        <section
          aria-labelledby="trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="trigger-heading"
          >
            Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTrigger />
          </div>
        </section>
        <section
          aria-labelledby="variant-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-default-heading"
          >
            Variant Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDefault />
          </div>
        </section>
        <section
          aria-labelledby="variant-destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-destructive-heading"
          >
            Variant Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDestructive />
          </div>
        </section>
        <section
          aria-labelledby="variant-ghost-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-ghost-heading"
          >
            Variant Ghost
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantGhost />
          </div>
        </section>
        <section
          aria-labelledby="variant-outline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-outline-heading"
          >
            Variant Outline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantOutline />
          </div>
        </section>
        <section
          aria-labelledby="variant-secondary-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-secondary-heading"
          >
            Variant Secondary
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantSecondary />
          </div>
        </section>
        <section
          aria-labelledby="variant-tinted-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-tinted-heading"
          >
            Variant Tinted
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantTinted />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default MessageBubbleExamplePage;
