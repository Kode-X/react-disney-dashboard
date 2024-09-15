// tests/components/PieChart.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import XLSX from "xlsx";
import useStore from "../../store";
import PieChart from "../PieChart";

// Mock dependencies
jest.mock("../../store", () => ({
  useStore: jest.fn(),
}));

jest.mock("highcharts-react-official", () => () => (
  <div>Mocked HighchartsReact</div>
));

jest.mock("xlsx", () => ({
  utils: {
    json_to_sheet: jest.fn(),
    book_new: jest.fn(),
    book_append_sheet: jest.fn(),
  },
  writeFile: jest.fn(),
}));

describe("PieChart Component", () => {
  const mockFilteredData = [
    { name: "Baloo", films: ["The jungle Book", "The jungle Book 2"] },
    { name: "Sir Bart", films: ["The Sword in the Stone"] },
  ];
  const mockPaginationModel = { pageSize: 1, page: 0 };

  beforeEach(() => {
    useStore.mockReturnValue({ loading: false });
  });

  it("renders a skeleton loader when loading", () => {
    useStore.mockReturnValue({ loading: true });

    render(
      <PieChart
        filteredData={mockFilteredData}
        paginationModel={mockPaginationModel}
      />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders the chart when data is available", () => {
    render(
      <PieChart
        filteredData={mockFilteredData}
        paginationModel={mockPaginationModel}
      />
    );

    expect(screen.getByText("Mocked HighchartsReact")).toBeInTheDocument();
  });

  it("calls handleExport when the export button is clicked", () => {
    render(
      <PieChart
        filteredData={mockFilteredData}
        paginationModel={mockPaginationModel}
      />
    );

    const exportButton = screen.getByRole("button", { name: /export/i });
    fireEvent.click(exportButton);

    expect(XLSX.utils.json_to_sheet).toHaveBeenCalled();
    expect(XLSX.utils.book_new).toHaveBeenCalled();
    expect(XLSX.utils.book_append_sheet).toHaveBeenCalled();
    expect(XLSX.writeFile).toHaveBeenCalled();
  });
});
