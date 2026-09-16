import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => (
  <Reasoning
    className="max-w-lg"
    duration={8}
    translations={{
      thinking: "Raciocinando",
      thought: "Raciocínio",
      thoughtForDuration: (duration) => `Raciocinou por ${duration}s`,
    }}
  >
    <ReasoningTrigger />
    <ReasoningContent>
      O formulário já valida campos vazios. Agora devo adicionar uma verificação
      de formato a `validateForm` e manter a expressão regular em um helper para
      que a interface possa reutilizá-la.
    </ReasoningContent>
  </Reasoning>
);

export default Example;
