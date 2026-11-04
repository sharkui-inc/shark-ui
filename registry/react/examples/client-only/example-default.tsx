import { ClientOnly } from "@/registry/react/components/client-only";

const ClientOnlyDemo = () => (
  <ClientOnly>
    <div className="bg-muted text-foreground rounded-xl border px-4 py-3 text-sm">
      This content is only rendered on the client side.
    </div>
  </ClientOnly>
);

export default ClientOnlyDemo;
