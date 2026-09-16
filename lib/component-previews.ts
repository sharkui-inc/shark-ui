import { source } from "@/lib/fumadocs";

export interface ComponentPreviewItem {
  label: string;
  slug: string;
  title: string;
  value: string;
}

export const getComponentPreviews = (): ComponentPreviewItem[] => {
  const components = source.pageTree.children.find(
    (item) => item.type === "folder" && item.name === "Components"
  );

  if (components?.type !== "folder") {
    return [];
  }

  return components.children.flatMap((item) => {
    if (item.type !== "page") {
      return [];
    }

    const slug = item.url.split("/").filter(Boolean).at(-1);

    if (!slug) {
      return [];
    }

    const page = source.getNodePage(item);

    const title = page?.data.title ?? slug;

    return [{ label: title, slug, title, value: slug }];
  });
};
