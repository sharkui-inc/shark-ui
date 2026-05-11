# Migration: shadcn/Radix mental models → Shark / Ark

Shark feels similar to shadcn ergonomically, but behavior and props come from **Ark UI** roots in `registry/react/components`.

## From `render={...}` to `asChild`

Some headless kits attach the trigger to a host element with a **`render`** prop (often `render={<Button … />}`). **Shark / Ark** does not use that pattern on triggers. Use **`asChild`** instead: the trigger stays as the wrapper, and you pass **one child** that is the real interactive element (`Button`, `a`, etc.). Ark merges trigger props onto that child.

**Steps**

1. Remove the **`render={…}`** prop entirely.
2. Add **`asChild`** on the Shark trigger (or close) part **only if** that part’s MDX or source documents it.
3. Put the **`Button`** (or link) as the **only child** of the trigger; move **`variant`**, **`className`**, **`type`**, and label text onto that child.
4. Inside forms, set **`type="button"`** on button triggers so they do not submit accidentally.

**Before (illustrative `render` style)**

```tsx
<DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>
```

**After (Shark / Ark style)**

```tsx
<DialogTrigger asChild>
  <Button variant="outline" type="button">
    Open
  </Button>
</DialogTrigger>
```

Apply the same idea to **`DialogClose`**, **`MenuTrigger`**, **`PopoverTrigger`**, and similar parts: **`asChild`** + one child component, not **`render`**.

**Pitfalls**

- **`asChild` needs exactly one** child element that can receive merged props (typically one `Button` or `a`). Multiple sibling children will not work.
- If **`asChild`** is omitted, you may get nested interactive nodes or broken focus; match the examples in MDX.
- Not every part supports **`asChild`**; confirm for the specific export before converting.

## High-impact differences

- **Verify composition** in Shark MDX—do not assume 1:1 parity with old Radix demos.
- **Triggers**: prefer Ark/Shark patterns (`asChild` where supported) instead of legacy `asChild` + different content part names.
- **List components**: many Shark examples use **`createListCollection`**, **`useListCollection`**, and **`useFilter`** instead of static child-only option lists.
- **Combobox**: pass a **`collection`**, update filtering in **`onInputValueChange`**, render **`collection.items.map(...)`** in the list (see `registry/react/examples/combobox/example-controlled.tsx`).
- **Charts**: wire tooltip content as `content={(props) => <ChartTooltipContent {...props} />}`; avoid stubbing tooltip props; for static chart previews consider `accessibilityLayer={false}` on the chart root (`AGENTS.md`).
- **Sidebar docs-style previews**: `absolute inset-0 overflow-hidden`, `Sidebar` with `className="absolute"`, `SidebarProvider` with `h-full`, and prefer native `overflow-y-auto` over `ScrollArea` when it breaks layout (`AGENTS.md`).

## Collections: combobox sketch

```tsx
import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  initialItems: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ],
  filter: contains,
});

<Combobox
  collection={collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <ComboboxInput />
  <ComboboxContent>
    <ComboboxList>
      {collection.items.map((item) => (
        <ComboboxItem item={item} key={item.value}>
          {item.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
  </ComboboxContent>
</Combobox>;
```

## Select / listbox

Prefer patterns in `registry/react/examples/select/` and `content/docs/components/select.mdx`—often `createListCollection` with `collection` prop on the root.

## Migration checklist

1. Confirm imports from Shark docs for the target app alias.
2. Confirm Ark-specific props (`lazyMount`, `unmountOnExit`, value shape arrays vs scalars) from MDX / examples.
3. Run through keyboard focus and screen reader labels for overlays.
4. Cross-check at least one registry example file for the component family.

## Anti-patterns

- Changing only the import path while leaving Radix structure intact.
- Using undocumented props because they existed in a different library version.
- Ignoring collection/filter requirements for combobox/autocomplete-style controls.
