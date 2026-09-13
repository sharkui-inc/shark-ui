import {
  type ComponentPreviewExampleProps,
  getComponentPreviewExample,
} from "./component-preview-example";
import { ComponentPreviewFrame } from "./component-preview-frame";

interface ComponentPreviewProps extends ComponentPreviewExampleProps {
  /**
   * Grow with content instead of locking the preview to 450px.
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
  /**
   * Whether to show the dashed padding guide borders around the preview
   *
   * @default true
   */
  showBorders?: boolean;
}

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
