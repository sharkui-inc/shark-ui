# Styling rules (Shark UI)

Use when writing or updating Shark components, registry examples, and docs previews.

## Core rules

- Prefer **semantic tokens** (`text-muted-foreground`, `bg-destructive`, `border-input`, `bg-primary`, `text-primary-foreground`) over raw palette classes (`bg-blue-500`, `text-gray-600`, etc.).
- For **positive / negative / status** copy, use `Badge` variants, semantic text like `text-destructive`, or theme CSS variables — not raw greens/reds (`text-emerald-600`, `text-green-500`). If success (or similar) is not a token yet, extend the theme in global CSS (see styling doc) instead of ad-hoc colors.
- Prefer component **`variant` / `size`** before recreating built-in looks with `className` (e.g. `Button variant="outline"` instead of `border border-input bg-transparent hover:bg-accent`).
- Use **`className` mainly for layout** (`max-w-md`, `mx-auto`, `mt-4`, `flex`, `gap-*`), not to override primitive colors or typography. To change appearance: (1) built-in variants, (2) semantic tokens, (3) CSS variables in theme — in that order.
- Use **`flex` / `grid` + `gap-*`** instead of `space-x-*` / `space-y-*` (e.g. `space-y-4` → `flex flex-col gap-4`; `space-x-2` → `flex gap-2`).
- For **equal width and height**, prefer `size-*` over paired `w-*` and `h-*` (icons, avatars, skeletons, etc.).
- Prefer **`truncate`** over `overflow-hidden text-ellipsis whitespace-nowrap`.
- Prefer **semantic tokens for light/dark** — they follow CSS variables; avoid manual pairs like `bg-white dark:bg-gray-950` when `bg-background text-foreground` (or other tokens) fits.
- Use **`cn()`** from `@/lib/utils` for conditional or merged classes; avoid long template-literal `className` strings with embedded ternaries.
- **Do not add manual `z-index`** on overlay primitives (`Dialog`, `Sheet`, `Drawer`, `AlertDialog`, `Menu`, `ContextMenu`, `Popover`, `Tooltip`, `HoverCard`, portaled `Select` content, etc.) — stacking is owned by the component.
- Avoid **redundant classes** that the primitive already applies.
- Follow **Tailwind CSS v4** conventions used in Shark’s theme (`@import "tailwindcss"`, `@theme inline`, etc. in manual installation docs).

## Shark-specific expectations

- Decorative icons: default to `aria-hidden="true"` when the text label already conveys meaning.
- Prefer `data-slot` selectors and `in-*` / `peer` patterns already used in registry components (e.g. dialog overlay peer pattern) over ad-hoc `group` when the component defines slots.
- Cancel/dismiss actions in modal footers typically use `Button` `variant="ghost"`; reserve `variant="outline"` for triggers that open overlays, not for primary dismiss actions (see dialog/sheet examples).

## Global layout (when relevant)

- For portaled overlays, many patterns assume a sensible stacking context at the app root; follow installation / layout guidance in docs.
- iOS Safari: some tour/dialog patterns expect `body` positioning—follow the component source when mirroring `Tour` or similar.

## Do / don’t

```tsx
import { cn } from "@/lib/utils"

// Do — tokens, variants, gap, size, cn
<Button variant="outline" size="sm" />
<div className="flex flex-col gap-3" />
<Card className="max-w-md mx-auto">
  <CardContent>Dashboard</CardContent>
</Card>
<Button>
  <PlusIcon aria-hidden className="size-4" />
  Add item
</Button>
<Badge variant="secondary">+20.1%</Badge>
<span className="text-destructive">-3.2%</span>
<div className={cn("flex items-center", isActive ? "bg-primary text-primary-foreground" : "bg-muted")} />

// Don’t — raw colors, space-*, layout className used to restyle primitives, manual z-index on overlays
<Button className="bg-blue-500 text-white" />
<div className="space-y-3" />
<Card className="bg-blue-100 text-blue-900 font-bold">…</Card>
<Icon size={16} />  {/* prefer className size-* on SVG */}
<span className="text-emerald-600">+20.1%</span>
<DialogContent className="z-[999]">…</DialogContent>
```

## Check before finalizing

1. Semantic colors for state (destructive, muted, success where applicable) — no raw palette for meaning?
2. Status / deltas using `Badge` or tokens, not one-off greens and reds?
3. Built-in `variant` / `size` used before duplicating borders and backgrounds?
4. `className` mostly layout — not overriding primitive color/typography unless intentional and token-based?
5. `gap-*` instead of `space-x-*` / `space-y-*`?
6. `size-*` for square icons / avatars where width equals height?
7. `truncate` instead of three separate overflow classes?
8. No redundant `dark:` palette pairs when semantic tokens cover it?
9. `cn()` for conditional classes?
10. No extra `z-index` on dialogs, sheets, menus, popovers, tooltips, etc.?
11. Duplicated layout already provided by the primitive?
12. Icon semantics and `aria-hidden` correct?
13. `data-slot` / compound part structure preserved when extending styles?
