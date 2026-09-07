import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  buttonControlVariants,
  buttonVariants,
} from "@/registry/react/components/button";
import { comboboxItemVariants } from "@/registry/react/components/combobox";
import {
  inputItemVariants,
  inputVariants,
} from "@/registry/react/components/input";
import {
  menuContentVariants,
  menuItemControlVariants,
  menuItemVariants,
  menuListVariants,
} from "@/registry/react/components/menu";

describe("control bases", () => {
  it("keeps the compact sm, md, and lg Input scale", () => {
    const expected = [
      ["sm", "h-7", "px-[calc(--spacing(2.5)-1px)]"],
      ["md", "h-8", "px-[calc(--spacing(3)-1px)]"],
      ["lg", "h-9", "px-[calc(--spacing(3.5)-1px)]"],
    ] as const;

    for (const [size, height, padding] of expected) {
      const classes = inputVariants({ size });
      assert.ok(classes.includes(height));
      assert.ok(classes.includes(padding));
      assert.ok(classes.includes("font-normal"));
      assert.ok(classes.includes("text-base"));
      assert.ok(classes.includes("md:text-sm"));
    }
  });

  it("uses Button as the source of action control metrics", () => {
    const control = buttonControlVariants();
    const button = buttonVariants({ size: "md" });

    assert.ok(control.includes("font-medium"));
    assert.ok(control.includes("text-sm"));
    assert.ok(control.includes("gap-2"));
    assert.ok(control.includes("touch-manipulation"));
    assert.ok(button.includes("h-8"));
    assert.ok(button.includes("px-(--btn-px)"));
  });

  it("uses Input typography for selection rows", () => {
    const item = inputItemVariants();

    assert.ok(item.includes("font-normal"));
    assert.ok(item.includes("text-base"));
    assert.ok(item.includes("md:text-sm"));
    assert.ok(item.includes("touch-manipulation"));
    assert.ok(!item.includes("min-h-8"));
    assert.ok(!item.includes("rounded-lg"));
  });

  it("preserves the established Button size variants", () => {
    assert.ok(buttonVariants({ pill: false }).includes("rounded-lg"));
    assert.ok(buttonVariants({ pill: true }).includes("rounded-full!"));
    assert.ok(buttonVariants({ size: "xs" }).includes("h-6"));
    assert.ok(buttonVariants({ size: "xl" }).includes("h-10"));
    assert.ok(buttonVariants({ size: "icon-md" }).includes("size-8"));
  });

  it("uses Menu list variants as the floating overlay inset", () => {
    const list = menuListVariants().split(" ");
    const menuClasses = menuContentVariants().split(" ");

    assert.ok(list.includes("p-1"));
    assert.ok(menuClasses.includes("p-0"));
    assert.ok(!menuClasses.includes("p-2"));
    assert.ok(!menuClasses.includes("p-1.5"));
  });

  it("uses Menu item control variants for floating list metrics", () => {
    const control = menuItemControlVariants().split(" ");
    const item = menuItemVariants().split(" ");
    const comboboxItem = comboboxItemVariants().split(" ");

    assert.ok(control.includes("min-h-8"));
    assert.ok(control.includes("rounded-lg"));
    assert.ok(item.includes("min-h-8"));
    assert.ok(item.includes("rounded-lg"));
    assert.ok(comboboxItem.includes("min-h-8"));
    assert.ok(comboboxItem.includes("rounded-lg"));
    assert.ok(!comboboxItem.includes("rounded-xl"));
    assert.ok(!comboboxItem.includes("ps-2"));
  });
});
