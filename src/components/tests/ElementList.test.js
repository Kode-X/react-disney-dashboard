import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ElementList from "../ElementList";

describe("ElementList Component", () => {
  it("renders a list of items", () => {
    const items = ["Item 1", "Item 2", "Item 3"];

    render(<ElementList items={items} />);

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders correctly with an empty list", () => {
    const items = [];

    render(<ElementList items={items} />);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
