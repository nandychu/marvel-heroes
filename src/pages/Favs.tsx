import { useContext } from "react";
import { MyContext } from "../context";
import { HeroesGrid } from "../components/HeroesGrid/HeroesGrid";

export const FavsPage: React.FC = () => {
  const { favHeroes } = useContext(MyContext);
  return favHeroes && favHeroes.length > 0 ? (
    <HeroesGrid heroes={favHeroes}></HeroesGrid>
  ) : (
    <div>
      <h1 style={{ color: "black", marginBottom: 0 }}>No Favorites Heroes</h1>
      <h3 style={{ color: "black" }}>Start adding some heroes to favs</h3>
    </div>
  );
};
