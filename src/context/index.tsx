import { createContext, useEffect, useState } from "react";
import { fetchHeroeComics, fetchMarvelHeroes } from "../services/MarvelService";

export const MyContext = createContext({} as any);

//@ts-ignore
export const MyProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);
  const [favHeroes, setFavHeroes] = useState<any>([]);
  const [selectedHeroe, setSelectedHeroe] = useState<any>(null);
  const [selectedHeroeComics, setSelectedHeroeComics] = useState([]);
  const [heroSearchValue, setHeroSearchValue] = useState("");

  useEffect(() => {
    triggerFetchHeroes();
  }, []);

  useEffect(() => {
    triggerFetchHeroes(heroSearchValue);
  }, [heroSearchValue]);

  function triggerFetchHeroes(nameSearch?: string) {
    fetchMarvelHeroes(nameSearch).then((heroes: any) => {
      setHeroes(heroes);
    });
  }

  useEffect(() => {
    if (selectedHeroe && selectedHeroe.id) {
      fetchHeroeComics(selectedHeroe.id).then((heroComics: any) => {
        setSelectedHeroeComics(heroComics);
      });
    }
  }, [selectedHeroe]);

  function addFav(hero: any) {
    setFavHeroes([...favHeroes, hero]);
  }

  function removeFav(heroeId: any) {
    const _favs = favHeroes.filter((el: any) => el.id !== heroeId);
    setFavHeroes([..._favs]);
  }

  return (
    <MyContext.Provider
      value={{
        heroes,
        favHeroes,
        selectedHeroe,
        selectedHeroeComics,
        heroSearchValue,
        addFav,
        removeFav,
        setSelectedHeroe,
        setHeroSearchValue,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
