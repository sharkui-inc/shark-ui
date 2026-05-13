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
  DrawerContentInner,
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
    <DrawerContentInner>
      <DrawerHeader
        description="Supporting description."
        title="Drawer title"
      />
      <DrawerBody>Content</DrawerBody>
    </DrawerContentInner>
    <DrawerFooter>
      <DrawerContentInner>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerContentInner>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Key patterns

Positioning via the `swipeDirection` prop (`up` | `down` | `start` | `end`):

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
- Skipping `DrawerContentInner` where the component expects that structure for padding and scroll regions.
- Missing explicit `type` on buttons inside forms.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/drawer/example-default.tsx)
- [`example-snap-points.tsx`](/registry/react/examples/drawer/example-snap-points.tsx)
- [`example-inset.tsx`](/registry/react/examples/drawer/example-inset.tsx)
