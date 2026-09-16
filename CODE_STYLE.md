# Code Style Guide

Human-maintained conventions for Shark UI. Read this before editing source, examples, docs, or manifests.

Conflict order: explicit user or system instructions, then `biome.json`, then this file. Change a convention here, not in `AGENTS.md`.

## Formatting and TypeScript

- Biome and Ultracite format and lint. Follow the existing config; do not add local exceptions without a concrete need.
- Components and examples import from `@/registry/react/components/<name>`. Utilities such as `cn` import from `@/lib/utils`.
- Use `cn()` for merged or conditional classes. Use `tv()` (`tailwind-variants`) for visual variants.
- Import the React namespace: `import React from "react"`, then `React.useState`. Types only: `import type React from "react"`. Do not destructure React APIs (`import { useState } from "react"`).

## React and JSX

- Add `data-slot` on component wrappers.
- Keep compound parts in their documented hierarchy: `TabsTrigger` belongs in `TabsList`; `CardHeader` stays its own part.
- Triggers that merge with a host (`Button`, link): `asChild` with exactly one child.
- Overlay surfaces need their title part (`DialogTitle`, `SheetTitle`, `DrawerTitle`). Use `className="sr-only"` when the title should not be visible.

## Tailwind, Icons, and RTL

- Use semantic tokens (`text-muted-foreground`, `bg-destructive`, `border-input`), not raw palette classes. Skip manual `dark:` palette pairs when tokens cover the case.
- Surface hierarchy is intentional: `muted` and `accent` are neutral `/4`; `secondary` is neutral `/8`; `secondary-hover` is neutral `/16`; `sidebar-accent` is neutral `/4` over the sidebar. Accent communicates interactive context without becoming a second primary surface.
- Solid semantic controls use opaque `primary-hover`, `secondary-hover`, or `destructive-hover` tokens. Do not use translucent `primary`, `secondary`, or destructive `/80` hover fills for solid controls: their final color depends on the parent surface. Contextual status feedback may use its documented `/8` to `/24` layers.
- Every focus-owning control uses `outline-hidden` plus `border-ring/64 ring-2 ring-ring/24`. Keep a base `border border-transparent` when the control has no structural border, so focus does not shift layout; fields keep `border-input` until focused. Both layers derive from the configured primary: the stronger `/64` border carries contrast and the `/24` ring is a quieter outer reinforcement. The only exception is a control whose own interactive surface is solid `bg-primary`: it uses an opaque `border-background` with the same `ring-2 ring-ring/24`, so the border remains visible inside the fill. `outline-hidden` suppresses the browser outline while preserving it in forced-colors mode. Do not use `outline-none` unless a documented accessibility exception requires suppressing focus in forced-colors mode. Static and decorative elements do not receive outline utilities.
- Prefer built-in variants and semantic tokens before restyling with `className`. Use `className` for layout.
- Prefer `flex` or `grid` with `gap-*` over `space-x-*` / `space-y-*`. Use `size-*` for squares and icons. Use `truncate`, not the expanded utility sequence.
- Prefer `data-slot` and existing `in-*` / `peer` patterns when extending registry styles.
- Overlay primitives own stacking. Do not add `z-index` to dialogs, menus, popovers, tooltips, or similar surfaces.
- Import named Lucide icons. Size them with Tailwind classes, never the numeric `size` prop. Mark decorative icons `aria-hidden="true"`; leave semantic icons exposed unless equivalent text is present.
- Use logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) instead of physical direction. Use `slide-*-from-start|end` animations and propagate `dir` from `useLocale` when applicable.
- Use physical direction only for an explicitly LTR surface, visual coordinates, or geometry unrelated to reading order. Keep the exception explicit and document why it cannot follow `dir`.
- Motion is tactile and contained, and declared locally in each component with Tailwind and `tw-animate-css`: press uses `duration-[120ms] ease-out`; controls and anchored overlays use `duration-150 ease-out`; dialogs and sheets use `duration-200 ease-out`; the documented Ark geometry exception uses `duration-150 ease-in-out`. Do not add shared duration, easing, animation, or keyframe tokens to `styles/globals.css`.
- Drawer is the sole motion exception: it may use local Tailwind transitions over the Ark swipe variables (`--drawer-translate-x/y`, `--drawer-swipe-progress`, and `--drawer-swipe-strength`) so the panel follows a gesture without lag and settles from its current position. The panel slides at `duration-300 ease-out` without a fade; the backdrop keeps its independent `duration-[450ms] ease-out` fade. Disable transitions while swiping; use the local, strength-derived close duration only on both surfaces. Do not add Drawer keyframes, tokens, or CSS outside `drawer.tsx`.
- Do not add interface keyframes, animation tokens, or easing curves to `styles/globals.css`; compose all other interface motion from `tw-animate-css` utilities in the owning component. Existing marquee and indeterminate-progress keyframes are technical implementations, never reusable interface recipes. An overlay anchored by Ark positioning must use `origin-(--transform-origin)`, 98% scale, fade, placement-aware travel, and the local overlay classes. Centered dialogs and coordinate-positioned floating panels deliberately use `origin-center`. Do not use `scale(0)`, `ease-in`, `ease-linear`, `transition-all`, or arbitrary easing functions.
- Reduced motion retains a short fade but removes travel, scale, rotation, and blur. Gate hover transforms behind `(hover: hover)` and `(pointer: fine)`.

### Class lists

Short, single-group lists stay one string: `"flex items-center gap-2"`.

When a `className` covers more than one group below, split into multiple strings via `cn()` (JSX) or a `tv()` `base` / `variants` array. Same grouping either way. Related utilities stay on the same line. Different groups get different lines. Skip unused groups. In `cn()`, `className` is last.

Line order:

1. CSS variables (`[--space:--spacing(6)]`)
2. Group / peer / slot (`group/item`, `peer`)
3. Position and stacking (`relative`, `fixed`, `inset-0`, `z-*`, `row-start-*`)
4. Size (`w-*`, `h-*`, `min-*`, `max-*`, `size-*`, `flex-1`, `shrink-*`)
5. Display and alignment (`flex`, `grid`, `items-*`, `justify-*`, `gap-*`)
6. Spacing (`p-*`, `m-*`, `px-*`)
7. Background (`bg-*`, `backdrop-*`)
8. Typography (`text-*`, `font-*`, `leading-*`, `truncate`)
9. Shape and chrome (`rounded-*`, `border`, `shadow-*`, `ring-*`)
10. Overflow (`overflow-*`)
11. Interaction (`cursor-*`, `select-*`, `pointer-events-*`, `outline-*`, `touch-*`)
12. Transform (`translate-*`, `scale-*`, `origin-*`)
13. Transition (`transition-*`, `duration-*`, `ease-*`, `will-change-*`)
14. States: one line per family (`hover:`, `focus-visible:`, `disabled:`, `aria-invalid:`, `data-[state=open]:`, `data-[state=closed]:`)
15. Descendants / slots (`[&_svg]:`, `in-data-[slot=...]`)
16. Reduced motion last (`motion-reduce:*`)

State modifiers in the same family stay on one line:

```tsx
"data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
"data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
```

```tsx
className={cn(
  "[--space:--spacing(4)] [--offset:--spacing(2)]",
  "group/panel",
  "relative z-50",
  "max-h-[calc(100svh-2rem)] w-full min-w-0 max-w-lg",
  "flex flex-col items-stretch",
  "gap-(--space) p-(--space)",
  "bg-popover backdrop-blur-xs",
  "font-sans text-sm text-popover-foreground",
  "rounded-2xl border shadow-lg/4",
  "overflow-hidden",
  "outline-hidden",
  "origin-(--transform-origin) translate-y-(--offset)",
  "transition-[opacity,translate] duration-150 ease-out will-change-transform",
  "hover:bg-muted/48",
  "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
  "disabled:pointer-events-none disabled:opacity-64",
  "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
  "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  "motion-reduce:data-[state=closed]:zoom-out-100 motion-reduce:data-[state=open]:zoom-in-100 motion-reduce:transition-none",
  className
)}
```

### Opacity

Use only these visual alpha values: `0`, `4`, `8`, `16`, `24`, `32`, `48`, `64`, `80`, `96`, and `100`. This applies to Tailwind alpha modifiers, `opacity-*`, shadows, and CSS alpha channels.

- Choose alpha by semantic role, not by visual nudging. Text and informative icons use opaque semantic tokens by default; placeholders must meet WCAG AA on their effective background.
- Disabled controls use `opacity-64` together with their semantic disabled state and blocked interaction. Do not dim a still-interactive control with element opacity.
- Use `opacity-0` and `opacity-100` for visibility transitions. Gesture- or animation-derived values may use a CSS variable or `calc()` when documented locally.
- Reserve `/4` for neutral elevation; `/8` and `/16` for subtle feedback or selection; `/24` for subtle validation, decoration, and the outer keyboard-focus ring; `/32` for scrims; `/48` for present muted surfaces; `/64` for validated supporting content and the contrast-bearing keyboard-focus border; `/80` for strong translucent layers; and `/96` for fixed blurred surfaces.
- Do not add opacity for consistency alone. It is appropriate only for disabled state, interaction reveal, elevation, media, charts, and decorative content.
- Exclude `color-mix()` token recipes, user-entered color values, and calculated gesture opacity from this scale.
- A translucent state is allowed only when it is intentionally a contextual layer and its text, icon, border, and focus contrast have been validated on the effective composited background.

### Shadows

Use the smallest elevation that communicates containment or separation. The system is tactile and contained: `shadow-xs/4` is structural separation, `shadow-xs/8` is hover reinforcement, `shadow-sm/4` is for raised controls and preview surfaces, and `shadow-lg/4` is for overlays outside page flow. Fields and outlined controls use `shadow-xs/4`; filled action buttons (`default`, `destructive`, and `secondary`) use `shadow-sm/4`; ghost and link buttons have no elevation. Do not add hover shadows unless the interaction specifically needs `shadow-xs/8` as temporary tactile reinforcement.

- Every elevation shadow declares geometry and alpha. Do not use bare, color-tinted, status-tinted, or geometry outside `xs`, `sm`, and `lg`.
- Use arbitrary shadows only for the documented ColorPicker inset keyline and ImageCropper mask/handle geometry. They are technical effects, not elevation; their alpha channels still follow the approved scale.
- Borders and tonal separation establish structure before elevation. Shadows do not replace focus rings or contrast-bearing borders.

### Control shape

Rectangular Button, Input, InputGroup, Select, NativeSelect, and NumberInput controls use `rounded-lg` at medium and large sizes and `rounded-md` at small and extra-small sizes where available. ButtonGroup alone owns joined contours: it removes only internal corners and duplicate borders. Use direct Tailwind radius utilities; technical inner geometry may calculate directly from `--radius`, but never declares or consumes a component-local `--*-radius` property. Only the explicit `pill` variant uses a full radius.

## Files, examples, and docs

### Names

- kebab-case for the component, manifest, and MDX: `registry/react/components/select.tsx`, `registry/manifest/select.ts`, `content/docs/components/select.mdx`.
- Examples: `registry/react/examples/<component>/example-<topic>.tsx`.
- Form-guide examples: `registry/react/examples/form/<rhf|tanstack|formisch>/example-<topic>.tsx`.
- Topics: `example-default.tsx`, `example-controlled.tsx`, `example-disabled.tsx` / `example-invalid.tsx`, `example-size-sm.tsx`, `example-variant-ghost.tsx`.

### Example modules

- `const` arrow component. Default export last.
- `example-default.tsx` exports `{Component}Demo` (`SelectDemo`, `ButtonDemo`). Every other file exports `Example`.
- `"use client"` only for hooks, browser APIs, or interactive state. First line when present.
- Static lists and constants after the component, before `export default`, so the implementation is what you see first:

```tsx
const SelectDemo = () => (
  <Select collection={collection}>{/* ... */}</Select>
);

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});

export default SelectDemo;
```

- Example files import from `@/registry/react/components/<name>`.
- MDX Usage snippets import from `@/components/ui/<name>`.
- Hero preview: `<ComponentPreview componentName="select" />` loads `example-default.tsx`. Other previews pass `fileName="example-..."`.

### Docs

Skip a section that does not apply. Nothing after API Reference except the Ark UI link.

1. Installation
2. Anatomy
3. Usage
4. Controlled
5. States: one `## States`, then `### Disabled`, `### Invalid`, and similar
6. Variant axes: one `##` per axis (`## Size`, `## Variants`), then `###` per value
7. Examples
8. API Reference

## Fictional brand

In examples, blocks, and templates, the fictitious company or product is **Onda**. The logo is `WavesHorizontalIcon`. Product names may extend it (`Onda Mail`, `Onda Inc`); the root stays Onda.

## Thumbnails

Component thumbnails are decorative and monochrome. Use only `foreground`, `primary`, `primary-foreground`, `muted`, `muted-foreground`, `background`, `card`, `secondary`, `border`, `border-input`, and `input`, including opacity modifiers. Preview shells use `bg-muted`; nested fills use `muted-foreground` opacity. Do not use status, chart, or raw hue colors.
