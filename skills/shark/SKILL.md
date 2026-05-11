---
name: shark
description: Helps implement Shark UI components correctly. Use when building UIs with Shark primitives (buttons, dialogs, sheets, selects, forms, menus, tabs, inputs, toasts, sidebars, etc.), migrating from shadcn/Radix mental models to Shark/Ark UI, composing overlays and collection-based controls, or troubleshooting Shark component behavior. Covers imports, accessibility, Tailwind styling, registry examples, and common pitfalls.
compatibility: Requires Tailwind CSS v4 and @ark-ui/react. Designed for React projects using the Shark UI registry (shadcn-style workflow).
license: MIT
metadata:
  author: shark-ui
---

# Shark UI

Shark UI is a component registry built on [Ark UI](https://ark-ui.com) with a shadcn-like developer experience.

## What this skill is for

Use this skill to:

- pick the right Shark primitive(s) for a UI task
- write correct usage code (imports, composition, props) aligned to Ark UI patterns wrapped by Shark
- avoid assuming Radix/shadcn APIs without checking Shark docs and examples
- use registry examples as the primary “how it fits together” reference

## Source of truth

- Component docs: `content/docs/components/*.mdx` (and `content/docs/utilities/*.mdx` where applicable)
- Registry examples: `registry/react/examples/<component>/example-*.tsx`
- Implementations: `registry/react/components/<component>.tsx`
- Registry manifest: `registry.json` (authoritative list of published registry items)
- LLM-oriented routes: `app/(llms)/` and `lib/llms.ts`, `lib/llms-registry-examples.ts`
- Repository conventions: `AGENTS.md`

Public site (install URLs and browsing): see `config/site.ts` (`SITE_CONFIG.url`).

## Extended catalog (not necessarily in registry.json)

Additional components may exist under `registry/react/components/` and `content/docs/components/` before they appear in `registry.json`. Prefer the registry list in [`references/component-registry.md`](references/component-registry.md) for CLI install names; if a doc exists without a registry row yet, still follow that component’s MDX and local `registry/react/examples/` folder.

## Out of scope

- Next.js app routing, marketing pages, and non-registry app code unless the user explicitly asks.
- Editing `registry.json` generated payloads unless explicitly requested.

## Principles for agent output

1. Use existing Shark primitives and examples before inventing custom markup.
2. Prefer composition patterns shown in MDX and `registry/react/examples/`.
3. Follow Shark naming and exports from docs exactly; verify Ark prop names via the Ark doc link at the bottom of each component MDX when present.
4. Keep examples accessible and production-realistic.
5. Prefer concise code that matches docs and examples.
6. Assume Tailwind CSS v4 conventions used across Shark docs.

## Critical usage rules

Always apply before returning Shark code:

- Do not invent Shark or Ark APIs. Confirm exports and structure from `content/docs/components/<name>.mdx` and/or `registry/react/components/<name>.tsx`.
- For **combobox** (and similar list primitives): use `useFilter` + `useListCollection` from `@ark-ui/react`, pass a `collection` (not a raw `items` array where the docs use collection), call `filter(inputValue)` from `onInputValueChange`, and render `collection.items.map(...)` inside the list (see `AGENTS.md` and combobox examples).
- For **select/listbox** patterns that use collections: prefer `createListCollection` / `useListCollection` as shown in component examples.
- Preserve accessibility labels, roles, and invalid/error semantics (`Field`, `aria-invalid`, etc.).
- For **charts**: wire `ChartTooltip` with `content={(props) => <ChartTooltipContent {...props} />}`; do not stub tooltip state on `ChartTooltipContent`; for static previews use `accessibilityLayer={false}` on the chart root when appropriate (`AGENTS.md`).
- For **sidebar** previews in docs style: use `absolute inset-0 overflow-hidden`, `className="absolute"` on `Sidebar`, `h-full` on `SidebarProvider`, and native `overflow-y-auto` instead of `ScrollArea` when layout issues appear (`AGENTS.md`).

Rule references (read when the task touches these areas):

- `./references/rules/styling.md` — Tailwind tokens, icons, `data-slot`, layout
- `./references/rules/forms.md` — `Field` composition and validation signaling
- `./references/rules/composition.md` — Ark-based trigger/content hierarchies and documented **`asChild`** usage
- `./references/rules/migration.md` — shadcn/Radix assumptions vs Shark/Ark
- `./references/portal.md` — Ark `Portal` usage in Shark wrappers

## Component discovery

Consult [`references/component-registry.md`](references/component-registry.md) for the full list and links to per-component guides under `./references/primitives/<name>.md`.

## Usage workflow

1. Identify user intent (single primitive, overlay, form, collection control, etc.).
2. Open `references/component-registry.md` and locate the component row.
3. Read the component MDX for installation, anatomy, and API tables.
4. Open at least one `registry/react/examples/<component>/example-*.tsx` for a working composition.
5. When behavior is unclear, read `registry/react/components/<component>.tsx` for Ark imports and prop passthrough.
6. Self-check accessibility, controlled vs uncontrolled state, and SSR/lazy-mount defaults.

## Installation reference

See [`references/cli.md`](references/cli.md).

Quick CLI pattern:

```bash
npx shadcn@latest add @shark/<component>
```

Alternative URL pattern (see manual installation docs):

```bash
pnpm dlx shadcn@latest add https://shark.vini.one/r/<component>.json
```

## Import paths

- **Inside the shark-ui repository:** `@/registry/react/components/<component-name>` (never relative `../../components/`).
- **Consumer apps** after CLI/manual install: typically `@/components/ui/...` per installation docs.

## High-composition primitives

Read these guides first when touching overlays, collections, or app chrome:

- `./references/primitives/dialog.md`
- `./references/primitives/sheet.md`
- `./references/primitives/menu.md`
- `./references/primitives/context-menu.md`
- `./references/primitives/popover.md`
- `./references/primitives/select.md`
- `./references/primitives/combobox.md`
- `./references/primitives/field.md`
- `./references/primitives/sidebar.md`

## Output checklist

Before returning code:

- imports and props match Shark docs and/or source
- composition matches Ark patterns used in Shark (triggers, portals, collection objects)
- explicit `type` on buttons in forms; labels wired for controls
- combobox/select examples use collection + filter patterns when applicable
