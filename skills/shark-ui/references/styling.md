# Variant contracts

Tokens, `gap-*`, `size-*`, `truncate`, icons, and overlay `z-index` live in [`CODE_STYLE.md`](../../../CODE_STYLE.md). This file is only the shared `tv()` contracts when editing registry components.

Other primitives import these four `tv()` bases onto their Ark parts. Do not redeclare `h-8` / `min-h-8`, field chrome, list-row metrics, or modal overlay/content. Field, Separator, Scroll Area, Spinner, and Badge are not bases: render them, do not copy their `tv()`.

| Base | Exports | Used by |
| --- | --- | --- |
| Button | `buttonControlVariants`, `buttonVariants` | Toggle, Tabs, Segment Group, Navigation Menu, Sidebar, Editable, Pagination |
| Input | `inputVariants`, `inputItemVariants` | Clipboard, Combobox, Select/Listbox rows (`inputItemVariants`) |
| Menu | `menuItemControlVariants`, `menuListVariants`, plus group/empty/separator variants | list-row density |
| Dialog | `dialogOverlayVariants`, `dialogContentVariants` | Command (content); Tour (overlay); Sheet and Alert Dialog re-export Dialog parts |

## List rows

Menu, ContextMenu, Select, Combobox, Autocomplete, ModelSelector, NavigationMenu, PromptInputPopover, Command, and Listbox use Menu density:

- Rows: `menuItemControlVariants` (`min-h-8`, `rounded-lg`, `gap-2`). Not `rounded-xl`.
- Floating list overlays: `menuListVariants` (`p-1`).
- Labels / empty / separators: `menuGroupLabelVariants`, `menuEmptyVariants`, `menuSeparatorVariants`.
- Selection rows: `menuItemControlVariants` + `inputItemVariants` (typography only).
- `ScrollArea` wrapping a list: `p-0` on the shell, not `p-1.5` / `p-2`.

HoverCard, DatePicker, ColorPicker, and default Popover are content popovers. They keep their own padding.
