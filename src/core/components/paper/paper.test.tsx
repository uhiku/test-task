import React from "react";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { Button } from "../button";
import { Paper } from "./paper.component";

describe("Paper test", () => {
  beforeEach(() => {
    render(
      <Paper classes="test">
        <Button variant="primary">Button</Button>
      </Paper>
    );
  });

  test("should have content", () => {
    expect(screen.getByText("Button")).toBeDefined();
  });

  test("should have classes", () => {
    const paper = document.getElementsByClassName("test");
    expect(paper[0].classList.contains("test")).toBeTruthy();
  });
});
