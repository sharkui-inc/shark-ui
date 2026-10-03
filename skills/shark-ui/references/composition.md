# Composition

Parts stay in their documented parents. Follow anatomy in the component MDX. Which overlay or primitive to pick: [`choose.md`](choose.md).

## Overlays

`DialogTitle` / `SheetTitle` / `DrawerTitle` are required. `className="sr-only"` if hidden.

```tsx
<DialogContent>
  <DialogHeader title="Edit profile" description="Update your profile." />
  <DialogBody>...</DialogBody>
  <DialogFooter>
    <DialogClose asChild>
      <Button variant="ghost">Close</Button>
    </DialogClose>
  </DialogFooter>
</DialogContent>
```

Keep `DialogHeader`, `DialogBody`, `DialogFooter` as sections inside `DialogContent`. Footer dismiss: `variant="ghost"`. Overlay openers: `variant="outline"`.

Triggers: `asChild` with one child (`Button`, `a`). Do not use `render`.

## Groups

Menu / ContextMenu / Command items go in their Group. Select grouping uses `SelectGroup` with `heading` plus `collection` rows (`item={item}`). See [`collections.md`](collections.md).

## Tabs, Card, Avatar, Button

- `TabsTrigger` only inside `TabsList`.
- Card: `CardHeader` / `CardContent` / `CardFooter`. Shorthand: `<CardHeader title="…" description="…" />`.
- Avatar always includes `AvatarFallback`.
- Loading: `<Button isLoading>`. There is no `isPending`.

## Toast

```tsx
import { toast } from "@/components/ui/toast";

toast.success({ title: "Changes saved." });
```
