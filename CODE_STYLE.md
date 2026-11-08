# Code Style Guide

Conflict order: explicit user or system instructions → `biome.json` → this file. Change conventions here, not in `AGENTS.md`. Biome + Ultracite; follow the existing config; no local exceptions without need.

## Imports

- Components/examples: `@/registry/react/components/<name>`. Utils (`cn`): `@/lib/utils`. MDX Usage: `@/components/ui/<name>`.
- `cn()` for merged or conditional classes. `tv()` (`tailwind-variants`) for visual variants.
- `import React from "react"` → `React.useState`. Types: `import type React from "react"`. No `import { useState } from "react"`.

## Component body

- Props: `interface ${Name}Props`, declared above the component, when it adds its own fields. No inline object type on the parameter. When `{...rest}` spreads onto an element or component, `extends React.ComponentProps<typeof Target>` (`ark.div`, `Button`, `Collapsible`). Own fields go on the interface. An interface that only `extends` and declares no fields may be omitted: write that base type inline (`props: React.ComponentProps<typeof Dialog>`). `export` only if another module imports it.
- `(props: T)`, then `const { …, ...rest } = props` in the body — never in the parameter list. Blank line after `= props`. Blank line before `return (` when a statement precedes it; none when `return (` is the first line after `{` or a `case` label.
- Destructure order: data props, then functions (`onValueChange`), then `className`, then `children`, then `...rest`.
- Blank line between groups: `= props`; value hooks (`useState`, `useReducer`, `useRef`, `useId`, context/`useX`); derived consts, plain functions, `useMemo`; `useCallback` / `useEffectEvent`; `useEffect` / `useLayoutEffect` / `useImperativeHandle`; `return`. Declare before use inside a group. Every hook stays above any conditional `return`.

## Tailwind

- Semantic tokens (`text-muted-foreground`, `bg-destructive`, `border-input`). No raw palette. No manual `dark:` when a token covers it.
- Focus: `outline-hidden` + `border-ring/64 ring-2 ring-ring/24`. No structural border → `border border-transparent`. Solid `bg-primary`: opaque `border-background` + the same ring. `outline-none` only for a documented forced-colors exception. No outline utils on static or decorative elements.
- Variants and tokens before restyling. `className` is layout. Extend registry styles with `data-slot` / `in-*` / `peer`.
- `flex` / `grid` + `gap-*` (not `space-x-*` / `space-y-*`). `size-*` for squares and icons. `truncate`.
- Overlay stacking stays on the backdrop or positioner that defines the layer. No local `z-index`.
- Lucide: `Icon` export (`ArchiveIcon`). Size with Tailwind, never numeric `size`. Decorative: `aria-hidden="true"`. Keep a semantic icon exposed unless equivalent text exists.
- Logical utils (`ms-*`, `me-*`, `ps-*`, `pe-*`, `inset-s-*`, `inset-e-*`) and `slide-*-from-start|end`. Prefer Tailwind canonical forms (`inset-s-0` not `start-0`, `bg-linear-to-*` not `bg-gradient-to-*`, important as `util!` not `!util`, `**:data-*` for deep descendants). Inherit `dir`. Physical direction only for explicit LTR, visual coordinates, or non-reading-order geometry.

## Motion

- Duration and easing live with the animation, not in `styles/globals.css`.
- Timings: [`public/design.md`](public/design.md) Motion.
- Enter/exit → `ease-out`. Morph/geometry on-screen → `ease-in-out`. Constant motion → `linear`. Hover/color → no transition (or short `ease` only if needed).
- Never: `ease-in`, `ease-linear` on UI, `scale(0)` / `zoom-in-0` (use ~95–98%).
- Enter/exit uses `data-[state=open|closed]`.
- List overlays (Menu, Combobox, Autocomplete, Select, ColorPicker, DatePicker): no close animation. Never `data-[state=closed]:animate-out` / closed fade / closed zoom. Unmount must be instant.
- Reduced motion uses the `motion-reduce:` prefix. A bare `data-[state=open|closed]:animate-none` disables motion for everyone.
- No `transition-all`.
- Gate hover transforms with `(hover: hover)` and `(pointer: fine)`.
- Height keyframes carry duration and easing as literals in the token (`collapse-down 200ms ease-out`).

## Class lists

One group → one string (`"flex items-center gap-2"`). Several groups → a `cn()` or `tv()` array: related utils on one line, unused groups omitted, same-family states on one line, `className` last.

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

## Surface

Alphas only: `0`, `4`, `8`, `16`, `24`, `32`, `48`, `64`, `80`, `96`, `100` (modifiers, `opacity-*`, shadows, CSS alpha). Carve-out: `color-mix()` recipes, user-entered colors, calculated gesture opacity.

- `/4` elevation (`muted` = neutral `/4`). `/8` `/16` feedback and selection (`accent`, `secondary`, `sidebar-accent` = `/8`; accent is context, not a second primary). `/24` validation, decoration, outer focus ring. `/32` scrims. `/48` muted surfaces. `/64` supporting content and the focus border. `/80` strong translucent. `/96` fixed blur.
- Solid primary, secondary, and destructive hover fills: `/80`. Status may use `/8`–`/24`.
- Text and icons: opaque tokens; placeholders meet WCAG AA. Disabled: `opacity-64` + disabled state + blocked interaction. Leave a still-interactive control at full opacity. Transitions: `opacity-0` / `opacity-100` (a documented gesture may use a CSS var or `calc()`).
- Translucency is a layer only (disabled, reveal, elevation, media, charts, decoration), with contrast checked on the composited background.
- Shadows: `shadow-xs/4` structural; `shadow-xs/8` hover; `shadow-sm/4` raised controls and previews; `shadow-lg/4` overlays. Outlined → `shadow-xs/4`. Filled → `shadow-sm/4`. Ghost and link → none. Hover shadow only when that state needs it. Geometry + ladder alpha: no bare, tinted, or non-`xs`/`sm`/`lg` shadow. Border or tonal split before elevation. A shadow is not a focus ring or a contrast border.
- Radius: controls use `rounded-lg` at md/lg and `rounded-md` at sm/xs. Tailwind radius utilities; inner geometry may use `--radius`, never `--*-radius`. Only `pill` is full radius.

## Files and docs

### Names

- kebab-case: `registry/react/components/select.tsx`, `registry/manifest/select.ts`, `content/docs/components/select.mdx`.
- Examples: `registry/react/examples/<component>/example-<topic>.tsx`. Forms: `registry/react/examples/form/<rhf|tanstack|formisch>/example-<topic>.tsx`.
- Topics: `default`, `controlled`, `disabled` / `invalid`, `size-sm`, `variant-ghost`.

### Example modules

- `const` arrow; default export last. `example-default.tsx` → `{Component}Demo`. Other files → `Example`.
- `"use client"` only for hooks, browser APIs, or interactive state, as the first line.
- Statics after the component, before `export default`:

```tsx
const SelectDemo = () => (
  <Select collection={collection}>{/* ... */}</Select>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});

export default SelectDemo;
```

- `<ComponentPreview componentName="select" />` loads `example-default.tsx`. Other files pass `fileName="example-..."`.

### Docs

Skip a section that does not apply. API Reference is last; only the Ark UI link follows it.

A blurb is at most one objective sentence. Skip Ark internals and any default the API table already lists. A self-explanatory heading gets no blurb.

1. Installation → 2. Anatomy → 3. Usage → 4. Controlled → 5. States (`## States`, then `### Disabled` / `### Invalid` …) → 6. Variant axes (`## Size` / `## Variants`, then `###` per value) → 7. Examples → 8. API Reference

`## Usage` snippets omit `className`, except a utility whose API is the class.

API tables: `| Prop | Type | Default |`. Defaults and types in backticks. `` `-` `` when there is no default; `` `required` `` for a required prop. No other headers, no description column.

## Examples chrome

Brand and thumbnails apply to examples, blocks, and templates.

- **Onda**. Logo: `WavesHorizontalIcon`. Extensions are fine (`Onda Mail`); the root name stays Onda.
- Thumbnails: decorative, monochrome. Tokens only: `foreground`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `background`, `card`, `secondary`, `border`, `border-input`, `input`, plus opacity. No status, chart, or raw hue.
- Shell: opaque `bg-muted`. Nested fills: `muted-foreground` at `/16` faint, `/24` default, `/32` strong — at least two steps when hierarchy matters. Icons and chrome: `text-muted-foreground/64`. Accent: solid `primary` / `primary-foreground`. A chip on a muted shell uses `bg-background` or `bg-card`.
