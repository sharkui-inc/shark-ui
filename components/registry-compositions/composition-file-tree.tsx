"use client";

import { FileCode2Icon, FolderIcon, FolderOpenIcon } from "lucide-react";
import type { CompositionFileTreeNode } from "@/lib/registry";
import {
  createTreeCollection,
  type TreeNodeType,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchItem,
  TreeViewContent,
  TreeViewItem,
  TreeViewNode,
  TreeViewTree,
} from "@/registry/react/components/tree-view";

interface CompositionFileTreeProps {
  activePath: string;
  label: string;
  onSelect: (path: string) => void;
  tree: CompositionFileTreeNode[];
}

interface CompositionTreeNode extends Omit<TreeNodeType, "children"> {
  children?: CompositionTreeNode[];
  path?: string;
}

const toTreeNode = (
  node: CompositionFileTreeNode,
  indexPath: number[]
): CompositionTreeNode | undefined => {
  if (node.children) {
    return {
      children: node.children.flatMap((child, index) => {
        const treeNode = toTreeNode(child, [...indexPath, index]);
        return treeNode ? [treeNode] : [];
      }),
      id: `folder-${indexPath.join("-")}`,
      name: node.name,
    };
  }

  if (!node.path) {
    return undefined;
  }

  return { id: node.path, name: node.name, path: node.path };
};

const getExpandedValues = (nodes: readonly CompositionTreeNode[]): string[] =>
  nodes.flatMap((node) =>
    node.children ? [node.id, ...getExpandedValues(node.children)] : []
  );

interface CompositionTreeNodeViewProps {
  indexPath: number[];
  node: CompositionTreeNode;
}

const CompositionTreeNodeView = ({
  indexPath,
  node,
}: CompositionTreeNodeViewProps) => (
  <TreeViewNode indexPath={indexPath} node={node}>
    {node.children ? (
      <TreeViewBranch>
        <TreeViewBranchItem
          expandedIcon={FolderOpenIcon}
          icon={FolderIcon}
          showIndicator
        >
          {node.name}
        </TreeViewBranchItem>
        <TreeViewBranchContent>
          {node.children.map((child, index) => (
            <CompositionTreeNodeView
              indexPath={[...indexPath, index]}
              key={child.id}
              node={child}
            />
          ))}
        </TreeViewBranchContent>
      </TreeViewBranch>
    ) : (
      <TreeViewContent>
        <TreeViewItem icon={FileCode2Icon}>{node.name}</TreeViewItem>
      </TreeViewContent>
    )}
  </TreeViewNode>
);

export const CompositionFileTree = ({
  activePath,
  label,
  onSelect,
  tree,
}: CompositionFileTreeProps) => {
  const nodes = tree.flatMap((node, index) => {
    const treeNode = toTreeNode(node, [index]);
    return treeNode ? [treeNode] : [];
  });
  const collection = createTreeCollection({
    rootNode: { children: nodes, id: "root", name: "" },
  });

  return (
    <TreeView
      aria-label={`${label} files`}
      collection={collection}
      defaultExpandedValue={getExpandedValues(nodes)}
      onSelectionChange={({ selectedValue }) => {
        const path = selectedValue[0];

        if (path) {
          onSelect(path);
        }
      }}
      selectedValue={activePath ? [activePath] : []}
    >
      <TreeViewTree>
        {nodes.map((node, index) => (
          <CompositionTreeNodeView
            indexPath={[index]}
            key={node.id}
            node={node}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};
