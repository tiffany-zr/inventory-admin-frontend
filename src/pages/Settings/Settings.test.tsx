import { render, screen } from "@testing-library/react";
import Settings from "./Settings";

describe("Settings", () => {
  it("renders the page", () => {
    render(<Settings />);

    expect(
      screen.getByRole("heading", {
        name: "Settings",
      }),
    ).toBeInTheDocument();
  });
});