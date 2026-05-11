# Shark Sidebar

## When to use

- Application shells with persistent navigation, rail collapse/expand, and grouped sections (`SidebarProvider` + `Sidebar` tree).
- Patterns described in [`../../content/docs/components/sidebar.mdx`](../../content/docs/components/sidebar.mdx) (anatomy, keyboard shortcuts, composition with `Sheet` / `Tooltip`).

## When not to use

- One-off static nav bars without provider state—simpler layout components may suffice.
- Marketing footers / simple link rows—use layout primitives or MDX-specific guidance.

## Install

```bash
npx shadcn@latest add @shark/sidebar
```

Install registry dependencies listed in MDX first (**Button**, **Input**, **Scroll Area**, **Separator**, **Sheet**, **Skeleton**, **Tooltip**).

## Source of truth

| Kind | Path |
|------|------|
| Docs | [`../../content/docs/components/sidebar.mdx`](../../content/docs/components/sidebar.mdx) |
| Block examples | [`../../registry/react/blocks/sidebar/`](../../registry/react/blocks/sidebar/) |
| Source | [`../../registry/react/components/sidebar.tsx`](../../registry/react/components/sidebar.tsx) |

## Doc / preview conventions (`AGENTS.md`)

When reproducing **docs-style previews** for sidebar:

- Wrap preview: `absolute inset-0 overflow-hidden`.
- Pass `className="absolute"` to `Sidebar`.
- Use `h-full` on `SidebarProvider` to avoid overflow bleed.
- Pass `showBorders={false}` to `ComponentPreview` when applicable.
- Prefer native **`overflow-y-auto`** instead of `ScrollArea` when scroll layout fights the preview.

## Composition sketch

Follow the MDX anatomy:

```text
SidebarProvider
├── Sidebar
│   ├── SidebarHeader
│   ├── SidebarContent
│   │   └── SidebarGroup …
│   └── SidebarFooter
├── SidebarTrigger
└── …
```

Use block sources as working references: [`../../registry/react/blocks/sidebar/`](../../registry/react/blocks/sidebar/).

## Pitfalls

- Omitting `SidebarProvider` context—many subcomponents expect provider state.
- Mixing shadcn-only prop names without verifying Shark’s sidebar source (large surface area—diff MDX carefully).

## Further reading

- [`../../content/docs/components/sidebar.mdx`](../../content/docs/components/sidebar.mdx)
- [`../../registry/react/components/sidebar.tsx`](../../registry/react/components/sidebar.tsx)
