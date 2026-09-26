---
name: Shark UI
description: Themeable copy-and-own registry UI with semantic surfaces, one primary accent, flat elevation, and inspectable product compositions.
typography:
  sans:
    fontFamily: Hanken Grotesk
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  heading:
    fontFamily: Figtree
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.25
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 0.375rem
  md: 0.5rem
  lg: 0.625rem
  xl: 0.75rem
spacing:
  control: 0.5rem
  related: 1rem
  region: 2.5rem
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
  button-outline:
    rounded: "{rounded.lg}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.on-card}"
    rounded: "{rounded.xl}"
  input:
    rounded: "{rounded.lg}"
    padding: 0.5rem
colors:
  primary: "var(--primary)"
  on-primary: "var(--primary-foreground)"
  background: "var(--background)"
  on-background: "var(--foreground)"
  card: "var(--card)"
  on-card: "var(--card-foreground)"
  muted: "var(--muted)"
  on-muted: "var(--muted-foreground)"
  border: "var(--border)"
  ring: "var(--ring)"
---

# Shark UI

Canonical design rationale for Shark UI. For day-to-day UI generation, prefer the shorter [public design contract](public/design.md). This file explains *why* the system looks and behaves the way it does, and when to extend it.

**Visual character:** Compact, high-signal product UI on neutral semantic surfaces; one configurable primary for action; structure from layout, surface steps, and 1px borders, not glow or heavy shadow.

**Fits:** Developer docs, registry previews, forms, collections, settings, and dense tool-like product surfaces.

**Does not fit:** Marketing landing pages that need ornamental imagery, multi-accent brand systems, or glassmorphism / neon hierarchy.

## Overview

Shark UI is a copy-and-own React registry (Ark UI + Tailwind CSS v4). Consumers change neutral family, primary hue, base radius, and color mode without changing component grammar.

| Need | Source of truth |
| --- | --- |
| Theme values and semantic colors | `lib/theme/catalog.ts` → generated theme CSS |
| Component API and anatomy | Component docs + `registry/react/components/` |
| Shipped compositions | `registry/react/examples/` |
| Implementation conventions | `CODE_STYLE.md`, [Styling](https://shark-ui.com/docs/styling.md) |
| Operational UI rules for agents | [public/design.md](public/design.md) |
| Intent and extension threshold | This file |

**Decision order**

1. Reuse a documented component and variant.
2. Compose documented primitives.
3. Propose an extension only when primitives cannot express the task without a misleading API, duplicated a11y work, or repeated local styling.

An extension names the user task, primitives considered, a11y + responsive behavior, and one representative composition. No parallel token scale, z-index layer, or interaction grammar.

## Colors

Colors are **role-driven and themeable**. Never bind reusable UI to raw palette classes (`bg-blue-500`). Use semantic utilities: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-input`, `ring-ring`.

| Role | Use |
| --- | --- |
| `background` / `foreground` | Page canvas and highest-emphasis content |
| `card`, `popover`, `sidebar`, `code` | Bounded surface + matching `*-foreground` |
| `muted` | Neutral `/4` recessive layer |
| `accent`, `secondary`, `sidebar-accent` | Neutral `/8` interactive or supporting fill (`secondary-hover` = `/16`) |
| `primary` | Sole chromatic action / durable emphasis |
| Feedback (`destructive`, success, warning, info) | Real outcomes, not decoration |
| `border` / `input` / `ring` | Structure and focus |

Rules:

- One configured `primary`. Surrounding product chrome stays neutral.
- Pair every bounded surface with its matching foreground token.
- Solid controls use opaque `*-hover` tokens, not translucent fills over an unknown parent.
- Validate contrast on the composited surface in light and dark mode.

## Typography

| Role | Token / family | Use |
| --- | --- | --- |
| Body / UI | `font-sans` → Hanken Grotesk (default) | Controls, body, labels, nav |
| Heading | `font-heading` → Figtree (default) | Page and region titles |
| Mono | JetBrains Mono | Code, commands, paths, keyboard strings |

Hierarchy comes from the configured scale, weight, and leading, not one-off font sizes or decorative mono. Do not add an isolated display family for product UI.

## Layout

- Page container: centered, max `1400px`, `1rem` inline padding. Major bands: `2.5-4rem` vertical padding.
- Density: tightest gaps inside controls → moderate gaps for related content → decisive gaps between regions.
- Layout primitives: `flex` / `grid` + `gap-*`. Do not use `space-x-*` / `space-y-*`.
- Start one fluid column; add columns only when content benefits; stack when a column stops being readable or operable.
- Direction: logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`). Physical left/right only for explicitly LTR content, visual coordinates, or non-reading-order geometry (document locally).
- Narrow: scroll filters/code before compressing labels; primary actions may go full width.

## Elevation & Depth

Flat by default. Tone + 1px border before shadow. Shadows are neutral and shallow.

| Token | Use |
| --- | --- |
| `shadow-xs/4` | Fields, cards, outlined controls |
| `shadow-xs/8` | Temporary hover reinforcement |
| `shadow-sm/4` | Filled actions, contained previews |
| `shadow-lg/4` | Overlays (menus, dialogs, sheets, tooltips) |

Approved alphas only (see `CODE_STYLE.md`): `/4` elevation, `/8`-`/16` feedback, `/24` outer focus ring, `/64` focus border / supporting content. No bare, tinted, status-tinted, or large diffuse shadows. Removing a shadow must not erase structure or focus.

## Shapes

`--radius` is the source of truth (default `0.5rem` / `md`).

- Controls: `rounded-lg` at medium/large, `rounded-md` at small.
- Cards and major surfaces: one step rounder than the control they contain.
- Pills are explicit variants only.
- `ButtonGroup` owns joined contours and duplicate-border removal.
- No unrelated corner values in reusable components.

## Components

Components own anatomy, variants, state, and focus. Layouts own placement and spacing between components. Use existing variants before restyling with `className`. `className` is for layout and task-specific composition, not a second design system.

**Buttons:** `primary` for the leading action; outline/ghost stay neutral. Focus: `outline-hidden` + `border-ring/64` + `ring-2 ring-ring/24`. Solid `bg-primary` uses `border-background` with the same ring. Preserve footprint across hover, focus, press, loading, invalid, and disabled (`opacity-64` only with blocked interaction).

**Cards / surfaces:** `bg-card` + matching foreground; border before elevation.

**Inputs / fields:** `Field` owns label ↔ control ↔ description ↔ error. Invalid state is semantic and not color-only.

**Overlays:** Own stacking and positioning; no local `z-index`. Require a title part. Anchored: `origin-(--transform-origin)`, 98% scale, fade, placement-aware travel. Centered: `origin-center`. Motion timings and reduced-motion rules live in the [design contract](public/design.md).

**Selection vs action:** `accent` for contextual hover/selection; `primary` for durable emphasis. Status colors encode real outcomes and include a non-color cue.

**Composition recipes** (docs preview, forms, collections, loading/empty/error): follow [public/design.md](public/design.md). Do not invent parallel APIs.

## Do's and Don'ts

**Do**

- Use semantic tokens and documented variants first.
- Keep one primary accent; build hierarchy with type, spacing, and surface roles.
- Preserve visible keyboard focus and stable geometry across states.
- Prefer native semantics and documented Ark parts; respect reduced motion and RTL.
- Update code + component docs + this file + the public contract when a shared rule changes (in that order).

**Don't**

- Hardcode palette classes, arbitrary radii, fonts, or overlay z-index in reusable UI.
- Add a second decorative accent hue or use glow/large shadows for hierarchy.
- Dim still-interactive controls; use `outline-none` on focus-owning controls; encode status in color alone.
- Compress labels to save a desktop layout; force physical direction for reading order.
- Dump brand-book prose or parallel token systems into components; keep this file a working spec.
