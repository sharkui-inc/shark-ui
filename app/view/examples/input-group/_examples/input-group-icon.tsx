import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const InputGroupIcon = () => (
  <div className="grid w-full max-w-sm gap-6">
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Enter your email" type="email" />
      <InputGroupAddon>
        <MailIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Card number" />
      <InputGroupAddon>
        <CreditCardIcon aria-hidden />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <CheckIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="Card number" />
      <InputGroupAddon align="inline-end">
        <StarIcon aria-hidden />
        <InfoIcon aria-hidden />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupIcon;
