# Shark Toggle Tooltip

## When to use

- Help or extra context on **click or tap** (popover semantics), not only hover.
- Icon buttons that need a compact explainer without stealing focus like a dialog.

## Install

```bash
npx shadcn@latest add @shark/toggle-tooltip
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/components/ui/toggle-tooltip"
```

## Minimal pattern

```tsx
<ToggleTooltip>
  <ToggleTooltipTrigger asChild>
    <Button aria-label="More information" size="icon-md" variant="outline">
      <InfoIcon />
    </Button>
  </ToggleTooltipTrigger>
  <ToggleTooltipContent className="max-w-52">
    Short help text shown when the trigger is activated.
  </ToggleTooltipContent>
</ToggleTooltip>
```

### Key patterns

Built on the same Popover stack as Shark `Popover`: defaults include `lazyMount` / `unmountOnExit` and `positioning` (placement). Use `asChild` on the trigger so the real control is a `Button` or link with proper semantics.

## Common pitfalls

- Treating it like `Tooltip` (hover-only); this is **toggle / popover** behavior—verify UX on touch.
- Forgetting `aria-label` (or visible text) on icon-only triggers.
- Omitting `ToggleTooltipContent`; the popover root needs both trigger and content descendants.
- Confusing with Radix `Tooltip`; Shark `Tooltip` vs `ToggleTooltip` serve different interaction models.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/toggle-tooltip/example-default.tsx)
- [`example-info-icon.tsx`](/registry/react/examples/toggle-tooltip/example-info-icon.tsx)
- [`example-side.tsx`](/registry/react/examples/toggle-tooltip/example-side.tsx)
- [`example-with-link.tsx`](/registry/react/examples/toggle-tooltip/example-with-link.tsx)
