import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDemo = () => (
  <NativeSelect className="w-full max-w-48">
    <NativeSelectOption value="">Select status</NativeSelectOption>
    <NativeSelectOption value="todo">Todo</NativeSelectOption>
    <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
    <NativeSelectOption value="done">Done</NativeSelectOption>
    <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
  </NativeSelect>
);

export default NativeSelectDemo;
