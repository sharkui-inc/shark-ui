# Code Style Guide

Conflict order: explicit user or system instructions → `biome.json` → this file. Change conventions here, not in `AGENTS.md`.

## Imports & React

- Biome + Ultracite; follow existing config; no local exceptions without need.
- Components/examples: `@/registry/react/components/<name>`. Utils (`cn`): `@/lib/utils`. MDX Usage: `@/components/ui/<name>`.
- `cn()` for merged/conditional classes. `tv()` (`tailwind-variants`) for visual variants.
- React namespace: `import React from "react"` → `React.useState`. Types: `import type React from "react"`. Do not destructure (`import { useState } from "react"`).
- Never destructure in the parameter list. Always `(props: T)` then `const { …, ...rest } = props` in the body.
- `data-slot` on component wrappers. Compound hierarchy: `TabsTrigger` in `TabsList`; `CardHeader` as its own part.
- Host triggers (`Button`, link): `asChild` with exactly one child.
- Overlays need titles (`DialogTitle`, `SheetTitle`, `DrawerTitle`); `className="sr-only"` when hidden.

## Tailwind

- Semantic tokens (`text-muted-foreground`, `bg-destructive`, `border-input`), not raw palette. No manual `dark:` pairs when tokens cover it.
- Focus: `outline-hidden` + `border-ring/64 ring-2 ring-ring/24`. No structural border → `border border-transparent` (fields keep `border-input` until focused). Solid `bg-primary`: opaque `border-background` + same ring. `outline-none` only for a documented a11y exception that must hide focus in forced-colors. No outline utils on static/decorative elements. Command search: no focus ring or border shift (`focus-within:border-input focus-within:ring-0`); the highlighted item is the focus cue.
- Variants + tokens before restyling; `className` for layout. Prefer `data-slot` / `in-*` / `peer` when extending registry styles.
- `flex`/`grid` + `gap-*` (not `space-x-*`/`space-y-*`). `size-*` for squares/icons. `truncate` shorthand.
- Overlay `z-index` stays layer-aware: Ark layers `z-[calc(50+var(--layer-index,0))]`; Tour and FloatingPanel use their own layer variables. Keep those classes on backdrops/positioners where defined. Do not swap them for a shared static `z-index` or drop them as cleanup.
- Lucide: `Icon` export (`ArchiveIcon`); size with Tailwind, never numeric `size`. Inside `Button`, omit `className="size-*"` — Button sizes SVGs with `[&_svg:not([class*='size-'])]:size-4` (and size variants); explicit `size-*` only to override. Decorative: `aria-hidden="true"`; keep semantic icons exposed unless equivalent text exists.
- Logical utils (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`); `slide-*-from-start|end`; inherit `dir` from ambient Ark `LocaleProvider` / ancestor `dir`. Do not import `LocaleProvider` or `useLocale` inside `registry/react/components` (except `locale.tsx`). Physical direction only for explicit LTR, visual coordinates, or non-reading-order geometry.

## Motion

- Local via Tailwind + `tw-animate-css`. Press, controls, and anchored overlays: `duration-150 ease-out`. Dialogs/sheets: `duration-200 ease-out`. Ark geometry: `duration-150 ease-in-out`.
- No duration/easing/animation/keyframe tokens in `styles/globals.css` — compose in the owning component.
- Ark-positioned overlays: `origin-(--transform-origin)`, 98% scale, fade, placement-aware travel, local overlay classes. Centered dialogs / coordinate-positioned panels: `origin-center`. Ban `scale(0)`, `ease-in`, `ease-linear`, `transition-all`, arbitrary easing — except Drawer (`drawer.tsx`) and Sidebar geometry (`sidebar.tsx`).
- Overlays: `motion-reduce:animate-none` and `motion-reduce:transition-none`. If a state selector qualifies the animation (`data-[state=open]:`), repeat it under `motion-reduce:` (`motion-reduce:data-[state=open]:animate-none`); string order alone does not win specificity. Drawer (`drawer.tsx`) disables open/close motion under reduced motion and keeps direct swipe tracking. Spinners, marquees, and progress stay animated. Gate hover transforms with `(hover: hover)` and `(pointer: fine)`.

## Class lists

One group → one string (`"flex items-center gap-2"`). Multi-group → `cn()` or `tv()` array; related utils same line; skip unused groups; same-family states on one line; `className` last in `cn()`.

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

```tsx
className={cn(
  "[--space:--spacing(4)]",
  "relative z-50 w-full",
  "flex flex-col gap-(--space) p-(--space)",
  "bg-popover rounded-2xl border shadow-lg/4 overflow-hidden outline-hidden",
  "origin-(--transform-origin) transition-[opacity,translate] duration-150 ease-out",
  "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
  "motion-reduce:animate-none motion-reduce:transition-none",
  "motion-reduce:data-[state=open]:animate-none",
  className
)}
```

## Tokens & opacity

Alphas only: `0`, `4`, `8`, `16`, `24`, `32`, `48`, `64`, `80`, `96`, `100` (modifiers, `opacity-*`, shadows, CSS alpha). Carve-out: `color-mix()` recipes, user-entered colors, calculated gesture opacity.

- `/4` elevation (`muted` = neutral `/4`); `/8` `/16` feedback/selection (`accent`, `secondary`, `sidebar-accent` = `/8` — accent is interactive context, not a second primary); `/24` validation/decoration/outer focus ring; `/32` scrims; `/48` muted surfaces; `/64` supporting content + focus border; `/80` strong translucent; `/96` fixed blur.
- Solid controls: translucent `/80` hover fills for primary, secondary, and destructive. Status may use `/8`–`/24`.
- Text/icons: opaque tokens; placeholders WCAG AA. Disabled: `opacity-64` + disabled state + blocked interaction — never dim still-interactive controls. Transitions: `opacity-0`/`opacity-100` (gesture/animation may use CSS var or `calc()` when documented locally).
- Translucent only as intentional contextual layer (disabled, reveal, elevation, media, charts, decoration) with validated contrast on the composited background.

## Shadows

`shadow-xs/4` structural; `shadow-xs/8` hover; `shadow-sm/4` raised controls/previews; `shadow-lg/4` overlays. Fields/outlined → `shadow-xs/4`; filled `default`/`destructive`/`secondary` → `shadow-sm/4`; ghost/link → none. Hover shadow only when needed. Always geometry + alpha: no bare, color-/status-tinted, or sizes outside `xs`/`sm`/`lg`. Arbitrary only when already documented in that component; alpha still from the ladder. Borders or tonal separation before elevation; shadows are not focus rings or contrast borders.

## Control shape

Button, Input, InputGroup, Select, NativeSelect, NumberInput: `rounded-lg` md/lg; `rounded-md` sm/xs. ButtonGroup owns joined contours. Direct Tailwind radius; inner geometry may use `--radius`, never `--*-radius`. Only `pill` = full radius.

## Files, examples, and docs

### Names

- kebab-case: `registry/react/components/select.tsx`, `registry/manifest/select.ts`, `content/docs/components/select.mdx`.
- Examples: `registry/react/examples/<component>/example-<topic>.tsx`. Form guides: `registry/react/examples/form/<rhf|tanstack|formisch>/example-<topic>.tsx`.
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

- Hero: `<ComponentPreview componentName="select" />` → `example-default.tsx`. Else `fileName="example-..."`.

### Docs

Skip N/A sections. Nothing after API Reference except Ark UI link.

Example blurbs: at most one objective sentence. No Ark internals, no `Default is…` when the API table lists it. Self-explanatory headings need no blurb.

1. Installation → 2. Anatomy → 3. Usage → 4. Controlled → 5. States (`## States` then `### Disabled` / `### Invalid` …) → 6. Variant axes (`## Size` / `## Variants`, then `###` per value) → 7. Examples → 8. API Reference

`## Usage` snippets take no `className`, except utilities whose API is the class (`hitbox`, `shimmer`).

API tables: `| Prop | Type | Default |`. Defaults and types always in backticks (mono). `` `-` `` when no default; `` `required` `` for required props (never `**required**`). No alt headers or description columns.

## Brand

**Onda** in examples/blocks/templates. Logo: `WavesHorizontalIcon`. Extensions OK (`Onda Mail`); root stays Onda.

## Thumbnails

Decorative monochrome. Tokens only: `foreground`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `background`, `card`, `secondary`, `border`, `border-input`, `input` (+ opacity). No status/chart/raw hue.

- Shell: opaque `bg-muted` (never translucent `bg-muted/*` on the illustration container).
- Nested fills: `muted-foreground` opacity ladder — `/16` faint · `/24` default · `/32` strong. Keep at least two steps inside a thumb when hierarchy matters.
- Icons / supporting chrome: `text-muted-foreground/64`.
- Accent: solid `primary` / `primary-foreground`. Nested chips on a muted shell use `bg-background` (or `bg-card`), not another `bg-muted`.
