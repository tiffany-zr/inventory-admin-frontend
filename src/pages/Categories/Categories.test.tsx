import { render, screen } from "@testing-library/react";
import Categories from "./Categories";

describe("Categories", () => {
  it("renders the page", () => {
    render(<Categories />);

    expect(
      screen.getByRole("heading", {
        name: "Categories",
      }),
    ).toBeInTheDocument();
  });
});