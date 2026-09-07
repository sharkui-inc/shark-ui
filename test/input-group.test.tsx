import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { Button } from "@/registry/react/components/button";
import { inputVariants } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/react/components/input-group";

afterEach(cleanup);

describe("InputGroup", () => {
  it("matches the Input size and padding scale", () => {
    const expected = [
      ["sm", "h-7", "px-[calc(--spacing(2.5)-1px)]"],
      ["md", "h-8", "px-[calc(--spacing(3)-1px)]"],
      ["lg", "h-9", "px-[calc(--spacing(3.5)-1px)]"],
    ] as const;

    for (const [size, height, padding] of expected) {
      const { container, unmount } = render(
        <InputGroup size={size}>
          <InputGroupInput aria-label="Value" />
        </InputGroup>
      );
      const group = container.querySelector<HTMLElement>(
        '[data-slot="input-group"]'
      );

      assert.ok(group?.className.includes(height));
      assert.ok(group?.className.includes(padding));
      assert.ok(inputVariants({ size }).includes(height));
      assert.ok(inputVariants({ size }).includes(padding));

      unmount();
    }
  });

  it("lets the group own the input height and horizontal padding", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupInput aria-label="Value" />
      </InputGroup>
    );
    const input = container.querySelector<HTMLElement>(
      '[data-slot="input-group-control"]'
    );

    assert.ok(input?.className.includes("h-full"));
    assert.ok(input?.className.includes("px-0"));
  });

  it("uses the group padding as the only external addon padding", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupInput aria-label="Value" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Button>Go</Button>
        </InputGroupAddon>
      </InputGroup>
    );
    const addons = container.querySelectorAll<HTMLElement>(
      '[data-slot="input-group-addon"]'
    );

    assert.ok(addons[0]?.className.includes("ps-0"));
    assert.ok(addons[0]?.className.includes("pe-2"));
    assert.ok(addons[1]?.className.includes("ps-2"));
    assert.ok(addons[1]?.className.includes("pe-0"));
    assert.ok(!addons[1]?.className.includes("has-[>button]"));
  });

  it("focuses the field only from non-interactive addon content", () => {
    const { container } = render(
      <InputGroup>
        <InputGroupInput aria-label="Value" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Button>Go</Button>
          <a href="#details">Details</a>
        </InputGroupAddon>
      </InputGroup>
    );
    const input = container.querySelector<HTMLInputElement>("input");
    const addons = container.querySelectorAll<HTMLElement>(
      '[data-slot="input-group-addon"]'
    );
    const [textAddon, actionAddon] = addons;
    const button = actionAddon?.querySelector("button");
    const link = actionAddon?.querySelector("a");

    assert.ok(input);
    assert.ok(textAddon);
    assert.ok(button);
    assert.ok(link);

    fireEvent.mouseDown(textAddon);
    assert.equal(document.activeElement, input);

    input.blur();
    fireEvent.mouseDown(button);
    assert.notEqual(document.activeElement, input);

    fireEvent.mouseDown(link);
    assert.notEqual(document.activeElement, input);
  });
});
