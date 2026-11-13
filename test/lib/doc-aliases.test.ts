import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { formatAliasDescription, formatAlsoKnownAs } from "@/lib/doc-aliases";

describe("doc aliases", () => {
  it("adds missing aliases to the description", () => {
    assert.equal(
      formatAliasDescription("Modal for confirmations and focused tasks.", [
        "Modal",
      ]),
      "Modal for confirmations and focused tasks."
    );
    assert.equal(
      formatAliasDescription(
        "Compose and send chat prompts with attachments and tools.",
        ["Composer", "Chat input"]
      ),
      "Compose and send chat prompts with attachments and tools. Also known as Composer and Chat input."
    );
    assert.equal(
      formatAliasDescription(
        "Command palette with filtering, groups, and shortcuts.",
        ["Command palette", "Cmdk"]
      ),
      "Command palette with filtering, groups, and shortcuts. Also known as Cmdk."
    );
    assert.equal(
      formatAlsoKnownAs(["Snackbar", "Notification"]),
      "Also known as Snackbar and Notification."
    );
    assert.equal(
      formatAlsoKnownAs(["Composer", "Chat input", "Prompt box"]),
      "Also known as Composer, Chat input, and Prompt box."
    );
  });
});
