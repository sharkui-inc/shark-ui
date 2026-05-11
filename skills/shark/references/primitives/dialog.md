# Shark Dialog

## When to use

- Modal flows that trap focus and block the page until dismissed.
- Forms or multi-step content where `DialogHeader` / `DialogBody` / `DialogFooter` structure matches the design.

## When not to use

- **Edge sheet / mobile-first panel** → prefer [`sheet.md`](./sheet.md).
- **Destructive confirmation** → prefer **Alert Dialog** (`content/docs/components/alert-dialog.mdx` — may ship outside `registry.json`; follow docs).
- **Non-blocking contextual panel** → prefer [`popover.md`](./popover.md).

## Install

```bash
npx shadcn@latest add @shark/dialog
```

Dependencies and manual copy steps live in [`content/docs/components/dialog.mdx`](../../content/docs/components/dialog.mdx) (includes Button + Scroll Area notes).

## Canonical imports (shark-ui repo)

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@/registry/react/components/dialog";
import { Button } from "@/registry/react/components/button";
```

## Minimal pattern

`DialogTrigger` / `DialogClose` commonly use **`asChild`** with a `Button`. `DialogHeader` supports either **`title` / `description` props** or nested `DialogTitle` / `DialogDescription` children (see MDX).

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline" type="button">
      Open
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader
      title="Edit project"
      description="Make changes to your project settings."
    />
    <DialogBody>{/* content */}</DialogBody>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Registry examples (read next)

- [`example-default.tsx`](../../registry/react/examples/dialog/example-default.tsx) — header props + `Field` form in body.
- [`example-nested.tsx`](../../registry/react/examples/dialog/example-nested.tsx), [`example-open-from-menu.tsx`](../../registry/react/examples/dialog/example-open-from-menu.tsx) — controlled `open` / cross-widget triggers.
- [`example-scroll-area.tsx`](../../registry/react/examples/dialog/example-scroll-area.tsx) — long content + scroll.
- [`example-non-modal.tsx`](../../registry/react/examples/dialog/example-non-modal.tsx), [`example-close-behavior.tsx`](../../registry/react/examples/dialog/example-close-behavior.tsx) — `modal` / close interaction edge cases.

## Ark mapping

- Root: `@ark-ui/react/dialog` `Dialog.Root` (see `registry/react/components/dialog.tsx`).
- Backdrop / portaled content: `Portal` + `Backdrop` / `Positioner` / `Content` parts as wrapped by Shark exports.

## Common pitfalls

- Omitting `type="button"` on triggers inside forms (defaults to submit).
- Breaking flex layout by wrapping `DialogHeader`, `DialogBody`, and `DialogFooter` in extra divs—MDX documents using **`className="contents"`** on a `Form` when needed so sections stay direct layout children.
- Assuming Radix-only prop names—verify MDX + `dialog.tsx` for lazy mount defaults (`lazyMount`, `unmountOnExit`, `modal`).

## Further reading

- [Ark UI Dialog](https://ark-ui.com/docs/components/dialog)
- [`../../registry/react/components/dialog.tsx`](../../registry/react/components/dialog.tsx)
