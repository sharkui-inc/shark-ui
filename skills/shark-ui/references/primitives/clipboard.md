# Shark Clipboard

## When to use

- Copying a fixed string (URL, invite code, API token, share link) into the system clipboard with clear feedback.
- Read-only value display next to a dedicated copy control (`ClipboardInput` + trigger + indicator).

## When NOT to use

- If the action should save a file to disk instead of copying text -> use DownloadTrigger (or a file link) instead.
- If the user is selecting and copying arbitrary text inside an editor -> rely on native selection / editor behavior instead of this primitive.
- If the secret must never appear in the DOM as plain text -> avoid rendering the value in `ClipboardInput` / `ClipboardValue`; use a server-mediated flow or masked UI.

## Install

```bash
npx shadcn@latest add @shark/clipboard
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardTrigger,
  ClipboardValue,
} from "@/components/ui/clipboard"
```

## Minimal pattern

```tsx
<Clipboard value="https://example.com/share/abc123">
  <ClipboardInput />
  <ClipboardTrigger asChild>
    <Button size="icon-md">
      <ClipboardIndicator />
    </Button>
  </ClipboardTrigger>
</Clipboard>
```

### Key patterns

Read-only value:

```tsx
<Clipboard value="https://example.com">
  <ClipboardValue />
  <ClipboardTrigger asChild>
    <Button size="icon-md">
      <ClipboardIndicator />
    </Button>
  </ClipboardTrigger>
</Clipboard>
```

Icon-only copy:
```tsx
<Clipboard value="https://example.com">
  <ClipboardTrigger asChild>
    <Button size="icon-md">
      <ClipboardIndicator />
    </Button>
  </ClipboardTrigger>
</Clipboard>
```

## Common pitfalls

- Omitting `value` on `Clipboard` so nothing is written to the clipboard.
- Nesting triggers without `asChild` where a single focusable control is required (duplicate buttons / focus traps).

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/clipboard/example-controlled.tsx)
- [`example-custom-timeout.tsx`](/registry/react/examples/clipboard/example-custom-timeout.tsx)
- [`example-default.tsx`](/registry/react/examples/clipboard/example-default.tsx)
- [`example-different-icon.tsx`](/registry/react/examples/clipboard/example-different-icon.tsx)
- [`example-icon-only.tsx`](/registry/react/examples/clipboard/example-icon-only.tsx)
- [`example-value-text.tsx`](/registry/react/examples/clipboard/example-value-text.tsx)
