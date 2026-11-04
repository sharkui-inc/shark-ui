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
            <p className="truncate text-sm font-medium">Data fetching</p>
            <p className="text-muted-foreground truncate text-xs">
              Build your application
            </p>
          </div>
          <SidebarTrigger className="ms-auto rotate-180 rtl:rotate-0" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid gap-4 md:grid-cols-3">
            {["routing", "caching", "rendering"].map((card) => (
              <div className="bg-muted/48 aspect-video rounded-xl" key={card} />
            ))}
          </div>
          <div className="bg-muted/48 min-h-96 flex-1 rounded-xl" />
        </div>
      </SidebarInset>
      <AppSidebar />
    </SidebarProvider>
  );
}
