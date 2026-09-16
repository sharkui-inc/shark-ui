import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const NativeSelectInvalid = () => (
  <NativeSelect className="w-full max-w-48" invalid>
    <NativeSelectOption value="">Error state</NativeSelectOption>
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  </NativeSelect>
);

export default NativeSelectInvalid;
