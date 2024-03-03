import { createContext, useEffect, useState } from "react";
import { fetchMarvelHeroes } from "../services/MarvelService";

export const MyContext = createContext({} as any);

//@ts-ignore
export const MyProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetchMarvelHeroes().then((heroes: any) => {
      setHeroes(heroes);
    });
  }, []);

  return <MyContext.Provider value={{ heroes }}>{children}</MyContext.Provider>;
};
