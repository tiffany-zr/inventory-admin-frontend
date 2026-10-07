import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  it("renders the page", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", {
        name: "Login",
      }),
    ).toBeInTheDocument();
  });
});