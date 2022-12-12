import React from "react";
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button.component";

describe("Button test", () => {
  beforeEach(() => {
    render(
      <Button variant="primary" classes="test" disabled>
        Button
      </Button>
    );
  });

  test("should render content", async () => {
    const button = screen.getByText(/Button/i);
    expect(button).toBeDefined();
  });

  test("should add classes", () => {
    const button = screen.getByText(/Button/i);
    expect(button.classList.contains("test")).toBe(true);
  });

  test("should be primary", () => {
    const button = screen.getByText(/Button/i);

    expect(button.classList.contains("bg-primary-btn-light")).toBe(true);
  });
});
