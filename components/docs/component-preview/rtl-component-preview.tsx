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

type RTLComponentPreviewProps = ComponentPreviewExampleProps;

export const RTLComponentPreview = async (props: RTLComponentPreviewProps) => {
  const {
    componentName,
    fileName = "example-default",
    autoHeight = false,
    ...rest
  } = props;
  const rtlExamplePath = join(
    process.cwd(),
    "registry/react/examples",
    componentName,
    "example-rtl.tsx"
  );
  const { preview, source } = await getComponentPreviewExample(
    componentName,
    existsSync(rtlExamplePath) ? "example-rtl" : fileName,
    fileName
  );

  return (
    <RTLPreviewProvider>
      <ComponentPreviewFrame
        {...rest}
        autoHeight={autoHeight}
        preview={
          <RTLPreviewContent className="contents">{preview}</RTLPreviewContent>
        }
        previewHeader={<RTLPreviewHeader />}
        showBorders={false}
        source={source}
      />
    </RTLPreviewProvider>
  );
};
