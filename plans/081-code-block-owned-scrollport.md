# Plan 081: Give CodeBlock one owned scrollport

> **Executor instructions**: Work only on the files in scope. Do not create or
> switch branches, use `git stash`, commit, push, run tests, typecheck, a build,
> or a browser unless the operator explicitly authorizes the named action.

> **Drift check (run first)**: `git diff --stat 505ae60..HEAD -- registry/react/components/code-block.tsx content/docs/ai-elements/code-block.mdx registry/react/examples/code-block registry/react/blocks/ai/ai-chat-01/components/ai-chat.tsx registry/react/templates/ai/_ai-ide-01/components/ide-workspace.tsx`

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `505ae60`, 2026-09-07

## Why this matters

`CodeBlock` has `overflow-hidden`, while `CodeBlockContent` has a `min-w-max`
`<pre>`. The public documentation currently makes consumers supply an external
`ScrollArea`, but shipped AI Chat and IDE compositions do not, so long or tall
code can be clipped. The decided public API is that `CodeBlockContent` owns the
single scrollport and the consumer constrains the whole panel with `h-*` or
`max-h-*` on `CodeBlock`.

## Current state

- `registry/react/components/code-block.tsx` exports the compound parts.
  `CodeBlock` is a `flex flex-col overflow-hidden` root; `CodeBlockContent`
  currently renders only `<pre className="min-w-max py-3 ...">`.
- `registry/react/components/scroll-area.tsx` is the only scroll primitive to
  use. Its root needs a finite ancestor height to create a vertical viewport.
- `content/docs/ai-elements/code-block.mdx` documents an external
  `ScrollArea`, including a private descendant selector for `max-h-80`.
- `registry/react/blocks/ai/ai-chat-01/components/ai-chat.tsx` and
  `registry/react/templates/ai/_ai-ide-01/components/ide-workspace.tsx`
  render `CodeBlockContent` directly.
- `DESIGN.md` requires semantic tokens and RTL-safe layout. Code is technical
  LTR content; match `DiffContent`, which sets `dir="ltr"`.

## Scope

**In scope**:

- `registry/react/components/code-block.tsx`
- `content/docs/ai-elements/code-block.mdx`
- `registry/react/examples/code-block/*.tsx`
- `registry/react/blocks/ai/ai-chat-01/components/ai-chat.tsx`
- `registry/react/templates/ai/_ai-ide-01/components/ide-workspace.tsx`

**Out of scope**: `scroll-area.tsx`, `diff.tsx`, generated `public/r`, Shiki
tokenization, and unrelated AI examples.

## Steps

1. Import `ScrollArea` in `code-block.tsx`. Make `CodeBlockContent` render one
   flexible, minimum-height-zero `ScrollArea` around its existing `<pre>`.
   Preserve `className` as the `<pre>` customization surface; do not silently
   repurpose it for the scroll root. Keep the header outside this viewport and
   make it non-shrinking. Set `dir="ltr"` on the technical content.
2. Update every CodeBlock example and the docs to remove external
   `ScrollArea` imports/wrappers. Apply height limits to `CodeBlock` itself.
   Document precisely: `max-h-*`/`h-*` limits the complete panel, including a
   header; remaining space is the code viewport; without a height constraint
   the panel grows with its content. Use English public documentation.
3. Update AI Chat and IDE consumers to rely on the owned viewport. In the IDE,
   retain `h-full` on the root and ensure the content can flex below the fixed
   header. For tabbed examples, make the active tab panel participate in the
   necessary `min-h-0 flex-1` layout instead of adding another scrollport.

## Verification

| Command | Expected result |
| --- | --- |
| `rg -n 'import \{ ScrollArea \}' registry/react/examples/code-block content/docs/ai-elements/code-block.mdx` | no output |
| `rg -n '<ScrollArea' registry/react/examples/code-block content/docs/ai-elements/code-block.mdx` | no output |
| `rg -n 'dir="ltr"' registry/react/components/code-block.tsx` | one CodeBlock content match |
| `git diff --check -- registry/react/components/code-block.tsx content/docs/ai-elements/code-block.mdx registry/react/examples/code-block` | exit 0, no output |

## Done criteria

- [ ] Every CodeBlock has at most its one internal scrollport.
- [ ] Header stays outside the scrollport and line-number sticky behavior has a
      scroll ancestor.
- [ ] Docs contain the maximum-height semantics and no Portuguese prose.
- [ ] No external `ScrollArea` remains in CodeBlock examples/docs.

## STOP conditions

- `ScrollArea` cannot occupy the remaining root height without modifying its
  public API.
- A consumer requires two independently scrolling regions.
- The current source differs materially from the current-state facts above.

## Maintenance notes

Future CodeBlock body parts must use this single viewport; do not add a second
`ScrollArea` merely to set a height.
