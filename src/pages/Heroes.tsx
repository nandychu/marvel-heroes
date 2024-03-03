import { useContext } from "react";
import { HeroesGrid } from "../components/HeroesGrid/HeroesGrid";
import { MyContext } from "../context";

export const HeroesPage: React.FC = () => {
  const { heroes } = useContext(MyContext);
  return <HeroesGrid heroes={heroes}></HeroesGrid>;
};
