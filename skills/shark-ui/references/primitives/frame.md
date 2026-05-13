# Shark Frame

## When to use

- Bordered app surfaces around content blocks.
- Container wrapper for data components like table, cards, and panes.

## Install

```bash
npx shadcn@latest add @shark/frame
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame"
```

## Minimal pattern

```tsx
<Frame>
  <FrameHeader>
    <FrameTitle>Title</FrameTitle>
    <FrameDescription>Description</FrameDescription>
  </FrameHeader>
  <FramePanel>Content</FramePanel>
  <FrameFooter>Footer</FrameFooter>
</Frame>
```

### Key patterns

Frame with header actions:

```tsx
<Frame>
  <FrameHeader className="flex items-center justify-between">
    <div>
      <FrameTitle>Users</FrameTitle>
      <FrameDescription>Manage team members.</FrameDescription>
    </div>
    <Button size="sm">Add User</Button>
  </FrameHeader>
  <FramePanel>{/* Table or list content */}</FramePanel>
  <FrameFooter>
    <p className="text-muted-foreground text-sm">Showing 1-10 of 100</p>
  </FrameFooter>
</Frame>
```

Use `Frame` to normalize border/radius around heterogeneous inner content (tables, lists, cards).


## Common pitfalls

- Using nested frames excessively, causing dense double borders.
- Applying frame as layout grid replacement instead of content surface wrapper.
- Forgetting to align inner component width expectations (table/list full width).

## Registry example files

- [`example-default.tsx`](/registry/react/examples/frame/example-default.tsx)
- [`example-separated-panels.tsx`](/registry/react/examples/frame/example-separated-panels.tsx)
