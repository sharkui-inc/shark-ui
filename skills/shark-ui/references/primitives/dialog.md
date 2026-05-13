# Shark Dialog

## When to use

- Modal overlays that require user focus and explicit action.
- Multi-section popup flows with header/body/footer structure.

## When NOT to use

- If the overlay should slide from the edge -> use Sheet or Drawer instead.
- If the interaction is a destructive confirmation -> use AlertDialog instead.
- If the content is non-blocking contextual info -> use Popover instead.

## Install

```bash
npx shadcn@latest add @shark/dialog
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogBody,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
```

## Minimal pattern

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <DialogBody>Content</DialogBody>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Close</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Key patterns

Shorthand Title and Description

```tsx
// …
<DialogHeader 
  title="Are you absolutely sure?" 
  description="This action cannot be undone." 
/>
// …
```

- Section structure invariant: keep `DialogHeader`, `DialogBody`, and `DialogFooter` as direct sections in `DialogContent` to preserve built-in layout/styling behavior.

Scrollable content:

```tsx
// …
<DialogBody>
  {/* content */}
</DialogBody>
// …
```

Controlled open state:

```tsx
const [open, setOpen] = useState(false)

// …
<Dialog open={open} onOpenChange={({ open }) => setOpen(open)}>
  {/* content */}
</Dialog>
// …
```

## Common pitfalls

- Omitting `asChild` composition on trigger/close actions.
- Forgetting title/description structure in real dialogs.
- Wrapping dialog sections with extra containers that break `DialogHeader`/`DialogBody`/`DialogFooter` layout; prefer `DialogHeader` outside, `<form className="contents">` around `DialogBody` + `DialogFooter` only.
- Putting large body content outside `DialogBody` when scrolling is needed.
- Missing explicit button `type` inside dialog forms/actions.
- Using uncontrolled dialog patterns when the flow requires cross-component state coordination.
- Using non-Shark composition APIs without verifying docs.

## Registry example files

- [`example-close-behavior.tsx`](/registry/react/examples/dialog/example-close-behavior.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/dialog/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/dialog/example-default.tsx)
- [`example-initial-focus.tsx`](/registry/react/examples/dialog/example-initial-focus.tsx)
- [`example-nested.tsx`](/registry/react/examples/dialog/example-nested.tsx)
- [`example-no-close-button.tsx`](/registry/react/examples/dialog/example-no-close-button.tsx)
- [`example-non-modal.tsx`](/registry/react/examples/dialog/example-non-modal.tsx)
- [`example-open-from-menu.tsx`](/registry/react/examples/dialog/example-open-from-menu.tsx)
- [`example-scroll-area.tsx`](/registry/react/examples/dialog/example-scroll-area.tsx)
