import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleClarification from "@/registry/react/examples/approval-card/example-clarification";
import ExampleCommand from "@/registry/react/examples/approval-card/example-command";
import ExampleControlled from "@/registry/react/examples/approval-card/example-controlled";
import ExampleCustomSpacing from "@/registry/react/examples/approval-card/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/approval-card/example-default";
import ExampleDisabled from "@/registry/react/examples/approval-card/example-disabled";
import ExampleFileEdit from "@/registry/react/examples/approval-card/example-file-edit";
import ExampleInvalid from "@/registry/react/examples/approval-card/example-invalid";
import ExampleMcpTool from "@/registry/react/examples/approval-card/example-mcp-tool";
import ExampleNetworkAccess from "@/registry/react/examples/approval-card/example-network-access";
import ExamplePermissionScope from "@/registry/react/examples/approval-card/example-permission-scope";
import ExamplePlan from "@/registry/react/examples/approval-card/example-plan";
import ExampleRtl from "@/registry/react/examples/approval-card/example-rtl";
import ExampleWithCloseButton from "@/registry/react/examples/approval-card/example-with-close-button";

const ApprovalCardExamplePage = () => (
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
          aria-labelledby="clarification-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="clarification-heading"
          >
            Clarification
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleClarification />
          </div>
        </section>
        <section
          aria-labelledby="command-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="command-heading"
          >
            Command
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCommand />
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
          aria-labelledby="custom-spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-spacing-heading"
          >
            Custom Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSpacing />
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
          aria-labelledby="file-edit-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="file-edit-heading"
          >
            File Edit
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFileEdit />
          </div>
        </section>
        <section
          aria-labelledby="invalid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="invalid-heading"
          >
            Invalid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInvalid />
          </div>
        </section>
        <section
          aria-labelledby="mcp-tool-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="mcp-tool-heading"
          >
            MCP Tool
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMcpTool />
          </div>
        </section>
        <section
          aria-labelledby="network-access-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="network-access-heading"
          >
            Network Access
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNetworkAccess />
          </div>
        </section>
        <section
          aria-labelledby="permission-scope-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="permission-scope-heading"
          >
            Permission Scope
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePermissionScope />
          </div>
        </section>
        <section aria-labelledby="plan-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="plan-heading">
            Plan
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePlan />
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
          aria-labelledby="with-close-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-close-button-heading"
          >
            With Close Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithCloseButton />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ApprovalCardExamplePage;
