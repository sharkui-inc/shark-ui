# Shark Floating Panel

## When to use

- Draggable, resizable, minimizable panels (tool palettes, inspectors, floating widgets).
- Desktop-style auxiliary windows without leaving the page.

## Install

```bash
npx shadcn@latest add @shark/floating-panel
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelDragTrigger,
  FloatingPanelFooter,
  FloatingPanelHeader,
  FloatingPanelMaximize,
  FloatingPanelMinimize,
  FloatingPanelResizeTrigger,
  FloatingPanelRestore,
  FloatingPanelTitle,
  FloatingPanelTrigger,
  useFloatingPanel,
} from "@/components/ui/floating-panel"
```

## Minimal pattern

```tsx
<FloatingPanel>
  <FloatingPanelTrigger asChild>
    <Button>Open panel</Button>
  </FloatingPanelTrigger>
  <FloatingPanelContent>
    <FloatingPanelHeader>
      <FloatingPanelDragTrigger />
      <FloatingPanelTitle>Title</FloatingPanelTitle>
      <FloatingPanelControl>{/* window controls */}</FloatingPanelControl>
    </FloatingPanelHeader>
    <FloatingPanelBody>{/* scrollable content */}</FloatingPanelBody>
  </FloatingPanelContent>
</FloatingPanel>
```

### Key patterns

`useFloatingPanel` reads stage and sizing context for custom chrome. Wire minimize/maximize/restore with the provided triggers; use `FloatingPanelResizeTrigger` on edges that should resize.

## Common pitfalls

- Omitting `FloatingPanelHeader` drag handle when users expect to move the panel.
- Placing interactive content outside `FloatingPanelBody` and breaking scroll (`scrollFade` options per docs).
- Missing `lucide-react` for control icons in copied examples.

## Registry example files

- [`example-controlled-position.tsx`](/registry/react/examples/floating-panel/example-controlled-position.tsx)
- [`example-controlled-size.tsx`](/registry/react/examples/floating-panel/example-controlled-size.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/floating-panel/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/floating-panel/example-default.tsx)
