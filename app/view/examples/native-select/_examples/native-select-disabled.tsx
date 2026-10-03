import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectDisabled = () => (
  <NativeSelect className="w-full max-w-48" disabled>
    <NativeSelectOption value="">Disabled</NativeSelectOption>
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  </NativeSelect>
);

export default NativeSelectDisabled;
