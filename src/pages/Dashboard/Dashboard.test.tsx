import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("renders the dashboard and products", () => {
    render(<Dashboard />);

    expect(
      screen.getByRole("heading", {
        name: "Dashboard",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Dragon Figure")).toBeInTheDocument();
    expect(screen.getByText("Phone Stand")).toBeInTheDocument();
  });

  it("filters products by search term", async () => {
    const user = userEvent.setup();

    render(<Dashboard />);

    await user.type(
      screen.getByRole("searchbox", { name: "Search products" }),
      "Phone"
    );

    expect(screen.getByText("Phone Stand")).toBeInTheDocument();
    expect(screen.queryByText("Dragon Figure")).not.toBeInTheDocument();
  });

  it("filters products by category", async () => {
    const user = userEvent.setup();

    render(<Dashboard />);

    await user.selectOptions(
      screen.getByRole("combobox", { name: "Filter by category" }),
      "Home"
    );

    expect(screen.getByText("Decorative Vase")).toBeInTheDocument();
    expect(screen.queryByText("Dragon Figure")).not.toBeInTheDocument();
  });

  it("filters products by status", async () => {
    const user = userEvent.setup();

    render(<Dashboard />);

    await user.selectOptions(
      screen.getByRole("combobox", { name: "Filter by status" }),
      "Low Stock"
    );

    expect(screen.getByText("Phone Stand")).toBeInTheDocument();
    expect(screen.queryByText("Dragon Figure")).not.toBeInTheDocument();
  });

  it("applies search and category filters together", async () => {
    const user = userEvent.setup();

    render(<Dashboard />);

    await user.selectOptions(
      screen.getByRole("combobox", { name: "Filter by category" }),
      "Home"
    );

    await user.type(
      screen.getByRole("searchbox", { name: "Search products" }),
      "Mini"
    );

    expect(screen.getByText("Mini Planter")).toBeInTheDocument();
    expect(screen.queryByText("Decorative Vase")).not.toBeInTheDocument();
    expect(screen.queryByText("Dragon Figure")).not.toBeInTheDocument();
  });
});
