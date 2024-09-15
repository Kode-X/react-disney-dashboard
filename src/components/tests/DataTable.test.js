import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import useStore from "../../store";
import DataTable from "../DataTable";

jest.mock("../../store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("DataTable Component", () => {
  const mockRows = [
    { id: 1, name: "Baloo", numberOfTvShows: 5 },
    { id: 2, name: "Michael Banks", numberOfTvShows: 3 },
  ];
  const mockColumns = [
    { field: "name", headerName: "Character", width: 150, sortable: true },
    {
      field: "numberOfTvShows",
      headerName: "TV Shows",
      width: 150,
      sortable: false,
    },
  ];
  const mockPaginationModel = { pageSize: 10, page: 0 };
  const mockSetPaginationModel = jest.fn();

  beforeEach(() => {
    useStore.mockReturnValue({ loading: false });
  });

  it("renders DataTable with rows and columns", () => {
    render(
      <DataTable
        rows={mockRows}
        columns={mockColumns}
        paginationModel={mockPaginationModel}
        setPaginationModel={mockSetPaginationModel}
      />
    );

    //screen.debug();

    expect(
      screen.getByText((content, element) => content.includes("Baloo"))
    ).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => content.includes("Michael Banks"))
    ).toBeInTheDocument();
  });

  it("shows skeleton loader when loading is true", () => {
    useStore.mockReturnValue({ loading: true });

    render(
      <DataTable
        rows={mockRows}
        columns={mockColumns}
        paginationModel={mockPaginationModel}
        setPaginationModel={mockSetPaginationModel}
      />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("opens modal on row click", () => {
    render(
      <DataTable
        rows={mockRows}
        columns={mockColumns}
        paginationModel={mockPaginationModel}
        setPaginationModel={mockSetPaginationModel}
      />
    );

    fireEvent.click(
      screen
        .getByText((content, element) => content.includes("Baloo"))
        .toBeInTheDocument()
    );

    expect(screen.getByText("Character Details")).toBeInTheDocument();
  });
});
