import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from "react";
import CharacterDetailsModalContent from "../CharacterDetailsModalContent";

jest.mock("../ElementList", () => {
  return jest.fn(() => <div>Mocked ElementList</div>);
});

describe("CharacterDetailsModalContent Component", () => {
  const mockCharacterWithItems = {
    tvShows: ["Show 1", "Show 2"],
    videoGames: ["Game 1", "Game 2"],
  };

  const mockCharacterWithoutItems = {
    tvShows: [],
    videoGames: [],
  };

  it("renders TV shows and video games lists when items are present", () => {
    render(
      <CharacterDetailsModalContent
        selectedCharacter={mockCharacterWithItems}
      />
    );

    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByText("Mocked ElementList")).toBeInTheDocument();
    expect(screen.getByText("Video Games")).toBeInTheDocument();
    expect(screen.getByText("Mocked ElementList")).toBeInTheDocument();
  });

  it("renders dashes when no TV shows or video games are present", () => {
    render(
      <CharacterDetailsModalContent
        selectedCharacter={mockCharacterWithoutItems}
      />
    );

    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("Video Games")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
