import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  type ComponentPreviewExampleProps,
  getComponentPreviewExample,
} from "./component-preview-example";
import { ComponentPreviewFrame } from "./component-preview-frame";
import {
  RTLPreviewContent,
  RTLPreviewHeader,
  RTLPreviewProvider,
} from "./rtl-preview";

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
  const previewFileName = existsSync(rtlExamplePath) ? rtlFileName : fileName;
  const { preview, source } = await getComponentPreviewExample(
    componentName,
    previewFileName
  );

  return (
    <RTLPreviewProvider>
      <ComponentPreviewFrame
        {...rest}
        autoHeight={autoHeight}
        preview={<RTLPreviewContent>{preview}</RTLPreviewContent>}
        previewHeader={<RTLPreviewHeader />}
        source={source}
      />
    </RTLPreviewProvider>
  );
};
