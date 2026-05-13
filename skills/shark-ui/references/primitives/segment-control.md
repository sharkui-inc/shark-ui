# Shark Segment group

## When to use

- iOS-style **segmented controls** for switching a small set of mutually exclusive options.
- Underline or pill variants with horizontal or vertical orientation.

Shark CLI and files use the name **`segment-group`** (Ark `SegmentGroup`).

## Install

```bash
npx shadcn@latest add @shark/segment-group
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemText,
  useSegmentGroup,
} from "@/components/ui/segment-group"
```

## Minimal pattern

```tsx
<SegmentGroup defaultValue="react">
  <SegmentGroupItem value="react">
    <SegmentGroupItemText>React</SegmentGroupItemText>
    <SegmentGroupIndicator />
  </SegmentGroupItem>
  <SegmentGroupItem value="vue">
    <SegmentGroupItemText>Vue</SegmentGroupItemText>
    <SegmentGroupIndicator />
  </SegmentGroupItem>
</SegmentGroup>
```

### Key patterns

`variant="underline"` changes visuals; combine with `orientation="vertical"` for sidebar-like stacks. `useSegmentGroup` exposes context for custom indicators.

## Common pitfalls

- Omitting `SegmentGroupIndicator` when the design expects a sliding/underline marker.
- Mismatched `value` strings between items and controlled state.
- Searching the registry for “segment-control”—examples and folder are named **`segment-group`**.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/segment-group/example-controlled.tsx)
- [`example-custom-indicator.tsx`](/registry/react/examples/segment-group/example-custom-indicator.tsx)
- [`example-default.tsx`](/registry/react/examples/segment-group/example-default.tsx)
- [`example-disabled-item.tsx`](/registry/react/examples/segment-group/example-disabled-item.tsx)
- [`example-disabled.tsx`](/registry/react/examples/segment-group/example-disabled.tsx)
- [`example-indicator-on-hover.tsx`](/registry/react/examples/segment-group/example-indicator-on-hover.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/segment-group/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/segment-group/example-orientation-vertical.tsx)
- [`example-variant-underline-orientation-vertical.tsx`](/registry/react/examples/segment-group/example-variant-underline-orientation-vertical.tsx)
- [`example-variant-underline.tsx`](/registry/react/examples/segment-group/example-variant-underline.tsx)
