# Shark Sheet

## When to use

- Slide-over panels from screen edges (filters, detail panes, secondary navigation).
- Responsive patterns where MDX suggests sheet instead of centered dialog on small viewports.

## When not to use

- Centered modal emphasis → [`dialog.md`](./dialog.md).
- Lightweight hover/focus popovers → [`popover.md`](./popover.md).

## Install

```bash
npx shadcn@latest add @shark/sheet
```

See [`content/docs/components/sheet.mdx`](../../content/docs/components/sheet.mdx) for dependencies (Ark Dialog primitives are reused for sheet behavior in Shark) and anatomy.

## Canonical imports (shark-ui repo)

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
  SheetClose,
} from "@/registry/react/components/sheet";
```

## Composition notes

- Shark `Sheet` builds on the same Ark dialog family as `Dialog`—follow MDX for **trigger → content** structure.
- `Portal` from `@ark-ui/react/portal` wraps portaled sheet content in the implementation—see [`../portal.md`](../portal.md).
- Use **`asChild`** on triggers/closes with `Button`; dismiss actions typically **`variant="ghost"`** per styling rules.

## Registry examples

Browse [`../../registry/react/examples/sheet/`](../../registry/react/examples/sheet/) for side, default open, and interaction patterns.

## Pitfalls

- Treating sheet as a generic div with manual transform—prefer Shark exports so focus trap and aria attributes stay correct.
- Forgetting lazy mount / unmount defaults when mixing controlled `open` state—mirror examples when driving from menus or route changes.

## Further reading

- [`../../registry/react/components/sheet.tsx`](../../registry/react/components/sheet.tsx)
- [`../../content/docs/components/sheet.mdx`](../../content/docs/components/sheet.mdx)
