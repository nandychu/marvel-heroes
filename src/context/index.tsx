import { createContext, useEffect, useState } from "react";
import { fetchMarvelHeroes } from "../services/MarvelService";

export const MyContext = createContext({} as any);

//@ts-ignore
export const MyProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [favHeroes, setFavHeroes] = useState<any>([]);

  useEffect(() => {
    fetchMarvelHeroes().then((heroes: any) => {
      setHeroes(heroes);
    });
  }, []);

  function addFav(hero: any) {
    setFavHeroes([...favHeroes, hero]);
  }

  function removeFav(heroeId: any) {
    const _favs = favHeroes.filter((el: any) => el.id !== heroeId);
    setFavHeroes([..._favs]);
  }

  return <MyContext.Provider value={{ heroes, favHeroes, addFav, removeFav }}>{children}</MyContext.Provider>;
};
