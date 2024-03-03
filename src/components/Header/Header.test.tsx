import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { MyContext } from "../../context";

jest.mock("../../services/MarvelService", () => ({
  fetchMarvelHeroes: jest.fn(),
  fetchHeroeComics: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

it("should render banner with Marvel logo and favorite heroes count", () => {
  const favHeroes: any = [];

  render(
    <MyContext.Provider value={{ favHeroes }}>
      <Header />
    </MyContext.Provider>
  );

  expect(screen.getByAltText("Marvel Logo")).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
});

it("should render favorite heroes count to 2", () => {
  const favHeroes: any = [{ id: 1 }, { id: 2 }];

  render(
    <MyContext.Provider value={{ favHeroes }}>
      <Header />
    </MyContext.Provider>
  );

  expect(screen.getByText("2")).toBeInTheDocument();
});
