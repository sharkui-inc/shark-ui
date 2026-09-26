# Shark UI Design Contract

Use this contract before generating or refining a Shark UI interface. It is the public, operational layer of the [design handbook](https://github.com/sharkui-inc/shark-ui/blob/main/DESIGN.md): follow these rules first, then load only the linked component documentation and examples needed for the task.

## Product model

- Shark UI is a copy-and-own React component registry built with Ark UI and Tailwind CSS v4.
- Add or copy components through the documented registry or CLI. Do not substitute Radix UI or Base UI APIs.
- Read the relevant component Markdown page and one shipped example before composing a component.
- Treat component APIs, theme definitions, and generated output as their own sources of truth. This contract defines visual and interaction decisions; it does not replace a component's documented API.

## Decision order

Choose the smallest correct building block.

1. Reuse an existing documented component and variant.
2. Compose documented Shark primitives for a task-oriented interface.
3. Propose an extension only when the repeated behavior cannot be expressed without a misleading API, duplicated accessibility work, or repeated local styling.

Do not create a parallel token scale, component API, z-index layer, or interaction grammar. An extension proposal must describe the user task, primitives considered, responsive behavior, accessibility behavior, and one representative composition.

## Non-negotiable rules

- Build reusable UI from semantic tokens and existing variants before adding custom classes.
- Use one configured `primary` accent for action and durable emphasis. Keep structural and contextual surfaces neutral.
- Use semantic HTML and documented component parts. Triggers that merge with a host use `asChild`; overlays include a title; collection controls use Ark collections.
- Preserve visible keyboard focus, stable layout across states, logical direction utilities, and reduced-motion behavior.
- Use borders and tonal separation before shallow neutral elevation. Do not use large diffuse shadows, glow, or decoration as hierarchy.
- Treat loading, empty, invalid, and error states as first-class compositions; status must not rely only on color.

## Tokens and surface roles

Use semantic Tailwind utilities such as `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `border-input`, and `ring-ring`. Do not choose raw palette classes when a surface, text, border, state, or feedback token expresses the role.

| Role | Use | Do not use it for |
| --- | --- | --- |
| `background` / `foreground` | Canvas and highest-emphasis content. | A component-specific decorative fill. |
| `card`, `popover`, `sidebar`, `code` | Bounded surface with its matching foreground token. | A substitute for a primary action. |
| `muted` | Neutral `/4` recessive content. | A second primary color. |
| `accent`, `secondary`, and `sidebar-accent` | Neutral `/8` interactive or supporting fill; `secondary` uses `/16` on hover. | A semantic success, warning, or destructive state. |
| `primary` | Primary actions and persistent emphasis. | General decoration. |
| Feedback roles | Meaningful success, warning, info, or destructive feedback. | Decorative variation. |

Pair card, popover, sidebar, code, and feedback surfaces with their matching foreground tokens. Validate the final composited contrast in light and dark modes. Solid semantic controls use opaque `primary-hover`, `secondary-hover`, or `destructive-hover` values rather than translucent hover fills over an unknown parent.

## Typography and geometry

- Use configured `font-sans` and `font-heading` roles. Hanken Grotesk is the interface and display family; JetBrains Mono is for code, commands, file paths, and technical metadata.
- Establish hierarchy through the configured type scale, weight, leading, and restrained tracking. Do not introduce arbitrary type sizes or a one-off font family.
- Treat `--radius` as the source of truth. Use its derived scale: controls are `rounded-lg` at medium and large sizes, `rounded-md` at small sizes, and cards are one step rounder. Pills are explicit variants.
- Use `flex` or `grid` with `gap-*`; do not use `space-x-*` or `space-y-*` for component layout.
- Use the tightest spacing inside controls, a moderate gap inside a related component, and the widest gap between independent regions.

### Styling boundaries

Use the existing variants and semantic utilities before adding a local class. A local class should express layout or a task-specific relationship, not silently redefine the design system.

- Keep classes grouped by purpose: variables, layout, spacing, surface, typography, chrome, interaction, transform, transition, state, descendants, then reduced motion.
- Use `cn()` for conditional or multi-group class lists; keep `className` last.
- Prefer `truncate` to an expanded overflow utility sequence, and `size-*` for square controls or icons.
- Use `data-slot` and existing `in-*` or `peer` patterns when extending registry styles.
- Do not add manual `dark:` palette pairs where semantic tokens cover both modes.
- Do not use arbitrary colors, corner radii, font families, overlay z-index values, or generic visual patterns when Shark tokens, variants, and primitives cover the case.

### Content density

Keep interface copy direct and calm. Headings identify the region or task; labels identify their control; supporting text explains a choice, constraint, or recovery path.

- Prefer a compact label and supporting description over a dense paragraph inside a control region.
- Do not use all-caps as a substitute for hierarchy. Use the configured type roles and layout instead.
- Reserve mono styling for technical strings, not generic metadata or visual contrast.
- Let code, paths, commands, and keyboard-oriented data retain their natural overflow behavior where needed.

## Borders, elevation, and opacity

Structure comes from a surface step and a one-pixel border before shadow.

| Elevation | Approved use |
| --- | --- |
| `shadow-xs/4` | Inputs, cards, and outlined controls needing structural separation. |
| `shadow-xs/8` | Temporary hover reinforcement. |
| `shadow-sm/4` | Filled actions and contained previews. |
| `shadow-lg/4` | Menus, dialogs, sheets, tooltips, and other overlays. |

Do not use bare, tinted, status-tinted, or large shadows. Use only the approved alpha steps: `0`, `4`, `8`, `16`, `24`, `32`, `48`, `64`, `80`, `96`, and `100`. `/4` is neutral elevation; `/8` and `/16` are subtle contextual feedback; `/24` supports the outer focus ring; `/64` supplies the contrast-bearing focus border and validated supporting content.

## Interaction and accessibility

### Interactive controls

- Use a semantic interactive element and the component's documented parts.
- A focus-owning control uses `outline-hidden`, `border-ring/64`, `ring-2`, and `ring-ring/24`.
- Keep `border border-transparent` on a control without a structural border so focus does not move its layout. Fields retain `border-input` until focused.
- A solid `bg-primary` control uses `border-background` with `ring-2 ring-ring/24`, keeping focus visible inside the fill.
- Filled default, destructive, and secondary actions use `shadow-sm/4`; outline controls match fields with `shadow-xs/4`; ghost and link controls stay flat.
- Disabled controls combine their semantic disabled state, blocked interaction, and `opacity-64`. Do not dim a control that remains interactive.

### Semantics and keyboard behavior

- Decorative icons are `aria-hidden="true"`; semantic icons remain exposed unless equivalent text is present.
- Overlays require their title part; use `sr-only` only when the title is intentionally hidden visually.
- Use buttons for actions and links for navigation. Do not simulate these roles with non-semantic elements.
- A keyboard-only user must be able to locate and operate every control without focus loss or layout shift.
- Do not rely on color alone for errors, selections, or status. Include text, iconography, state, or another perceivable cue.

### Text, zoom, and feedback

- Use concise, direct labels and descriptions. Error copy says what happened and the next useful recovery action.
- Preserve meaningful content at browser text zoom and narrow widths.
- Keep labels, descriptions, errors, and actions associated through documented field composition; do not manually recreate the relationships that `Field` owns.

## Responsive and RTL behavior

Start with one fluid column. Add columns only when content benefits from them, then stack when a region would become unreadable or hard to operate.

- Use `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, and direction-aware slide utilities.
- Do not use physical left/right utilities for reading-order layout. A physical exception is limited to explicitly LTR content, visual coordinates, or geometry unrelated to reading direction, and must be documented locally.
- Let horizontal categories, filters, and code scroll before shrinking labels. Make a narrow primary action full width when that improves reachability.
- Preserve touch targets, reading order, and critical actions in compact layouts.

## Motion

Motion is tactile, contained, and local to the owning component.

| Context | Motion |
| --- | --- |
| Button press | `duration-[120ms] ease-out`, with a 98% press scale when motion is allowed. |
| Controls and anchored overlays | `duration-150 ease-out`. |
| Dialogs and sheets | `duration-200 ease-out`. |
| Live Ark geometry | `duration-150 ease-in-out` only for documented geometry exceptions. |
| Drawer | Ark swipe variables; panel `duration-300 ease-out`; backdrop `duration-[450ms] ease-out`. |

Anchored overlays use `origin-(--transform-origin)`, 98% scale, fade, and placement-aware travel. Centered dialogs and coordinate-positioned panels use `origin-center`. Compose all motion from local Tailwind and `tw-animate-css` utilities.

Do not add interface keyframes, shared duration tokens, or shared easing curves to `styles/globals.css`. Do not use `transition-all`, `ease-in`, `ease-linear`, `scale(0)`, or arbitrary easing functions. Under reduced motion, keep a short fade and remove travel, scale, rotation, and blur. Gate hover transforms behind fine-pointer and hover capability.

## Component ownership and composition

Components own their interaction semantics, anatomy, state behavior, and visual variants. Layouts own placement, width, and spacing between components. Keep that boundary intact.

- Use a component's documented variant before changing its visual identity through `className`.
- Use `className` for layout and a task-specific composition, not to recreate a component's state, focus, radius, or elevation contract.
- Keep compound parts in their documented hierarchy. For example, a `TabsTrigger` belongs in `TabsList`; headers, content, and footers stay distinct card parts.
- Let overlay primitives own stacking and positioning. Do not introduce local z-index values for dialogs, menus, popovers, tooltips, sheets, or toasts.
- Keep an icon's size in Tailwind classes. Use `size-*` for square controls and icons.
- Preserve component-owned CSS variables and Ark data attributes when composing stateful primitives.

When a layout has a repeated local arrangement, extract a task-level composition only if it can remain a thin wrapper around documented primitives. Do not turn a page-specific layout into a generic component merely to avoid repeated markup.

### Selection, action, and feedback

Use `accent` for contextual hover and selection; use `primary` for the one action or durable emphasis that should lead the current region. Status colors communicate a real outcome, never visual variety.

- A selected navigation item can use `bg-accent text-foreground`; it does not need primary fill.
- A destructive action uses the destructive semantic pair and confirms irreversible consequences in its surrounding content.
- A success, warning, or info state includes a meaningful label or explanatory copy in addition to color.
- An action label describes the result of activation. Prefer a verb and object when it materially improves clarity.

## Composition recipes

Recipes describe task-level structure. Start with documented components and their examples; do not treat these as new component APIs.

### Documentation page with live preview and code

**Structure**

1. Use a readable content column with compact title, supporting copy, and task-relevant controls.
2. Place the live interface in a bounded preview surface; use a separate code region for implementation details.
3. Use `bg-muted` for preview shells. Decorative thumbnails are monochrome and use only approved neutral tokens.

**Responsive behavior**

- Stack heading, controls, preview, and code on narrow screens.
- Let code and horizontal controls scroll rather than compressing labels.
- Keep the preview's primary interaction reachable without a desktop-only layout.

**States**

- Loading reserves the preview's footprint.
- Empty explains the missing prerequisite and offers the next useful action.
- Error states preserve surrounding context, state the failure plainly, and expose recovery.

**Choose components**

- Reuse existing Card, tabs, code, and navigation primitives first.
- Compose layout with `grid` or `flex` and `gap-*`; do not add decorative wrappers simply to imitate a preview shell.

### Form with validation and actions

**Structure**

1. Compose each field through its documented hierarchy: label, control, description, and error feedback.
2. Use `Field` to own control relationships and semantic invalid state.
3. Group related inputs with explicit gaps and place primary and secondary actions in a stable action region.

**Responsive behavior**

- Stack groups and action controls when width is constrained.
- Make the primary action full width when that improves reachability; preserve the secondary action and cancel path.

**States**

- Loading preserves control footprints and labels while communicating progress.
- Invalid state supplies usable recovery guidance and a perceivable cue beyond color.
- Submission errors preserve entered values and explain whether retry or correction is appropriate.

**Choose components**

- Use the documented Field and input primitives before composing custom label/control relationships.
- Reuse Button variants for actions; do not make a badge or arbitrary container behave as a submit control.

### Collection with filters and navigation

**Structure**

1. Place collection context, filters, and relevant actions before the result region.
2. Use documented Ark collection components; keep selection contextual with neutral accent surfaces.
3. Use primary only for durable actions, not each selected item or filter.

**Responsive behavior**

- Allow categories and filters to scroll horizontally before labels are squeezed.
- Collapse a multi-column result region only when each remaining column stays readable and operable.

**States**

- Loading uses a stable skeleton or reserved collection region.
- Empty states name the active filter or absence and offer the next useful action.
- Error states preserve filters and user context, describe the failure, and offer retry without discarding input.

**Choose components**

- Reuse documented collection, tabs, navigation, and button primitives.
- Compose a toolbar only after checking whether an existing component or pattern already owns the behavior.

## State recipes

### Loading

- Reserve the final component or region footprint so loading does not shift content.
- Use skeletons only when they resemble the information structure being loaded; otherwise use direct progress copy.
- Keep already available controls and context usable when the operation does not block them.
- Do not replace a whole page with a spinner when contextual content can remain visible.
- Announce long-running changes through the appropriate semantic status behavior supplied by the component or pattern.

### Empty

- State what is absent or why the current result is empty.
- Preserve the active filter, search term, or parent context that explains the result.
- Offer one next useful action when one is available: clear filters, create the first item, or change scope.
- Do not use decorative imagery as a substitute for explanation or recovery.

### Error

- State the failed operation in direct language and keep user-entered input whenever recovery does not require clearing it.
- Offer retry only when retry is meaningful; otherwise identify the corrective action or support path.
- Preserve the layout footprint and surrounding context so the user can understand what failed.
- Use destructive feedback roles with text and accessible semantics, never color alone.

### Disabled and unavailable

- Disable only when the action truly cannot be performed; explain the prerequisite nearby when it is not evident.
- Keep disabled controls visibly unavailable with semantic state, blocked interaction, and `opacity-64`.
- Prefer validation or guided selection when the user can complete the prerequisite in the same context.

## Delivery and extension review

When changing a reusable component or adding a new composition, review the decision in this order:

1. Confirm the user task and the existing component or pattern that most closely matches it.
2. Confirm that the proposed layout uses semantic tokens, documented anatomy, and the shared radius, elevation, focus, and motion rules.
3. Check narrow-width, RTL, keyboard, reduced-motion, loading, empty, invalid, and error behavior before treating the composition as reusable.
4. Document only the new behavior or decision that is not already owned by the component API, token system, or existing example.

Escalate an extension when it needs a new public API, a new semantic token, a new overlay layer, or a new interaction model. Include the task evidence and representative composition; do not ship an unreviewed workaround as a generic primitive.

## Review checklist

Before considering an interface complete, verify:

- Semantic tokens, matching foreground/surface pairs, and one configured primary accent are used.
- Existing component variants and documented composition were selected before custom styling.
- Visible focus, keyboard operation, semantic elements, overlay titles, and non-color status cues are present.
- Layout stacks or scrolls appropriately on narrow screens and uses logical direction utilities.
- Loading, empty, error, invalid, and disabled states preserve context and useful recovery actions.
- Motion is local, placement-aware where anchored, and reduced-motion safe.
- Component-owned anatomy, state behavior, and overlay stacking have not been recreated locally.
- The chosen composition remains a thin arrangement of documented primitives rather than a parallel component API.

## Detailed references

- [Design handbook](https://github.com/sharkui-inc/shark-ui/blob/main/DESIGN.md)
- [Foundations](https://shark-ui.com/llms/foundations.txt)
- [Styling](https://shark-ui.com/docs/styling.md)
- [Colors](https://shark-ui.com/docs/colors.md)
- [Component documentation](https://shark-ui.com/llms/components.txt)

When this contract and a component's current documentation appear to differ, follow the component documentation and report the mismatch. Use the handbook to understand the intended design decision, not to infer an undocumented component API.
