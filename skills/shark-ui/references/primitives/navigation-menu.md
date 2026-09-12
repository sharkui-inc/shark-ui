# Shark Navigation Menu

## When to use

- Site or product navigation with hover/click panels of links.
- Horizontal menubars or vertical sidebar-style nav (`orientation="vertical"`).
- Shared animated viewport when switching between triggers.

## Install

```bash
npx shadcn@latest add @shark/navigation-menu
```

Manual deps from docs:

```bash
npm install @ark-ui/react@^5.39.1
```

Ark UI **5.39.1 or later** is required.

## Canonical imports

```tsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
```

## Minimal pattern

```tsx
<NavigationMenu aria-label="Main navigation">
  <NavigationMenuList>
    <NavigationMenuItem value="components">
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/docs/components/button">Button</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem value="docs">
      <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Key patterns

Shared viewport (keep content in the item; do not portal a second copy). Override Shark mount defaults:

```tsx
<NavigationMenu lazyMount={false} unmountOnExit={false}>
  <NavigationMenuList>
    {/* items with Trigger + Content */}
    <NavigationMenuIndicator>
      <NavigationMenuArrow />
    </NavigationMenuIndicator>
  </NavigationMenuList>
  <NavigationMenuViewportPositioner align="start">
    <NavigationMenuViewport />
  </NavigationMenuViewportPositioner>
</NavigationMenu>
```

Framework links without nested anchors:

```tsx
<NavigationMenuLink asChild>
  <Link href="/docs/components/button">Button</Link>
</NavigationMenuLink>
```

## Common pitfalls

- Using a shared viewport without `lazyMount={false}` and `unmountOnExit={false}`: Ark must see the viewport on first mount.
- Nesting `<a>` inside `NavigationMenuLink` without `asChild`.
- Putting `NavigationMenuIndicator` outside the list (coordinates are relative to the list).
- Using `NavigationMenuRootProvider` inside `NavigationMenu`: use one or the other.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/navigation-menu/example-default.tsx)
- [`example-viewport.tsx`](/registry/react/examples/navigation-menu/example-viewport.tsx)
- [`example-current-link.tsx`](/registry/react/examples/navigation-menu/example-current-link.tsx)
- [`example-vertical.tsx`](/registry/react/examples/navigation-menu/example-vertical.tsx)
- [`example-indicator.tsx`](/registry/react/examples/navigation-menu/example-indicator.tsx)
- [`example-item-indicator.tsx`](/registry/react/examples/navigation-menu/example-item-indicator.tsx)
- [`example-controlled.tsx`](/registry/react/examples/navigation-menu/example-controlled.tsx)
- [`example-disabled.tsx`](/registry/react/examples/navigation-menu/example-disabled.tsx)
- [`example-root-provider.tsx`](/registry/react/examples/navigation-menu/example-root-provider.tsx)
- [`example-context.tsx`](/registry/react/examples/navigation-menu/example-context.tsx)
- [`example-link.tsx`](/registry/react/examples/navigation-menu/example-link.tsx)
- [`example-large-menus.tsx`](/registry/react/examples/navigation-menu/example-large-menus.tsx)
- [`example-click-trigger.tsx`](/registry/react/examples/navigation-menu/example-click-trigger.tsx)
