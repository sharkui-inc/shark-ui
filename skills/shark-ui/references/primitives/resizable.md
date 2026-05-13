# Shark Resizable

## When to use

- Split panes editors, previews, and dashboards with draggable dividers.
- Nested horizontal + vertical split layouts using multiple `Resizable` roots.

## When NOT to use

- If layout should reflow responsively without user-driven splits → use CSS grid/flex only.
- If the interaction is a one-off modal resize → prefer `Dialog` / `Sheet` sizing props.

## Install

```bash
npx shadcn@latest add @shark/resizable
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
  useResizable,
} from "@/components/ui/resizable"
```

## Minimal pattern

```tsx
<Resizable
  className="h-48 rounded-md border"
  defaultSize={[50, 50]}
  panels={[
    { id: "a", minSize: 10 },
    { id: "b", minSize: 10 },
  ]}
>
  <ResizablePanel className="flex items-center justify-center" id="a">
    A
  </ResizablePanel>
  <ResizableResizeTrigger id="a:b" />
  <ResizablePanel className="flex items-center justify-center" id="b">
    B
  </ResizablePanel>
</Resizable>
```

### Key patterns

`orientation="vertical"` on nested splitters; `ResizableResizeTrigger` with `withHandle` for a visible grip; `minSize` / `maxSize` on panel definitions for constraints.

## Common pitfalls

- Mismatched `id` strings between panels and triggers (`"left:right"` style ids must align with Ark splitter rules).
- Omitting `minSize` on panels that should not collapse to zero.
- Nesting resizables without giving inner roots explicit height/width constraints.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/resizable/example-default.tsx)
- [`example-handle.tsx`](/registry/react/examples/resizable/example-handle.tsx)
- [`example-min-max.tsx`](/registry/react/examples/resizable/example-min-max.tsx)
- [`example-multiple-panels.tsx`](/registry/react/examples/resizable/example-multiple-panels.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/resizable/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/resizable/example-orientation-vertical.tsx)
