import React from "react";
import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Input } from "./input.component";

describe("Input test", () => {
  test("should have default props", () => {
    const body = render(
      <Input
        type="text"
        name="username"
        value="test"
        placeholder="User"
        onChange={() => {}}
      />
    );
    const input = body.getByDisplayValue("test");

    expect(input.getAttribute("type")).toBe("text");
    expect(input.getAttribute("name")).toBe("username");
    expect(input.getAttribute("placeholder")).toBe("User");
  });

  test("should change value on props change", () => {
    const body = render(
      <Input
        type="text"
        name="username"
        value="test"
        placeholder="User"
        onChange={() => {}}
      />
    );
    const input = body.getByDisplayValue("test");

    expect(input.getAttribute("value")).toBe("test");

    body.rerender(
      <Input
        type="text"
        name="username"
        value="test1"
        placeholder="User"
        onChange={() => {}}
      />
    );

    expect(input.getAttribute("value")).toBe("test1");
  });
});
