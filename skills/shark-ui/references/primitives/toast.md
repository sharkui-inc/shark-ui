# Shark Toast

## Architecture note

- Shark toast is built on Ark UI toast primitives, not shadcn Sonner internals.
- Do not assume Sonner-style APIs/options map 1:1.
- This is not Sonner's `toast()` + `<Toaster />` API model; use `toastManager` / `anchoredToastManager` with Shark providers.

## When to use

- Temporary in-app feedback notifications.
- Anchored contextual toasts tied to a target element.

## When NOT to use

- If the message requires user acknowledgment before proceeding -> use AlertDialog instead.
- If the feedback is inline and persistent -> use Alert instead.
- If the notification is anchored to a specific element without toastManager -> use Tooltip or Popover instead.

## Install

```bash
npx shadcn@latest add @shark/toast
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  AnchoredToastProvider,
  ToastProvider,
  anchoredToastManager,
  toastManager,
} from "@/components/ui/toast"
```

## Required app setup

Add providers in app layout:

```tsx
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast"
```

Wrap app content with both:

```tsx
<ToastProvider>
  <AnchoredToastProvider>{children}</AnchoredToastProvider>
</ToastProvider>
```

## Minimal pattern

```tsx
toastManager.add({
  title: "Saved",
  description: "Your changes have been updated.",
})
```

### Key patterns

- **Portal forwarding**: optional `portalProps` on `ToastProvider` and `AnchoredToastProvider` → Ark UI `Toast.Portal` (for example `container`, `keepMounted`).
- **Stacked notifications**: use `toastManager.add(...)` for global app feedback with typed variants and optional actions.
- **Anchored notifications**: use `anchoredToastManager.add(...)` with `positionerProps.anchor` for contextual, element-tied toasts.
- **Lifecycle-driven flows**: use loading/promise patterns and explicit close/update handling for async operations.
- **Deduplication / upsert**: pass a stable `id` on `toastManager.add`. If that `id` is already shown, Ark UI updates the toast in place and the UI replays a short re-notify animation via `updateKey` instead of adding another surface.

#### Deduplicated (same `id`) usage

```tsx
toastManager.add({
  id: "autosave",
  title: "Saved",
  description: "Draft updated.",
})
```

#### Stacked usage

```tsx
import { toastManager } from "@/components/ui/toast"

toastManager.add({
  title: "Event has been created",
  description: "Monday, January 3rd at 6:00pm",
})
```

#### Anchored usage

```tsx
import { anchoredToastManager } from "@/components/ui/toast"

anchoredToastManager.add({
  title: "Copied!",
  positionerProps: { anchor: buttonRef.current },
})
```

## Common pitfalls

- Forgetting provider setup before calling managers.
- Using anchored toasts without a valid `anchor`.
- Assuming tooltip-style anchored toasts show full content (only title is shown with `tooltipStyle`).
- Copy/pasting Sonner examples (`toast(...)` options shape) without adapting to `toastManager` / `anchoredToastManager`.

## Registry example files

- [`example-action.tsx`](/registry/react/examples/toast/example-action.tsx)
- [`example-closable.tsx`](/registry/react/examples/toast/example-closable.tsx)
- [`example-dedupe.tsx`](/registry/react/examples/toast/example-dedupe.tsx)
- [`example-default.tsx`](/registry/react/examples/toast/example-default.tsx)
- [`example-duration.tsx`](/registry/react/examples/toast/example-duration.tsx)
- [`example-placement.tsx`](/registry/react/examples/toast/example-placement.tsx)
- [`example-promise.tsx`](/registry/react/examples/toast/example-promise.tsx)
- [`example-variants.tsx`](/registry/react/examples/toast/example-variants.tsx)
