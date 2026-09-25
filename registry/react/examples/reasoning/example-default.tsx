import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => (
  <Reasoning className="max-w-lg" duration={8}>
    <ReasoningTrigger />
    <ReasoningContent>
      Orders stall in `pending` because the payment webhook can arrive before
      the row is committed. I should make `handlePaymentEvent` idempotent and
      upsert by `payment_intent_id`.
    </ReasoningContent>
  </Reasoning>
);

export default Example;
