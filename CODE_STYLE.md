# Code Style Guide

Conflict order: explicit user or system instructions → `biome.json` → this file. Change conventions here, not in `AGENTS.md`.

## Formatting and TypeScript

- Biome + Ultracite; follow existing config; no local exceptions without need.
- Components/examples: `@/registry/react/components/<name>`. Utils (`cn`): `@/lib/utils`.
- `cn()` for merged/conditional classes. `tv()` (`tailwind-variants`) for visual variants.
- React namespace: `import React from "react"` → `React.useState`. Types: `import type React from "react"`. Do not destructure (`import { useState } from "react"`).

## React and JSX

- `data-slot` on component wrappers.
- Compound hierarchy: `TabsTrigger` in `TabsList`; `CardHeader` as its own part.
- Host triggers (`Button`, link): `asChild` with exactly one child.
- Overlays need titles (`DialogTitle`, `SheetTitle`, `DrawerTitle`); `className="sr-only"` when hidden.

## Tailwind, Icons, and RTL

- Semantic tokens (`text-muted-foreground`, `bg-destructive`, `border-input`), not raw palette. No manual `dark:` pairs when tokens cover it.
- Surfaces: `muted` = neutral `/4`; `accent` / `secondary` / `sidebar-accent` = `/8`; `secondary-hover` = `/16`. Accent = interactive context, not a second primary.
- Solid controls: opaque `primary-hover` / `secondary-hover` / `destructive-hover`. No translucent `primary` / `secondary` / destructive `/80` hover fills (parent-dependent). Status may use `/8`–`/24`.
- Focus: `outline-hidden` + `border-ring/64 ring-2 ring-ring/24`. Base `border border-transparent` when no structural border (fields keep `border-input` until focused). Solid `bg-primary`: opaque `border-background` + same ring. No `outline-none` unless a documented a11y exception must suppress focus in forced-colors. No outline utils on static/decorative elements.
- Variants + tokens before restyling; `className` for layout. Prefer `data-slot` / `in-*` / `peer` when extending registry styles.
- `flex`/`grid` + `gap-*` (not `space-x-*`/`space-y-*`). `size-*` for squares/icons. `truncate` shorthand.
- Overlays own stacking — no `z-index` on dialogs, menus, popovers, tooltips, etc.
- Named Lucide icons; size with Tailwind, never numeric `size`. Decorative: `aria-hidden="true"`; keep semantic icons exposed unless equivalent text exists.
- Logical utils (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`); `slide-*-from-start|end`; propagate `dir` from `useLocale` when applicable. Physical direction only for explicit LTR, visual coordinates, or non-reading-order geometry — document why.
- Motion local via Tailwind + `tw-animate-css`. Press `duration-[120ms] ease-out`; controls/anchored overlays `duration-150 ease-out`; dialogs/sheets `duration-200 ease-out`; Ark geometry exception `duration-150 ease-in-out`. No duration/easing/animation/keyframe tokens in `styles/globals.css` (compose in the owning component). Marquee / indeterminate-progress keyframes are technical only.
- Drawer exception: local transitions over `--drawer-translate-x/y`, `--drawer-swipe-progress`, `--drawer-swipe-strength`. Panel `duration-300 ease-out` (no fade); backdrop `duration-[450ms] ease-out` fade. Disable transitions while swiping; strength-derived close duration on both. No Drawer CSS outside `drawer.tsx`.
- Ark-positioned overlays: `origin-(--transform-origin)`, 98% scale, fade, placement-aware travel, local overlay classes. Centered dialogs / coordinate-positioned panels: `origin-center`. Ban `scale(0)`, `ease-in`, `ease-linear`, `transition-all`, arbitrary easing — except Sidebar shadcn geometry (`duration-200 ease-linear` for width/inset/margin/opacity).
- Reduced motion on overlays: disable all enter/exit animation and motion transitions (`motion-reduce:animate-none`; add `motion-reduce:transition-none` when the overlay also uses CSS `transition-*`). Non-overlay continuous motion (spinners, skeleton, indeterminate progress) keeps `motion-reduce:animate-none` as today. Gate hover transforms with `(hover: hover)` and `(pointer: fine)`.

### Class lists

One group → one string (`"flex items-center gap-2"`). Multi-group → `cn()` or `tv()` array; related utils same line; skip unused groups; `className` last in `cn()`.

1. CSS vars (`[--space:--spacing(6)]`)
2. Group/peer/slot (`group/item`, `peer`)
3. Position/stacking (`relative`, `inset-0`, `z-*`)
4. Size (`w-*`, `size-*`, `flex-1`)
5. Display/alignment (`flex`, `grid`, `items-*`, `gap-*`)
6. Spacing (`p-*`, `m-*`)
7. Background (`bg-*`, `backdrop-*`)
8. Typography (`text-*`, `font-*`, `truncate`)
9. Shape/chrome (`rounded-*`, `border`, `shadow-*`, `ring-*`)
10. Overflow (`overflow-*`)
11. Interaction (`cursor-*`, `outline-*`, `pointer-events-*`)
12. Transform (`translate-*`, `scale-*`, `origin-*`)
13. Transition (`transition-*`, `duration-*`, `ease-*`)
14. States — one line per family (`hover:`, `focus-visible:`, `disabled:`, `data-[state=open]:`)
15. Descendants/slots (`[&_svg]:`, `in-data-[slot=...]`)
16. Reduced motion last (`motion-reduce:*`)

Same-family states on one line:

```tsx
"data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
"data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
```

```tsx
className={cn(
  "[--space:--spacing(4)]",
  "relative z-50 max-h-[calc(100svh-2rem)] w-full",
  "flex flex-col gap-(--space) p-(--space)",
  "bg-popover rounded-2xl border shadow-lg/4 overflow-hidden outline-hidden",
  "origin-(--transform-origin) transition-[opacity,translate] duration-150 ease-out",
  "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
  "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
  "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
  "motion-reduce:animate-none motion-reduce:transition-none",
  className
)}
```

### Opacity

Alphas only: `0`, `4`, `8`, `16`, `24`, `32`, `48`, `64`, `80`, `96`, `100` (modifiers, `opacity-*`, shadows, CSS alpha). Exclude `color-mix()` recipes, user-entered colors, calculated gesture opacity.

- By role, not nudging. Text/icons: opaque tokens; placeholders WCAG AA.
- Disabled: `opacity-64` + disabled state + blocked interaction — never dim still-interactive controls.
- Transitions: `opacity-0`/`opacity-100`. Gesture/animation may use CSS var or `calc()` when documented locally.
- Roles: `/4` elevation; `/8` `/16` feedback/selection; `/24` validation/decoration/outer focus ring; `/32` scrims; `/48` muted surfaces; `/64` supporting content + focus border; `/80` strong translucent; `/96` fixed blur.
- Only for disabled, reveal, elevation, media, charts, decoration. Translucent only as intentional contextual layer with validated contrast on the composited background.

### Shadows

Smallest elevation: `shadow-xs/4` structural; `shadow-xs/8` hover; `shadow-sm/4` raised controls/previews; `shadow-lg/4` overlays. Fields/outlined → `shadow-xs/4`; filled `default`/`destructive`/`secondary` → `shadow-sm/4`; ghost/link → none. Hover shadow only when needed (`shadow-xs/8`).

- Always geometry + alpha. No bare, color-/status-tinted, or sizes outside `xs`/`sm`/`lg`.
- Arbitrary only for ColorPicker inset keyline and ImageCropper mask/handle (technical; alpha still approved).
- Borders/tonal separation before elevation; shadows ≠ focus rings or contrast borders.

### Control shape

Button, Input, InputGroup, Select, NativeSelect, NumberInput: `rounded-lg` md/lg; `rounded-md` sm/xs. ButtonGroup owns joined contours. Direct Tailwind radius; inner geometry may use `--radius`, never `--*-radius`. Only `pill` = full radius.

## Files, examples, and docs

### Names

- kebab-case: `registry/react/components/select.tsx`, `registry/manifest/select.ts`, `content/docs/components/select.mdx`.
- Examples: `registry/react/examples/<component>/example-<topic>.tsx`.
- Form guides: `registry/react/examples/form/<rhf|tanstack|formisch>/example-<topic>.tsx`.
- Topics: `default`, `controlled`, `disabled`/`invalid`, `size-sm`, `variant-ghost` → `example-<topic>.tsx`.

### Example modules

- `const` arrow; default export last. `example-default.tsx` → `{Component}Demo`; others → `Example`.
- `"use client"` only for hooks/browser/interactive state (first line).
- Statics after component, before `export default`:

```tsx
const SelectDemo = () => (
  <Select collection={collection}>{/* ... */}</Select>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});

export default SelectDemo;
```

- Examples: `@/registry/react/components/<name>`. MDX Usage: `@/components/ui/<name>`.
- Hero: `<ComponentPreview componentName="select" />` → `example-default.tsx`. Else `fileName="example-..."`.

### Docs

Skip N/A sections. Nothing after API Reference except Ark UI link.

1. Installation → 2. Anatomy → 3. Usage → 4. Controlled → 5. States (`## States` then `### Disabled` / `### Invalid` …) → 6. Variant axes (`## Size` / `## Variants`, then `###` per value) → 7. Examples → 8. API Reference

API tables: `| Prop | Type | Default |`. `-` when no default; no alt headers or description columns.

## Fictional brand

**Onda** in examples/blocks/templates. Logo: `WavesHorizontalIcon`. Extensions OK (`Onda Mail`); root stays Onda.

## Thumbnails

Decorative monochrome. Tokens only: `foreground`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `background`, `card`, `secondary`, `border`, `border-input`, `input` (+ opacity). No status/chart/raw hue.

- Shell: opaque `bg-muted` (never translucent `bg-muted/*` on the illustration container).
- Nested fills: `muted-foreground` opacity ladder — `/16` faint · `/24` default · `/32` strong. Keep at least two steps inside a thumb when hierarchy matters.
- Icons / supporting chrome: `text-muted-foreground/64`.
- Accent: solid `primary` / `primary-foreground`. Nested chips on a muted shell use `bg-background` (or `bg-card`), not another `bg-muted`.
