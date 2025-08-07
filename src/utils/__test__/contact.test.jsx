import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import ContactUs from "../../component/ContactUs";

describe("Test case for Contact Page", () => {
  it("Should load contact page", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
  });

  it("Shoud be name placeholder in contact page", () => {
    render(<ContactUs />);
    const placeholder = screen.getByPlaceholderText("Name");
    expect(placeholder).toBeInTheDocument();
  });
});
