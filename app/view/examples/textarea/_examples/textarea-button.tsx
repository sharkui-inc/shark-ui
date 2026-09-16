import { Button } from "@/registry/react/components/button";
import { Textarea } from "@/registry/react/components/textarea";

const TextareaButton = () => (
  <div className="grid w-full max-w-xs gap-2">
    <Textarea placeholder="Type your message here." />
    <Button>Send message</Button>
  </div>
);

export default TextareaButton;
