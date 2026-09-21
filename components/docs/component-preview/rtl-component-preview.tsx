import { existsSync } from "node:fs";
import { join } from "node:path";
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
  const rtlExamplePath = join(
    process.cwd(),
    "registry/react/examples",
    componentName,
    `${rtlFileName}.tsx`
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
