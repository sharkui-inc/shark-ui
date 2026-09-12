import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  formatShadcnCommandDisplay,
  packageManagerCommandVariants,
} from "@/lib/shadcn-command";

describe("formatShadcnCommandDisplay", () => {
  it("hides shadcn@latest in add commands", () => {
    assert.equal(
      formatShadcnCommandDisplay("npx shadcn@latest add @shark/button"),
      "npx shadcn add @shark/button"
    );
  });

  it("hides shadcn@latest in init commands", () => {
    assert.equal(
      formatShadcnCommandDisplay("pnpm dlx shadcn@latest init @shark/style"),
      "pnpm dlx shadcn init @shark/style"
    );
  });

  it("leaves unrelated commands unchanged", () => {
    assert.equal(formatShadcnCommandDisplay("yarn add foo"), "yarn add foo");
  });
});

describe("packageManagerCommandVariants", () => {
  it("keeps npx create- distinct from generic npx", () => {
    const variants = packageManagerCommandVariants(
      "npx create-next-app@latest"
    );
    assert.ok(variants);
    assert.equal(variants.yarn.startsWith("yarn create "), true);
    assert.equal(variants.pnpm.startsWith("pnpm create "), true);
    assert.equal(variants.bun.includes("bunx --bun"), true);
  });

  it("maps generic npx to yarn / pnpm dlx", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/button"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/button",
      npm: "npx shadcn@latest add @shark/button",
      pnpm: "pnpm dlx shadcn@latest add @shark/button",
      yarn: "yarn shadcn@latest add @shark/button",
    });
  });

  it("maps every npx line in a multi-command block", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/create-chat\nnpx shadcn@latest add @shark/use-chat-helper"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/create-chat\nbunx --bun shadcn@latest add @shark/use-chat-helper",
      npm: "npx shadcn@latest add @shark/create-chat\nnpx shadcn@latest add @shark/use-chat-helper",
      pnpm: "pnpm dlx shadcn@latest add @shark/create-chat\npnpm dlx shadcn@latest add @shark/use-chat-helper",
      yarn: "yarn shadcn@latest add @shark/create-chat\nyarn shadcn@latest add @shark/use-chat-helper",
    });
  });

  it("maps npx followed by npm install to the selected package manager", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/create-chat && npm install ai @ai-sdk/react"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/create-chat && bun add ai @ai-sdk/react",
      npm: "npx shadcn@latest add @shark/create-chat && npm install ai @ai-sdk/react",
      pnpm: "pnpm dlx shadcn@latest add @shark/create-chat && pnpm add ai @ai-sdk/react",
      yarn: "yarn shadcn@latest add @shark/create-chat && yarn add ai @ai-sdk/react",
    });
  });

  it("maps npm install to add", () => {
    const variants = packageManagerCommandVariants("npm install next");
    assert.equal(variants?.yarn, "yarn add next");
    assert.equal(variants?.pnpm, "pnpm add next");
  });

  it("maps npm run", () => {
    const variants = packageManagerCommandVariants("npm run build");
    assert.equal(variants?.yarn, "yarn build");
    assert.equal(variants?.pnpm, "pnpm build");
  });

  it("returns null for non-command source", () => {
    assert.equal(packageManagerCommandVariants("const x = 1"), null);
  });
});
