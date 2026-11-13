import { InstallCommand } from "./install-command";

export const AiComponentsHero = () => (
  <section
    aria-labelledby="page-title"
    className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center sm:gap-8"
  >
    <div className="flex flex-col items-center gap-4 sm:gap-5">
      <h1
        className="font-heading text-4xl leading-[0.98] font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl"
        id="page-title"
      >
        AI components you can own.
      </h1>
      <p className="text-muted-foreground max-w-3xl text-base text-pretty sm:text-lg lg:text-xl">
        Building blocks for chat threads and agent UIs. Reasoning, tool calls,
        approvals, and streaming. Copy the source into your project and
        customize it there.
      </p>
    </div>

    <InstallCommand command="npx shadcn@latest add @shark/chat" />
  </section>
);
