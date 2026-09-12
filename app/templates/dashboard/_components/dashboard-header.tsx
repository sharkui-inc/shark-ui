"use client";

import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { SidebarTrigger } from "@/registry/react/components/sidebar";
import { type DateRange, dateRanges } from "../_data/dashboard";
import { DashboardNotifications } from "./dashboard-notifications";

export const DashboardHeader = () => {
  const [dateRange, setDateRange] = useState<DateRange>("Last 30 days");

  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b px-4">
      <SidebarTrigger />
      <p className="min-w-0 flex-1 truncate font-medium text-sm">Dashboard</p>
      <DashboardNotifications />
      <Menu>
        <MenuTrigger asChild>
          <Button size="sm" variant="outline">
            {dateRange}
            <ChevronDownIcon aria-hidden="true" />
          </Button>
        </MenuTrigger>
        <MenuContent>
          {dateRanges.map((range) => (
            <MenuItem
              key={range}
              onClick={() => setDateRange(range)}
              value={range}
            >
              {range}
            </MenuItem>
          ))}
        </MenuContent>
      </Menu>
      <Button size="sm">
        <DownloadIcon aria-hidden="true" />
        <span className="sr-only sm:not-sr-only">Download</span>
      </Button>
    </header>
  );
};
