import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import type React from "react";
import { assertPathInsideRoot } from "@/lib/registry-path";
import { ComponentSource } from "../../component-source";
import { ComponentPreviewFrame } from "./component-preview-frame";

const registryPath = "registry/react/examples";
const EXAMPLE_NAME_PATTERN = /^[a-z0-9-]+$/;

export interface ComponentPreviewExampleProps
  extends Omit<React.ComponentProps<"div">, "ref"> {
  /**
   * Size the preview to its content, with extra vertical padding so examples
   * sit inside the dashed guides, instead of locking to a 450px frame that
   * vertically centers short examples.
   *
   * @default false
   */
  autoHeight?: boolean;
  /**
   * The name of the component to display in the preview
   *
   * @default ""
   */
  componentName: string;
  /**
   * The file name of the component
   */
  fileName?: string;
}

interface ComponentPreviewProps extends ComponentPreviewExampleProps {
  /**
   * Whether to show the dashed padding guide borders around the preview
   *
   * @default true
   */
  showBorders?: boolean;
}

export const getComponentPreviewExample = async (
  componentName: string,
  fileName = "example-default"
) => {
  const example = await import(
    `@/${registryPath}/${componentName}/${fileName}.tsx`
  );

  if (!example.default) {
    throw new Error(`File ${fileName} not found`);
  }

  const Example = example.default;

  if (
    !(
      EXAMPLE_NAME_PATTERN.test(componentName) &&
      EXAMPLE_NAME_PATTERN.test(fileName)
    )
  ) {
    throw new Error("Invalid component or example file name");
  }

  const examplesRoot = resolve(process.cwd(), registryPath);
  const examplePath = assertPathInsideRoot(
    resolve(examplesRoot, componentName, `${fileName}.tsx`),
    examplesRoot,
    "ComponentPreview example path"
  );

  return {
    preview: <Example />,
    source: (
      <ComponentSource
        code={readFileSync(examplePath, "utf-8")}
        isCollapsible={false}
      />
    ),
  };
};

export const ComponentPreview = async (props: ComponentPreviewProps) => {
  const {
    componentName,
    fileName = "example-default",
    showBorders,
    autoHeight = false,
    ...rest
  } = props;

  const { preview, source } = await getComponentPreviewExample(
    componentName,
    fileName
  );

  return (
    <ComponentPreviewFrame
      autoHeight={autoHeight}
      preview={preview}
      showBorders={showBorders}
      source={source}
      {...rest}
    />
  );
};
