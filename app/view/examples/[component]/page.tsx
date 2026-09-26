import { notFound } from "next/navigation";
import { source } from "@/lib/fumadocs";

export const dynamicParams = false;
export const revalidate = false;

const COMPONENT_SLUGS = (() => {
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
    return slug ? [slug] : [];
  });
})();

export const generateStaticParams = () =>
  COMPONENT_SLUGS.map((component) => ({ component }));

const ComponentExamplePage = async (
  props: PageProps<"/view/examples/[component]">
) => {
  const { component } = await props.params;

  if (!COMPONENT_SLUGS.includes(component)) {
    notFound();
  }

  const module = await import(
    `@/registry/react/examples/${component}/example-default`
  );
  const Preview = module.default;

  if (!Preview) {
    notFound();
  }

  return <Preview />;
};

export default ComponentExamplePage;
