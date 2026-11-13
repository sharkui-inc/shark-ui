import {
  Editable,
  EditableArea,
  EditableInput,
  EditablePreview,
} from "@/registry/react/components/editable";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Editable autoResize defaultValue="Rename this title">
    <EditableArea>
      <EditableInput asChild>
        <Input className="font-normal" size="sm" />
      </EditableInput>
      <EditablePreview size="sm" />
    </EditableArea>
  </Editable>
);

export default Example;
