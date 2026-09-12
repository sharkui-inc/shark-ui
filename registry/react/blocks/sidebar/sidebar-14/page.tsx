import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/registry/react/components/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export default function Sidebar14Page() {
  return (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <div className="min-w-0">
            <p className="truncate font-medium text-sm">Data fetching</p>
            <p className="truncate text-muted-foreground text-xs">
              Build your application
            </p>
          </div>
          <SidebarTrigger className="ms-auto rotate-180 rtl:rotate-0" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {["routing", "caching", "rendering"].map((card) => (
              <div className="aspect-video rounded-xl bg-muted/45" key={card} />
            ))}
          </div>
          <div className="min-h-96 flex-1 rounded-xl bg-muted/45" />
        </main>
      </SidebarInset>
      <AppSidebar />
    </SidebarProvider>
  );
}
