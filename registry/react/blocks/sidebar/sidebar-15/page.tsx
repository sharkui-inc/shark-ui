import { Separator } from "@/registry/react/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { SidebarLeft } from "./components/sidebar-left";
import { SidebarRight } from "./components/sidebar-right";

export default function Sidebar15Page() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ms-1" />
          <Separator className="h-4" orientation="vertical" />
          <p className="truncate font-medium text-sm">
            Project management and task tracking
          </p>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          <section className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-xl border p-5">
            <p className="font-medium text-sm">Ship the sidebar examples</p>
            <p className="text-muted-foreground text-sm">
              Review the navigation and scheduling details before publishing.
            </p>
          </section>
          <div className="mx-auto min-h-96 w-full max-w-3xl rounded-xl bg-muted/45" />
        </main>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
