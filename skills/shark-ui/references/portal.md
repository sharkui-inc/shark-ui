# Portals (Ark UI)

Shark overlays and floating surfaces render through Ark UI’s **`Portal`** primitive so content escapes stacking contexts and lands under `document.body` (unless customized).

## Imports in this codebase

Match the import style of the component you are editing:

- `@ark-ui/react/portal` — used by several registry components (e.g. sheet, combobox, popover, drawer, toast, date-picker, toggle-tooltip).
- `@ark-ui/react` — re-exports `Portal` for some components (e.g. menu, hover-card, command, action-bar, tour).

Prefer copying the import path from `registry/react/components/<component>.tsx` rather than guessing.

## What `Portal` is for

Use the Shark wrapper that already includes `Portal` (e.g. `DialogContent`, `SheetContent`, `PopoverContent`, `ComboboxContent`, `MenuContent`, `Toaster`, …). Only reach for raw `Portal` when composing Ark primitives directly the same way the registry does.

Typical needs:

- **Stacking / z-index** — portaled content paints above app layout; keep backdrop + content ordering as in the Shark component.
- **Optional container** — Ark `Portal` supports passing a container/ref when you must render into a specific node; confirm on [Ark Portal docs](https://ark-ui.com/docs/components/portal) and mirror typings from `@ark-ui/react`.

## Components that use `Portal` internally (non-exhaustive)

Verified patterns exist in registry sources for:

- `action-bar`, `color-picker`, `combobox`, `command`, `context-menu`, `date-picker`, `drawer`, `hover-card`, `menu`, `popover`, `sheet`, `toast` (`Toaster`), `toggle-tooltip`, `tour`, `file-upload` (if present), and other floating primitives.

When adding or debugging portaled UI, read the matching `registry/react/components/<name>.tsx` to see whether `Portal` wraps all floating output or only the positioned layer.

## Positioning vs portal

Portal choice does not replace **positioning** props (`side`, `align`, offsets) on popper-based components—those live on the Ark positioner / content parts exposed by Shark. Adjust placement via documented props on the Shark/Ark surface, not by removing `Portal` unless you are following Ark’s modal / inline modes from docs.

## SSR and lazy mount

Many Ark roots used by Shark set defaults like `lazyMount` / `unmountOnExit` on dialog-like components. Preserve those defaults unless the MDX documents a controlled pattern for long-lived portals.
