// tests/components/SearchCharacter.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchCharacter from "../SearchCharacter";

describe("SearchCharacter Component", () => {
  it("renders the TextField with the correct props", () => {
    const mockSetSearchQuery = jest.fn();
    const mockSearchQuery = "Baloo";

    render(
      <SearchCharacter
        searchQuery={mockSearchQuery}
        setSearchQuery={mockSetSearchQuery}
      />
    );

    const textField = screen.getByLabelText("Search Characters");
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue(mockSearchQuery);
  });

  it("calls setSearchQuery with the correct value when input changes", () => {
    const mockSetSearchQuery = jest.fn();
    const mockSearchQuery = "Baloo";

    render(
      <SearchCharacter
        searchQuery={mockSearchQuery}
        setSearchQuery={mockSetSearchQuery}
      />
    );

    const textField = screen.getByLabelText("Search Characters");
    fireEvent.change(textField, { target: { value: "Baloo" } });
    expect(mockSetSearchQuery).toHaveBeenCalledWith("Baloo");
  });
});
