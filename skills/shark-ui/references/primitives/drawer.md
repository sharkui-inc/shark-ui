# Shark Drawer

## When to use

- Mobile-first overlay panels and bottom sheets.
- Form-heavy overlays where a popover is too constrained.

## When NOT to use

- If the overlay should be a centered modal → use `Dialog` instead.
- If the overlay is a persistent desktop side panel → use `Sheet` instead.
- If you need a simple high-risk confirmation → use `AlertDialog` instead.

## Install

```bash
npx shadcn@latest add @shark/drawer
```

## Manual dependencies

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
```

## Minimal pattern

```tsx
<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader
      description="Supporting description."
      title="Drawer title"
    />
    <DrawerBody>Content</DrawerBody>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Key patterns

Positioning via the `swipeDirection` prop (`up` | `down` | `start` | `end`). The drag handle is shown only for top and bottom drawers.

```tsx
// …
<Drawer swipeDirection="down">
  {/* content */}
</Drawer>
// …
```

Shorthand Title and Description

```tsx
// …
<DrawerHeader 
  title="Drawer title" 
  description="Supporting description." 
/>
// …
```

Scrollable content:

```tsx
// …
<DrawerBody>
  {/* content */}
</DrawerBody>
// …
```

Controlled open state:

```tsx
const [open, setOpen] = useState(false)

// …
<Drawer open={open} onOpenChange={({ open }) => setOpen(open)}>
  {/* content */}
</Drawer>
// …
```

## Common pitfalls

- Using a drawer for desktop-centered modals → prefer `Dialog` / `Sheet`.
- Missing explicit `type` on buttons inside forms.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/drawer/example-default.tsx)
- [`example-snap-points.tsx`](/registry/react/examples/drawer/example-snap-points.tsx)
- [`example-inset.tsx`](/registry/react/examples/drawer/example-inset.tsx)
