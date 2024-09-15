import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

jest.mock("../Title", () => () => <div>Mocked Title</div>);
jest.mock("../SearchCharacter", () => (props) => (
  <div>
    Mocked SearchCharacter
    <input
      aria-label="Search Characters"
      value={props.searchQuery}
      onChange={(e) => props.setSearchQuery(e.target.value)}
    />
  </div>
));
jest.mock("../DataTable", () => () => <div>Mocked DataTable</div>);
jest.mock("../PieChart", () => () => <div>Mocked PieChart</div>);

describe("Dashboard Component", () => {
  const mockFilteredData = [
    { name: "Baloo", films: ["The jungle Book", "The jungle Book 2"] },
    { name: "Sir Bart", films: ["The Sword in the Stone"] },
  ];
  const mockSearchQuery = "Baloo";
  const mockSetSearchQuery = jest.fn();

  it("renders the Dashboard with all components", () => {
    render(
      <Dashboard
        filteredData={mockFilteredData}
        searchQuery={mockSearchQuery}
        setSearchQuery={mockSetSearchQuery}
      />
    );

    expect(screen.getByText("Mocked Title")).toBeInTheDocument();

    expect(screen.getByText("Mocked SearchCharacter")).toBeInTheDocument();

    expect(screen.getByText("Mocked DataTable")).toBeInTheDocument();

    expect(screen.getByText("Mocked PieChart")).toBeInTheDocument();
  });

  it("calls setSearchQuery with the correct value when input changes", () => {
    render(
      <Dashboard
        filteredData={mockFilteredData}
        searchQuery={mockSearchQuery}
        setSearchQuery={mockSetSearchQuery}
      />
    );

    const textField = screen.getByLabelText("Search Characters");
    fireEvent.change(textField, { target: { value: "Baloo" } });

    expect(mockSetSearchQuery).toHaveBeenCalledWith("Baloo");
  });
});
