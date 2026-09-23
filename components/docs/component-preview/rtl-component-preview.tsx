import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { assertPathInsideRoot } from "@/lib/registry-path";
import {
  type ComponentPreviewExampleProps,
  getComponentPreviewExample,
} from "./component-preview";
import {
  ComponentPreviewFrame,
  RTLPreviewContent,
  RTLPreviewHeader,
  RTLPreviewProvider,
} from "./component-preview-frame";

const EXAMPLE_NAME_PATTERN = /^[a-z0-9-]+$/;

type RTLComponentPreviewProps = ComponentPreviewExampleProps & {
  /** The RTL example file name. Defaults to `example-rtl`. */
  rtlFileName?: string;
};

export const RTLComponentPreview = async (props: RTLComponentPreviewProps) => {
  const {
    componentName,
    fileName = "example-default",
    rtlFileName = "example-rtl",
    autoHeight = false,
    ...rest
  } = props;

  if (
    !(
      EXAMPLE_NAME_PATTERN.test(componentName) &&
      EXAMPLE_NAME_PATTERN.test(rtlFileName)
    )
  ) {
    throw new Error("Invalid component or RTL example file name");
  }

  const examplesRoot = resolve(process.cwd(), "registry/react/examples");
  const rtlExamplePath = assertPathInsideRoot(
    resolve(examplesRoot, componentName, `${rtlFileName}.tsx`),
    examplesRoot,
    "RTL example path"
  );
  const hasRtlExample = existsSync(rtlExamplePath);
  const previewFileName = hasRtlExample ? rtlFileName : fileName;
  const { preview, source } = await getComponentPreviewExample(
    componentName,
    previewFileName
  );

  return (
    <RTLPreviewProvider>
      <ComponentPreviewFrame
        {...rest}
        autoHeight={autoHeight}
        preview={
          <RTLPreviewContent autoHeight={autoHeight}>
            {preview}
          </RTLPreviewContent>
        }
        previewHeader={
          <>
            <RTLPreviewHeader />
            {!hasRtlExample && process.env.NODE_ENV !== "production" ? (
              <p className="border-warning/64 border-b bg-warning/8 px-4 py-3 text-sm text-warning-foreground">
                This component does not have an RTL-specific example yet.
              </p>
            ) : null}
          </>
        }
        source={source}
      />
    </RTLPreviewProvider>
  );
};
