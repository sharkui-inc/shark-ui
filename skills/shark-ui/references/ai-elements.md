# AI elements

Chat UI is composed from these primitives. APIs live in `content/docs/ai-elements/<name>.mdx` and `registry/react/examples/<name>/`. Which element to pick: [`choose.md`](choose.md).

## Transcript

`MessageScroller` owns conversation scroll, edge fades, and jump-to-end. Do not hand-roll a stick-to-bottom container.

Rows go in `MessageScrollerItem`. Structure a turn with `Message` (avatar, header, footer) and `MessageBubble` (alignment, reactions). Stack same-sender turns in `MessageGroup`.

`Marker` is a labeled transcript divider (system notes, dates). Do not fake that with `Separator` plus a label.

Put `Attachment` inside `MessageContent`.

## Composer

`PromptInput` is the send field. Enter submits; Shift+Enter inserts a newline. `status` is `"ready" | "submitted" | "streaming" | "error"`.

- Attachments: wrap the composer in FileUpload; chips in `PromptInputHeader`.
- Tools and submit: `PromptInputFooter` / `PromptInputTools`.
- Model pick: `ModelSelector`.
- Voice: `SpeechInput`.
- Empty-state prompts: `Suggestion`.

## Agent chrome

- `Plan`: plan items and progress.
- `Queue`: queued and completed prompts.
- `ApprovalCard`: approval or clarification.
- `ToolResult`: tool output with metadata.
- `Reasoning`: model reasoning with duration.
- `Sources`: citations.
- `Context`: token usage and cost.

## Surfaces

`CodeBlock` for highlighted code (copy, streaming). `Diff` for unified hunks. `Terminal` for ANSI shell output. `Attachment` for files and images outside a message row as well.
