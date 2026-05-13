# Shark Separator

## When to use

- Visual/semantic separation between related blocks.
- Section dividers in menus, cards, and grouped controls.

## Install

```bash
npx shadcn@latest add @shark/separator
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Separator } from "@/components/ui/separator"
```

## Minimal pattern

```tsx
<div className="flex flex-col gap-2">
  <span className="text-sm">Section A</span>
  <Separator />
  <span className="text-sm">Section B</span>
</div>
```

### Key patterns

Horizontal separator (default):

```tsx
<Separator />
```

Vertical separator inline:

```tsx
<div className="flex items-center gap-4">
  <span>Home</span>
  <Separator orientation="vertical" className="h-4" />
  <span>Settings</span>
</div>
```


## Common pitfalls

- Adding separators between every small element, creating visual clutter.
- Using separators where spacing alone communicates grouping better.
- Forgetting orientation/context in dense vertical command layouts.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/separator/example-default.tsx)
- [`example-list.tsx`](/registry/react/examples/separator/example-list.tsx)
- [`example-menu.tsx`](/registry/react/examples/separator/example-menu.tsx)
- [`example-vertical.tsx`](/registry/react/examples/separator/example-vertical.tsx)
