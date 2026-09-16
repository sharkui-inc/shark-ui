---
name: Shark UI
description: A compact, themeable registry interface built from quiet semantic surfaces and inspectable product UI.
---

# Shark UI design handbook

Shark UI is a copy-and-own React registry built with Ark UI and Tailwind CSS v4. This handbook explains the intent behind its visual and interaction system. It is the canonical human reference; [the public design contract](public/design.md) is the shorter, prescriptive version for AI-assisted UI work.

## Purpose and principles

### The living workbench

Shark UI should feel like a well-kept technical workbench: quiet enough for the interface under examination to lead, precise enough that controls feel intentional. It uses compact geometry, semantic surface layers, restrained borders, and real product compositions instead of ornamental framing.

### Design for customization

Consumers can change the neutral family, primary accent, base radius, and color mode without changing component grammar. Hierarchy comes from typography, spacing, surface roles, and state—not from accumulating colors or effects.

### Rules at a glance

| Principle | Do | Avoid | Review criterion |
| --- | --- | --- | --- |
| Semantic roles | Use semantic surface, foreground, border, and feedback tokens. | Bind reusable UI to raw palette classes. | Every reusable color expresses a semantic role. |
| One accent | Reserve configured `primary` for action and durable emphasis. | Add a second decorative accent hue. | Surrounding product surfaces remain neutral. |
| Quiet structure | Establish hierarchy with layout, a surface step, and a border. | Use glow or large shadows as the primary hierarchy device. | Elevation is no stronger than the documented role requires. |
| Stable interaction | Preserve footprint and visible focus across states. | Let focus, loading, or selection shift nearby layout. | Keyboard focus is visible and geometry stays stable. |
| Adaptable composition | Let content earn columns and use logical direction. | Compress labels to preserve a desktop arrangement. | The narrow layout remains readable, operable, and RTL-safe. |

## Source of truth and decision order

### What owns each decision

| Need | Source of truth |
| --- | --- |
| Theme values, semantic colors, radius, and mode | `lib/theme/catalog.ts` and generated theme output |
| Component API, anatomy, and behavior | Component Markdown page and `registry/react/components/` |
| Shipped composition examples | `registry/react/examples/` |
| Styling and implementation conventions | `CODE_STYLE.md` and [Styling](https://shark-ui.com/docs/styling.md) |
| Intent, cross-component rules, and exception threshold | This handbook |

Do not hand-edit generated theme output or registry JSON. This handbook names roles and relationships; it does not replace their generated values or component documentation.

### Choose before creating

1. Reuse the documented component and its existing variants when it fits the user task.
2. Compose documented Shark primitives when no single component represents the composition.
3. Propose an extension only when the behavior or repeated composition cannot be expressed by those primitives without a misleading API, duplicated accessibility work, or repeated local styling.

An extension proposal must name the user task it serves, the primitives considered, the accessibility behavior it owns, responsive behavior, and at least one representative composition. It must not introduce a parallel token scale, arbitrary z-index layer, or alternate interaction grammar.

## Foundations

### Color and surfaces

The palette is role-driven and themeable. Background, foreground, surface, interaction, and feedback roles remain stable while the neutral family and primary hue change.

| Role | Use |
| --- | --- |
| Canvas and foreground | Page foundation and highest-emphasis content. |
| Card, popover, sidebar, and code | Bounded surfaces paired with their matching foreground token. |
| Muted and accent | Neutral `/4` contextual layers for recessive content, hover, and quiet selection. |
| Secondary and secondary hover | Neutral `/8` supporting fill and `/16` hover step. |
| Primary and destructive | Semantic action or feedback, never decoration. |
| Border and input | Structural strokes derived from the active neutral family. |

**Do:** use `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-input`, and equivalent semantic roles. Pair every bounded surface with its matching foreground role.

**Avoid:** raw palette classes in reusable components, a translucent solid hover fill, or a foreground token from a different surface family.

**Review:** validate contrast after compositing on the actual surface in light and dark mode. A configured primary remains the only chromatic action accent.

### Typography

Hanken Grotesk is the display and interface family. JetBrains Mono is reserved for code, commands, paths, and technical metadata. Hierarchy comes from the configured scale, weight, leading, and restrained tracking.

| Role | Intended use |
| --- | --- |
| Display | Page-level statements. |
| Editorial display | Persuasive catalog hero only. |
| Headline and title | Major content units, cards, dialogs, and bounded regions. |
| Body and label | Explanation, controls, field labels, navigation, and metadata. |
| Mono | Executable, file-oriented, or keyboard-oriented strings. |

**Do:** use the configured `font-sans` and `font-heading` roles; keep mono semantic.

**Avoid:** an isolated display family, monospace as decoration, or arbitrary type sizes to repair hierarchy.

**Review:** each text style communicates its information role before visual emphasis; supporting text remains readable at browser zoom.

### Spacing, layout, and shape

The default page container is centered, capped at 1400px, and uses 1rem inline padding. Major bands use 2.5–4rem vertical padding. Controls and metadata use the tightest rhythm; related content has a moderate gap; independent regions separate decisively.

Rectangular controls use `rounded-lg` at medium and large sizes and `rounded-md` at small sizes. Cards and major bounded surfaces are one radius step rounder. A pill is always an explicit variant. ButtonGroup owns joined contours and duplicate-border removal.

**Do:** use `flex` or `grid` with `gap-*`, `--radius` and its derived scale, and logical start/end utilities.

**Avoid:** unrelated corner values, `space-x-*`/`space-y-*`, or physical direction for reading-order layout.

**Review:** spacing follows the density ladder, and changing the configured base radius preserves proportional relationships.

### Border, elevation, and opacity

The system is flat by default. Tone and a one-pixel border establish containment before shadow. Elevation remains neutral and shallow.

| Role | Use |
| --- | --- |
| `shadow-xs/4` | Structural separation for fields, cards, and outlined controls. |
| `shadow-xs/8` | Temporary hover reinforcement only. |
| `shadow-sm/4` | Filled actions and contained preview surfaces. |
| `shadow-lg/4` | Menus, dialogs, sheets, tooltips, and other overlays. |

Use only the approved alpha scale in `CODE_STYLE.md`. `/4` is neutral elevation; `/8` and `/16` are contextual feedback; `/24` supports decoration and outer focus reinforcement; `/64` carries supporting content or the contrast-bearing focus border.

**Do:** pair a shallow shadow with its structural border when containment needs reinforcement.

**Avoid:** bare, tinted, status-tinted, or large diffuse shadows.

**Review:** removing the shadow should not erase a component's structural boundary or keyboard focus.

## Interaction, responsiveness, and motion

### States and focus

Interactive controls preserve their footprint in hover, focus, pressed, loading, invalid, and disabled states. Solid primary controls use opaque `primary-hover`; secondary and destructive controls use their semantic opaque hover tokens. Disabled controls expose their unavailable state, block interaction, and use `opacity-64` only with the corresponding semantic state.

Every focus-owning control uses `outline-hidden`, a contrast-bearing `border-ring/64`, and `ring-2 ring-ring/24`. Keep a transparent base border on borderless controls so focus does not shift layout. A solid `bg-primary` control instead uses `border-background` with the same outer ring.

**Do:** use semantic elements, visible keyboard focus, documented parts, and accessible names.

**Avoid:** `outline-none`, focus styles on decorative elements, or an opacity-only disabled treatment on something still interactive.

**Review:** a keyboard-only user can locate and operate every interactive control without layout movement.

### Responsive and bidirectional layout

Start with one fluid column. Add columns only when content benefits from them; stack when a column no longer remains readable or operable. Horizontal category and filter controls may scroll before labels are compressed. Narrow primary actions may become full width.

Use `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, directional slide utilities, and propagated `dir`. Physical direction is allowed only for explicitly LTR content, visual coordinates, or geometry unrelated to reading order, with the exception documented locally.

**Do:** preserve touch targets, reading order, and reachability at narrow widths.

**Avoid:** shrinking labels, preserving desktop grids by force, or left/right positional utilities for text direction.

**Review:** the composition works in narrow layouts and RTL without local overrides or hidden essential actions.

### Motion

Motion is tactile, contained, and local to the owning component. Press uses `duration-[120ms] ease-out`; controls and anchored overlays use `duration-150 ease-out`; dialogs and sheets use `duration-200 ease-out`. Ark geometry exceptions use `duration-150 ease-in-out` only when the primitive supplies live geometry.

Anchored overlays use `origin-(--transform-origin)`, a 98% scale, fade, and placement-aware travel. Centered dialogs and coordinate-positioned panels use `origin-center`. Drawer is the sole gesture exception: its panel follows Ark swipe variables, settles at `duration-300 ease-out`, and its backdrop fades independently at `duration-[450ms] ease-out`.

**Do:** compose motion from local `tw-animate-css` utilities and keep a brief fade under reduced motion while removing travel, scale, rotation, and blur.

**Avoid:** shared interface keyframes or easing tokens in `styles/globals.css`, `transition-all`, `ease-in`, `ease-linear`, or ungated hover transforms.

**Review:** the interaction remains understandable with `prefers-reduced-motion`, and an overlay's origin matches its placement.

## Composition patterns

Patterns solve recurring user tasks; components supply the primitives. Start from the relevant component documentation and shipped example before composing.

### Documentation and preview surfaces

Use a readable content column with a compact heading, supporting copy, and a bounded preview or code region. Preview shells use `bg-muted`; thumbnails remain decorative, monochrome, and limited to the approved surface tokens. The live interface—not ornamental imagery—carries the visual material.

On narrow screens, stack heading, controls, preview, and code. Preserve overflow for code and horizontal controls rather than compressing labels. Loading reserves the preview footprint; an empty preview explains the missing prerequisite; a failed preview gives a direct recovery action.

### Forms

Compose fields in their documented hierarchy: label, control, description, and error feedback. Let `Field` own its relationship to the control; invalid state is semantic and visible. Group related fields with explicit gaps; place primary and secondary actions in a stable, reachable action region.

On narrow screens, stack field groups and make primary actions full width when needed. Loading retains labels and control footprints, invalid state supplies usable recovery guidance, and errors never rely on color alone.

### Collections and navigation

Place collection context, filters, and actions before the result region. Reuse documented collection primitives; selection is contextual through neutral accent surfaces while durable action emphasis uses primary. Filters or categories can scroll horizontally on narrow widths.

Represent loading with a stable skeleton or reserved collection region. Empty states explain the current filter or absence and offer the next useful action. Error states preserve context, state what failed, and offer retry or recovery without discarding user input.

## Accessibility as a foundation

Accessibility is evaluated in each rule and pattern rather than appended at the end of delivery.

- Use native semantic elements first; use the documented Ark parts and collection APIs when a composite widget is required.
- Preserve keyboard access, visible focus, meaningful labels, overlay titles, and logical reading order.
- Validate color contrast on composited backgrounds and do not encode status in color alone.
- Keep content functional at text zoom and narrow widths; use concise, direct copy with enough context to recover from an error.
- Respect reduced motion and gate hover transforms behind fine-pointer and hover capability.

## Maintaining the system

When a rule changes, update the implementation source of truth first, then its component documentation or example, this handbook, and finally the public contract if the rule affects UI generation. Prefer a focused rule and an example over a broad aesthetic statement.

Questions or proposals should identify the user task, existing primitive or pattern, evidence for the exception, and the accessibility and responsive behavior being preserved.
