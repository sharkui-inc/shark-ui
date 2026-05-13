# Shark Editable

## When to use

- Inline plain-text edits where the value should stay in layout (names, titles, handles, labels, table cells) and flip between a read preview and an input without navigating away.
- Compact settings or profile rows where commit/discard with submit/cancel triggers (or explicit save flows with `activationMode="none"` + controlled `edit`) fits the UX better than opening a separate dialog per field.
- Choosing an activation style on purpose: `focus` for keyboard-first forms, `click` / `dblclick` for discoverable pointers, `none` when only a dedicated Edit control should enter edit mode.
- Single-line or multiline plain text when a native `Input` or `Textarea` (via `EditableInput asChild`) is enough—no formatting toolbar or embedded media.

## When NOT to use

- Rich text or documents (bold, lists, links, embeds, images) -> use a rich-text editor or structured content tool, not `Editable`.
- Code or structured formats (HTML, Markdown, JSON) that need syntax highlighting, folding, or validation UI -> use a code editor or format-specific surface.
- Long-form authoring (multi-paragraph articles, comments with preview modes) where users expect a stable editor chrome, scroll, and drafts -> use a full editor or dedicated form section with normal fields.
- Whole-form validation flows where every field should submit together -> prefer `Field` + `Input`/`Textarea` (or a form library) rather than many isolated editables unless each slice truly saves on its own.
- Highly collaborative or real-time editing with cursors and operational transforms -> `Editable` is plain local state; use infrastructure built for collaboration.
- Irreversible or high-risk values where inline blur-to-save is too easy to trigger by mistake -> use an explicit modal / confirmation or a non-inline pattern.

## Install

```bash
npx shadcn@latest add @shark/editable
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { 
  Editable, 
  EditableArea, 
  EditableInput, 
  EditablePreview, 
  EditableControl, 
  EditableCancelTrigger, 
  EditableSubmitTrigger, 
  EditableEditTrigger 
} from "@/components/ui/editable";
``` 

## Minimal pattern

```tsx
<Editable value="Vinicius Vicentini">
  <EditableArea>
    <EditableInput asChild>
      <Input />
    </EditableInput>
    <EditablePreview />
  </EditableArea>
</Editable>
```

### Key patterns

Focus mode:

```tsx
<Editable activationMode="focus">
  {/* ... */}
</Editable>
```

Click mode:
```tsx
<Editable activationMode="click">
  {/* ... */}
</Editable>
```

Double-click mode:
```tsx
<Editable activationMode="dblclick">
  {/* ... */}
</Editable>
```

None mode:
```tsx
<Editable activationMode="none">
  {/* ... */}
  <EditableEditTrigger asChild>
    <Button aria-label="Edit" size="icon-md" variant="outline">
      <EditIcon />
    </Button>
  </EditableEditTrigger>
</Editable>
```

## Pitfalls

- `activationMode="none"` with no `edit` prop and no `EditableEditTrigger` → users never enter edit mode (stuck preview).
- Controlled vs uncontrolled: mixing `defaultValue` with `value`, or using `value` without `onValueChange`, causes resets or edits that never persist upstream.
- Anatomy: keep `EditableInput` + `EditablePreview` inside `EditableArea`; wire submit/cancel with `EditableControl` + triggers as in registry examples—wrong nesting breaks Ark behavior.
- `EditableInput asChild`: the slotted `Input` / `Textarea` must be the only focusable control; avoid wrapping an extra native `<input>` inside it.

## Registry example files

- [`example-activation-click.tsx`](/registry/react/examples/editable/example-activation-click.tsx)
- [`example-activation-focus.tsx`](/registry/react/examples/editable/example-activation-focus.tsx)
- [`example-activation-none.tsx`](/registry/react/examples/editable/example-activation-none.tsx)
- [`example-controlled.tsx`](/registry/react/examples/editable/example-controlled.tsx)
- [`example-dblclick.tsx`](/registry/react/examples/editable/example-dblclick.tsx)
- [`example-default.tsx`](/registry/react/examples/editable/example-default.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/editable/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/editable/example-orientation-vertical.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/editable/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/editable/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/editable/example-size-sm.tsx)
- [`example-with-textarea.tsx`](/registry/react/examples/editable/example-with-textarea.tsx)
- [`example-without-controls.tsx`](/registry/react/examples/editable/example-without-controls.tsx)
