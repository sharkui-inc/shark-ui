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
- Prefer built-in variants and semantic tokens before restyling with `className`. Use `className` for layout.
- Prefer `flex` or `grid` with `gap-*` over `space-x-*` / `space-y-*`. Use `size-*` for squares and icons. Use `truncate`, not the expanded utility sequence.
- Prefer `data-slot` and existing `in-*` / `peer` patterns when extending registry styles.
- Overlay primitives own stacking. Do not add `z-index` to dialogs, menus, popovers, tooltips, or similar surfaces.
- Import named Lucide icons. Size them with Tailwind classes, never the numeric `size` prop. Mark decorative icons `aria-hidden="true"`; leave semantic icons exposed unless equivalent text is present.
- Use logical utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) instead of physical direction. Use `slide-*-from-start|end` animations and propagate `dir` from `useLocale` when applicable.

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
