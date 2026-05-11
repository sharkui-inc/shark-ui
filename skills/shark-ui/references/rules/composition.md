# Composition rules (Shark UI / Ark)

Shark wraps **Ark UI** primitives. Composition follows **React component trees** and Ark’s **`asChild`** prop where a part supports merging props onto a single child (e.g. wrapping a `Button` in `DialogTrigger`). Check MDX or source for which parts expose `asChild`; not every part does.

## Core rules

- Prefer composing Shark exports over reimplementing Ark behavior.
- For overlays and floating surfaces (**Dialog**, **Sheet**, **Menu**, **Popover**, **Combobox**, **Select**, **HoverCard**, …), follow the **anatomy sections** in MDX: trigger → content hierarchy, required sections, and optional slots.
- Use Ark **`asChild`** only where the Shark or Ark part documents it (e.g. some triggers / items). Do not assume `asChild` exists on every part—verify in MDX or `registry/react/components/<name>.tsx`.
- Preserve title/description patterns for dialogs and sheets when they carry semantics for screen readers.

## Example: dialog (Shark)

Consumer-style imports (after CLI):

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
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" type="button">
          Open
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader title="Title" description="Short description" />
        <DialogBody>Body content</DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

Inside the **shark-ui** repo, swap imports to `@/registry/react/components/...` and read `registry/react/examples/dialog/` for full patterns (nested dialogs, scroll area, menus opening dialogs, etc.).

## Portals

Floating layers use Ark `Portal` internally. See [`../portal.md`](../portal.md).

## Anti-patterns

- Putting raw interactive elements where a trigger part expects **`asChild`** with a single child—follow Shark examples so focus and semantics stay correct.
- Mixing Radix-only part names (`MenuContent`, …) with Shark exports.
- Omitting required sections (`DialogHeader` patterns, menu content wrappers) documented in MDX.
