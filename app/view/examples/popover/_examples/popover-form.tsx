import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const PopoverForm = () => (
  <Popover positioning={{ placement: "bottom-start" }}>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-64">
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>
      <PopoverBody>
        <FieldGroup className="gap-4">
          <Field orientation="horizontal">
            <FieldLabel className="w-1/2" htmlFor="width">
              Width
            </FieldLabel>
            <Input defaultValue="100%" id="width" />
          </Field>

          <Field orientation="horizontal">
            <FieldLabel className="w-1/2" htmlFor="height">
              Height
            </FieldLabel>
            <Input defaultValue="25px" id="height" />
          </Field>
        </FieldGroup>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export default PopoverForm;
