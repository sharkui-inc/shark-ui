# Styling rules (Shark UI)

Use when writing or updating Shark components, registry examples, and docs previews.

## Core rules

- Prefer semantic tokens (`text-muted-foreground`, `bg-destructive`, `border-input`) over raw palette classes.
- Prefer component `variant` / `size` props before ad-hoc class overrides.
- Use `flex flex-col gap-*` layouts instead of `space-x-*` / `space-y-*`.
- Use `size-*` for square elements when appropriate.
- Use `cn()` from `@/lib/utils` for conditional classes.
- Avoid redundant classes that the primitive already applies.
- Follow Tailwind CSS v4 conventions used in Shark’s theme (`@import "tailwindcss"`, `@theme inline`, etc. in manual installation docs).
- **Do not “fix” `--alpha(...)`** in theme snippets into `color-mix` or `rgba` if the project uses Tailwind v4 `--alpha()` helpers—match existing token style in docs.

## Shark-specific expectations

- Decorative icons: default to `aria-hidden="true"` when the text label already conveys meaning.
- Prefer `data-slot` selectors and `in-*` / `peer` patterns already used in registry components (e.g. dialog overlay peer pattern) over ad-hoc `group` when the component defines slots.
- Cancel/dismiss actions in modal footers typically use `Button` `variant="ghost"`; reserve `variant="outline"` for triggers that open overlays, not for primary dismiss actions (see dialog/sheet examples).
- For **registry thumbs and previews** in this repo, follow `AGENTS.md` (accordion fills, `border-input` on bordered controls, field row height `h-8`, etc.).

## Global layout (when relevant)

- For portaled overlays, many patterns assume a sensible stacking context at the app root; follow installation / layout guidance in docs.
- iOS Safari: some tour/dialog patterns expect `body` positioning—follow the component source when mirroring `Tour` or similar.

## Do / don’t

```tsx
// Do
<Button variant="outline" size="sm" />
<div className="flex flex-col gap-3" />
<Button>
  <PlusIcon aria-hidden className="size-4" />
  Add item
</Button>

// Don’t
<Button className="bg-blue-500 text-white" />
<div className="space-y-3" />
<Icon size={16} />  {/* prefer className size-* on SVG */}
```

## Check before finalizing

1. Semantic colors for state (destructive, muted, success where applicable)?
2. Duplicated layout already provided by the primitive?
3. Icon semantics and `aria-hidden` correct?
4. `data-slot` / compound part structure preserved when extending styles?
