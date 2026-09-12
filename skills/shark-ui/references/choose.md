# Pick a primitive

Docs: `content/docs/`. Examples: `registry/react/examples/<name>/example-*.tsx`. After you pick a name, read its MDX and one example.

## Overlays

| Need | Use |
| --- | --- |
| Centered modal task | Dialog |
| Destructive confirm | AlertDialog |
| Side panel | Sheet |
| Sliding panel with swipe | Drawer |
| Click, non-modal, interactive | Popover |
| Hover or focus hint, text only | Tooltip |
| Hover preview with structured content | HoverCard |
| Click to show info | ToggleTooltip |
| Minimal hint | Hint |
| Button actions | Menu |
| Right-click actions | ContextMenu |
| Searchable palette | Command |
| Draggable window | FloatingPanel |
| Anchor to a container edge | Float |

Tooltip is non-interactive help. HoverCard is a richer hover preview. Popover is for buttons, inputs, or links inside the floating surface.

Dialog is centered and blocking. Sheet slides from an edge. Drawer is the swipe-capable sliding panel.

Menu is a trigger list of actions. ContextMenu is the pointer menu. Command is type-to-filter.

## Selection

| Need | Use |
| --- | --- |
| Closed list, no typeahead | Select |
| Closed list, type to filter | Combobox |
| Free text plus suggestions | Autocomplete |
| Visible list, no popup | Listbox |
| Native `<select>` | NativeSelect |

NativeSelect for platform pickers and mobile-first forms. Select for a styled closed list. Combobox when the list is long or must be filtered. Autocomplete when the typed value can stay even if it is not in the list. Listbox when options stay on screen.

## Forms and options

Wrap fields in `Field` / `FieldGroup`. See [`forms.md`](forms.md).

| Need | Use |
| --- | --- |
| Settings on/off | Switch |
| Form yes/no, or many independent picks | Checkbox |
| 2–4 visible exclusive options | RadioGroup |
| 2–7 compact exclusive options | ToggleGroup |
| Compact mode switch | SegmentGroup |
| Pressed on/off button | Toggle |
| Addons beside a field | InputGroup |
| OTP / PIN | InputOTP |
| Multi-step form | Questionnaire |

Do not loop `Button` with manual active styles for a small exclusive set. Use ToggleGroup or SegmentGroup.

SegmentGroup switches modes. Tabs switch peer content panels.

## Disclosure and navigation

| Need | Use |
| --- | --- |
| Stacked collapsible sections | Accordion |
| One show/hide region | Collapsible |
| Horizontal peer panels | Tabs |
| Wizard progress | Steps |
| App chrome | Sidebar |
| Mobile tab bar | BottomNavigation |
| Site nav with menus | NavigationMenu |
| Hierarchy trail | Breadcrumb |
| Paged lists | Pagination |

Accordion is a group of sections. Collapsible is a single section. Tabs keep all triggers visible.

## Feedback and status

| Need | Use |
| --- | --- |
| Persistent in-page message | Alert |
| Transient post-action message | Toast |
| Unknown-duration wait | Spinner |
| Placeholder that matches layout | Skeleton |
| Known percent, linear | Progress |
| Known percent, circular | CircularProgress |
| Empty or next-action screen | State |
| Process color | Status |

Alert stays on the page. Toast leaves on its own. Skeleton when the layout is known; Spinner when it is not.

Use `Separator` instead of `<hr>` or a `border-t` divider. Use `Badge` for a status pill. Use `toast` from the toast component instead of custom notification DOM.

## Inventory

### Components

`content/docs/components/<name>.mdx`. There is no Label page; use `FieldLabel` or the control’s `*Label`.

- Accordion: stacked collapsible sections.
- ActionBar: bulk actions for a selection.
- Alert: persistent in-page message.
- AlertDialog: destructive or blocking confirm.
- Announcement: short inline notice.
- AspectRatio: lock child aspect ratio.
- Autocomplete: free text plus suggestions.
- Avatar: profile image with fallback.
- Badge: compact status label.
- BottomNavigation: fixed mobile tab bar.
- Breadcrumb: location in a hierarchy.
- Button: pressable action.
- ButtonGroup: grouped buttons.
- Calendar: pick a date or range.
- Card: self-contained content unit.
- Carousel: cycle through items.
- Chart: Recharts visualization.
- Checkbox: independent yes/no, or many picks.
- CircularProgress: circular known-percent wait.
- CircularSlider: circular range control.
- Clipboard: copy text.
- Collapsible: one show/hide region.
- ColorPicker: hue and alpha color pick.
- Combobox: closed list, type to filter.
- Command: searchable palette.
- ContextMenu: right-click actions.
- DataList: label-value pairs for one record.
- DataTable: TanStack Table.
- DateInput: segmented date/time field.
- DatePicker: input with a calendar.
- Dialog: centered modal.
- Drawer: sliding panel with swipe.
- Editable: in-place text edit.
- Field: label, control, helper, error.
- FileThumbnail: file-format glyph.
- FileUpload: pick and drop files.
- Float: anchor to a container edge.
- FloatingPanel: draggable window.
- Frame: bordered grouping box.
- Hint: minimal hint.
- HoverCard: rich hover preview.
- IconTile: icon, initials, or short text surface.
- ImageCropper: crop and transform an image.
- Input: single-line text.
- InputGroup: addons beside a field.
- InputOTP: one-time code.
- Item: row of media, title, and actions.
- Kbd: keyboard key glyph.
- LinkOverlay: make a card or article clickable.
- Listbox: visible list selection.
- Marquee: horizontal scrolling items.
- Menu: dropdown actions.
- NativeSelect: native `<select>`.
- NavigationMenu: site links and menus.
- NumberInput: numeric entry.
- Pagination: page through a list.
- PasswordInput: masked text field.
- Popover: click, non-modal, interactive.
- Progress: linear known-percent wait.
- Prose: HTML typography.
- QrCode: QR from a string.
- Questionnaire: multi-step form.
- RadioGroup: exclusive visible options.
- Rating: star or point rating.
- Resizable: split panes the user can drag.
- ScrollArea: styled scrollport.
- SegmentGroup: compact mode switch.
- Select: closed list, no typeahead.
- Separator: dividing line.
- Sheet: panel from a screen edge.
- Sidebar: app navigation chrome.
- SignaturePad: capture a signature.
- Skeleton: layout-shaped loading placeholder.
- SkipNav: skip to main content.
- Slider: range by dragging.
- Spinner: unknown-duration wait.
- State: empty, error, or next-action screen.
- Status: color-coded process state.
- Steps: wizard progress.
- Switch: settings on/off.
- Table: responsive tabular markup.
- Tabs: horizontal peer panels.
- TagsInput: enter multiple values.
- Textarea: multi-line text.
- Timer: countdown or stopwatch.
- Toast: transient post-action message.
- Toc: active heading while scrolling.
- Toggle: pressed on/off button.
- ToggleGroup: compact exclusive options.
- ToggleTooltip: info on click.
- Tooltip: hover or focus hint.
- Tour: guided walkthrough.
- TreeView: expandable hierarchy.

### AI elements

`content/docs/ai-elements/<name>.mdx`. Composition: [`ai-elements.md`](ai-elements.md).

- ApprovalCard: collect an approval or clarification.
- Attachment: uploaded file or image with status.
- CodeBlock: highlighted code, copy, streaming.
- Context: token usage, breakdown, cost.
- Diff: unified diff hunks.
- Marker: labeled transcript divider.
- Message: avatar, header, footer around a turn.
- MessageBubble: aligned bubble with reactions.
- MessageScroller: conversation scroll and jump.
- ModelSelector: pick a model or agent.
- Plan: agent plan items and progress.
- PromptInput: compose a prompt with tools and attachments.
- Queue: queued and completed prompts.
- Reasoning: model reasoning with duration.
- Sources: citations and footnotes.
- SpeechInput: browser speech-to-text.
- Suggestion: suggested prompts.
- Terminal: shell output with ANSI colors.
- ToolResult: tool output with metadata and actions.

### Utilities

`content/docs/utilities/<name>.mdx`

- ClientOnly: render on the client only.
- DownloadTrigger: start a file download.
- FocusTrap: keep keyboard focus in a container.
- Format: Intl number, byte, and time format.
- Highlight: mark search terms in text.
- Hitbox: larger hit area without layout change.
- Hotkeys: register shortcuts.
- Iframe: render React inside an iframe.
- JsonTreeView: expandable JSON tree.
- Presence: mount and unmount animation.
- Shimmer: live-status text shimmer.
- Show: boolean conditional render.
- Swap: animate between two states.

### Hooks

`content/docs/hooks/<name>.mdx`

- useAsyncList: load, filter, sort, paginate async lists.
- useIsMobile: viewport below the mobile breakpoint.
- useListSelection: single, multiple, and range selection.

### Helpers

- createChat: local deterministic conversations for AI SDK and TanStack AI. `content/docs/helpers/create-chat.mdx`
