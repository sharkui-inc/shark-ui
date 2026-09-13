import {
  type ComponentPreviewExampleProps,
  getComponentPreviewExample,
} from "./component-preview-example";
import { ComponentPreviewFrame } from "./component-preview-frame";
import { RTLPreview } from "./rtl-preview";

type RTLComponentPreviewProps = ComponentPreviewExampleProps;

export const RTLComponentPreview = async (props: RTLComponentPreviewProps) => {
  const {
    componentName,
    fileName = "example-default",
    autoHeight = false,
    ...rest
  } = props;
  const { preview, source } = await getComponentPreviewExample(
    componentName,
    fileName
  );

  return (
    <RTLPreview contentClassName="block w-full p-0">
      <ComponentPreviewFrame
        {...rest}
        autoHeight={autoHeight}
        preview={preview}
        showBorders={false}
        source={source}
      />
    </RTLPreview>
  );
};
