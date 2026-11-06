# Variant contracts

Tokens, `gap-*`, `size-*`, `truncate`, icons, and overlay stacking live in [`CODE_STYLE.md`](../../../CODE_STYLE.md). This file is only the shared `tv()` contracts when editing registry components.

Other primitives import these `tv()` bases onto their Ark parts. Do not redeclare `min-h-10 md:min-h-8`, field chrome, list-row metrics, or modal overlay/content. Field, Separator, Scroll Area, Spinner, and Badge are not bases: render them, do not copy their `tv()`.

| Base | Exports | Used by |
| --- | --- | --- |
| Button | `buttonControlVariants`, `buttonVariants` | Toggle, Tabs, Segment Group, Editable, Pagination |
| Input | `inputVariants`, `inputHeightVars` | Clipboard, Combobox, Select, Native Select, Number Input, Input Group, Input OTP |
| Menu | `menuItemControlVariants`, `menuItemVariants`, `menuContentVariants`, plus group/empty variants | list-row density |
| Dialog | `dialogOverlayVariants`, `dialogContentVariants` | Command (content); Tour (overlay); Sheet and Alert Dialog re-export Dialog parts |
| Tooltip | `tooltipContentVariants` | Toggle Tooltip |

## List rows

Menu, ContextMenu, Select, Combobox, Autocomplete, Command, and Listbox use Menu density:

- Rows: `menuItemVariants`, which extends `menuItemControlVariants` (`min-h-10 md:min-h-8`, `rounded-lg`, `gap-2`, `text-base font-medium md:text-sm`). Not `rounded-xl`.
- Floating list overlays: `menuContentVariants` (`p-1.5`). Select content uses the same padding. Combobox and Command wrap the list in `ScrollArea`; padding stays on the content, not the scroll shell.
- Labels / empty: `menuGroupLabelVariants`, `menuEmptyVariants`. Separators render `Separator`; menu-like dividers add `my-1` inline.

HoverCard, DatePicker, ColorPicker, and default Popover are content popovers. They keep their own padding.
