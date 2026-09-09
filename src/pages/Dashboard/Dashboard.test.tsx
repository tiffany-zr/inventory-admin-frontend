import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("renders the page", () => {
    render(<Dashboard />);

    expect(
      screen.getByRole("heading", {
        name: "Dashboard",
      }),
    ).toBeInTheDocument();
  });
});