# Shark Context Menu

## When to use

- Right-click (or long-press) surfaces on targets that expose contextual actions.
- Parallel structure to dropdown Menu but with context-trigger semantics from Ark.

## When not to use

- Primary button-triggered action, use Menu instead.

## Install

```bash
npx shadcn@latest add @shark/context-menu
```

## Canonical imports

```tsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from "@/components/ui/context-menu";
```

## Minimal pattern

```tsx
<ContextMenu>
  <ContextMenuTrigger>{/* content */}</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem value="action-1">Action 1</ContextMenuItem>
    <ContextMenuItem value="action-2">Action 2</ContextMenuItem>
    <ContextMenuItem value="action-3">Action 3</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Key patterns

Nested submenu:

```tsx
<ContextMenu>
  <ContextMenuTrigger>{/* content */}</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem value="action-1">Action 1</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Action 2</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem value="action-2-1">Action 2.1</ContextMenuItem>
        <ContextMenuItem value="action-2-2">Action 2.2</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>
```

Variant via the `variant` prop (`default|destructive`):

```tsx
<ContextMenu>
  <ContextMenuTrigger>{/* content */}</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem value="action-1">Action 1</ContextMenuItem>
    <ContextMenuItem variant="destructive" value="action-2">Action 2</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## Pitfalls

- Confusing `Menu` (click / explicit trigger) with `ContextMenu` (context/long-press trigger)—they share menu content primitives but different trigger components and semantics.
- `ContextMenuTrigger` must wrap the surface that should open the menu; putting the trigger around unrelated layout breaks discoverability and hit testing.
- Stable `value` strings on `ContextMenuItem` (and submenu items) matter for Ark’s collection model; duplicate or missing values break highlighting and typeahead.
- Submenus: keep `ContextMenuSub` → `ContextMenuSubTrigger` + `ContextMenuSubContent` hierarchy intact; floating `SubContent` without its `Sub` wrapper loses focus management.
- Mobile and touch: long-press is not obvious; ensure the surface reads as actionable or offer a visible overflow/menu affordance for small viewports.
- Keyboard-only use: if the trigger surface is not focusable, users cannot reach the menu without a pointing device—ensure a visible, focusable control or an alternate path to the same actions.

## Registry examples

- [`example-default.tsx`](/registry/react/examples/context-menu/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/context-menu/example-disabled.tsx)
- [`example-nested.tsx`](/registry/react/examples/context-menu/example-nested.tsx)
- [`example-with-submenu.tsx`](/registry/react/examples/context-menu/example-with-submenu.tsx)
