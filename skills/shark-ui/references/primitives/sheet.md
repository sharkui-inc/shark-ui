# Shark Sheet

## When to use

- Side-panel overlays for settings, details, and workflows.
- Persistent context panels opened from the main content area.

## When NOT to use

- If the overlay should be centered and modal-like → use `Dialog` instead.
- If the overlay is a mobile-first bottom panel → use `Drawer` instead.
- If the flow is a destructive confirmation → use `AlertDialog` instead.

## Install

```bash
npx shadcn@latest add @shark/sheet
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
```

## Minimal pattern

```tsx
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader
      description="Supporting copy for the sheet."
      title="Sheet title"
    />
    <SheetBody>Content</SheetBody>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Close</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

### Key patterns

- **Portal forwarding**: optional `portalProps` on `SheetContent` → Ark `Dialog.Portal` (`keepMounted`, `container`, …).
- **Forms**: keep the header outside the `<form>` when possible; wrap `SheetBody` + primary actions in a native `<form className="contents">` so layout sections stay direct children of `SheetContent`.
- **Sides**: `SheetContent` accepts `side` (`top` | `right` | `bottom` | `left`) for placement.

## Common pitfalls

- Using a sheet for lightweight hints → prefer `Tooltip` or `Popover`.
- Omitting `SheetClose` or focus management on close.
- Nesting extra wrappers that break `SheetHeader` / `SheetBody` / `SheetFooter` layout.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/sheet/example-default.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/sheet/example-custom-spacing.tsx)
- [`example-inset.tsx`](/registry/react/examples/sheet/example-inset.tsx)
- [`example-non-modal.tsx`](/registry/react/examples/sheet/example-non-modal.tsx)
