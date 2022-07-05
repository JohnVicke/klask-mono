import React from "react";
import { render, screen } from "@testing-library/react";
import { Test } from "./Test";

describe("Test", () => {
  it("renders correctly", () => {
    render(<Test name="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
