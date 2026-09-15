import { readFileSync } from "node:fs";
import { join } from "node:path";
import type React from "react";
import { ComponentSource } from "../../component-source";

const registryPath = "registry/react/examples";

export interface ComponentPreviewExampleProps
  extends Omit<React.ComponentProps<"div">, "ref"> {
  /** Grow with content instead of locking the preview to 450px. */
  autoHeight?: boolean;
  /** The name of the component to display in the preview. */
  componentName: string;
  /** The example file name. */
  fileName?: string;
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
