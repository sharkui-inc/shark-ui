# Variant contracts

Tokens, `gap-*`, `size-*`, `truncate`, icons, and overlay `z-index` live in [`CODE_STYLE.md`](../../../CODE_STYLE.md). This file is only the shared `tv()` contracts when editing registry components.

Other primitives import these `tv()` bases onto their Ark parts. Do not redeclare `h-8` / `min-h-8`, field chrome, list-row metrics, or modal overlay/content. Field, Separator, Scroll Area, Spinner, and Badge are not bases: render them, do not copy their `tv()`.

| Base | Exports | Used by |
| --- | --- | --- |
| Button | `buttonControlVariants`, `buttonVariants` | Toggle, Tabs, Segment Group, Sidebar, Editable, Pagination |
| Input | `inputVariants`, `inputHeightVars` | Clipboard, Combobox, Select, Native Select, Number Input, Input Group |
| Menu | `menuItemControlVariants`, `menuListVariants`, plus group/empty variants | list-row density |
| Dialog | `dialogOverlayVariants`, `dialogContentVariants` | Command (content); Tour (overlay); Sheet and Alert Dialog re-export Dialog parts |
| Tooltip | `tooltipContentVariants` | Toggle Tooltip |

## List rows

Menu, ContextMenu, Select, Combobox, Autocomplete, Command, and Listbox use Menu density:

- Rows: `menuItemControlVariants` (`min-h-8`, `rounded-lg`, `gap-2`). Not `rounded-xl`.
- Floating list overlays: `menuListVariants` (`p-1`).
- Labels / empty: `menuGroupLabelVariants`, `menuEmptyVariants`. Separators render `Separator`; menu-like dividers add `my-1` inline.
- Selection rows: `menuItemControlVariants` plus local typography classes (`touch-manipulation select-none font-normal text-base md:text-sm`).
- `ScrollArea` wrapping a list: `p-0` on the shell, not `p-1.5` / `p-2`.

HoverCard, DatePicker, ColorPicker, and default Popover are content popovers. They keep their own padding.
