import type { Metadata } from "next";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { DashboardEmployees } from "./_components/dashboard-employees";
import { DashboardGreeting } from "./_components/dashboard-greeting";
import { DashboardHeader } from "./_components/dashboard-header";
import { DashboardMetrics } from "./_components/dashboard-metrics";
import { DashboardSales } from "./_components/dashboard-sales";
import { DashboardSidebar } from "./_components/dashboard-sidebar";
import { DashboardTraffic } from "./_components/dashboard-traffic";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Dashboard Preview",
};

const DashboardTemplatePage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <SidebarProvider className="h-full min-h-0">
      <DashboardSidebar />
      <SidebarInset className="flex min-w-0 flex-col">
        <DashboardHeader />
        <ScrollArea className="flex-1">
          <div className="mx-auto flex w-full max-w-360 flex-col gap-6 p-5 sm:p-6 lg:p-8">
            <DashboardGreeting />
            <DashboardMetrics />
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.8fr)]">
              <DashboardSales />
              <DashboardTraffic />
            </div>
            <DashboardEmployees />
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  </div>
);

export default DashboardTemplatePage;
