"use client";

import {
  CreditCardIcon,
  UserRoundIcon,
  UsersIcon,
  WavesHorizontalIcon,
} from "lucide-react";
import { type CSSProperties, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";

const Example = () => {
  const [page, setPage] = useState<SettingsPage>("account");

  const renderPage = () => {
    switch (page) {
      case "account":
        return (
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Account</FieldLegend>
              <FieldDescription>
                Short page. Switching away and back should not resize the
                dialog.
              </FieldDescription>
              <Field>
                <FieldLabel>Workspace name</FieldLabel>
                <Input defaultValue="Onda" />
              </Field>
            </FieldSet>
          </FieldGroup>
        );
      case "team":
        return (
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Team</FieldLegend>
              <FieldDescription>
                Medium page with a few members of the Onda workspace.
              </FieldDescription>
              {TEAM.map((member) => (
                <Field key={member.email}>
                  <FieldLabel>{member.name}</FieldLabel>
                  <Input defaultValue={member.email} readOnly type="email" />
                </Field>
              ))}
            </FieldSet>
          </FieldGroup>
        );
      case "billing":
        return (
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Billing</FieldLegend>
              <FieldDescription>
                Long page. Only this inset scrolls; the dialog height stays put.
              </FieldDescription>
              {INVOICES.map((invoice) => (
                <Field key={invoice.id}>
                  <FieldLabel>{invoice.label}</FieldLabel>
                  <Input defaultValue={invoice.amount} readOnly />
                  <FieldDescription>{invoice.date}</FieldDescription>
                </Field>
              ))}
            </FieldSet>
          </FieldGroup>
        );
      default: {
        const exhaustive: never = page;
        return exhaustive;
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent
        className="h-[min(32rem,calc(100svh-2rem))] p-0"
        size="2xl"
      >
        <DialogHeader
          className="sr-only"
          description="Workspace preferences for Onda."
          title="Settings"
        />
        <SidebarProvider
          className="min-h-0 min-w-0 flex-1"
          style={{ "--sidebar-width": "13rem" } as CSSProperties}
        >
          <Sidebar className="border-e bg-transparent" collapsible="none">
            <SidebarHeader className="flex-row items-center gap-2">
              <WavesHorizontalIcon aria-hidden="true" />
              <span className="font-medium">Onda</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {PAGES.map(({ icon: Icon, label, value }) => (
                      <SidebarMenuItem key={value}>
                        <SidebarMenuButton
                          isActive={page === value}
                          onClick={() => setPage(value)}
                        >
                          <Icon aria-hidden="true" />
                          <span>{label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="min-h-0 overflow-hidden bg-transparent">
            <ScrollArea>
              <div className="p-(--space)">{renderPage()}</div>
            </ScrollArea>
          </SidebarInset>
        </SidebarProvider>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const PAGES = [
  { icon: UserRoundIcon, label: "Account", value: "account" },
  { icon: UsersIcon, label: "Team", value: "team" },
  { icon: CreditCardIcon, label: "Billing", value: "billing" },
] as const;

type SettingsPage = (typeof PAGES)[number]["value"];

const TEAM = [
  { email: "marina@onda.io", name: "Marina Costa" },
  { email: "joao@onda.io", name: "João Mendes" },
  { email: "sofia@onda.io", name: "Sofia Alves" },
];

const INVOICES = [
  { amount: "$240.00", date: "Jan 12, 2026", id: "inv-01", label: "January" },
  { amount: "$240.00", date: "Feb 12, 2026", id: "inv-02", label: "February" },
  { amount: "$240.00", date: "Mar 12, 2026", id: "inv-03", label: "March" },
  { amount: "$240.00", date: "Apr 12, 2026", id: "inv-04", label: "April" },
  { amount: "$240.00", date: "May 12, 2026", id: "inv-05", label: "May" },
  { amount: "$240.00", date: "Jun 12, 2026", id: "inv-06", label: "June" },
  { amount: "$240.00", date: "Jul 12, 2026", id: "inv-07", label: "July" },
  { amount: "$240.00", date: "Aug 12, 2026", id: "inv-08", label: "August" },
  { amount: "$240.00", date: "Sep 12, 2026", id: "inv-09", label: "September" },
  { amount: "$240.00", date: "Oct 12, 2026", id: "inv-10", label: "October" },
  { amount: "$240.00", date: "Nov 12, 2026", id: "inv-11", label: "November" },
  { amount: "$240.00", date: "Dec 12, 2026", id: "inv-12", label: "December" },
];

export default Example;
