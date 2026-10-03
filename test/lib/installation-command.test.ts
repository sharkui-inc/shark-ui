import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  createShadcnAddCommand,
  formatShadcnCommandDisplay,
  packageManagerCommandVariants,
  packageManagers,
} from "@/lib/installation-command";

describe("packageManagers", () => {
  it("keeps the canonical package-manager order", () => {
    assert.deepEqual(packageManagers, ["pnpm", "npm", "yarn", "bun"]);
  });
});

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

  it("maps generic npx to package-manager executors", () => {
    const variants = packageManagerCommandVariants(
      "npx shadcn@latest add @shark/button"
    );
    assert.deepEqual(variants, {
      bun: "bunx --bun shadcn@latest add @shark/button",
      npm: "npx shadcn@latest add @shark/button",
      pnpm: "pnpm dlx shadcn@latest add @shark/button",
      yarn: "yarn dlx shadcn@latest add @shark/button",
    });
  });

  it("maps supported commands after shell separators", () => {
    const variants = packageManagerCommandVariants(
      "npm install ai && npx shadcn@latest add @shark/chat || npm run build; npm create vite\nnpx shadcn@latest add @shark/button"
    );
    assert.deepEqual(variants, {
      bun: "bun add ai && bunx --bun shadcn@latest add @shark/chat || bun build; bun create vite\nbunx --bun shadcn@latest add @shark/button",
      npm: "npm install ai && npx shadcn@latest add @shark/chat || npm run build; npm create vite\nnpx shadcn@latest add @shark/button",
      pnpm: "pnpm add ai && pnpm dlx shadcn@latest add @shark/chat || pnpm build; pnpm create vite\npnpm dlx shadcn@latest add @shark/button",
      yarn: "yarn add ai && yarn dlx shadcn@latest add @shark/chat || yarn build; yarn create vite\nyarn dlx shadcn@latest add @shark/button",
    });
  });

  it("maps every command in a multi-command block", () => {
    const variants = packageManagerCommandVariants(
      "npm install ai @ai-sdk/react && npx shadcn@latest add @shark/create-chat"
    );
    assert.deepEqual(variants, {
      bun: "bun add ai @ai-sdk/react && bunx --bun shadcn@latest add @shark/create-chat",
      npm: "npm install ai @ai-sdk/react && npx shadcn@latest add @shark/create-chat",
      pnpm: "pnpm add ai @ai-sdk/react && pnpm dlx shadcn@latest add @shark/create-chat",
      yarn: "yarn add ai @ai-sdk/react && yarn dlx shadcn@latest add @shark/create-chat",
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
      yarn: "yarn dlx shadcn@latest add @shark/create-chat && yarn add ai @ai-sdk/react",
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

  it("does not treat prose as a command", () => {
    assert.equal(
      packageManagerCommandVariants("Use npx shadcn to install a component."),
      null
    );
  });

  it("returns null for non-command source", () => {
    assert.equal(packageManagerCommandVariants("const x = 1"), null);
  });
});

describe("createShadcnAddCommand", () => {
  it("creates install commands for every package manager", () => {
    assert.deepEqual(
      {
        bun: createShadcnAddCommand("bun", "@shark/button"),
        npm: createShadcnAddCommand("npm", "@shark/button"),
        pnpm: createShadcnAddCommand("pnpm", "@shark/button"),
        yarn: createShadcnAddCommand("yarn", "@shark/button"),
      },
      {
        bun: "bunx --bun shadcn@latest add @shark/button",
        npm: "npx shadcn@latest add @shark/button",
        pnpm: "pnpm dlx shadcn@latest add @shark/button",
        yarn: "yarn dlx shadcn@latest add @shark/button",
      }
    );
  });
});
