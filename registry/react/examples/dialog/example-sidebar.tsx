import { CreditCardIcon, UserRoundIcon, UsersIcon } from "lucide-react";
import type React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>
    <DialogContent className="h-[min(32rem,calc(100svh-2rem))] p-0" size="2xl">
      <DialogHeader
        className="sr-only"
        description="Settings with an embedded sidebar."
        title="Settings"
      />
      <SidebarProvider
        className="min-h-0 min-w-0 flex-1"
        style={{ "--sidebar-width": "13rem" } as React.CSSProperties}
      >
        <Tabs
          className="flex min-h-0 min-w-0 flex-1"
          defaultValue="account"
          orientation="vertical"
        >
          <Sidebar className="border-e bg-transparent" collapsible="none">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu asChild>
                    <TabsList>
                      {PAGES.map(({ icon: Icon, label, value }) => (
                        <SidebarMenuItem asChild key={value}>
                          <SidebarMenuButton
                            asChild
                            className="data-selected:bg-sidebar-accent data-selected:text-sidebar-accent-foreground"
                          >
                            <TabsTrigger value={value}>
                              <Icon aria-hidden="true" />
                              <span>{label}</span>
                            </TabsTrigger>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </TabsList>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="min-h-0 overflow-hidden bg-transparent">
            <DialogBody>
              <TabsContent value="account">
                <FieldGroup>
                  <FieldSet>
                    <FieldLegend>Account</FieldLegend>
                    <FieldDescription>Your workspace profile.</FieldDescription>
                    <Field>
                      <FieldLabel>Workspace name</FieldLabel>
                      <Input defaultValue="Onda" />
                    </Field>
                  </FieldSet>
                </FieldGroup>
              </TabsContent>
              <TabsContent value="team">
                <FieldGroup>
                  <FieldSet>
                    <FieldLegend>Team</FieldLegend>
                    <FieldDescription>
                      Members of this workspace.
                    </FieldDescription>
                    {TEAM.map((member) => (
                      <Field key={member.email}>
                        <FieldLabel>{member.name}</FieldLabel>
                        <Input
                          defaultValue={member.email}
                          readOnly
                          type="email"
                        />
                      </Field>
                    ))}
                  </FieldSet>
                </FieldGroup>
              </TabsContent>
              <TabsContent value="billing">
                <FieldGroup>
                  <FieldSet>
                    <FieldLegend>Billing</FieldLegend>
                    <FieldDescription>Invoice history.</FieldDescription>
                    {INVOICES.map((invoice) => (
                      <Field key={invoice.label}>
                        <FieldLabel>{invoice.label}</FieldLabel>
                        <Input defaultValue={invoice.amount} readOnly />
                        <FieldDescription>{invoice.date}</FieldDescription>
                      </Field>
                    ))}
                  </FieldSet>
                </FieldGroup>
              </TabsContent>
            </DialogBody>
          </SidebarInset>
        </Tabs>
      </SidebarProvider>
    </DialogContent>
  </Dialog>
);

const PAGES = [
  { icon: UserRoundIcon, label: "Account", value: "account" },
  { icon: UsersIcon, label: "Team", value: "team" },
  { icon: CreditCardIcon, label: "Billing", value: "billing" },
] as const;

const TEAM = [
  { email: "marina@onda.io", name: "Marina Costa" },
  { email: "joao@onda.io", name: "João Mendes" },
  { email: "sofia@onda.io", name: "Sofia Alves" },
];

const INVOICES = [
  { amount: "$240.00", date: "Oct 12, 2026", label: "October" },
];

export default Example;
