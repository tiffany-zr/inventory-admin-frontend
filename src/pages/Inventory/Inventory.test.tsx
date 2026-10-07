import { render, screen } from "@testing-library/react";
import Inventory from "./Inventory";

describe("Inventory", () => {
  it("renders the page", () => {
    render(<Inventory />);

    expect(
      screen.getByRole("heading", {
        name: "Inventory",
      }),
    ).toBeInTheDocument();
  });
});