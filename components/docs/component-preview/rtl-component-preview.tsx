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

interface RTLComponentPreviewProps extends ComponentPreviewExampleProps {
  /**
   * The RTL example file name.
   *
   * @default "example-rtl"
   */
  fileName?: string;
}

export const RTLComponentPreview = async (props: RTLComponentPreviewProps) => {
  const {
    componentName,
    fileName = "example-rtl",
    autoHeight = false,
    ...rest
  } = props;

  const { preview, source } = await getComponentPreviewExample(
    componentName,
    fileName
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
        previewHeader={<RTLPreviewHeader />}
        source={source}
      />
    </RTLPreviewProvider>
  );
};
