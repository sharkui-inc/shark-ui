# Shark Tree View

## When to use

- Hierarchical data: file trees, outlines, nested settings.
- Selection and expansion state driven by an Ark tree collection.

## When NOT to use

- If the list is flat and short → use `Listbox` or a simple stacked list.
- If you need spreadsheet-style grid editing → use `Table` instead.

## Install

```bash
npx shadcn@latest add @shark/tree-view
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  createFileIcons,
  createTreeCollection,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchIndicator,
  TreeViewBranchItem,
  TreeViewCheckbox,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  TreeViewNode,
  TreeViewTree,
  useTreeView,
  type TreeCollection,
  type TreeNodeType,
} from "@/components/ui/tree-view"
```

## Minimal pattern

Build a `collection` with `createTreeCollection`, pass it to `TreeView`, render the root’s children with `TreeViewTree` + `TreeViewNode`, and branch with `TreeViewBranch` / `TreeViewBranchContent` vs leaf `TreeViewContent` + `TreeViewItem` (see `example-default.tsx`).

```tsx
const collection = createTreeCollection({
  rootNode: {
    id: "ROOT",
    name: "",
    children: [{ id: "a", name: "Item A" }],
  },
})

<TreeView collection={collection}>
  <TreeViewTree>{/* map root children to TreeViewNode */}</TreeViewTree>
</TreeView>
```

### Key patterns

Recursive `TreeViewNode` render prop pattern from examples; `TreeViewCheckbox` for multi-select trees; `createFileIcons` + `fileIcons` on `TreeView` for per-extension icons; context menus / rename flows in dedicated examples.

## Common pitfalls

- Passing a collection whose `id` values are not stable across renders.
- Forgetting `indexPath` when recursing nodes (expansion/selection breaks).
- Treating `TreeViewItem` as a branch container—branches must use `TreeViewBranch` + `TreeViewBranchContent`.

## Registry example files

- [`example-checkbox-tree.tsx`](/registry/react/examples/tree-view/example-checkbox-tree.tsx)
- [`example-context-menu.tsx`](/registry/react/examples/tree-view/example-context-menu.tsx)
- [`example-controlled.tsx`](/registry/react/examples/tree-view/example-controlled.tsx)
- [`example-custom-icons-folder.tsx`](/registry/react/examples/tree-view/example-custom-icons-folder.tsx)
- [`example-custom-icons-item.tsx`](/registry/react/examples/tree-view/example-custom-icons-item.tsx)
- [`example-custom-icons.tsx`](/registry/react/examples/tree-view/example-custom-icons.tsx)
- [`example-default.tsx`](/registry/react/examples/tree-view/example-default.tsx)
- [`example-editor.tsx`](/registry/react/examples/tree-view/example-editor.tsx)
- [`example-links.tsx`](/registry/react/examples/tree-view/example-links.tsx)
- [`example-multiple-selection.tsx`](/registry/react/examples/tree-view/example-multiple-selection.tsx)
- [`example-rename.tsx`](/registry/react/examples/tree-view/example-rename.tsx)
