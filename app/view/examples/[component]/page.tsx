import { notFound } from "next/navigation";
import { getComponentPreviews } from "@/lib/component-previews";

export const dynamicParams = false;
export const revalidate = false;

export const generateStaticParams = () =>
  getComponentPreviews().map(({ slug: component }) => ({ component }));

const ComponentExamplePage = async (
  props: PageProps<"/view/examples/[component]">
) => {
  const { component } = await props.params;
  const hasPreview = getComponentPreviews().some(
    (preview) => preview.slug === component
  );

  if (!hasPreview) {
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
