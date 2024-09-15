import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormCharacter from "../FormCharacter";

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  Skeleton: jest.fn(() => <div data-testid="skeleton" />),
  Card: jest.fn(({ children }) => <div data-testid="card">{children}</div>),
  Grid: jest.fn(({ children }) => <div data-testid="grid">{children}</div>),
  FormControl: jest.fn(({ children }) => (
    <div data-testid="form-control">{children}</div>
  )),
  Box: jest.fn(({ children }) => <div data-testid="box">{children}</div>),
  TextField: jest.fn((props) => <input data-testid="text-field" {...props} />),
  Button: jest.fn((props) => <button data-testid="button" {...props} />),
  Tooltip: jest.fn(({ children }) => (
    <div data-testid="tooltip">{children}</div>
  )),
  Chip: jest.fn((props) => <div data-testid="chip" {...props} />),
}));

describe("FormCharacter", () => {
  const data = [
    { name: "Baloo", tvShows: ["The Mouse Factory"] },
    { name: "Achilles", tvShows: [] },
  ];

  it("renders a skeleton when loading", () => {
    render(<FormCharacter data={data} loading={true} />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders a TextField when not loading", () => {
    render(<FormCharacter data={data} loading={false} />);
    expect(screen.getByTestId("text-field")).toBeInTheDocument();
  });

  it("calls setCharacterName when the input value changes", () => {
    render(<FormCharacter data={data} loading={false} />);
    const input = screen.getByTestId("text-field");
    fireEvent.change(input, { target: { value: "Baloo" } });
    expect(input.value).toBe("Baloo");
  });
});
