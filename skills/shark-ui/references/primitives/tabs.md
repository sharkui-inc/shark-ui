# Shark Tabs

## When to use

- Mutually exclusive content panels in one region.
- Settings/detail screens split into scoped views.

## Install

```bash
npx shadcn@latest add @shark/tabs
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"
```

## Minimal pattern

```tsx
<Tabs defaultValue="tab-1">
  <TabsList>
    <TabsTab value="tab-1">Tab 1</TabsTab>
    <TabsTab value="tab-2">Tab 2</TabsTab>
    <TabsTab value="tab-3">Tab 3</TabsTab>
  </TabsList>
  <TabsPanel value="tab-1">Tab 1 content</TabsPanel>
  <TabsPanel value="tab-2">Tab 2 content</TabsPanel>
  <TabsPanel value="tab-3">Tab 3 content</TabsPanel>
</Tabs>
```

### Key patterns

Controlled tabs with external state:

```tsx
const [value, setValue] = useState("tab-1")

<Tabs value={value} onValueChange={setValue}>
  <TabsList>
    <TabsTab value="tab-1">Tab 1</TabsTab>
    <TabsTab value="tab-2">Tab 2</TabsTab>
  </TabsList>
  <TabsPanel value="tab-1">Content 1</TabsPanel>
  <TabsPanel value="tab-2">Content 2</TabsPanel>
</Tabs>
```

Underline variant:

```tsx
<Tabs defaultValue="tab-1" variant="underline">
  <TabsList>
    <TabsTab value="tab-1">Tab 1</TabsTab>
    <TabsTab value="tab-2">Tab 2</TabsTab>
  </TabsList>
  ...
</Tabs>
```

## Common pitfalls

- Mismatching `TabsTab value` and `TabsPanel value` pairs.
- Using tabs for workflows that require route-level navigation instead.
- Mounting expensive panel content without considering visibility/performance.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/tabs/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/tabs/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/tabs/example-disabled.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/tabs/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/tabs/example-orientation-vertical.tsx)
- [`example-variant-default.tsx`](/registry/react/examples/tabs/example-variant-default.tsx)
- [`example-variant-underline-orientation-vertical.tsx`](/registry/react/examples/tabs/example-variant-underline-orientation-vertical.tsx)
- [`example-variant-underline.tsx`](/registry/react/examples/tabs/example-variant-underline.tsx)
- [`example-with-icons.tsx`](/registry/react/examples/tabs/example-with-icons.tsx)
