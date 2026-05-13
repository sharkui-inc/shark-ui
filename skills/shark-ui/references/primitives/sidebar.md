# Shark Sidebar

## When to use

- Persistent app shell navigation and grouped links.
- Collapsible/structured side navigation for dashboard layouts.

## When NOT to use

- If the navigation should be a temporary overlay on small screens only → consider `Drawer` + list actions instead of a persistent `Sidebar`.
- If you only need a single slide-over panel (not app chrome) → use `Sheet`.

## Install

```bash
npx shadcn@latest add @shark/sidebar
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
```

## Minimal pattern

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Workspace</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Dashboard</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>{/* Main page content */}</SidebarInset>
</SidebarProvider>
```

### Key patterns

Sidebar with grouped navigation and footer:

```tsx
<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2 className="text-lg font-semibold">App Name</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Main</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/dashboard">Dashboard</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="/projects">Projects</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>Settings</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
  <SidebarInset>{/* Page content */}</SidebarInset>
</SidebarProvider>
```

Key composition rules:
- Wrap app with `SidebarProvider` at the layout level.
- Use `SidebarContent` (not "SidebarPanel") as the scrollable body between header/footer.
- Navigation items use `SidebarMenu` > `SidebarMenuItem` > `SidebarMenuButton`.
- For link items, use `asChild` on `SidebarMenuButton` with a single child (for example `<SidebarMenuButton asChild><a href="...">...</a></SidebarMenuButton>`).
- Use `SidebarTrigger` for the collapse/expand toggle.
- Use `SidebarInset` for the main content area next to the sidebar.
- `SidebarRail` adds a slim hover-to-expand rail in collapsed state.


## Common pitfalls

- Using non-existent parts like "SidebarPanel" or "SidebarItem" -- the correct names are `SidebarContent` and `SidebarMenuItem`.
- Forgetting `SidebarProvider` wrapper, which manages collapse state and mobile responsiveness.
- Skipping the `SidebarMenu` > `SidebarMenuItem` > `SidebarMenuButton` hierarchy for nav items.
- Missing responsive collapse strategy for narrow/mobile layouts.

## Registry example files

- Full app-shell references: [`registry/react/blocks/sidebar/`](/registry/react/blocks/sidebar/)
