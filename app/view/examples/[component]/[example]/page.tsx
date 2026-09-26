import { readdirSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import { LocaleProvider } from "@/registry/react/components/locale";

export const dynamicParams = false;
export const revalidate = false;

const EXAMPLES_ROOT = join(process.cwd(), "registry/react/examples");
const EXAMPLE_EXTENSION = /\.tsx$/;

const listExampleParams = () => {
  const components = readdirSync(EXAMPLES_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return components.flatMap((component) => {
    const files = readdirSync(join(EXAMPLES_ROOT, component)).filter(
      (file) => file.startsWith("example-") && file.endsWith(".tsx")
    );

    return files.map((file) => ({
      component,
      example: file.replace(EXAMPLE_EXTENSION, ""),
    }));
  });
};

export const generateStaticParams = () => listExampleParams();

const ViewExamplePage = async (props: {
  params: Promise<{ component: string; example: string }>;
}) => {
  const { component, example } = await props.params;

  const module = await import(
    `@/registry/react/examples/${component}/${example}`
  );
  const Preview = module.default;

  if (!Preview) {
    notFound();
  }

  const isRtlExample = example.endsWith("-rtl") || component === "rtl";

  if (isRtlExample) {
    return (
      <PreviewLocaleProvider>
        <LocaleProvider locale="ar-SA">
          <div className="min-h-svh" dir="rtl" lang="ar-SA">
            <Preview />
          </div>
        </LocaleProvider>
      </PreviewLocaleProvider>
    );
  }

  return <Preview />;
};

export default ViewExamplePage;
