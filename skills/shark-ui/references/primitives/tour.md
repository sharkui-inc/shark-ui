# Shark Tour

## When to use

- Guided onboarding that highlights DOM targets or opens modal-style intro steps.
- Multi-step product tours with next/prev/dismiss actions driven by Ark `useTour`.

## When NOT to use

- If the overlay is a single focused task → use `Dialog` or `Sheet` instead.
- If you only need a one-line hint on hover → use `Tooltip` instead.

## Install

```bash
npx shadcn@latest add @shark/tour
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  Tour,
  TourBody,
  TourClose,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourPreviousStep,
  TourProgressText,
  TourTitle,
  TourTrigger,
  type TourStepType,
  useTourContext,
} from "@/components/ui/tour"
```

## Minimal pattern

```tsx
import { Button } from "@/components/ui/button"

const steps: TourStepType[] = [
  {
    id: "intro",
    type: "dialog",
    title: "Welcome",
    description: "Short intro copy.",
    actions: [{ label: "Next", action: "next" }],
  },
]

<Tour steps={steps}>
  <TourTrigger asChild>
    <Button variant="outline">Start tour</Button>
  </TourTrigger>
  <TourContent>
    <TourHeader>
      <TourProgressText />
      <TourTitle />
      <TourDescription />
    </TourHeader>
    <TourFooter>
      <TourPreviousStep />
      <TourNextStep />
    </TourFooter>
  </TourContent>
</Tour>
```

### Key patterns

Steps use `type: "dialog"` for centered cards or `type: "tooltip"` with `target: () => document.querySelector("#id")` for anchored highlights; compose header/body/footer like dialog sections; listen with `onStepChange` / `onStatusChange` when coordinating external state.

## Common pitfalls

- Returning `null` from `target` on tooltip steps (the step will not anchor).
- Omitting stable `id` values on each step object.
- Mixing Radix tour examples—Shark follows Ark `Tour` + Shark dialog primitives inside `TourContent`.

## Registry example files

- [`example-async.tsx`](/registry/react/examples/tour/example-async.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/tour/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/tour/example-default.tsx)
- [`example-events.tsx`](/registry/react/examples/tour/example-events.tsx)
- [`example-keyboard-navigation.tsx`](/registry/react/examples/tour/example-keyboard-navigation.tsx)
- [`example-progress.tsx`](/registry/react/examples/tour/example-progress.tsx)
- [`example-skip.tsx`](/registry/react/examples/tour/example-skip.tsx)
- [`example-step-types.tsx`](/registry/react/examples/tour/example-step-types.tsx)
- [`example-wait-for-click.tsx`](/registry/react/examples/tour/example-wait-for-click.tsx)
- [`example-wait-for-element.tsx`](/registry/react/examples/tour/example-wait-for-element.tsx)
- [`example-wait-for-input.tsx`](/registry/react/examples/tour/example-wait-for-input.tsx)
