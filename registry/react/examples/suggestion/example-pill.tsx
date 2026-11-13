import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";

const Example = () => (
  <Suggestions>
    <Suggestion pill>Summarize this brief</Suggestion>
    <Suggestion pill>Draft a launch checklist</Suggestion>
    <Suggestion pill>Find risks in the plan</Suggestion>
    <Suggestion pill={false}>Square chip</Suggestion>
  </Suggestions>
);

export default Example;
