import ExampleDefault from "@/registry/react/examples/hotkeys/example-default";
import ExampleKeyState from "@/registry/react/examples/hotkeys/example-key-state";
import ExampleMultiple from "@/registry/react/examples/hotkeys/example-multiple";
import ExampleRecorder from "@/registry/react/examples/hotkeys/example-recorder";
import ExampleScopes from "@/registry/react/examples/hotkeys/example-scopes";
import ExampleSequence from "@/registry/react/examples/hotkeys/example-sequence";
import ExampleSequenceTimeout from "@/registry/react/examples/hotkeys/example-sequence-timeout";

const HotkeysExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5"
      >
        <h1 className="text-muted-foreground font-medium" id="default-heading">
          Default
        </h1>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleDefault />
        </div>
      </section>
      <section
        aria-labelledby="key-state-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="key-state-heading"
        >
          Key State
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleKeyState />
        </div>
      </section>
      <section
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="multiple-heading">
          Multiple
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleMultiple />
        </div>
      </section>
      <section
        aria-labelledby="recorder-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="recorder-heading">
          Recorder
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleRecorder />
        </div>
      </section>
      <section aria-labelledby="scopes-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="scopes-heading">
          Scopes
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleScopes />
        </div>
      </section>
      <section
        aria-labelledby="sequence-timeout-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="sequence-timeout-heading"
        >
          Sequence Timeout
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSequenceTimeout />
        </div>
      </section>
      <section
        aria-labelledby="sequence-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="sequence-heading">
          Sequence
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSequence />
        </div>
      </section>
    </div>
  </div>
);

export default HotkeysExamplePage;
