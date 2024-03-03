import { useContext } from "react";
import { HeroesGrid } from "../components/HeroesGrid/HeroesGrid";
import { MyContext } from "../context";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const HeroesPage: React.FC = () => {
  const { heroes } = useContext(MyContext);
  return (
    <>
      <SearchBar></SearchBar>
      <HeroesGrid heroes={heroes}></HeroesGrid>
    </>
  );
};
