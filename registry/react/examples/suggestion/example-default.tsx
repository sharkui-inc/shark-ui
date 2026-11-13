import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";

const SuggestionDemo = () => (
  <Suggestions>
    <Suggestion>Summarize this brief</Suggestion>
    <Suggestion>Draft a launch checklist</Suggestion>
    <Suggestion>Find risks in the plan</Suggestion>
  </Suggestions>
);

export default SuggestionDemo;
