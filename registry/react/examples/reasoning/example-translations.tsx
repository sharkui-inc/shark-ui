"use client";

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
      Pedidos ficam em `pending` porque o webhook de pagamento pode chegar antes
      do commit da linha. Devo tornar `handlePaymentEvent` idempotente e fazer
      upsert por `payment_intent_id`.
    </ReasoningContent>
  </Reasoning>
);

export default Example;
