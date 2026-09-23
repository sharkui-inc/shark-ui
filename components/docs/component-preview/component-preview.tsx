import { readFileSync } from "node:fs";
import { join } from "node:path";
import type React from "react";
import { ComponentSource } from "../../component-source";
import { ComponentPreviewFrame } from "./component-preview-frame";

const registryPath = "registry/react/examples";

export interface ComponentPreviewExampleProps
  extends Omit<React.ComponentProps<"div">, "ref"> {
  /**
   * Size the preview to its content.
   *
   * @default false
   */
  autoHeight?: boolean;
  /**
   * The name of the component to display in the preview
   */
  componentName: string;
  /**
   * The file name of the component
   *
   * @default "example-default"
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

  const examplePath = join(
    process.cwd(),
    registryPath,
    componentName,
    `${fileName}.tsx`
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
