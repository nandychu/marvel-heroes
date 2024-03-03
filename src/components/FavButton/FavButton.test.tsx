import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { FavButton } from "./FavButton";

jest.mock("../../services/MarvelService", () => ({
  fetchMarvelHeroes: jest.fn(),
  fetchHeroeComics: jest.fn(),
}));

it("should render a favorite button with a heart icon", () => {
  // Arrange
  const hero = { id: 1 };
  const descriptionStyles = true;

  // Act
  render(<FavButton hero={hero} descriptionStyles={descriptionStyles} />);

  // Assert
  const favButton = screen.getByTestId("fav-img-set");
  expect(favButton).toBeInTheDocument();
  const unfavButton = screen.getByTestId("fav-img-unset");
  expect(unfavButton).toBeInTheDocument();
});
