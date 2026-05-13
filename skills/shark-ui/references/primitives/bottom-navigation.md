# Shark Bottom Navigation

## When to use

- Mobile-first primary navigation fixed to the bottom of the viewport.
- Three to five main sections with icon + label (or icon-only) patterns.

## Install

```bash
npx shadcn@latest add @shark/bottom-navigation
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/components/ui/bottom-navigation"
```

## Minimal pattern

```tsx
<BottomNavigation defaultValue="home">
  <BottomNavigationList>
    <BottomNavigationItem value="home">
      <BottomNavigationItemIcon>{/* icon */}</BottomNavigationItemIcon>
      <BottomNavigationItemLabel>Home</BottomNavigationItemLabel>
    </BottomNavigationItem>
  </BottomNavigationList>
</BottomNavigation>
```

### Key patterns

Built on Ark **Tabs** semantics (`value` / `defaultValue`, `onValueChange`). Each item needs a stable `value`. Use `BottomNavigationItemIcon` + `BottomNavigationItemLabel` for the standard layout.

## Common pitfalls

- Mismatched item `value` strings between controlled state and triggers.
- Too many tabs for a small viewport—keep counts low or offer a “More” pattern.
- Omitting labels for icon-only items without `aria-label` on the trigger content.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/bottom-navigation/example-default.tsx)
- [`example-icon-only.tsx`](/registry/react/examples/bottom-navigation/example-icon-only.tsx)
- [`example-with-links.tsx`](/registry/react/examples/bottom-navigation/example-with-links.tsx)
